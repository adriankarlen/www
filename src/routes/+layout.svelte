<script lang="ts">
  import "../app.css";
  import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconFileDownload,
    IconMail
  } from "@tabler/icons-svelte";
  import Button from "../components/Button.svelte";
  import Menu from "../components/Menu.svelte";

  let { children } = $props();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
</script>

<div class="min-h-svh">
  <header class="relative">
    <nav
      class="flex justify-between items-center p-5 bg-rp-overlay border-b-4 border-rp-rose"
    >
      <div class="flex gap-2">
        <a href="/">
          <img
            class="w-10 h-10 border-2 border-rp-highlight-med dark:border-rp-highlight-med rounded-full"
            src="/misc/avatar.png"
            alt="avatar"
          />
        </a>
      </div>
      <div
        class="flex items-center gap-4 md:gap-10 text-xl font-medium text-rp-subtle"
      >
        <a href="/about-me">About me</a>
        <a href="/projects">Projects</a>
      </div>
      <Menu>
        <Button link="https://github.com/adriankarlen">
          <IconBrandGithub
            class="w-full h-full z-10 p-1 text-rp-pine md:bg-blend-20 md:hover:bg-blend-20 hover:bg-blend-25"
          />
        </Button>
        <Button link="mailto:akarlen@pm.me">
          <IconMail
            class="w-full h-full p-1 text-rp-gold md:bg-blend-20 md:hover:bg-blend-20 hover:bg-blend-25"
          />
        </Button>
        <Button link="https://www.linkedin.com/in/adrian-karlen">
          <IconBrandLinkedin
            class="w-full h-full p-1 text-rp-rose md:bg-blend-20 md:hover:bg-blend-20 hover:bg-blend-25"
          />
        </Button>
        <Button link="https://adriankarlen.dev/adriankarlen-resume.pdf">
          <IconFileDownload
            class="w-full h-full p-1 text-rp-love md:bg-blend-20 md:hover:bg-blend-20 hover:bg-blend-25"
          />
        </Button>
      </Menu>
    </nav>
  </header>
  <main class="grow min-h-full flex flex-col items-center justify-center">
    {@render children()}
  </main>
</div>
<footer class="bg-rp-overlay p-4 text-center">
  <p>
    Made with love by
    <a
      href="https://adriankarlen.dev"
      target="_blank"
      rel="noopener noreferrer"
      class="hover:underline text-rp-rose"
    >
      adriankarlen
    </a>
  </p>
  <Button onclick={scrollToTop} class="md:w-max px-4 mt-4">Go to Top</Button>
</footer>
