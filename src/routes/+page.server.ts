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

export const load: PageServerLoad = async ({ fetch }) => {
  const username = "adriankarlen";

  try {
    const [eventsRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}/events?per_page=100`),
      fetch(
        `https://api.github.com/users/${username}/repos?sort=pushed&per_page=5`
      )
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

    let latestRepo: { name: string; description: string | null } | null = null;
    if (reposRes.ok) {
      const repos: GitHubRepo[] = await reposRes.json();
      if (repos.length > 0) {
        latestRepo = {
          name: repos[0].name,
          description: repos[0].description
        };
      }
    }

    return {
      github: {
        commitsThisWeek,
        latestRepo
      }
    };
  } catch {
    return {
      github: {
        commitsThisWeek: 0,
        latestRepo: null
      }
    };
  }
};
