<script lang="ts">
  import HeroCard from "./HeroCard.svelte";

  let {
    github
  }: {
    github: {
      commitsThisWeek: number;
      latestRepo: { name: string; description: string | null } | null;
    };
  } = $props();
</script>

<section
  class="relative flex min-h-svh flex-col items-center justify-center px-6"
>
  <HeroCard
    class="absolute left-[8%] top-[20%] animate-float"
    onclick={() =>
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
  >
    <div class="flex items-center gap-2 text-sm">
      <span class="inline-block h-2 w-2 rounded-full bg-green-400"></span>
      <span class="font-medium text-text"
        >{github.commitsThisWeek} commits this week</span
      >
    </div>
    <div class="mt-1 text-xs text-text-sub">github.com/adriankarlen</div>
  </HeroCard>

  <div class="text-center">
    <h1 class="text-5xl font-light leading-tight text-text md:text-7xl">
      Hi, I'm Adrian.
    </h1>
    <h1 class="mt-2 text-5xl leading-tight text-text md:text-7xl">
      I
      {#each "build".split("") as char, i}
        <span
          class="hero-keyword font-display inline-block"
          style="animation-delay: {i * 0.15}s;"
        >
          {char}
        </span>
      {/each}
    </h1>
    <h1 class="mt-2 text-5xl font-light leading-tight text-text md:text-7xl">
      things for the web.
    </h1>
  </div>

  <HeroCard
    class="absolute bottom-[22%] right-[10%] animate-float-delayed"
    onclick={() =>
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" })}
  >
    <div class="text-xs font-medium text-text-sub">Latest project</div>
    <div class="mt-1 flex items-center gap-2">
      {#if github.latestRepo}
        <span class="text-sm font-medium text-text"
          >{github.latestRepo.name}</span
        >
      {:else}
        <span class="text-sm font-medium text-text">textfox</span>
      {/if}
    </div>
  </HeroCard>
</section>
