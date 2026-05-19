<script lang="ts">
  import { intersect } from "$lib/intersect";

  const stack = [
    "TypeScript",
    "Svelte",
    "React",
    ".NET",
    "Tailwind CSS",
    "Node.js",
    "Lua",
    "CSS",
    "HTML"
  ];
</script>

<section id="stack" class="mx-auto max-w-3xl px-6 py-24">
  <h2
    class="reveal mb-12 text-center font-display text-4xl font-semibold text-text md:text-5xl"
    style="font-variation-settings: 'SOFT' 50;"
    use:intersect
  >
    Stack
  </h2>

  <div
    class="reveal grid grid-cols-2 gap-x-12 gap-y-4 sm:grid-cols-3"
    use:intersect
  >
    {#each stack as tool}
      <span
        class="border-b border-dashed border-text/30 pb-3 text-base font-medium text-text"
      >
        {tool}
      </span>
    {/each}
  </div>
</section>
