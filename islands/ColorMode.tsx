import IconMoon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/moon.tsx";
import IconSun from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/sun.tsx";

import { useState } from "preact/hooks";

export type Mode = "light" | "dark";

interface ColorModeProps {
  initColorMode: Mode;
}

export default function ColorMode(props: ColorModeProps) {
  const [colorMode, setColorMode] = useState(props.initColorMode);
  return (
    <button
      class="rounded-full px-2 py-1 md:border(gray-100 2) focus:outline-none hover:bg-gray-200 w-12 h-12 flex items-center justify-center"
      onClick={() => setColorMode(colorMode === "dark" ? "light" : "dark")}
    >
      {colorMode === "dark" ? <IconMoon /> : <IconSun />}
    </button>
  );
}
