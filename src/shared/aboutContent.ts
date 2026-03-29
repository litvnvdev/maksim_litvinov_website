import { COMPANY_LINKS } from "./consts";

export const ABOUT_SUMMARY_BULLETS: string[] = [
  "Frontend developer with 3 years of commercial experience, based in Krasnodar, Russia.",
  "Focused on SPAs, PWAs, and Telegram Mini Apps — performance, TypeScript, and maintainable architecture.",
  "Comfortable refactoring legacy code and building shared UI kits with Storybook.",
];

export type ExperienceEntry = {
  company: string;
  companyHref?: string;
  role: string;
  period: string;
  product?: string;
  highlights: string[];
};

export const ABOUT_EXPERIENCE: ExperienceEntry[] = [
  {
    company: "Engage Labs",
    companyHref: COMPANY_LINKS.ENGAGE_LABS,
    role: "Frontend Developer",
    period: "Nov 2024 — Mar 2026",
    product:
      "Appss — catalog of Telegram mini apps (search, recommendations, analytics).",
    highlights: [
      "React + TypeScript client: hooks, Context, reusable components; TanStack Query for server state.",
      "Tailwind CSS, styled-components, SCSS; Framer Motion for UI motion; internal UI kit (15+ components) + Storybook.",
      "React Hook Form + Zod; REST + Axios; Telegram WebApp API; analytics (Mixpanel, PostHog) with i18n and user properties.",
      "Performance work: React.memo, useMemo, useCallback; profiling with React DevTools; legacy migration to functional components.",
      "Scrum/Kanban in Jira; API contracts with backend; Figma handoff; Confluence documentation.",
    ],
  },
  {
    company: "Cobuildy",
    companyHref: COMPANY_LINKS.COBUILDY,
    role: "Frontend Developer",
    period: "Jun 2023 — Jul 2024",
    product:
      "Subscription platform for personalized real-estate investment deals (weekly digest, data room, due diligence).",
    highlights: [
      "Frontend rebuilt on React + TypeScript + Tailwind: routing, build, deployment.",
      "TanStack Query: caching, deduped requests, optimistic updates; Axios + typed API interfaces.",
      "WCAG 2.1 AA–oriented UI; i18n (ES / EN / PT + dynamic loading); skeleton loaders and real-time form validation.",
      "Collaboration on API design; close work with product on scope and estimates.",
    ],
  },
  {
    company: "Unicorn Witnesses",
    companyHref: undefined,
    role: "Frontend Developer",
    period: "Nov 2022 — Apr 2023",
    product: "Non-profit / ESG-oriented digital products.",
    highlights: [
      "Responsive UI with vanilla JavaScript, HTML, CSS; Lighthouse-driven performance (LCP, CLS, lazy-loading, code splitting).",
      "i18n via Notion API (5 languages, cached in localStorage); WCAG-oriented improvements (ARIA, keyboard).",
      "Tooling: Git, lint-staged, Husky, Biome.",
    ],
  },
];

export const ABOUT_WORKFLOW_BULLETS: string[] = [
  "Scrum / Kanban: story-point estimation, decomposition, risk awareness.",
  "Daily syncs with backend (OpenAPI-style contracts), QA, and design (Figma).",
  "English — B1 (Intermediate).",
];

export type TechCategory = {
  title: string;
  items: string[];
};

export const ABOUT_TECH_STACK: TechCategory[] = [
  {
    title: "Languages & markup",
    items: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "UI & frameworks",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "styled-components",
      "SCSS",
      "Framer Motion",
    ],
  },
  {
    title: "Data & API",
    items: ["REST", "Axios", "TanStack Query"],
  },
  {
    title: "Forms & validation",
    items: ["React Hook Form", "Zod"],
  },
  {
    title: "State & patterns",
    items: ["React Context", "Zustand"],
  },
  {
    title: "Tooling",
    items: ["Vite", "Storybook", "Git", "GitHub"],
  },
  {
    title: "Platforms & integrations",
    items: ["Telegram Mini Apps", "Telegram WebApp API", "Mixpanel", "PostHog"],
  },
];
