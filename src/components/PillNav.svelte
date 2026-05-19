<script lang="ts">
  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
</script>

<nav
  class="fixed top-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-6 rounded-full border border-card-border bg-card-bg px-6 py-3 shadow-sm backdrop-blur-xl"
>
  <a href="/">
    <img
      class="h-8 w-8 rounded-full"
      src="/misc/avatar.png"
      alt="Adrian Karlén"
    />
  </a>
  <button
    onclick={() => scrollTo("projects")}
    class="cursor-pointer text-sm font-medium text-text-sub transition-colors hover:text-text"
  >
    Projects
  </button>
  <button
    onclick={() => scrollTo("stack")}
    class="cursor-pointer text-sm font-medium text-text-sub transition-colors hover:text-text"
  >
    Stack
  </button>
  <button
    onclick={() => scrollTo("about")}
    class="cursor-pointer text-sm font-medium text-text-sub transition-colors hover:text-text"
  >
    About
  </button>
  <button
    onclick={() => scrollTo("contact")}
    class="cursor-pointer text-sm font-medium text-text-sub transition-colors hover:text-text"
  >
    Contact
  </button>
</nav>
