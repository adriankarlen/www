<script>
  import Card from "../../components/Card.svelte";
</script>

<div
  class="flex flex-col m-auto justify-between items-center w-full 2xl:w-2/3 px-10"
>
  <div class="text-4xl lg:text-6xl font-black animate-enter">
    <h1>Here are some stuffs I've done.</h1>
  </div>
  <div class="my-10 grid grid-cols-1 lg:grid-cols-2 gap-10 font-medium">
    <a
      href="https://github.com/adriankarlen/_sushi"
      class=" animate-enter"
      style="--stagger: 1;"
    >
      <Card imageUrl="/projects/_sushi.webp" alt="sushi startpage">_sushi</Card>
    </a>
    <a
      href="https://github.com/adriankarlen/bar.wezterm"
      class=" animate-enter"
      style="--stagger: 1;"
    >
      <Card imageUrl="/projects/wezterm-bar.png" alt="bar.wezterm">
        bar.wezterm
      </Card>
    </a>
    <a
      href="https://github.com/adriankarlen/www"
      class=" animate-enter"
      style="--stagger: 2;"
    >
      <Card imageUrl="/projects/this-site.png" alt="personal website">
        adriankarlen.dev
      </Card>
    </a>
    <a
      href="https://github.com/adriankarlen/rose-pine.zebar"
      target="_blank"
      class=" animate-enter"
      style="--stagger: 2;"
    >
      <Card imageUrl="/projects/zebar.png" alt="rose-pine zebar">
        rosé pine zebar
      </Card>
    </a>
  </div>
</div>
