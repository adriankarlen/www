import { asset } from '$fresh/runtime.ts';

interface HoverImageProps {
    src: string;
    alt: string;
    class?: string;
}

export default function HoverImage(props: HoverImageProps) {
    return (
        <div class={props.class}>
            <img
                class='rounded-full object-cover h-20 w-20 inline-block shadow-md transition-transform transform-gpu duration-300 hover:scale-[5] relative z-0 hover:z-50'
                src={asset(props.src)}
                alt={props.alt}
            />
        </div>
    );
}
