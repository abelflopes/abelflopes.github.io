import { SOCIAL } from "./intro";

export const PORTFOLIO: Array<{
  name: string;
  text: string;
  link?: string;
  image: string;
}> = [
  {
    name: "Spaceship Design System",
    text: "Design System for Spaceship, a product by Namecheap",
    image: "./portfolio-spaceship.png",
    link: "https://www.spaceship.com",
  },
  {
    name: "NPM Packages",
    text: "Multiple Npm packages",
    image: "./portfolio-npm.png",
    link: SOCIAL.npm.url,
  },
  {
    name: "Codepen Snippets",
    text: "Multiple Codepen snippet",
    image: "./portfolio-codepen.png",
    link: SOCIAL.codepen.url,
  },
];
