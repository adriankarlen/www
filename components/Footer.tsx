import IconBrandGithub from "@tabler/icons/brand-github.tsx";
import { asset } from "https://deno.land/x/fresh@1.1.6/runtime.ts";

export default function Footer() {
  return (
    <div class="h-full md:px-52 px-4 col-span-2 lg:col-span-1 flex md:gap-1 gap-4 items-center mt-10 justify-between">
      <a
        class="text-2xl md:inline hidden font-bold text-gray-700 dark:text-gray-300"
        href="#top"
      >
        Adrian Karlén
      </a>
      <div class="flex flex-col items-center justify-center gap-2">
        <a
          class="relative w-10 md:inline hidden"
          width="16"
          height="16"
          href="https://github.com/adriankarlen"
          rel="noopener"
          target="_blank"
        >
          <IconBrandGithub class="w-full" />
        </a>
        <a
          href="https://fresh.deno.dev"
          target="_blank"
          class="md:mt-3 flex items-center gap-1 md:justify-end"
        >
          <img
            src={asset("/fresh-logo.svg")}
            alt="Fresh logo"
            class="h-6 w-6"
          />
          Made with <span class="font-bold">Fresh</span>
        </a>
      </div>
      <span class="md:text-sm text-xs">
        Copyright © {new Date().getFullYear()} Adrian Karlén
        <br />
        All rights reserved.
      </span>
    </div>
  );
}
