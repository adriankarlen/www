<script lang="ts">
  import type { Snippet } from "svelte";

  interface CardProps {
    imageUrl: string;
    alt?: string;
    objectPosition?: "object-top" | "object-center" | "object-bottom";
    children: Snippet;
    class?: string;
  };
  let { imageUrl, alt, objectPosition, children, ...rest }: CardProps = $props();
</script>

<figure
  class="w-full overflow-hidden rounded-base border-2 border-rp-highlightMed dark:border-rp-highlightLow bg-rp-overlay shadow-nb-light dark:shadow-nb {rest.class}"
>
  <img class="w-full md:h-72 h-36 object-cover {objectPosition ?? "object-center"}" src={imageUrl} {alt} />
  <figcaption
    class="border-t-2 border-rp-highlightLow p-4 text-rp-subtle font-semibold"
  >
  {@render children()}
  </figcaption>
</figure>
