import { browser } from "$app/environment";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (!browser) return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

const theme = $state({ current: getInitialTheme() });

function apply(t: Theme) {
  document.documentElement.setAttribute("data-theme", t);
}

if (browser) {
  apply(theme.current);

  const mq = matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      theme.current = e.matches ? "dark" : "light";
      apply(theme.current);
    }
  });
}

export function toggle() {
  theme.current = theme.current === "light" ? "dark" : "light";
  apply(theme.current);
  localStorage.setItem("theme", theme.current);
}

export function getTheme(): Theme {
  return theme.current;
}
