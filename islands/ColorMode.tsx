import { useEffect, useState } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { Head } from "$fresh/runtime.ts";
import IconMoon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/moon.tsx";
import IconSun from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/sun.tsx";
import IconBrightness from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brightness.tsx";

const modes = ["os", "dark", "light"] as const;
const icons = [IconBrightness, IconMoon, IconSun];

export default function ColorMode() {
  const state = useSignal<(typeof modes)[number]>("dark");
  // const [colorMode, setColorMode] = useState(state.value);

  function detectMode() {
    if (
      localStorage.colorMode === "dark" ||
      (!("colorMode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      state.value = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      state.value = "light";
    }
    if (!("colorMode" in localStorage)) state.value = "os";
  }

  const handleClick = () => {
    state.value = modes[(modes.indexOf(state.value) + 1) % modes.length];
    if (state.value === "os") {
      localStorage.removeItem("colorMode");
    } else {
      localStorage.colorMode = state.value;
    }
    if (
      localStorage.colorMode === "dark" ||
      (!("colorMode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(detectMode, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/_colormode.css" />
      </Head>
      <button
        class={`rounded-full px-2 py-1 md:border(gray-100 2) focus:outline-none hover:bg-gray-200 w-12 h-12 flex items-center justify-center transition-colors ${
          state.value === "dark" ? "bg-dark" : "bg-light"
        }`}
        onClick={handleClick}
      >
        <div class="relative w-6 h-6">
          {icons.map((Icon, i) => (
            <Icon
              class={`w-full h-full absolute top-0 left-0 ${
                state.value === modes[i]
                  ? "animate-slide-in"
                  : "animate-slide-out"
              }`}
              style={{
                animationFillMode: "forwards",
                animationDuration: "0.3s",
                animationTimingFunction: "ease",
              }}
            />
          ))}
        </div>
        {
          /* <div class="relative w-6 h-6">
          {state.value === "dark"
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
        </div> */
        }
      </button>
    </>
  );
}
