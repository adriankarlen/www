<script lang="ts">
  let { activeSection = "hero" }: { activeSection?: string } = $props();
</script>

<div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
  <div
    class="mesh-blob h-[900px] w-[900px] -left-[250px] -top-[250px]"
    style="background: radial-gradient(circle, var(--mesh-1) 0%, transparent 70%); opacity: {activeSection ===
      'hero' || activeSection === 'contact'
      ? 0.8
      : 0.3};"
  ></div>
  <div
    class="mesh-blob h-[750px] w-[750px] right-[5%] top-[35%]"
    style="background: radial-gradient(circle, var(--mesh-2) 0%, transparent 70%); opacity: {activeSection ===
      'projects' || activeSection === 'stack'
      ? 0.8
      : 0.3};"
  ></div>
  <div
    class="mesh-blob h-[600px] w-[600px] bottom-[5%] left-[25%]"
    style="background: radial-gradient(circle, var(--mesh-3) 0%, transparent 70%); opacity: {activeSection ===
      'about' || activeSection === 'stack'
      ? 0.8
      : 0.4};"
  ></div>
</div>
