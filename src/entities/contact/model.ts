export interface Contact {
  label: string;
  value: string;
  href: string;
  description: string;
  external?: boolean;
  icon: 'mail' | 'github';
}

export const contacts: Contact[] = [
  {
    label: 'Email',
    value: 'null.dev.k@proton.me',
    href: 'mailto:null.dev.k@proton.me',
    description: 'Best way to reach me',
    icon: 'mail',
  },
  {
    label: 'GitHub',
    value: '@null-kami',
    href: 'https://github.com/null-kami',
    description: 'Check out my code',
    icon: 'github',
  },
];
