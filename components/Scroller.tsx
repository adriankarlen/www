import { useRef } from "preact/hooks";
import IconChevronsDown from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevrons-down.tsx";

interface ScrollerProps {
  href: string;
}

export default function Scroller(props: ScrollerProps) {
  const mainRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={props.href}
      onClick={handleScroll}
      className="hover:scale-110 transition-transform duration-300 animate-pulse"
    >
      <IconChevronsDown />
    </a>
  );
}
