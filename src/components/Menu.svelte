<script lang="ts">
  import { type Snippet } from "svelte";
  import { IconMenu, IconX } from "@tabler/icons-svelte";
  import Button from "../components/Button.svelte";

  let isMobile = $state(false);
  let menuOpen = $state(false);

  $effect(() => {
    const updateIsMobile = () => {
      isMobile = window.innerWidth < 768; // Tailwind's sm breakpoint
    };
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  });

  interface MenuProps {
    children: Snippet;
  }
  let { children }: MenuProps = $props();
</script>

<div class="relative flex">
  {#if isMobile}
    <Button
      onclick={() => (menuOpen = !menuOpen)}
      aria-expanded={menuOpen}
      aria-controls="menu"
    >
      {#if menuOpen}
        <IconX class="p-1 w-full h-full" />
      {:else}
        <IconMenu class="p-1 w-full h-full" />
      {/if}
    </Button>
    {#if menuOpen}
      <div
        id="menu"
        class="absolute right-0 mt-8 w-10 border-2 bg-rp-overlay border-rp-highlight-med shadow-nb-light dark:border-rp-highlight-low dark:shadow-nb"
      >
        {@render children()}
      </div>
    {/if}
  {:else}
    <div class="flex gap-5 items-center">
      {@render children()}
    </div>
  {/if}
</div>
