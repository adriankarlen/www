import { useRef } from "preact/hooks";
import IconChevronsDown from "@tabler/icons/chevrons-down.tsx";

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
      class="hover:scale-110 transition-transform duration-300 animate-pulse"
    >
      <IconChevronsDown />
    </a>
  );
}
