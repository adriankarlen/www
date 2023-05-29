import { useState } from "preact/hooks";
import { Head } from "$fresh/runtime.ts";
import IconMoon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/moon.tsx";
import IconSun from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/sun.tsx";

type Mode = "light" | "dark";

interface ColorModeProps {
  initColorMode: Mode;
}

export default function ColorMode(props: ColorModeProps) {
  const [colorMode, setColorMode] = useState(props.initColorMode);

  const handleClick = () => {
    setColorMode(colorMode === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/_colormode.css" />
      </Head>
      <button
        class={`rounded-full px-2 py-1 md:border(gray-100 2) focus:outline-none hover:bg-gray-200 w-12 h-12 flex items-center justify-center transition-colors ${
          colorMode === "dark" ? "bg-dark" : "bg-light"
        }`}
        onClick={handleClick}
      >
        <div class="relative w-6 h-6">
          {colorMode === "dark"
            ? (
              <>
                <IconMoon
                  class="w-full h-full absolute top-0 left-0 animate-slide-in"
                  style={{
                    animationFillMode: "forwards",
                    animationDuration: "0.3s",
                    animationTimingFunction: "ease",
                  }}
                />
                <IconSun
                  class="w-full h-full absolute top-0 left-0 animate-slide-out"
                  style={{
                    animationFillMode: "forwards",
                    animationDuration: "0.3s",
                    animationTimingFunction: "ease",
                  }}
                />
              </>
            )
            : (
              <>
                <IconSun
                  class="w-full h-full absolute top-0 left-0 animate-slide-in"
                  style={{
                    animationFillMode: "forwards",
                    animationDuration: "0.3s",
                    animationTimingFunction: "ease",
                  }}
                />
                <IconMoon
                  class="w-full h-full absolute top-0 left-0 animate-slide-out"
                  style={{
                    animationFillMode: "forwards",
                    animationDuration: "0.3s",
                    animationTimingFunction: "ease",
                  }}
                />
              </>
            )}
        </div>
      </button>
    </>
  );
}
