<script lang="ts">
  import { intersect } from "$lib/intersect";

  const birthDate = new Date("1994-01-04");
  const age = Math.floor(
    (Date.now() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
  );
</script>

<section id="about" class="mx-auto max-w-2xl px-6 py-24">
  <h2
    class="reveal mb-8 text-center font-display text-4xl font-semibold text-text md:text-5xl"
    style="font-variation-settings: 'SOFT' 50;"
    use:intersect
  >
    About
  </h2>

  <div class="reveal space-y-4 text-lg text-text-sub" use:intersect>
    <p>
      I'm Adrian Karlén, a {age}-year-old software developer based in Stockholm.
      I specialize in web development with experience across React, Svelte,
      TypeScript, PHP, and .NET.
    </p>
    <p>
      Currently working at SPP, I've been building for the web since 2019 — from
      business systems and e-commerce platforms to mobile apps and developer
      tools.
    </p>
  </div>
</section>
