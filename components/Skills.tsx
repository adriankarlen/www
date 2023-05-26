import { JSX } from "preact/jsx-runtime";
import type { ComponentChildren } from "preact";

interface SkillsProps {
  children: ComponentChildren;
}

export default function Skills(props: SkillsProps) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5">
        {props.children}
      </div>
    </div>
  );
}
