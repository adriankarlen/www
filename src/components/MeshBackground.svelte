<script lang="ts">
  let { activeSection = "hero" }: { activeSection?: string } = $props();
</script>

<div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
  <div
    class="mesh-blob h-[600px] w-[600px] -left-[100px] -top-[100px]"
    style="background: var(--mesh-1); opacity: {activeSection === 'hero' ||
    activeSection === 'contact'
      ? 0.8
      : 0.3};"
  ></div>
  <div
    class="mesh-blob h-[500px] w-[500px] right-[10%] top-[40%]"
    style="background: var(--mesh-2); opacity: {activeSection === 'projects' ||
    activeSection === 'stack'
      ? 0.8
      : 0.3};"
  ></div>
  <div
    class="mesh-blob h-[400px] w-[400px] bottom-[10%] left-[30%]"
    style="background: var(--mesh-3); opacity: {activeSection === 'about' ||
    activeSection === 'stack'
      ? 0.8
      : 0.4};"
  ></div>
</div>
