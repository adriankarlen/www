import { useState } from "preact/hooks";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-linkedin.tsx";
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/mail.tsx";
import IconMenu2 from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/menu-2.tsx";
import IconPlus from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/plus.tsx";

import ColorMode from "./ColorMode.tsx";

interface MenuProps {
  github: string;
  email: string;
  linkedin: string;
}

export default function Menu(props: MenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div class="flex flex-col md:flex-row">
      <button
        class={`rounded-full px-2 py-1 border(gray-100 2) focus:outline-none hover:bg-gray-200 w-12 h-12 flex items-center justify-center md:hidden ${
          isMenuOpen ? "bg-gray-200" : ""
        }`}
        onClick={toggleMenu}
      >
        <div
          class={`h-6 w-6 transform transition-transform duration-300 ${
            isMenuOpen ? "rotate-45" : ""
          }`}
        >
          {isMenuOpen ? <IconPlus /> : <IconMenu2 />}
        </div>
      </button>
      <div
        class={`flex flex-col gap-0 md:flex-row md:gap-4 md:ml- ${
          isMenuOpen ? "xs:block" : "hidden md:flex"
        } transition-all duration-300`}
      >
        <a
          class="rounded-full px-2 py-1 md:border(gray-100 2) focus:outline-none hover:bg-gray-200 w-12 h-12 flex items-center justify-center"
          href={props.github}
          target="_blank"
        >
          <IconBrandGithub />
        </a>
        <a
          class="rounded-full px-2 py-1 md:border(gray-100 2) focus:outline-none hover:bg-gray-200 w-12 h-12 flex items-center justify-center"
          href={props.email}
          target="_blank"
        >
          <IconMail />
        </a>
        <a
          class="rounded-full px-2 py-1 md:border(gray-100 2) focus:outline-none hover:bg-gray-200 w-12 h-12 flex items-center justify-center"
          href={props.linkedin}
          target="_blank"
        >
          <IconBrandLinkedin />
        </a>
        <ColorMode />
      </div>
    </div>
  );
}
