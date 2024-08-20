<script lang="ts">
  export let onClick: (() => void) | null = null;
  export let link: string | null = null;
</script>

{#if link}
  <a
    href={link}
    class={`md:border-2 md:border-rp-text h-8 w-8 md:h-10 md:w-10 
            md:shadow-nb md:transition-all md:hover:translate-x-boxShadowX 
            md:hover:translate-y-boxShadowY md:hover:shadow-none md:hover:translate-x-[4px] 
            md:hover:translate-y-[4px]`}
    {...$$restProps}
  >
    <slot />
  </a>
{:else}
  <button
    class={`md:border-2 md:border-rp-text h-8 w-8 md:h-10 md:w-10 
            md:shadow-nb md:transition-all md:hover:translate-x-boxShadowX 
            md:hover:translate-y-boxShadowY md:hover:shadow-none md:hover:translate-x-[4px] 
            md:hover:translate-y-[4px]`}
    on:click={onClick}
    {...$$restProps}
  >
    <slot />
  </button>
{/if}
