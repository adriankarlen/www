<script>
  import { onMount } from "svelte";
  import { IconMenu } from "@tabler/icons-svelte";
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
    <button
      class="w-10 h-10 flex items-center border-2 border-rp-text shadow-nb"
      on:click={() => (menuOpen = !menuOpen)}
      aria-expanded={menuOpen}
      aria-controls="menu"
    >
      <IconMenu class="w-full h-full p-1"/>
    </button>
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
