<script lang="ts">
  const birthDate = new Date("1994-01-04");
  const age = Math.floor(
    (Date.now() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
  );
</script>

<div
  class="flex flex-col m-auto justify-between items-center w-full 2xl:w-2/3 px-10"
>
  <div class="text-4xl lg:text-6xl font-black animate-enter">
    <h1>Who am I?</h1>
  </div>
  <p class="mt-10 text-xl font-medium animate-enter" style="--stagger: 1">
    My name is Adrian Karlén, a{" "}
    {age}-year-old software developer based in Stockholm. I specialize in web
    development and have extensive experience working with technologies such as
    React, PHP, JavaScript/TypeScript, and .NET. Currently, I am working as a
    consultant at Viati, where I continue to enhance my expertise and contribute
    to impactful projects.
  </p>
  <p class="mt-10 text-xl font-medium animate-enter" style="--stagger: 2;">
    I have been working as a software developer since 2019. During this time, I
    have worked with a wide range of clients, including both small and large
    companies. My work has primarily focused on developing web-based business
    systems, e-commerce platforms, and customer portals. I have also been
    involved in the development of mobile applications and websites. My work has
    included everything from developing new features to maintaining and
    improving existing code bases.
  </p>
</div>
