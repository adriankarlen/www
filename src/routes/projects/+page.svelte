<script>
  import Card from "../../components/Card.svelte";
</script>

<div class="flex flex-col m-auto justify-between items-center w-full 2xl:w-2/3 px-10">
  <div class="text-4xl lg:text-6xl font-black">
    <h1>Here are some stuffs I've done.</h1>
  </div>
  <div class="my-10 grid grid-cols-1 lg:grid-cols-2 gap-10 font-medium">
    <Card imageUrl="/projects/_sushi.webp" alt="sushi startpage">
      <a href="https://github.com/adriankarlen/_sushi">_sushi start page</a>
    </Card>
    <Card imageUrl="/projects/wezterm-bar.png" alt="bar.wezterm">
      <a href="https://github.com/adriankarlen/bar.wezterm">bar.wezterm</a>
    </Card>
    <Card imageUrl="/projects/personal-website.webp" alt="personal website">
      <a href="https://github.com/adriankarlen/www">adriankarlen.dev</a>
    </Card>
    <Card imageUrl="/projects/zebar.png" alt="rose-pine zebar">
      <a href="https://github.com/adriankarlen/rose-pine.zebar">rosé pine zebar</a>
    </Card>
  </div>
</div>
