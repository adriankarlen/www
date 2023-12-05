import { useEffect, useRef, useState } from 'preact/hooks';

import IconBrandReact from '@tabler/icons/brand-react.tsx';
import IconBrandCSharp from '@tabler/icons/brand-c-sharp.tsx';
import IconBrandTypescript from '@tabler/icons/brand-typescript.tsx';
import IconBrandPhp from '@tabler/icons/brand-php.tsx';
import IconBrandPython from '@tabler/icons/brand-python.tsx';

import Skills from '../components/Skills.tsx';

export default function AboutPage() {
    const [showContent, setShowContent] = useState(false);
    const aboutRef = useRef(null);
    const birthDate = new Date('1994-01-04');
    const age = Math.floor(
        (Date.now() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25),
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowContent(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 },
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <div
            id='about'
            ref={aboutRef}
            class='flex flex-col items-center min-h-screen p-4 overflow-y-auto scroll-snap-type-y scroll-behavior-smooth'
        >
            <div
                id='content'
                class='flex flex-wrap w-full md:w-2/3 p-4 flex-grow'
            >
                <div class='w-full md:w-1/3 p-4'>
                    <h2 class='text-lg font-light'>About Me</h2>
                </div>
                <div
                    class={`w-full md:w-2/3 p-4 ${
                        showContent
                            ? 'transition-all duration-1000 opacity-100 translate-y-0 flex'
                            : 'hidden opacity-0 translate-y-[5%] md:block absolute top-0 left-0 transition-all duration-1000 delay-500'
                    }}`}
                >
                    <p class='md:text-xl text-lg font-medium'>
                        My name is Adrian Karlén, a{' '}
                        {age}-year-old software developer based in Stockholm. I
                        specialize in web development and have extensive
                        experience working with technologies such as React, PHP,
                        JavaScript/TypeScript, and .NET. Currently, I am working
                        as a consultant at Viati, where I continue to enhance my
                        expertise and contribute to impactful projects.
                    </p>
                </div>
                <div class='w-full md:w-1/3 p-4'>
                    <h2 class='text-lg font-light'>Experience</h2>
                </div>
                <div
                    class={`w-full md:w-2/3 p-4 ${
                        showContent
                            ? 'transition-all duration-1000 delay-200 opacity-100 translate-y-0 flex'
                            : 'hidden opacity-0 translate-y-[5%] md:block absolute top-0 left-0 transition-all duration-1000 delay-500'
                    }}`}
                >
                    <p class='md:text-xl text-lg font-medium'>
                        I have been working as a software developer since 2019.
                        During this time, I have worked with a wide range of
                        clients, including both small and large companies. My
                        work has primarily focused on developing web-based
                        business systems, e-commerce platforms, and customer
                        portals. I have also been involved in the development of
                        mobile applications and websites. My work has included
                        everything from developing new features to maintaining
                        and improving existing code bases.
                    </p>
                </div>
                <div class='w-full md:w-1/3 p-4'>
                    <h2 class='text-lg font-light'>Skills</h2>
                </div>
                <div class='w-full md:w-2/3 p-4 flex justify-center'>
                    <Skills>
                        <div
                            class={showContent
                                ? 'transition-all duration-1000 opacity-100 translate-y-0'
                                : 'hidden opacity-0 translate-y-[5%] md:block absolute top-0 left-0 transition-all duration-1000 delay-500'}
                        >
                            <div class='rounded-full border-rp-love md:border-4 border-2 md:p-4 p-1 flex items-center justify-center md:w-24 md:h-24 w-12 h-12 hover:scale-105 transition-transform duration-300'>
                                <IconBrandReact
                                    class='min-w-[80%] min-h-[80%] md:min-w-full md:min-h-full'
                                    stroke={1}
                                />
                            </div>
                        </div>
                        <div
                            class={showContent
                                ? 'transition-all duration-1000 delay-200 opacity-100 translate-y-0'
                                : 'hidden opacity-0 translate-y-[5%] md:block absolute top-0 left-0 transition-all duration-1000 delay-500'}
                        >
                            <div class='rounded-full border-rp-gold md:border-4 border-2 md:p-4 p-1 flex items-center justify-center md:w-24 md:h-24 w-12 h-12 hover:scale-105 transition-transform duration-300'>
                                <IconBrandCSharp
                                    class='min-w-[80%] min-h-[80%] md:min-w-full md:min-h-full'
                                    stroke={1}
                                />
                            </div>
                        </div>
                        <div
                            class={showContent
                                ? 'transition-all duration-1000 delay-[400ms] opacity-100 translate-y-0'
                                : 'hidden opacity-0 translate-y-[5%] md:block absolute top-0 left-0 transition-all duration-1000 delay-500'}
                        >
                            <div class='rounded-full border-rp-iris md:border-4 border-2 md:p-4 p-1 flex items-center justify-center md:w-24 md:h-24 w-12 h-12 hover:scale-105 transition-transform duration-300'>
                                <IconBrandTypescript
                                    class='min-w-[80%] min-h-[80%] md:min-w-full md:min-h-full'
                                    stroke={1}
                                />
                            </div>
                        </div>
                        <div
                            class={showContent
                                ? 'transition-all duration-1000 delay-[600ms] opacity-100 translate-y-0'
                                : 'hidden opacity-0 translate-y-[5%] md:block absolute top-0 left-0 transition-all duration-1000 delay-500'}
                        >
                            <div class='rounded-full border-rp-pine md:border-4 border-2 md:p-4 p-1 flex items-center justify-center md:w-24 md:h-24 w-12 h-12 hover:scale-105 transition-transform duration-300'>
                                <IconBrandPhp
                                    class='min-w-[80%] min-h-[80%] md:min-w-full md:min-h-full'
                                    stroke={1}
                                />
                            </div>
                        </div>
                        <div
                            class={showContent
                                ? 'transition-all duration-1000 delay-[800ms] opacity-100 translate-y-0'
                                : 'hidden opacity-0 translate-y-[5%] md:block absolute top-0 left-0 transition-all duration-1000 delay-500'}
                        >
                            <div class='rounded-full border-rp-foam md:border-4 border-2 md:p-4 p-1 flex items-center justify-center md:w-24 md:h-24 w-12 h-12 hover:scale-105 transition-transform duration-300'>
                                <IconBrandPython
                                    class='min-w-[80%] min-h-[80%] md:min-w-full md:min-h-full'
                                    stroke={1}
                                />
                            </div>
                        </div>
                    </Skills>
                </div>
            </div>
        </div>
    );
}
