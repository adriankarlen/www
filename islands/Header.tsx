import { useEffect, useState } from 'preact/hooks';
import Menu from '../islands/Menu.tsx';
import Greeting from '../components/Greeting.tsx';
import Scroller from '../components/Scroller.tsx';

interface HeaderProps {
    name: string;
}

export default function Header(props: HeaderProps) {
    const [showGreeting, setShowGreeting] = useState(false);

    useEffect(() => {
        setShowGreeting(true);
    }, []);

    return (
        <>
            <nav class='flex flex-wrap md:flex-no-wrap md:items-center justify-between p-4'>
                <div class='flex flex-col md:flex-col'>
                    <h1 class='text-xl font-light'>{props.name}</h1>
                    <h2 class='text-lg font-light'>Developer</h2>
                </div>
                <div class='flex flex-col relative'>
                    <div class='absolute top-0 right-0'>
                        <Menu
                            email='mailto:akarlen@pm.me'
                            github='https://github.com/adriankarlen'
                            linkedin='https://www.linkedin.com/in/adrian-karlen/'
                        />
                    </div>
                </div>
            </nav>
            <div class='flex flex-col items-center justify-center flex-grow'>
                <Greeting
                    class={showGreeting
                        ? 'transition-all duration-1000 delay-500 opacity-100 translate-y-0'
                        : 'hidden opacity-0 translate-y-[10%] md:block absolute top-0 left-0 transition-all duration-1000 delay-500'}
                />
            </div>
            <div class='flex flex-col items-center justify-center z-50'>
                <Scroller href='#about' />
            </div>
        </>
    );
}
