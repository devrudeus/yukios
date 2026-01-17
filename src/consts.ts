import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Yuki OS Portfolio',
  description:
    'Personal portfolio and project showcase featuring Yuki OS Desktop Environment.',
  href: 'https://your-domain.vercel.app', // Update this with your actual Vercel domain
  author: 'Yuki OS Dev',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 4,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/yuki-os',
    label: 'Yuki-OS',
  },
  {
    href: '/about',
    label: 'About',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://twitter.com/i/communities/2012546612812525953',
    label: 'Twitter',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  'Pump.fun': 'lucide:rocket',
  RSS: 'lucide:rss',
}
