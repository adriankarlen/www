import LinkGroup from "../components/LinkGroup.tsx";
import ColorMode from "../islands/ColorMode.tsx";
import Greeting from "./Greeting.tsx";
import Scroller from "./Scroller.tsx";

interface HeaderProps {
  name: string;
}

export default function Header(props: HeaderProps) {
  return (
    <>
      <nav class="flex justify-between items-center p-4">
        <div class="flex flex-col md:flex-col">
          <h1 class="text-xl">{props.name}</h1>
          <h2 class="text-lg font-thin">Software Engineer</h2>
        </div>
        <div class="flex flex-col gap-4 md:flex-row">
          <LinkGroup
            github="https://github.com/adriankarlen"
            email="mailto:akarlen@pm.me"
            linkedin="https://www.linkedin.com/in/adrian-karlen/"
          />
          <ColorMode initColorMode="dark" />
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center flex-grow">
        <Greeting />
      </div>
      <div className="flex flex-col items-center justify-center h-10">
        <Scroller href="#about" />
      </div>
    </>
  );
}
