<script lang="ts">
  import { intersect } from "$lib/intersect";

  const stack = [
    "TypeScript",
    "Svelte",
    "React",
    ".NET",
    "PHP",
    "Tailwind CSS",
    "Node.js",
    "SvelteKit",
    "Next.js",
    "PostgreSQL",
    "Docker",
    "Git",
    "Lua",
    "CSS",
    "HTML"
  ];

  function scatter(i: number) {
    const rot = ((i * 7 + 3) % 7) - 3;
    const y = ((i * 5 + 2) % 9) - 4;
    return `transform: rotate(${rot}deg) translateY(${y}px);`;
  }
</script>

<section id="stack" class="mx-auto max-w-3xl px-6 py-24">
  <h2
    class="reveal mb-12 text-center font-display text-4xl font-semibold text-text md:text-5xl"
    style="font-variation-settings: 'SOFT' 50;"
    use:intersect
  >
    Stack
  </h2>

  <div class="reveal flex flex-wrap justify-center gap-3" use:intersect>
    {#each stack as tool, i}
      <span
        class="rounded-full border border-card-border bg-card-bg px-4 py-2 text-sm font-medium text-text shadow-sm backdrop-blur-sm"
        style={scatter(i)}
      >
        {tool}
      </span>
    {/each}
  </div>
</section>
