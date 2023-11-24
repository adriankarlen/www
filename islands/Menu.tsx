import { useEffect, useState } from 'preact/hooks';
import IconBrandGithub from '@tabler/icons/brand-github.tsx';
import IconBrandLinkedin from '@tabler/icons/brand-linkedin.tsx';
import IconMail from '@tabler/icons/mail.tsx';
import IconMenu from '@tabler/icons/menu.tsx';
import IconPlus from '@tabler/icons/plus.tsx';
import IconFileDownload from '@tabler/icons/file-download.tsx';
import { asset } from '$fresh/runtime.ts';

import ColorMode from './ColorMode.tsx';

interface MenuProps {
    github: string;
    email: string;
    linkedin: string;
}

export default function Menu(props: MenuProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleMenuClick = () => {
            (document.activeElement as HTMLElement)?.blur();
        };

        document.addEventListener('click', handleMenuClick);

        return () => {
            document.removeEventListener('click', handleMenuClick);
        };
    }, []);

    return (
        <div class='flex flex-col md:flex-row'>
            <button
                type='button'
                title={isMenuOpen ? 'Close menu' : 'Open menu'}
                class={`rounded-full px-2 py-1 focus:outline-none w-12 h-12 flex items-center justify-center md:hidden ${
                    isMenuOpen ? 'bg-rp-overlay' : ''
                }`}
                onClick={toggleMenu}
            >
                <div
                    class={`h-6 w-6 transform transition-transform duration-300 ${
                        isMenuOpen ? 'rotate-45' : ''
                    }`}
                >
                    {isMenuOpen ? <IconPlus /> : <IconMenu />}
                </div>
            </button>
            <div
                class={`flex flex-col gap-0 md:flex-row md:gap-4 transition-all duration-300 ${
                    isMenuOpen ? '' : 'hidden md:flex'
                }`}
            >
                <a
                    class='rounded-full px-2 py-1 md:border-2 md:border-rp-highlightMed focus:outline-none hover:bg-rp-overlay w-12 h-12 flex items-center justify-center'
                    href={props.github}
                    target='_blank'
                >
                    <IconBrandGithub />
                </a>
                <a
                    class='rounded-full px-2 py-1 md:border-2 md:border-rp-highlightMed focus:outline-none hover:bg-rp-overlay w-12 h-12 flex items-center justify-center'
                    href={props.email}
                    target='_blank'
                >
                    <IconMail />
                </a>
                <a
                    class='rounded-full px-2 py-1 md:border-2 md:border-rp-highlightMed focus:outline-none hover:bg-rp-overlay w-12 h-12 flex items-center justify-center'
                    href={props.linkedin}
                    target='_blank'
                >
                    <IconBrandLinkedin />
                </a>
                <a
                    class='rounded-full px-2 py-1 md:border-2 md:border-rp-highlightMed focus:outline-none hover:bg-rp-overlay w-12 h-12 flex items-center justify-center'
                    href={asset(props.resume)}
                    target='_blank'
                >
                    <IconFileDownload />
                </a>
                <ColorMode />
            </div>
        </div>
    );
}
