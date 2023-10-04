import { SOCIAL } from "./intro";

export const PORTFOLIO_DESCRIPTION = [
  `        Most of my contributions are private because they were done for the companies and clients I
  worked for and cannot be disclosed. The context of those contributions fully relates to the
  experience listed above. However, I have recently started contributing to the community, and
  I will continue to work on open projects.`,
  `Below, you can see some of the most recent and relevant works.`,
];

export const PORTFOLIO: Array<{
  name: string;
  text: string;
  link?: string;
  image: string;
}> = [
  {
    name: "Websocket Chat",
    text: "Real time chat application (back-end + front-end) that I've built to gain some knowledge on websocket implementation on both client & server sides. It uses React, Typescript, Zustand, Socket.io, Express and OpenAPI",
    image: "./portfolio-chat.png",
    link: "https://github.com/abelflopes/websocket-chat",
  },
  {
    name: "Spaceship Design System",
    text: "Design System for Spaceship, a product by Namecheap - I've participated as both developer and lead developer, being responsible for implementation, maintenance, alignment with product and design and project management",
    image: "./portfolio-spaceship.png",
    link: "https://www.spaceship.com",
  },
  {
    name: "Fullstack Mono to Microservices",
    text: "I've planned, defined and implemented the architecture and infrastructure for the front-end part of a technology conversion of a RoR monolith into microservices + microfrontends (runtime integrated)",
    image: "./portfolio-mono.jpeg",
    link: "https://www.linkedin.com/company/advicefront",
  },
  {
    name: "Live Support Chat Widget",
    text: "I've participated in the initial MVP implementation of the live support chat widget currently present in Namecheap's platform",
    image: "./portfolio-chat-nc.png",
    link: "https://www.namecheap.com/help-center/live-chat",
  },
  {
    name: "Cashflow Planning Microfrontend",
    text: "Lead the team and co-managed the project relative to implementation of a MFE application that provided the ability to dynamically collect client data and create cashflow plans",
    image: "./portfolio-cashflow.png",
  },
  {
    name: "Retail Store Gamification App",
    text: "Developed the first two major versions of the front-end relative to a gamification application for a big tech retail store, where its employees would accumulate points and acquire bonuses",
    image: "./portfolio-worten.jpeg",
  },
  {
    name: "Codepen Snippets",
    text: "Mostly outdated stuff, but it has some cool visual effects and small components",
    image: "./portfolio-codepen.png",
    link: SOCIAL.codepen.url,
  },
  {
    name: "NPM Packages",
    text: "I am currently exposing my knowledge and expertise by contributing to the dev community with the goal to help other developers not to struggle with the challenges I faced",
    image: "./portfolio-npm.png",
    link: SOCIAL.npm.url,
  },
  {
    name: "Open Source Projects",
    text: "Project templates, full-stack applications, utilities and shared configurations",
    image: "./portfolio-open-source.avif",
    link: "https://github.com/abelflopes?tab=repositories",
  },
];
