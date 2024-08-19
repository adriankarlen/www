<script lang="ts">
  export let className: string = "";
  export let onClick: (() => void) | null = null;
  export let link: string | null = null;
</script>

{#if link}
  <a
    href={link}
    class={`md:border-2 border-rp-text h-8 w-8 md:h-10 md:w-10 md:shadow-nb transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] ${className}`}
  >
    <slot></slot>
  </a>
{:else}
  <button
    class={`border-2 border-rp-text h-8 w-8 md:h-10 md:w-10 shadow-nb transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] ${className}`}
    on:click={onClick}
  >
    <slot></slot>
  </button>
{/if}
