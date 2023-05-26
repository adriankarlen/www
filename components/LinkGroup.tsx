import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-linkedin.tsx";
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/mail.tsx";

interface LinkGroupProps {
  github: string;
  email: string;
  linkedin: string;
}

export default function LinkGroup(props: LinkGroupProps) {
  return (
    <div class="flex flex-col gap-4 md:flex-row">
      <a
        class="rounded-full px-2 py-1 border(gray-100 2) focus:outline-none hover:bg-gray-200 w-12 h-12 flex items-center justify-center"
        href={props.github}
        target="_blank"
      >
        <IconBrandGithub />
      </a>
      <a
        class="rounded-full px-2 py-1 border(gray-100 2) focus:outline-none hover:bg-gray-200 w-12 h-12 flex items-center justify-center"
        href={props.email}
        target="_blank"
      >
        <IconMail />
      </a>
      <a
        class="rounded-full px-2 py-1 border(gray-100 2) focus:outline-none hover:bg-gray-200 w-12 h-12 flex items-center justify-center"
        href={props.linkedin}
        target="_blank"
      >
        <IconBrandLinkedin />
      </a>
    </div>
  );
}
