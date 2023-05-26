import { asset } from "$fresh/runtime.ts";

interface HoverImageProps {
  src: string;
  alt: string;
}

export default function HoverImage(props: HoverImageProps) {
  return (
    <img
      className="rounded-full object-cover h-20 w-20 inline-block shadow-md transition-transform transform-gpu duration-300 hover:scale-[5]"
      src={asset(props.src)}
      alt={props.alt}
    />
  );
}
