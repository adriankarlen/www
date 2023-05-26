import { Head } from "$fresh/runtime.ts";
import AboutPage from "../components/AboutPage.tsx";
import Header from "../components/Header.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>adriankarlen</title>
      </Head>
      <header className="p-4 mx-auto max-w-screen-2xl h-screen flex flex-col justify-between">
        <Header name="Adrian Karlen" />
      </header>
      <main className="p-4 mx-auto max-w-screen-2xl h-screen flex flex-col overflow-y-auto scroll-snap-type-y scroll-behavior-smooth">
        <AboutPage />
      </main>
    </>
  );
}
