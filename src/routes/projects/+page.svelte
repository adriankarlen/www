<script>
  import Card from "../../components/Card.svelte";
</script>

<div
  class="flex flex-col justify-between items-center px-10 m-auto w-full 2xl:w-2/3"
>
  <div class="text-4xl font-black lg:text-6xl animate-enter">
    <h1>Here are some stuffs I've done.</h1>
  </div>
  <div class="grid grid-cols-1 gap-10 my-10 font-medium lg:grid-cols-2">
    <a
      href="https://github.com/adriankarlen/textfox"
      class="animate-enter"
      style="--stagger: 1;"
    >
      <Card
        objectPosition="object-top"
        imageUrl="/projects/textfox.png"
        alt="textfox">textfox</Card
      >
    </a>
    <a
      href="https://github.com/adriankarlen/neobrutal-zebar"
      class="animate-enter"
      style="--stagger: 1;"
    >
      <Card
        objectPosition="object-top"
        imageUrl="/projects/neobrutal-zebar.png"
        alt="neobrutal zebar">neobrutal zebar</Card
      >
    </a>
    <a
      href="https://github.com/adriankarlen/_sushi"
      class="animate-enter"
      style="--stagger: 2;"
    >
      <Card imageUrl="/projects/_sushi.webp" alt="sushi startpage">_sushi</Card>
    </a>
    <a
      href="https://github.com/adriankarlen/bar.wezterm"
      class="animate-enter"
      style="--stagger: 2;"
    >
      <Card
        objectPosition="object-top"
        imageUrl="/projects/wezterm-bar.png"
        alt="bar.wezterm"
      >
        bar.wezterm
      </Card>
    </a>
    <a
      href="https://github.com/adriankarlen/www"
      class="animate-enter"
      style="--stagger: 3;"
    >
      <Card
        objectPosition="object-top"
        imageUrl="/projects/this-site.png"
        alt="personal website"
      >
        adriankarlen.dev
      </Card>
    </a>
    <a
      href="https://github.com/adriankarlen/rose-pine.zebar"
      target="_blank"
      class="animate-enter"
      style="--stagger: 3;"
    >
      <Card
        objectPosition="object-top"
        imageUrl="/projects/rose-pine-zebar.png"
        alt="rosé pine zebar"
      >
        rosé pine zebar
      </Card>
    </a>
  </div>
</div>
