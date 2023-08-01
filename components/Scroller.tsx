import IconChevronsDown from '@tabler/icons/chevrons-down.tsx';

interface ScrollerProps {
    href: string;
}

export default function Scroller(props: ScrollerProps) {
    return (
        <a
            href={props.href}
            class='hover:scale-110 transition-transform duration-300 animate-pulse'
        >
            <IconChevronsDown />
        </a>
    );
}
