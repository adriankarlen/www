<script lang="ts">
  import "../app.css";
  import ThemeToggle from "../components/ThemeToggle.svelte";

  let { children } = $props();
</script>

<div class="min-h-svh">
  {@render children()}
</div>
<ThemeToggle />
