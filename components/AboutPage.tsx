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
      className="flex flex-col items-center justify-between flex-grow"
    >
      <div
        id="content"
        className="flex flex-wrap justify-center items-center w-full md:w-2/3 p-4"
      >
        <div className="w-full md:w-1/3 p-4">
          <label className="text-lg font-thin">About Me</label>
        </div>
        <div className="w-full md:w-2/3 p-4">
          <p className="text-3xl font-semibold">
            My name is Adrian Karlén and I am a 29-year-old software developer
            based in Stockholm. My main focus is web development and I have
            previous work experience with technologies such as React, PHP,
            JS/TS, and .NET. My everyday work has consisted of developing
            web-based business systems, e-commerce systems, and customer
            portals. This has also included integration with external systems. I
            am currently working as a consultant at Viati.
          </p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <label className="text-lg font-thin">Skills</label>
        </div>
        <div className="w-full md:w-2/3 p-4 flex">
          <Skills>
            <div className="rounded-full border-blue-500 border-4 p-4 flex items-center justify-center w-24 h-24 hover:scale-105 transition-transform duration-300">
              <IconBrandReact className="min-w-full min-h-full" stroke={1} />
            </div>
            <div className="rounded-full border-blue-500 border-4 p-4 flex items-center justify-center w-24 h-24 hover:scale-105 transition-transform duration-300">
              <IconBrandCSharp className="min-w-full min-h-full" stroke={1} />
            </div>
            <div className="rounded-full border-blue-500 border-4 p-4 flex items-center justify-center w-24 h-24 hover:scale-105 transition-transform duration-300">
              <IconBrandTypescript
                className="min-w-full min-h-full"
                stroke={1}
              />
            </div>
            <div className="rounded-full border-blue-500 border-4 p-4 flex items-center justify-center w-24 h-24 hover:scale-105 transition-transform duration-300">
              <IconBrandPhp className="min-w-full min-h-full" stroke={1} />
            </div>
            <div className="rounded-full border-blue-500 border-4 p-4 flex items-center justify-center w-24 h-24 hover:scale-105 transition-transform duration-300">
              <IconBrandPython className="min-w-full min-h-full" stroke={1} />
            </div>
          </Skills>
        </div>
      </div>
      <div className="flex flex-col items-center justify-end h-10">
        <Scroller href="#projects" />
      </div>
    </div>
  );
}
