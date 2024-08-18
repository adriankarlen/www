<script lang="ts">
  export let imageUrl: string;
  export let alt: string | null = "image";
</script>

<figure
  class="w-full overflow-hidden rounded-base border-2 border-rp-text bg-rp-surface shadow-nb"
>
  <img class="w-full h-72 object-cover" src={imageUrl} {alt} />
  <figcaption class="border-t-2 border-rp-highlightMed p-4">
    <slot></slot>
  </figcaption>
</figure>
