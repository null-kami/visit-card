<script lang="ts">
  import { activeSection } from '$shared/lib';
  import { SECTIONS, type Section } from '$shared/config';

  interface Props {
    onNavigate: (section: Section) => void;
  }

  let { onNavigate }: Props = $props();
</script>

<nav
  class="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-3 z-20"
>
  {#each SECTIONS as section}
    <button
      onclick={() => onNavigate(section)}
      aria-label="Go to {section} section"
      class="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer
            {$activeSection === section
        ? 'bg-white scale-125'
        : 'bg-white/30 hover:bg-white/60'}"
    ></button>
  {/each}
</nav>
