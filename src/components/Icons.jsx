// Line-art icons in the nautical style of the design system.
// All stroke-based, inherit `currentColor`, sized via CSS (width/height).

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const Anchor = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="4.5" r="1.8" />
    <path d="M12 6.3V21" />
    <path d="M7.5 9.5h9" />
    <path d="M4 14c0 4 3.6 7 8 7s8-3 8-7" />
    <path d="M4 14l-1.4 1.6M4 14l1.8 1M20 14l1.4 1.6M20 14l-1.8 1" />
  </svg>
)

export const Compass = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    <circle cx="12" cy="12" r="0.6" fill="currentColor" />
  </svg>
)

export const Ring = (p) => (
  <svg {...base} {...p}>
    <path d="M9 5.5l3-2 3 2-1.4 2.2h-3.2z" />
    <circle cx="12" cy="15" r="5.5" />
  </svg>
)

export const Heart = (p) => (
  <svg {...base} {...p}>
    <path d="M12 20s-7-4.4-7-9.6A3.9 3.9 0 0 1 12 7a3.9 3.9 0 0 1 7 3.4C19 15.6 12 20 12 20z" />
  </svg>
)

export const Home = (p) => (
  <svg {...base} {...p}>
    <path d="M4 11l8-6.5L20 11" />
    <path d="M6 9.6V20h12V9.6" />
    <path d="M10 20v-4.5h4V20" />
  </svg>
)

export const Church = (p) => (
  <svg {...base} {...p}>
    <path d="M12 2v4M10 4h4" />
    <path d="M12 6l-5 4v10h10V10z" />
    <path d="M7 20v-4a5 5 0 0 1 10 0v4" />
    <path d="M10.5 20v-3.2h3V20" />
  </svg>
)

export const Cocktail = (p) => (
  <svg {...base} {...p}>
    <path d="M5 6h14l-7 7z" />
    <path d="M12 13v6M9 20h6" />
    <circle cx="16.5" cy="4.5" r="1.4" />
    <path d="M16.5 5.9V8" />
  </svg>
)

export const Dinner = (p) => (
  <svg {...base} {...p}>
    <path d="M6 3v7M4 3v4a2 2 0 0 0 2 2M8 3v4a2 2 0 0 1-2 2M6 10v11" />
    <path d="M18 3c-1.6 0-2.4 2-2.4 5s.8 4 2.4 4" />
    <path d="M18 3v18" />
  </svg>
)

export const Music = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15 8.5l-4.5 1v6" />
    <circle cx="9" cy="15.5" r="1.6" />
    <circle cx="15" cy="14" r="1.6" />
    <path d="M15 8.5v5.5M10.5 9.5v6" />
  </svg>
)

export const Party = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" />
    <circle cx="12" cy="12" r="2.2" />
  </svg>
)

export const Guests = (p) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="8" r="2.4" />
    <circle cx="16" cy="8" r="2.4" />
    <path d="M4 19c0-2.6 1.8-4.4 4-4.4s4 1.8 4 4.4" />
    <path d="M12 19c0-2.6 1.8-4.4 4-4.4s4 1.8 4 4.4" />
  </svg>
)

export const Globe = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.4 3.8 5.5 3.8 9S14.5 18.6 12 21c-2.5-2.4-3.8-5.5-3.8-9S9.5 5.4 12 3z" />
  </svg>
)

export const Pin = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21c4-4.5 6-7.8 6-10.6A6 6 0 0 0 6 10.4C6 13.2 8 16.5 12 21z" />
    <circle cx="12" cy="10.2" r="2.2" />
  </svg>
)

export const Car = (p) => (
  <svg {...base} {...p}>
    <path d="M4 15l1.4-4.4A2 2 0 0 1 7.3 9h9.4a2 2 0 0 1 1.9 1.4L20 15" />
    <path d="M3 15h18v3h-2v-2H5v2H3z" />
    <circle cx="7.5" cy="18" r="1.3" />
    <circle cx="16.5" cy="18" r="1.3" />
  </svg>
)

export const Bed = (p) => (
  <svg {...base} {...p}>
    <path d="M3 8v11M3 12h18v7M21 12v-1a3 3 0 0 0-3-3h-6v4" />
    <circle cx="7.5" cy="10.5" r="1.6" />
  </svg>
)

export const Torii = (p) => (
  <svg {...base} {...p}>
    <path d="M3 6.5c3 1 15 1 18 0" />
    <path d="M3 9.5h18" />
    <path d="M6 7v13M18 7v13" />
    <path d="M8.5 9.5V20M15.5 9.5V20" />
  </svg>
)

export const Gift = (p) => (
  <svg {...base} {...p}>
    <path d="M4 10h16v10H4z" />
    <path d="M4 10l1-3h14l1 3M12 7v13" />
    <path d="M12 7C11 4.5 8.5 5 8.5 6.6S11 7 12 7zM12 7c1-2.5 3.5-2 3.5-.4S13 7 12 7z" />
  </svg>
)

export const Envelope = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="6" width="18" height="12" rx="1.4" />
    <path d="M3.5 7l8.5 6 8.5-6" />
  </svg>
)

export const Leaf = (p) => (
  <svg {...base} {...p}>
    <path d="M5 19C5 11 11 6 19 6c0 8-6 13-14 13z" />
    <path d="M5 19c3-4 6-7 10-9" />
  </svg>
)

export const Sun = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8" />
  </svg>
)

export const Sailboat = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3v11M12 4c3 1.5 4.6 4.4 5 8H12z" />
    <path d="M4 17h16l-2.2 3.5a2 2 0 0 1-1.7 1H7.9a2 2 0 0 1-1.7-1z" />
  </svg>
)

export const Clock = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
)

export const External = (p) => (
  <svg {...base} {...p}>
    <path d="M14 4h6v6M20 4l-8.5 8.5" />
    <path d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
  </svg>
)

export const Menu = (p) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const Close = (p) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

export const Plus = (p) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const Star = ({ filled = true, ...p }) => (
  <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={1.2} strokeLinejoin="round" {...p}>
    <path d="M12 3.5l2.6 5.3 5.9.8-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L4.5 9.6l5.9-.8z" />
  </svg>
)

export const iconMap = {
  anchor: Anchor,
  compass: Compass,
  ring: Ring,
  heart: Heart,
  home: Home,
  church: Church,
  cocktail: Cocktail,
  dinner: Dinner,
  music: Music,
  party: Party,
  guests: Guests,
  globe: Globe,
  pin: Pin,
  car: Car,
  bed: Bed,
  torii: Torii,
  gift: Gift,
  envelope: Envelope,
  leaf: Leaf,
  sun: Sun,
  sailboat: Sailboat,
  clock: Clock,
}
