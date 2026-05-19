import { browser } from "$app/environment";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (!browser) return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

let current: Theme = $state(getInitialTheme());

function apply(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

if (browser) {
  apply(current);

  const mq = matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      current = e.matches ? "dark" : "light";
      apply(current);
    }
  });
}

export function toggle() {
  current = current === "light" ? "dark" : "light";
  apply(current);
  localStorage.setItem("theme", current);
}

export function getTheme(): Theme {
  return current;
}
