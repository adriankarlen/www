import type { Action } from "svelte/action";

export const intersect: Action<
  HTMLElement,
  { threshold?: number; rootMargin?: string } | undefined
> = (node, params) => {
  const threshold = params?.threshold ?? 0.1;
  const rootMargin = params?.rootMargin ?? "0px";

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.classList.add("visible");
        }
      });
    },
    { threshold, rootMargin }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
};
