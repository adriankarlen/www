import { useEffect, useState } from "preact/hooks";
import { useSignal } from "@preact/signals";
import IconMoon from "@tabler/icons/moon.tsx";
import IconSun from "@tabler/icons/sun.tsx";
import IconBrightness from "@tabler/icons/brightness.tsx";

const modes = ["os", "dark", "light"] as const;
const icons = [IconBrightness, IconMoon, IconSun];

export default function ColorMode() {
  const state = useSignal<(typeof modes)[number]>("dark");

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
    <button
      class={`rounded-full px-2 py-1 md:border-2 md:border-[#acb0be] dark:md:border-[#585b70] focus:outline-none hover:bg-gray-200 dark:hover:bg-[#313244] w-12 h-12 flex items-center justify-center transition-colors ${
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
    </button>
  );
}
