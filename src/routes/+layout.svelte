<script lang="ts">
  import "../app.css";
  import ThemeToggle from "../components/ThemeToggle.svelte";

  let { children } = $props();
</script>

<a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-white">
  Skip to content
</a>
<main id="main-content" class="min-h-svh">
  {@render children()}
</main>
<ThemeToggle />
