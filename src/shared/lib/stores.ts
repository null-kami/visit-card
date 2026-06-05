import { writable } from 'svelte/store';
import type { Section } from '$shared/config';

export const activeSection = writable<Section>('home');
