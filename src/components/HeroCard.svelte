<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    children,
    class: className = "",
    onclick
  }: { children: Snippet; class?: string; onclick?: () => void } = $props();
</script>

<button
  {onclick}
  class="cursor-pointer rounded-xl border border-card-border bg-card-bg px-4 py-3 shadow-sm backdrop-blur-xl transition-transform hover:scale-105 {className}"
>
  {@render children()}
</button>
