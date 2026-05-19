import type { Action } from "svelte/action";

export const hashScroll: Action<HTMLElement, string[] | undefined> = (
  node,
  sectionIds
) => {
  const ids = sectionIds ?? [];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          const id = entry.target.id;
          if (id) {
            history.replaceState(null, "", `#${id}`);
          }
        }
      });
    },
    { threshold: 0.3 }
  );

  ids.forEach((id) => {
    const section = node.querySelector(`#${id}`);
    if (section) {
      observer.observe(section);
    }
  });

  return {
    destroy() {
      observer.disconnect();
    }
  };
};
