import { type IconProps } from "@components/icon";

export const NAME = "Abel Lopes";

export const DESCRIPTION = `Senior frontend engineer with
${Math.ceil((Date.now() - new Date("12-01-2014").getTime()) / 1000 / 60 / 60 / 24 / 30 / 12)}
years of professional experience, including building microfrontends, defining architecture, implementing infrastructure, team leadership, project management, developing mobile applications and highly interactive websites.`;

export const SOCIAL: Array<{
  title: string;
  url: string;
  icon: IconProps["name"];
}> = [];
