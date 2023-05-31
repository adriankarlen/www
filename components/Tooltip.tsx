import type { ComponentChildren } from "preact";

interface TooltipProps {
  text: string;
  children: ComponentChildren;
}

export default function Tooltip(props: TooltipProps) {
  const { text, children } = props;

  return (
    <div class="tooltip">
      {children}
      <div class="tooltip-text">{text}</div>
    </div>
  );
}
