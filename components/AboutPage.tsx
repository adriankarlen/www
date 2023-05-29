import Skills from "./Skills.tsx";
import Scroller from "./Scroller.tsx";

import IconBrandReact from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-react.tsx";
import IconBrandCSharp from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-c-sharp.tsx";
import IconBrandTypescript from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-typescript.tsx";
import IconBrandPhp from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-php.tsx";
import IconBrandPython from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-python.tsx";

export default function AboutPage() {
  return (
    <div
      id="about"
      class="flex flex-col items-center h-screen p-4"
    >
      <div
        id="content"
        class="flex flex-wrap w-full md:w-2/3 p-4 flex-grow"
      >
        <div class="w-full md:w-1/3 p-4">
          <label class="text-lg font-thin">About Me</label>
        </div>
        <div class="w-full md:w-2/3 p-4">
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
          <label class="text-lg font-thin">Skills</label>
        </div>
        <div class="w-full md:w-2/3 p-4 flex">
          <Skills>
            <div class="rounded-full border-blue-500 md:border-4 border-2 md:p-4 p-1 flex items-center justify-center md:w-24 md:h-24 w-12 h-12 hover:scale-105 transition-transform duration-300">
              <IconBrandReact class="min-w-full min-h-full" stroke={1} />
            </div>
            <div class="rounded-full border-pink-500 md:border-4 border-2 md:p-4 p-1 flex items-center justify-center md:w-24 md:h-24 w-12 h-12 hover:scale-105 transition-transform duration-300">
              <IconBrandCSharp class="min-w-full min-h-full" stroke={1} />
            </div>
            <div class="rounded-full border-red-500 md:border-4 border-2 md:p-4 p-1 flex items-center justify-center md:w-24 md:h-24 w-12 h-12 hover:scale-105 transition-transform duration-300">
              <IconBrandTypescript
                class="min-w-full min-h-full"
                stroke={1}
              />
            </div>
            <div class="rounded-full border-green-500 md:border-4 border-2 md:p-4 p-1 flex items-center justify-center md:w-24 md:h-24 w-12 h-12 hover:scale-105 transition-transform duration-300">
              <IconBrandPhp class="min-w-full min-h-full" stroke={1} />
            </div>
            <div class="rounded-full border-yellow-500 md:border-4 border-2 md:p-4 p-1 flex items-center justify-center md:w-24 md:h-24 w-12 h-12 hover:scale-105 transition-transform duration-300">
              <IconBrandPython class="min-w-full min-h-full" stroke={1} />
            </div>
          </Skills>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center h-10">
        <Scroller href="#projects" />
      </div>
    </div>
  );
}
