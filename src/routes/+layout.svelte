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
</script>

<nav
  class="flex justify-between items-center p-5 mb-10 bg-rp-overlay border-b-4 border-rp-text"
>
  <div class="flex gap-2">
    <a href="/">
      <img
        class="w-10 h-10 border-2 border-rp-text rounded-full"
        src="/misc/avatar.png"
        alt="avatar"
      />
    </a>
  </div>
  <div class="flex items-center gap-10 text-xl font-medium">
    <a href="/about-me">About me</a>
    <a href="/projects">Projects</a>
  </div>
  <Menu>
    <Button link="https://github.com/adriankarlen">
      <IconBrandGithub class="w-full h-full p-1 text-rp-pine" />
    </Button>
    <Button link="mailto:akarlen@pm.me">
      <IconMail class="w-full h-full p-1 text-rp-gold" />
    </Button>
    <Button link="https://www.linkedin.com/in/adrian-karlen">
      <IconBrandLinkedin class="w-full h-full p-1 text-rp-rose" />
    </Button>
    <Button link="https://adriankarlen.dev/adriankarlen-resume.pdf">
      <IconFileDownload class="w-full h-full p-1 text-rp-love" />
    </Button>
  </Menu>
</nav>
<slot />
