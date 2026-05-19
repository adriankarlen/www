<script lang="ts">
  import { hashScroll } from "$lib/hash-scroll";
  import PillNav from "../components/PillNav.svelte";
  import Hero from "../components/Hero.svelte";
  import MeshBackground from "../components/MeshBackground.svelte";
  import ProjectShowcase from "../components/ProjectShowcase.svelte";
  import StackPills from "../components/StackPills.svelte";
  import AboutSection from "../components/AboutSection.svelte";
  import ContactSection from "../components/ContactSection.svelte";

  let activeSection = $state("hero");

  function handleScroll() {
    const sections = ["hero", "projects", "stack", "about", "contact"];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom > 0) {
          activeSection = id;
        }
      }
    }
  }
</script>

<svelte:window onscroll={handleScroll} />

<div use:hashScroll={["projects", "stack", "about", "contact"]}>
  <MeshBackground {activeSection} />
  <PillNav />

  <div id="hero">
    <Hero />
  </div>

  <ProjectShowcase />
  <StackPills />
  <AboutSection />
  <ContactSection />
</div>
