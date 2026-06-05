<script lang="ts">
  import { PERSON, SKILLS } from '$shared/config';

  let mounted = $state(false);

  $effect(() => {
    mounted = true;
  });
</script>

<section class="relative z-10 min-h-screen flex">
  <div class="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20">
    <div
      class="max-w-2xl transition-all duration-1000"
      class:opacity-0={!mounted}
      class:translate-y-8={!mounted}
      class:opacity-100={mounted}
      class:translate-y-0={mounted}
    >
      <h1
        class="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
      >
        {PERSON.name}
      </h1>

      <p class="text-xl md:text-2xl text-white/50 mb-8 leading-relaxed">
        <em class="not-italic text-white/80">Crafting interfaces.</em>
        {' '}Building polished software and web experiences. Experimenting with
        magical details in user interfaces.
      </p>

      <p class="text-lg text-white/40 mb-12 leading-relaxed">
        In the past I've developed design systems, web applications, and
        interactive experience for startups and enterprises.
      </p>

      <div class="flex flex-wrap gap-3 mb-12">
        {#each SKILLS as skill, i}
          <span
            class="px-4 py-2 text-sm border border-white/10 rounded-full text-white/40
                        hover:text-white hover:border-white/40 transition-all duration-300 cursor-default"
            style:transition-delay="{300 + i * 100}ms"
            class:opacity-0={!mounted}
            class:translate-y-4={!mounted}
            class:opacity-100={mounted}
            class:translate-y-0={mounted}
          >
            {skill}
          </span>
        {/each}
      </div>

      <div
        class="inline-flex items-center gap-3 text-white/50 transition-all duration-300"
        style:transition-delay="800ms"
        class:opacity-0={!mounted}
        class:translate-y-4={!mounted}
        class:opacity-100={mounted}
        class:translate-y-0={mounted}
      >
        <span class="text-lg font-medium">Scroll down to contact</span>
        <svg
          class="w-5 h-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  </div>

  <div
    class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000"
    style:transition-delay="1000ms"
    class:opacity-0={!mounted}
    class:opacity-100={mounted}
  >
    <span class="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
    <div
      class="w-px h-8 bg-linear-to-b from-white/30 to-transparent animate-pulse"
    ></div>
  </div>
</section>
