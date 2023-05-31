import { useEffect, useRef, useState } from "preact/hooks";

import IconBrandReact from "@tabler/icons/brand-react.tsx";
import IconBrandCSharp from "@tabler/icons/brand-c-sharp.tsx";
import IconBrandTypescript from "@tabler/icons/brand-typescript.tsx";
import IconBrandPhp from "@tabler/icons/brand-php.tsx";
import IconBrandPython from "@tabler/icons/brand-python.tsx";

import Skills from "../components/Skills.tsx";

export default function AboutPage() {
  const [showContent, setShowContent] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowContent(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }, // Adjust the threshold as per your needs
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
      id="about"
      ref={aboutRef}
      class="flex flex-col items-center h-screen p-4 overflow-y-auto scroll-snap-type-y scroll-behavior-smooth"
    >
      <div
        id="content"
        class="flex flex-wrap w-full md:w-2/3 p-4 flex-grow"
      >
        <div class="w-full md:w-1/3 p-4">
          <label class="text-lg font-light">About Me</label>
        </div>
        <div
          class={`w-full md:w-2/3 p-4 ${
            showContent
              ? "transition-all duration-1000 opacity-100 translate-y-0"
              : "hidden opacity-0 translate-y-[5%] md:block absolute top-0 left-0 transition-all duration-1000 delay-500"
          }}`}
        >
          <p class="md:text-3xl text-lg font-medium">
            My name is Adrian Karlén and I am a 29-year-old software developer
            based in Stockholm. My main focus is web development and I have
            previous work experience with technologies such as React, PHP,
            JS/TS, and .NET. My everyday work has consisted of developing
            web-based business systems, e-commerce systems, and customer
            portals. This has also included integration with external systems. I
            am currently working as a consultant at Viati.
          </p>
        </div>
        <div class="w-full md:w-1/3 p-4">
          <label class="text-lg font-light">Skills</label>
        </div>
        <div class="w-full md:w-2/3 p-4 flex">
          <Skills>
            <div
              class={showContent
                ? "transition-all duration-1000 opacity-100 translate-y-0"
                : "hidden opacity-0 translate-y-[5%] md:block absolute top-0 left-0 transition-all duration-1000 delay-500"}
            >
              <div class="rounded-full border-[#1e66f5] dark:border-[#89b4fa] md:border-4 border-2 md:p-4 p-1 flex items-center justify-center md:w-24 md:h-24 w-12 h-12 hover:scale-105 transition-transform duration-300">
                <IconBrandReact class="min-w-full min-h-full" stroke={1} />
              </div>
            </div>
            <div
              class={showContent
                ? "transition-all duration-1000 delay-200 opacity-100 translate-y-0"
                : "hidden opacity-0 translate-y-[5%] md:block absolute top-0 left-0 transition-all duration-1000 delay-500"}
            >
              <div class="rounded-full border-[#fe640b] dark:border-[#fab387] md:border-4 border-2 md:p-4 p-1 flex items-center justify-center md:w-24 md:h-24 w-12 h-12 hover:scale-105 transition-transform duration-300">
                <IconBrandCSharp class="min-w-full min-h-full" stroke={1} />
              </div>
            </div>
            <div
              class={showContent
                ? "transition-all duration-1000 delay-[400ms] opacity-100 translate-y-0"
                : "hidden opacity-0 translate-y-[5%] md:block absolute top-0 left-0 transition-all duration-1000 delay-500"}
            >
              <div class="rounded-full border-[#d20f39] dark:border-[#f38ba8] md:border-4 border-2 md:p-4 p-1 flex items-center justify-center md:w-24 md:h-24 w-12 h-12 hover:scale-105 transition-transform duration-300">
                <IconBrandTypescript
                  class="min-w-full min-h-full"
                  stroke={1}
                />
              </div>
            </div>
            <div
              class={showContent
                ? "transition-all duration-1000 delay-[600ms] opacity-100 translate-y-0"
                : "hidden opacity-0 translate-y-[5%] md:block absolute top-0 left-0 transition-all duration-1000 delay-500"}
            >
              <div class="rounded-full border-[#40a02b] dark:border-[#a6e3a1] md:border-4 border-2 md:p-4 p-1 flex items-center justify-center md:w-24 md:h-24 w-12 h-12 hover:scale-105 transition-transform duration-300">
                <IconBrandPhp class="min-w-full min-h-full" stroke={1} />
              </div>
            </div>
            <div
              class={showContent
                ? "transition-all duration-1000 delay-[800ms] opacity-100 translate-y-0"
                : "hidden opacity-0 translate-y-[5%] md:block absolute top-0 left-0 transition-all duration-1000 delay-500"}
            >
              <div class="rounded-full border-[#df8e1d] dark:border-[#f9e2af] md:border-4 border-2 md:p-4 p-1 flex items-center justify-center md:w-24 md:h-24 w-12 h-12 hover:scale-105 transition-transform duration-300">
                <IconBrandPython class="min-w-full min-h-full" stroke={1} />
              </div>
            </div>
          </Skills>
        </div>
      </div>
    </div>
  );
}
