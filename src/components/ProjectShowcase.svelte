<script lang="ts">
  import { intersect } from "$lib/intersect";

  const projects = [
    {
      name: "textfox",
      description: "A minimal, text-based Firefox CSS theme.",
      image: "/projects/textfox.png",
      url: "https://github.com/adriankarlen/textfox"
    },
    {
      name: "neobrutal zebar",
      description: "A neobrutalist-inspired status bar for Zebar.",
      image: "/projects/neobrutal-zebar.png",
      url: "https://github.com/adriankarlen/neobrutal-zebar"
    },
    {
      name: "_sushi",
      description: "A clean, minimal startpage for the browser.",
      image: "/projects/_sushi.webp",
      url: "https://github.com/adriankarlen/_sushi"
    },
    {
      name: "bar.wezterm",
      description: "A configurable status bar plugin for WezTerm.",
      image: "/projects/wezterm-bar.png",
      url: "https://github.com/adriankarlen/bar.wezterm"
    },
    {
      name: "adriankarlen.dev",
      description: "This portfolio site — built with SvelteKit and Tailwind.",
      image: "/projects/this-site.png",
      url: "https://github.com/adriankarlen/www"
    },
    {
      name: "rosé pine zebar",
      description: "A Rosé Pine themed status bar for Zebar.",
      image: "/projects/rose-pine-zebar.png",
      url: "https://github.com/adriankarlen/rose-pine.zebar"
    }
  ];
</script>

<section id="projects" class="mx-auto max-w-5xl px-6 py-24">
  <h2
    class="reveal mb-16 text-center font-display text-4xl font-semibold text-text md:text-5xl"
    style="font-variation-settings: 'SOFT' 50;"
    use:intersect
  >
    Projects
  </h2>

  <div class="flex flex-col gap-20">
    {#each projects as project, i}
      <div
        class="reveal grid items-center gap-8 md:grid-cols-5"
        use:intersect={{ threshold: 0.15 }}
        style="transition-delay: {i * 100}ms;"
      >
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          class="overflow-hidden rounded-lg shadow-md transition-transform hover:scale-[1.02] {i %
            2 ===
          0
            ? 'md:col-span-3'
            : 'md:col-span-3 md:order-2'}"
        >
          <img
            src={project.image}
            alt={project.name}
            width="768"
            height="432"
            loading="lazy"
            class="aspect-video w-full object-cover object-top"
          />
        </a>
        <div class={i % 2 === 0 ? "md:col-span-2" : "md:col-span-2 md:order-1"}>
          <h3 class="text-2xl font-semibold text-text">{project.name}</h3>
          <p class="mt-2 text-text-sub">{project.description}</p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            class="mt-3 inline-block text-sm font-medium text-accent transition-opacity hover:opacity-70"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    {/each}
  </div>
</section>
