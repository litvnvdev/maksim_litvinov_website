// import preview3 from "../assets/images/mock_img3.jpg";
// import preview4 from "../assets/images/mock_img4.jpg";
import AppssPreviewImg from "../assets/images/projects/appss_project_preview.jpg";
import CobuildyPreviewImg from "../assets/images/projects/cobuildy_project_preview.jpg";

/**
 * Portfolio project entry.
 *
 * - previewSrc: static image on the card (JPG/WebP; keeps LCP light).
 * - modalSrc: optional larger screenshot in the modal only; otherwise preview is reused.
 * - team / stack: shown on card + modal.
 */
export type PortfolioProject = {
  id: string;
  title: string;
  summary: string;
  description: string;
  team: string;
  stack: string[];
  previewSrc: string;
  modalSrc?: string;
  link?: string;
  linkLabel?: string;
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "appss",
    title: "Appss (catalog)",
    summary:
      "Telegram mini-apps discovery — search, recommendations, and analytics.",
    description:
      "World’s largest Mini-App catalog inside Telegram, complete with AI-powered search, personalized recommendations, and real-time analytics. From MVP to full launch, our team handled UX/UI design, backend architecture, and user acquisition.",
    team: "5 backend · 4 frontend · 4 QA — design, analytics, and product in the loop",
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
