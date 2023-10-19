import AboutPage from '../islands/AboutPage.tsx';
import FloatingBox from '../islands/FloatingBox.tsx';
import Header from '../islands/Header.tsx';
import ProjectsPage from '../components/ProjectsPage.tsx';
import Footer from '../components/Footer.tsx';

export default function Home() {
    return (
        <>
            <header class='p-4 mx-auto max-w-screen-2xl h-screen flex flex-col justify-between'>
                <Header name='Adrian Karlen' />
            </header>
            <main class='mx-auto max-w-screen-2xl min-h-screen flex flex-col justify-between bor'>
                <AboutPage />
                <ProjectsPage />
                <FloatingBox />
            </main>
            <footer class='mx-auto h-36 w-screen md:h-48'>
                <Footer />
            </footer>
        </>
    );
}
