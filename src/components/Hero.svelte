<script lang="ts">
  import HeroCard from "./HeroCard.svelte";
  import type { GitHubData } from "../routes/+page.server";

  let {
    github
  }: {
    github: Promise<GitHubData> | GitHubData;
  } = $props();
</script>

<section
  class="flex relative flex-col justify-center items-center px-6 min-h-svh"
>
  {#await Promise.resolve(github) then gh}
    <HeroCard
      class="absolute left-[8%] top-[20%] animate-float"
      href="https://github.com/adriankarlen"
      target="_blank"
    >
      <div class="flex gap-2 items-center text-sm">
        <span class="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
        <span class="font-medium text-text"
          >{gh.commitsThisWeek} commits this week</span
        >
      </div>
      <div class="mt-1 text-xs text-text-sub">github.com/adriankarlen</div>
    </HeroCard>

    <HeroCard
      class="absolute bottom-[22%] right-[10%] animate-float-delayed"
      href="https://github.com/adriankarlen/{gh.latestRepo?.name ?? 'textfox'}"
      target="_blank"
    >
      <div class="text-xs font-medium text-text-sub">Latest project</div>
      <div class="flex gap-2 items-center mt-1">
        <span class="text-sm font-medium text-text"
          >{gh.latestRepo?.name ?? "textfox"}</span
        >
      </div>
    </HeroCard>

    {#if gh.mostStarred}
      <HeroCard
        class="absolute bottom-[12%] left-[12%] animate-float-delayed sm:bottom-[30%]"
        href="https://github.com/adriankarlen/{gh.mostStarred.name}"
        target="_blank"
      >
        <div class="text-xs font-medium text-text-sub">Most starred</div>
        <div class="flex gap-2 items-center mt-1">
          <span class="text-sm text-accent">★ {gh.mostStarred.stars}</span>
          <span class="text-sm font-medium text-text"
            >{gh.mostStarred.name}</span
          >
        </div>
      </HeroCard>
    {/if}
  {/await}

  <div class="text-center">
    <h1 class="text-5xl font-light leading-tight md:text-7xl text-text">
      <span class="block">Hi, I'm Adrian.</span>
      <span class="block mt-2">
        I
        {#each "build".split("") as char, i}
          <span
            class="inline-block hero-keyword font-display"
            style="animation-delay: {i * 0.15}s;"
          >
            {char}
          </span>
        {/each}
      </span>
      <span class="block mt-2">things for the web.</span>
    </h1>
  </div>
</section>
