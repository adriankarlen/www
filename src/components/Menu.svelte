<script>
  import { onMount } from "svelte";
  import { IconMenu, IconX } from "@tabler/icons-svelte";
  import Button from "../components/Button.svelte";
  let isMobile = false;

  onMount(() => {
    const updateIsMobile = () => {
      isMobile = window.innerWidth < 768; // Tailwind's sm breakpoint
    };
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  });

  let menuOpen = false;
</script>

<div class="relative">
  {#if isMobile}
    <Button
      onClick={() => (menuOpen = !menuOpen)}
      aria-expanded={menuOpen}
      aria-controls="menu"
    >
      {#if menuOpen}
        <IconX class="w-full h-full p-1" />
      {:else}
        <IconMenu class="w-full h-full p-1" />
      {/if}
    </Button>
    {#if menuOpen}
      <div
        id="menu"
        class="absolute right-0 mt-8 w-10 bg-rp-overlay border-2 border-rp-text shadow-nb"
      >
        <slot />
      </div>
    {/if}
  {:else}
    <div class="flex items-center gap-5">
      <slot />
    </div>
  {/if}
</div>
