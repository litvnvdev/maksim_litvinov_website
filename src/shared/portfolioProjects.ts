import preview1 from "../assets/images/mock_img1.jpg";
import preview2 from "../assets/images/mock_img2.jpg";
import preview3 from "../assets/images/mock_img3.jpg";
import preview4 from "../assets/images/mock_img4.jpg";

/**
 * Portfolio project entry.
 *
 * - team: short line about squad composition (shown on card + modal).
 * - stack: tech labels as chips on the card; same list is repeated in the modal.
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
    previewSrc: preview1,
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
    previewSrc: preview2,
    link: "https://www.cobuildy.com/",
    linkLabel: "Cobuildy",
  },
  {
    id: "internal-ui",
    title: "Internal UI kit",
    summary: "15+ reusable components with Storybook docs for product teams.",
    description:
      "Shared library used across features: forms, data display, feedback, and layout primitives. Documented interaction states and accessibility patterns for faster feature delivery.",
    team: "Frontend chapter — consumers across multiple product squads",
    stack: [
      "React",
      "TypeScript",
      "Storybook",
      "styled-components",
      "Tailwind CSS",
      "Zod",
    ],
    previewSrc: preview3,
  },
  {
    id: "sample-gif",
    title: "Micro-interactions (example)",
    summary:
      "Placeholder card — swap preview for a GIF to show motion in the modal.",
    description:
      "If you add a GIF (e.g. screen recording), set modalSrc to that file for a looping demo inside the popup. Static screenshots work the same way — both use a regular img element.",
    team: "Replace with your squad size and roles",
    stack: ["Framer Motion", "React", "TypeScript", "GIF / video asset"],
    previewSrc: preview4,
  },
];
