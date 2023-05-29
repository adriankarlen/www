import { Head } from "$fresh/runtime.ts";
import AboutPage from "../components/AboutPage.tsx";
import Header from "../components/Header.tsx";
import ProjectsPage from "../components/ProjectsPage.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="styles/_fonts.css" />
        <link rel="stylesheet" href="styles/_global.css" />
        <title>adriankarlen</title>
      </Head>
      <header class="p-4 mx-auto max-w-screen-2xl h-screen flex flex-col justify-between">
        <Header name="Adrian Karlen" />
      </header>
      <main class="mx-auto max-w-screen-2xl min-h-screen flex flex-col justify-between overflow-y-auto scroll-snap-type-y scroll-behavior-smooth">
        <AboutPage />
        <ProjectsPage />
      </main>
    </>
  );
}
