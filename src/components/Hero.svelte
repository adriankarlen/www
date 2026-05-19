<script lang="ts">
  import HeroCard from "./HeroCard.svelte";

  let {
    github
  }: {
    github: {
      commitsThisWeek: number;
      latestRepo: { name: string; description: string | null } | null;
      mostStarred: { name: string; stars: number } | null;
    };
  } = $props();
</script>

<section
  class="flex relative flex-col justify-center items-center px-6 min-h-svh"
>
  <HeroCard
    class="absolute left-[8%] top-[20%] animate-float"
    href="https://github.com/adriankarlen"
    target="_blank"
  >
    <div class="flex gap-2 items-center text-sm">
      <span class="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
      <span class="font-medium text-text"
        >{github.commitsThisWeek} commits this week</span
      >
    </div>
    <div class="mt-1 text-xs text-text-sub">github.com/adriankarlen</div>
  </HeroCard>

  <div class="text-center">
    <h1 class="text-5xl font-light leading-tight md:text-7xl text-text">
      Hi, I'm Adrian.
    </h1>
    <h1 class="mt-2 text-5xl font-light leading-tight md:text-7xl text-text">
      I
      {#each "build".split("") as char, i}
        <span
          class="inline-block hero-keyword font-display"
          style="animation-delay: {i * 0.15}s;"
        >
          {char}
        </span>
      {/each}
    </h1>
    <h1 class="mt-2 text-5xl font-light leading-tight md:text-7xl text-text">
      things for the web.
    </h1>
  </div>

  <HeroCard
    class="absolute bottom-[22%] right-[10%] animate-float-delayed"
    href="https://github.com/adriankarlen/{github.latestRepo?.name ??
      'textfox'}"
    target="_blank"
  >
    <div class="text-xs font-medium text-text-sub">Latest project</div>
    <div class="flex gap-2 items-center mt-1">
      {#if github.latestRepo}
        <span class="text-sm font-medium text-text"
          >{github.latestRepo.name}</span
        >
      {:else}
        <span class="text-sm font-medium text-text">textfox</span>
      {/if}
    </div>
  </HeroCard>

  {#if github.mostStarred}
    <HeroCard
      class="absolute bottom-[12%] left-[12%] animate-float-delayed sm:bottom-[30%]"
      href="https://github.com/adriankarlen/{github.mostStarred.name}"
      target="_blank"
    >
      <div class="text-xs font-medium text-text-sub">Most starred</div>
      <div class="flex gap-2 items-center mt-1">
        <span class="text-sm text-accent">★ {github.mostStarred.stars}</span>
        <span class="text-sm font-medium text-text"
          >{github.mostStarred.name}</span
        >
      </div>
    </HeroCard>
  {/if}
</section>
