import { useEffect, useState } from "preact/hooks";
import IconBrandGithub from "@tabler/icons/brand-github.tsx";
import IconBrandLinkedin from "@tabler/icons/brand-linkedin.tsx";
import IconMail from "@tabler/icons/mail.tsx";
import IconMenu2 from "@tabler/icons/menu-2.tsx";
import IconPlus from "@tabler/icons/plus.tsx";
import IconFileDownload from "@tabler/icons/file-download.tsx";
import { asset } from "$fresh/runtime.ts";

import ColorMode from "./ColorMode.tsx";
import Tooltip from "../components/Tooltip.tsx";

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

  useEffect(() => {
    const handleMenuClick = () => {
      (document.activeElement as HTMLElement)?.blur();
    };

    document.addEventListener("click", handleMenuClick);

    return () => {
      document.removeEventListener("click", handleMenuClick);
    };
  }, []);

  return (
    <div class="flex flex-col md:flex-row">
      <button
        class={`rounded-full px-2 py-1 focus:outline-none hover:bg-gray-200 dark:hover:bg-[#313244] w-12 h-12 flex items-center justify-center md:hidden ${
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
        <Tooltip text="GitHub">
          <a
            class="rounded-full px-2 py-1 md:border-2 md:border-[#acb0be] dark:md:border-[#585b70] focus:outline-none hover:bg-gray-200 dark:hover:bg-[#313244] w-12 h-12 flex items-center justify-center"
            href={props.github}
            target="_blank"
          >
            <IconBrandGithub />
          </a>
        </Tooltip>
        <a
          class="rounded-full px-2 py-1 md:border-2 md:border-[#acb0be] dark:md:border-[#585b70] focus:outline-none hover:bg-gray-200 dark:hover:bg-[#313244] w-12 h-12 flex items-center justify-center"
          href={props.email}
          target="_blank"
        >
          <IconMail />
        </a>
        <a
          class="rounded-full px-2 py-1 md:border-2 md:border-[#acb0be] dark:md:border-[#585b70] focus:outline-none hover:bg-gray-200 dark:hover:bg-[#313244] w-12 h-12 flex items-center justify-center"
          href={props.linkedin}
          target="_blank"
        >
          <IconBrandLinkedin />
        </a>
        <a
          class="rounded-full px-2 py-1 md:border-2 md:border-[#acb0be] dark:md:border-[#585b70] focus:outline-none hover:bg-gray-200 dark:hover:bg-[#313244] w-12 h-12 flex items-center justify-center"
          href={asset("adriankarlen-resume.pdf")}
          target="_blank"
        >
          <IconFileDownload />
        </a>
        <ColorMode />
      </div>
    </div>
  );
}
