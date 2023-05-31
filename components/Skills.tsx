import type { ComponentChildren } from "preact";

interface SkillsProps {
  children: ComponentChildren;
}

export default function Skills(props: SkillsProps) {
  return (
    <div class="flex justify-center">
      <div class="grid grid-cols-5 gap-10 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5">
        {props.children}
      </div>
    </div>
  );
}
