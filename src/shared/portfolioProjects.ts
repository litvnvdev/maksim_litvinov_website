// import preview3 from "../assets/images/mock_img3.jpg";
// import preview4 from "../assets/images/mock_img4.jpg";
import AppssPreviewImg from "../assets/images/projects/appss_project_preview.jpg";
import CobuildyPreviewImg from "../assets/images/projects/cobuildy_project_preview.jpg";
import AiLandingPipelinePreviewImg from "../assets/images/projects/ai-landing-pipeline.svg";

/**
 * Portfolio project entry.
 *
 * - previewSrc: static image on the card (JPG/WebP; keeps LCP light).
 * - modalSrc: optional larger screenshot in the modal only; otherwise preview is reused.
 * - team: shown in the modal, when present.
 * - role / contribution: shown on the card in place of team.
 * - stack: shown on card + modal.
 */
export type PortfolioProject = {
  id: string;
  title: string;
  summary: string;
  description: string;
  team?: string;
  role?: string;
  contribution?: string[];
  stack: string[];
  previewSrc: string;
  modalSrc?: string;
  link?: string;
  linkLabel?: string;
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "ai-landing-pipeline",
    title: "AI-assisted landing pipeline (NDA)",
    summary:
      "Python tool that validates input data and assembles production-ready landing pages, with automated pre-launch QA.",
    description:
      "In-house affiliate marketing team. Owned the tooling that turns campaign input into a production-ready landing page, plus the technical quality of what ships — adaptive layout, load speed, Open Graph, Schema.org and Core Web Vitals.",
    role: "Frontend developer · landing build tooling, Mar 2026 — Aug 2026",
    contribution: [
      "Built a Python tool that collects input data, validates it and assembles a production-ready landing page, cutting page preparation time roughly 3×.",
      "Added an automated pre-launch check that catches and fixes common markup, Open Graph and Schema.org issues before release.",
      "Used LLM tooling (Cursor, Claude) for boilerplate, refactoring and content structure, with a manual review gate on everything that ships.",
    ],
    stack: ["Python", "JavaScript", "HTML", "SCSS", "Core Web Vitals", "Keitaro"],
    previewSrc: AiLandingPipelinePreviewImg,
  },
  {
    id: "appss",
    title: "Appss (catalog)",
    summary:
      "Telegram mini-apps discovery — search, recommendations, and analytics.",
    description:
      "World’s largest Mini-App catalog inside Telegram, complete with AI-powered search, personalized recommendations, and real-time analytics. From MVP to full launch, our team handled UX/UI design, backend architecture, and user acquisition.",
    team: "5 backend · 4 frontend · 4 QA — design, analytics, and product in the loop",
    role: "Frontend developer (1 of 4), Nov 2024 — Mar 2026",
    contribution: [
      "Rebuilt the admin and moderation interface — decomposed oversized components, added drag-and-drop and typed forms. Median moderation time dropped from ~2 min to ~30 s.",
      "Cut redundant re-renders across key screens, improving interaction response by 200–300 ms.",
      "Built the internal UI kit (15+ components) with Storybook docs, adopted across the frontend team.",
      "Shipped Telegram Mini Apps including game mechanics — WebApp API, dark theme, native gestures.",
      "Instrumented Mixpanel and PostHog with UTM, region and cohort segmentation, unblocking A/B testing for the product team.",
    ],
    stack: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Tailwind CSS",
      "styled-components",
      "Storybook",
      "Framer Motion",
      "REST",
      "Telegram WebApp",
      "Mixpanel / PostHog",
    ],
    previewSrc: AppssPreviewImg,
    link: "https://engagelabs.org/",
    linkLabel: "Engage Labs — projects",
  },
  {
    id: "cobuildy",
    title: "Investment digest platform",
    summary:
      "Subscription product for personalized real-estate deal digests and data room flows.",
    description:
      "Rebuild on React + TypeScript + Tailwind: TanStack Query for data, WCAG-minded UI, i18n, skeleton loaders, and optimistic form updates. Close collaboration with backend on API contracts and with product on scope.",
    team: "4 backend · 3 frontend · 2 QA · 1 designer — product-led delivery",
    role: "Frontend developer (1 of 3), Jun 2023 — Jul 2024",
    contribution: [
      "Drove the migration to React + TypeScript; typed 50+ API endpoints.",
      "Cut initial load from 3.2s to 1.8s through caching, request deduplication and lazy loading.",
      "Launched i18n across 4 languages with dynamic translation loading and sub-100ms switching — international reach grew 35%.",
      "Reworked authentication: refresh-token rotation and error recovery.",
      "Instrumented Core Web Vitals in production via web-vitals + PostHog, surfacing and fixing 3 bottlenecks invisible in local development.",
      "Set up GitHub Actions for CI checks and deploys.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Axios",
      "React Hook Form",
      "i18n",
      "Vite",
    ],
    previewSrc: CobuildyPreviewImg,
    link: "https://www.cobuildy.com/",
    linkLabel: "Cobuildy",
  },
  // {
  //   id: "internal-ui",
  //   title: "Internal UI kit",
  //   summary: "15+ reusable components with Storybook docs for product teams.",
  //   description:
  //     "Shared library used across features: forms, data display, feedback, and layout primitives. Documented interaction states and accessibility patterns for faster feature delivery.",
  //   team: "Frontend chapter — consumers across multiple product squads",
  //   stack: [
  //     "React",
  //     "TypeScript",
  //     "Storybook",
  //     "styled-components",
  //     "Tailwind CSS",
  //     "Zod",
  //   ],
  //   previewSrc: preview3,
  // },
  // {
  //   id: "sample-placeholder",
  //   title: "Micro-interactions (example)",
  //   summary:
  //     "Placeholder card — replace preview and copy with your own project.",
  //   description:
  //     "Use a sharp screenshot as previewSrc. Optionally set modalSrc to a larger still if the modal should show more detail than the card.",
  //   team: "Replace with your squad size and roles",
  //   stack: ["Framer Motion", "React", "TypeScript"],
  //   previewSrc: preview4,
  // },
];
