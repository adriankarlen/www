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

<div class="flex flex-col min-h-svh">
  <header class="relative">
    <nav
      class="flex justify-between items-center p-5 border-b-4 bg-rp-overlay border-rp-rose"
    >
      <div class="flex gap-2">
        <a href="/">
          <img
            class="w-10 h-10 rounded-full border-2 border-rp-highlight-med dark:border-rp-highlight-med"
            src="/misc/avatar.png"
            alt="avatar"
          />
        </a>
      </div>
      <div
        class="flex gap-4 items-center text-xl font-medium md:gap-10 text-rp-subtle"
      >
        <a href="/about-me">About me</a>
        <a href="/projects">Projects</a>
      </div>
      <Menu>
        <Button link="https://github.com/adriankarlen">
          <IconBrandGithub
            class="z-10 p-1 w-full h-full text-rp-pine md:bg-blend-20 md:hover:bg-blend-20 hover:bg-blend-25"
          />
        </Button>
        <Button link="mailto:akarlen@pm.me">
          <IconMail
            class="p-1 w-full h-full text-rp-gold md:bg-blend-20 md:hover:bg-blend-20 hover:bg-blend-25"
          />
        </Button>
        <Button link="https://www.linkedin.com/in/adrian-karlen">
          <IconBrandLinkedin
            class="p-1 w-full h-full text-rp-rose md:bg-blend-20 md:hover:bg-blend-20 hover:bg-blend-25"
          />
        </Button>
        <Button link="https://adriankarlen.dev/adriankarlen-resume.pdf">
          <IconFileDownload
            class="p-1 w-full h-full text-rp-love md:bg-blend-20 md:hover:bg-blend-20 hover:bg-blend-25"
          />
        </Button>
      </Menu>
    </nav>
  </header>
  <main class="flex flex-col justify-center items-center flex-1 py-10">
    {@render children()}
  </main>
</div>
<footer class="p-4 text-center bg-rp-overlay">
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
  <Button onclick={scrollToTop} class="px-4 mt-4 w-max md:w-max"
    >Go to Top</Button
  >
</footer>
