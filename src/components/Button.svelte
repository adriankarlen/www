<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";

  interface ButtonProps extends HTMLButtonAttributes {
    link?: string;
    children: Snippet;
  }
  let { link, children, ...rest }: ButtonProps = $props();
</script>

{#if link}
  <a
    href={link}
    class={`md:border-2 md:border-rp-highlightMed md:dark:border-rp-highlightLow h-8 w-8 md:h-10 md:w-10 
            md:shadow-nb-light md:dark:shadow-nb md:transition-all md:hover:translate-x-boxShadowX 
            md:hover:translate-y-boxShadowY md:hover:shadow-none md:hover:translate-x-[4px] 
            md:hover:translate-y-[4px]`}
  >
    {@render children()}
  </a>
{:else}
  <button
    class={`md:border-2 md:border-rp-highlightLow h-8 w-8 md:h-10 md:w-10 
            md:shadow-nb md:transition-all md:hover:translate-x-boxShadowX 
            md:hover:translate-y-boxShadowY md:hover:shadow-none md:hover:translate-x-[4px] 
            md:hover:translate-y-[4px]`}
    {...rest}
  >
    {@render children()}
  </button>
{/if}
