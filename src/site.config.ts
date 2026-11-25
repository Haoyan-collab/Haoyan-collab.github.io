import type {
  FooterConfig,
  LinkConfig,
  ProfileConfig,
  PublicationConfig,
  SiteConfig,
} from "@/types"

export const SITE: SiteConfig = {
  title: "Haoyan (Kilian) Shi",
  description:
    "ML/AI Research Engineer working on medical vision, foundation models, and intelligent AI systems.",
  href: "https://haoyan-collab.github.io",
  author: "Haoyan (Kilian) Shi",
  dir: "ltr",
  defaultPageImage: "/img/social-preview.jpg",
  defaultPostImage: "/img/social-preview.jpg",

  locale: {
    lang: "en-US",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    },
  },

  // Table of contents depth shared by blog posts and project detail pages.
  tocMaxDepth: 3,

  blog: {
    featuredPostCount: 0,
    postsPerPage: 8,
    shareActions: ["x"],
  },

  home: {
    careerHighlightCount: 5,
    updateCount: 5,
    publicationCount: 3,
  },

  favicon: "/favicon.ico",
  prerender: true,
  npmCDN: "https://cdn.jsdelivr.net/npm",
}

export const PROFILE: ProfileConfig = {
  name: SITE.title,
  tagline: "Machine Learning | Computer Vision | AI Systems",
  email: "haoyans@andrew.cmu.edu",
  location: "Carnegie Mellon University, Pittsburgh, PA",
  phone: "(408) 590-0658",
  links: {
    cv: "/doc/Resume_Kilian.pdf",
    github: "https://github.com/Haoyan-collab",
    linkedin: "https://www.linkedin.com/in/kilian-shi",
  },
  highlightLinks: ["cv"],
  linksPlacement: {
    header: ["email", "github", "linkedin", "cv"],
    about: false,
    footer: false,
  },
}

export const NAV_LINKS: LinkConfig[] = [
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
]

export const NAVIGATION: LinkConfig[] = NAV_LINKS.map(({ href, label }) => ({
  href,
  label,
}))

export const PUB_CONFIG: PublicationConfig = {
  maxFirstAuthors: 6,
  maxLastAuthors: 1,
  highlightAuthor: {
    firstName: "Haoyan",
    lastName: "Shi",
    aliases: ["H. Shi"],
  },
  equalSymbols: {
    first: "*",
    second: "†",
    third: "‡",
    last: "§",
  },
}

export const FOOTER: FooterConfig = {
  credits: false,
  footerLinks: [],
}

if (import.meta.env.DEV && typeof window === "undefined") {
  const {
    FooterConfigSchema,
    ProfileConfigSchema,
    PublicationConfigSchema,
    SiteConfigSchema,
  } = await import("@/schemas")
  SiteConfigSchema.parse(SITE)
  ProfileConfigSchema.parse(PROFILE)
  FooterConfigSchema.parse(FOOTER)
  PublicationConfigSchema.parse(PUB_CONFIG)
}
