<script lang="ts">
  import type { Contact } from '$entities/contact';

  interface Props {
    contact: Contact;
    delay?: number;
    visible?: boolean;
  }

  let { contact, delay = 0, visible = true }: Props = $props();
</script>

<a
  href={contact.href}
  target={contact.external ? '_blank' : undefined}
  rel={contact.external ? 'noopener norefferer' : undefined}
  class="group relative flex items-center gap-6 p-6 rounded-2xl border border-white/10
        bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20
        transition-all duration-500 cursor-pointer"
  style:transition-delay="{delay}ms"
  class:opacity-0={!visible}
  class:translate-y-8={!visible}
  class:opacity-100={visible}
  class:translate-y-0={visible}
>
  <div
    class="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center
        group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 shrink-0"
  >
    {#if contact.icon === 'mail'}
      <svg
        class="w-6 h-6 text-white/60 group-hover:text-white transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        stroke-width="1.5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    {:else if contact.icon === 'github'}
      <svg
        class="w-6 h-6 text-white/60 group-hover:text-white transition-colors"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
        />
      </svg>
    {/if}
  </div>

  <div class="flex-1 min-w-0">
    <p class="text-sm text-white/30 mb-1">{contact.label}</p>
    <p
      class="text-lg text-white font-medium group-hover:underline underline-offset-4 truncate"
    >
      {contact.value}
    </p>
    <p class="text-sm text-white/30 mt-1">{contact.description}</p>
  </div>

  {#if contact.external}
    <svg
      class="w-4 h-4 text-white/30 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      stroke-width="1.5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  {/if}
</a>
