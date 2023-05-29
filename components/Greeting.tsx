import HoverImage from "../components/HoverImage.tsx";

export default function Greeting() {
  return (
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-4xl md:text-8xl mx-auto font-bold">
        Hi, my name is{" "}
        <span class="text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
          Adrian
        </span>.{" "}
        <HoverImage
          src="me.webp"
          alt="Adrian Karlen"
          class="w-24 md:w-auto h-auto md:inline hidden"
        />{" "}
        I'm a{" "}
        <span class="text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
          Full Stack Developer
        </span>{" "}
        <HoverImage
          src="code.webp"
          alt="code"
          class="w-24 md:w-auto h-auto md:inline hidden"
        />{" "}
        based in{" "}
        <span class="text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
          Stockholm
        </span>.{" "}
        <HoverImage
          src="stockholm.webp"
          alt="stockholm"
          class="w-24 md:w-auto h-auto md:inline hidden"
        />
      </h1>
    </div>
  );
}
