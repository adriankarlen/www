<script lang="ts">
  import { hashScroll } from "$lib/hash-scroll";
  import { onMount } from "svelte";
  import PillNav from "../components/PillNav.svelte";
  import Hero from "../components/Hero.svelte";
  import MeshBackground from "../components/MeshBackground.svelte";
  import ProjectShowcase from "../components/ProjectShowcase.svelte";
  import StackPills from "../components/StackPills.svelte";
  import AboutSection from "../components/AboutSection.svelte";
  import ContactSection from "../components/ContactSection.svelte";

  let { data } = $props();

  let activeSection = $state("hero");

  onMount(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "#hero, #projects, #stack, #about, #contact"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
</script>

<div use:hashScroll={["projects", "stack", "about", "contact"]}>
  <MeshBackground {activeSection} />
  <PillNav />

  <div id="hero">
    <Hero github={data.github} />
  </div>

  <ProjectShowcase />
  <StackPills />
  <AboutSection />
  <ContactSection />
</div>
