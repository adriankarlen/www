import { asset } from '$fresh/runtime.ts';
import Carousel from '../islands/Carousel.tsx';

const SLIDE_DATA = [
    {
        bgImage: asset('projects/personal-website.webp'),
        text: 'Personal website',
        url: 'https://github.com/adriankarlen/www',
    },
    {
        bgImage: asset('projects/_sushi.webp'),
        text: '_sushi startpage',
        url: 'https://github.com/adriankarlen/_sushi',
    },
    {
        bgImage: asset('projects/vscode-relapce.webp'),
        text: 'vscode relapce',
        url: 'https://github.com/adriankarlen/vscode-relapce',
    },
];

export default function ProjectsPage() {
    return (
        <div id='projects' class='flex flex-col h-screen p-4'>
            <div
                id='content'
                class='flex flex-wrap flex-grow w-full p-4 justify-center items-center'
            >
                <div class='w-full flex flex-col'>
                    <h2 class='p-2 text-4xl md:text-6xl font-black mx-auto text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary'>
                        Projects
                    </h2>
                    <p class='p-2 text-lg md:text-xl font-light mx-auto'>
                        Here are some of my projects. By clicking on the images
                        you will be redirected to the GitHub repository.
                    </p>
                </div>
                <div class='w-full shadow-xl shadow-red rounded-lg'>
                    <Carousel slideData={SLIDE_DATA} />
                </div>
            </div>
        </div>
    );
}
