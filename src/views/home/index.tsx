import styles from "./index.module.scss";
// React
import React from "react";
// Data
import { DESCRIPTION, NAME, SOCIAL } from "@data/intro";
// Components
import { Layout } from "@components/layout-default";
import { Banner } from "@components/banner";
import { Icon, type IconProps } from "@components/icon";
import { Section } from "@components/section";
import { Footer } from "@components/footer";
import { Nav } from "@components/nav";
import { Text } from "@components/text";
import { EXPERIENCE } from "@data/experience";
import { Separator } from "@components/separator";
import { PORTFOLIO, PORTFOLIO_DESCRIPTION } from "@data/portfolio";
import { Card } from "@components/card";
import { Gallery } from "@components/gallery";

export const HomeView = (): React.ReactElement => (
  <Layout>
    <Banner
      heading={NAME}
      media={{
        alt: NAME,
        src: "./abel-lopes.jpeg",
      }}
      social={Object.values(SOCIAL).map(({ title, url, icon }) => (
        <Icon key={icon} name={icon as IconProps["name"]} title={title} url={url} />
      ))}>
      {DESCRIPTION}
    </Banner>
    <Nav
      sticky
      className={styles.nav}
      links={[
        {
          href: "#experience-tech-stack-and-skills",
          text: "Experience, Tech Stack & Skills",
        },
        {
          href: "#projects",
          text: "Projects",
        },
        {
          href: "#contact",
          text: "Contact",
        },
      ]}
    />
    <Section>
      <Text id="experience-tech-stack-and-skills" skin="h2">
        Experience, Tech Stack & Skills
      </Text>
      {EXPERIENCE.map((i) => (
        <Text key={i.text} skin={i.type}>
          {i.text}
        </Text>
      ))}
      <Separator />
      <Text>
        Check the complete experience history in my&nbsp;
        <a href={SOCIAL.linkedin.url} target="_blank" rel="noreferrer">
          {SOCIAL.linkedin.title}
        </a>
        &nbsp; and the complete set of skills in my &nbsp;
        <a href={SOCIAL.codersrank.url} target="_blank" rel="noreferrer">
          {SOCIAL.codersrank.title}
        </a>
        &nbsp; Profile.
      </Text>
    </Section>
    <Section colorScheme="inverted">
      <Text id="projects" skin="h2">
        Projects
      </Text>

      {PORTFOLIO_DESCRIPTION.map((item) => (
        <Text key={item}>{item}</Text>
      ))}

      <Gallery
        className={styles.gallery}
        items={PORTFOLIO.map((item) => (
          <Card key={item.name} heading={item.name} image={item.image} link={item.link}>
            <Text>{item.text}</Text>
          </Card>
        ))}
      />
    </Section>
    <Footer
      details={[
        <div key="social">
          {Object.values(SOCIAL).map(({ title, url, icon }) => (
            <Icon key={icon} name={icon as IconProps["name"]} title={title} url={url} />
          ))}
        </div>,
        <Text key="rights">All Rights Reserved @ {NAME}</Text>,
      ]}>
      <Text id="contact" skin="h2">
        Contact
      </Text>
      <Text>
        I&apos;m open to collaborate and take new projects, send me a message on &nbsp;
        <a href={SOCIAL.linkedin.url} target="_blank" rel="noreferrer">
          {SOCIAL.linkedin.title}
        </a>
        .
      </Text>
    </Footer>
  </Layout>
);
