<script lang="ts">
  import { PERSON } from '$shared/config';
  import { contacts } from '$entities/contact';
  import ContactCard from '$shared/ui/ContactCard.svelte';

  let mounted = $state(false);

  $effect(() => {
    mounted = true;
  });
</script>

<section
  class="relative z-10 min-h-screen flex flex-col px-8 md:px-16 lg:px-24 py-20"
>
  <div class="flex-1 flex flex-col lg:flex-row gap-16 lg:gap-24">
    <div
      class="lg:w-1/3 transition-all duration-1000"
      class:opacity-0={!mounted}
      class:translate-y-8={!mounted}
      class:opacity-100={mounted}
      class:translate-y-0={mounted}
    >
      <h2
        class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
      >
        Contact
      </h2>
      <p class="text-lg text-white/40 leading-relaxed">
        I'm always open to new opportunities, collaborations, or just a friendly
        chat about web development.
      </p>

      <div class="flex items-center gap-3 mt-8 text-white/40">
        <svg
          class="w-4 h-4 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
        <span>{PERSON.location}</span>
      </div>

      <div class="flex items-center gap-3 mt-4">
        <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
        <span class="text-sm text-white/40">{PERSON.availability}</span>
      </div>
    </div>

    <div class="lg:w-2/3 flex flex-col gap-4">
      {#each contacts as contact, i}
        <ContactCard {contact} delay={200 + i * 100} visible={mounted} />
      {/each}
    </div>
  </div>

  <footer
    class="mt-auto pt-16 flex flex-center justify-between text-sm text-white/20 transition-all duration-1000"
    style:transition-delay="700ms"
    class:opacity-0={!mounted}
    class:opacity-100={mounted}
  >
    <p>{new Date().getFullYear()}</p>
  </footer>
</section>
