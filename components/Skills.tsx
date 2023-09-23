import type { ComponentChildren } from 'preact';

interface SkillsProps {
    children: ComponentChildren;
}

export default function Skills(props: SkillsProps) {
    return (
        <div class='flex justify-center'>
            <div class='grid grid-cols-5 gap-4 sm:gap-10'>
                {props.children}
            </div>
        </div>
    );
}
