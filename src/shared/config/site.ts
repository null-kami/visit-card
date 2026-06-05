export const PERSON = {
  name: 'null-kami',
  title: 'null-kami | Frontend Portfolio',
  description:
    'Frontend developer specializing in React, TypeScript and modern web technologies.',
  location: 'Norway, Molde',
  availability: 'Available for freelance',
  links: {
    github: 'https://github.com/null-kami',
    email: 'null.dev.k@proton.me',
  },
};

export const SKILLS = [
  'React',
  'TypeScript',
  'Next.js',
  'Svelte',
  'Tailwind CSS',
];

export const SECTIONS = ['home', 'contacts'];
export type Section = (typeof SECTIONS)[number];
