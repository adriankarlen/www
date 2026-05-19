<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    children,
    class: className = "",
    onclick,
    href,
    target
  }: {
    children: Snippet;
    class?: string;
    onclick?: () => void;
    href?: string;
    target?: string;
  } = $props();

  const baseClass =
    "rounded-xl border border-card-border bg-card-bg px-4 py-3 shadow-sm backdrop-blur-xl transition-transform";

  const interactiveClass = "cursor-pointer hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
</script>

{#if href}
  <a
    {href}
    {target}
    rel="noopener noreferrer"
    class="{baseClass} {interactiveClass} {className}"
  >
    {@render children()}
  </a>
{:else if onclick}
  <button {onclick} class="{baseClass} {interactiveClass} {className}">
    {@render children()}
  </button>
{:else}
  <div class="{baseClass} {className}">
    {@render children()}
  </div>
{/if}
