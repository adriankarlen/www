import HoverImage from "../components/HoverImage.tsx";

export default function Greeting() {
  return (
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-4xl md:text-8xl mx-auto text-center">
        Hello there, my name is <u>Adrian</u>.{" "}
        <HoverImage
          src="me.webp"
          alt="Adrian Karlen"
          class="w-24 md:w-auto h-auto md:inline hidden"
        />{" "}
        I'm a <u>Full Stack Developer</u>{" "}
        <HoverImage
          src="code.webp"
          alt="code"
          class="w-24 md:w-auto h-auto md:inline hidden"
        />{" "}
        based in <u>Stockholm</u>.{" "}
        <HoverImage
          src="stockholm.webp"
          alt="stockholm"
          class="w-24 md:w-auto h-auto md:inline hidden"
        />
      </h1>
    </div>
  );
}
