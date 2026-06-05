<script lang="ts">
  import { onMount } from 'svelte';
  import { activeSection } from '$shared/lib';
  import { Starfall } from '$features/starfall';
  import { SocialLinks } from '$features/social-links';
  import { ScrollNav } from '$features/scroll-nav';
  import { HomeSection } from '$widgets/home-section';
  import { ContactSection } from '$widgets/contacts-section';
  import type { Section } from '$shared/config';

  let container: HTMLElement;
  let sections: HTMLElement[] = [];

  function scrollToSection(section: Section) {
    const idx = section === 'home' ? 0 : 1;
    sections[idx]?.scrollIntoView({ behavior: 'smooth' });
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section') as Section;
            if (id) activeSection.set(id);
          }
        }
      },
      { threshold: 0.5 }
    );

    sections = Array.from(container.querySelectorAll('[data-section]'));
    sections.forEach((e) => observer.observe(e));

    return () => observer.disconnect();
  });
</script>

<main
  bind:this={container}
  class="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory"
>
  <Starfall />
  <SocialLinks />
  <ScrollNav onNavigate={scrollToSection} />

  <div data-section="home" class="snap-start">
    <HomeSection />
  </div>

  <div data-section="contacts" class="snap-start">
    <ContactSection />
  </div>
</main>
