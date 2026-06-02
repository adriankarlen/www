import type { PageServerLoad } from "./$types";

interface GitHubEvent {
  type: string;
  repo: { name: string };
  created_at: string;
}

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  pushed_at: string;
  stargazers_count: number;
}

export interface GitHubData {
  commitsThisWeek: number;
  latestRepo: { name: string; description: string | null } | null;
  mostStarred: { name: string; stars: number } | null;
}

const EMPTY: GitHubData = {
  commitsThisWeek: 0,
  latestRepo: null,
  mostStarred: null
};

async function fetchGitHub(
  fetch: typeof globalThis.fetch
): Promise<GitHubData> {
  const username = "adriankarlen";

  try {
    const signal = AbortSignal.timeout(2500);
    const [eventsRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}/events?per_page=100`, {
        signal
      }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
        signal
      })
    ]);

    let commitsThisWeek = 0;
    if (eventsRes.ok) {
      const events: GitHubEvent[] = await eventsRes.json();
      const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
      commitsThisWeek = events.filter(
        (e) =>
          e.type === "PushEvent" &&
          new Date(e.created_at).getTime() > oneWeekAgo
      ).length;
    }

    let latestRepo: GitHubData["latestRepo"] = null;
    let mostStarred: GitHubData["mostStarred"] = null;
    if (reposRes.ok) {
      const repos: GitHubRepo[] = await reposRes.json();
      if (repos.length > 0) {
        const sorted = [...repos].sort(
          (a, b) =>
            new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
        );
        latestRepo = {
          name: sorted[0].name,
          description: sorted[0].description
        };

        const starred = [...repos].sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        if (starred[0].stargazers_count > 0) {
          mostStarred = {
            name: starred[0].name,
            stars: starred[0].stargazers_count
          };
        }
      }
    }

    return { commitsThisWeek, latestRepo, mostStarred };
  } catch {
    return EMPTY;
  }
}

export const load: PageServerLoad = ({ fetch, setHeaders }) => {
  // cache at CDN for 1h, serve stale up to 1d while revalidating
  setHeaders({
    "cache-control":
      "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
  });

  // top-level promise — streamed by SvelteKit 2, does not block initial HTML
  return {
    github: fetchGitHub(fetch)
  };
};
