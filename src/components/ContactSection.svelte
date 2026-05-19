<script lang="ts">
  import { intersect } from "$lib/intersect";
  import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconMail
  } from "@tabler/icons-svelte";
</script>

<section id="contact" class="mx-auto max-w-2xl px-6 py-24">
  <h2
    class="reveal mb-8 text-center font-display text-4xl font-semibold text-text md:text-5xl"
    style="font-variation-settings: 'SOFT' 50;"
    use:intersect
  >
    Let's talk
  </h2>

  <div class="reveal flex items-center justify-center gap-8" use:intersect>
    <a
      href="https://github.com/adriankarlen"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2 text-text-sub transition-colors hover:text-text"
    >
      <IconBrandGithub size={20} />
      <span class="text-sm font-medium">GitHub</span>
    </a>
    <a
      href="https://www.linkedin.com/in/adrian-karlen"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2 text-text-sub transition-colors hover:text-text"
    >
      <IconBrandLinkedin size={20} />
      <span class="text-sm font-medium">LinkedIn</span>
    </a>
    <a
      href="mailto:akarlen@pm.me"
      class="flex items-center gap-2 text-text-sub transition-colors hover:text-text"
    >
      <IconMail size={20} />
      <span class="text-sm font-medium">Email</span>
    </a>
  </div>
</section>
