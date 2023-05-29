import LinkGroup from "../islands/LinkGroup.tsx";
import Greeting from "./Greeting.tsx";
import Scroller from "./Scroller.tsx";

interface HeaderProps {
  name: string;
}

export default function Header(props: HeaderProps) {
  return (
    <>
      <nav class="flex flex-wrap md:flex-no-wrap md:items-center justify-between p-4">
        <div class="flex flex-col md:flex-col">
          <h1 class="text-xl">{props.name}</h1>
          <h2 class="text-lg font-thin">Software Engineer</h2>
        </div>
        <div class="flex flex-col">
          <LinkGroup
            email="mailto:akarlen@pm.me"
            github="https://github.com/adriankarlen"
            linkedin="https://www.linkedin.com/in/adrian-karlen/"
          />
        </div>
      </nav>
      <div class="flex flex-col items-center justify-center flex-grow">
        <Greeting />
      </div>
      <div class="flex flex-col items-center justify-center">
        <Scroller href="#about" />
      </div>
    </>
  );
}
