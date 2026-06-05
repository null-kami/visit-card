<script lang="ts">
  import '../app.css';
  import { PERSON } from '$shared/config';

  let { children } = $props();
</script>

<svelte:head>
  <title>{PERSON.title}</title>
  <meta name="description" content={PERSON.description} />
</svelte:head>

{@render children()}
