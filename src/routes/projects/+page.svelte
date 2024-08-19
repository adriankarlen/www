<script>
  import Card from "../../components/Card.svelte";
</script>

<div
  class="flex flex-col m-auto justify-between items-center w-full 2xl:w-2/3 px-10 animate-enter"
>
  <div class="text-4xl lg:text-6xl font-black">
    <h1>Here are some stuffs I've done.</h1>
  </div>
  <div class="my-10 grid grid-cols-1 lg:grid-cols-2 gap-10 font-medium">
    <a href="https://github.com/adriankarlen/_sushi">
      <Card imageUrl="/projects/_sushi.webp" alt="sushi startpage">
        _sushi
      </Card>
    </a>
    <a href="https://github.com/adriankarlen/bar.wezterm">
      <Card imageUrl="/projects/wezterm-bar.png" alt="bar.wezterm">
        bar.wezterm
      </Card>
    </a>
    <a href="https://github.com/adriankarlen/www">
      <Card imageUrl="/projects/this-site.png" alt="personal website">
        adriankarlen.dev
      </Card>
    </a>
    <a href="https://github.com/adriankarlen/rose-pine.zebar" target="_blank">
      <Card imageUrl="/projects/zebar.png" alt="rose-pine zebar">
        rosé pine zebar
      </Card>
    </a>
  </div>
</div>
