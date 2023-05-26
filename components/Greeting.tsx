import HoverImage from "../components/HoverImage.tsx";

export default function Greeting() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-8xl mx-auto">
        Hello there, my name is <u>Adrian</u>.{" "}
        <HoverImage src="me.webp" alt="Adrian Karlen" /> I'm a{" "}
        <u>Full Stack Developer</u> <HoverImage src="code.webp" alt="code" />
        {" "}
        based in <u>Stockholm</u>.{" "}
        <HoverImage src="stockholm.webp" alt="stockholm" />
      </h1>
    </div>
  );
}
