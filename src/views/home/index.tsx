import styles from "./index.module.scss";
// React
import React from "react";
// Data
import { DESCRIPTION, NAME, SOCIAL } from "@data/intro";
// Components
import { Layout } from "@components/layout-default";
import { Banner } from "@react-ck/banner";
import { Icon, type IconProps } from "@components/icon";
import { Container } from "@react-ck/container";
import { Footer } from "@components/footer";
import { Nav } from "@components/nav";
import { Text } from "@react-ck/text";
import { EXPERIENCE } from "@data/experience";
import { Divider } from "@react-ck/divider";
import { PORTFOLIO, PORTFOLIO_DESCRIPTION } from "@data/portfolio";
import { Card } from "@react-ck/card";
import { GridColumn, GridContainer } from "@react-ck/grid";

export const HomeView = (): React.ReactElement => (
  <Layout>
    <Banner alt={NAME} src="./abel-lopes.jpeg">
      <Text type="huge">{NAME}</Text>

      <Text>{DESCRIPTION}</Text>

      {Object.values(SOCIAL).map(({ title, url, icon }) => (
        <Icon key={icon} name={icon as IconProps["name"]} title={title} url={url} />
      ))}
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
    <Container spacingY>
      <Text id="experience-tech-stack-and-skills" type="h2">
        Experience, Tech Stack & Skills
      </Text>
      {EXPERIENCE.map((i) => (
        <Text key={i.text} type={i.type} variation="inverted">
          {i.text}
        </Text>
      ))}
      <Divider />
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
    </Container>
    <Container spacingY>
      <Text id="projects" type="h2">
        Projects
      </Text>

      {PORTFOLIO_DESCRIPTION.map((item) => (
        <Text key={item}>{item}</Text>
      ))}

      <GridContainer>
        {PORTFOLIO.map((item) => (
          <GridColumn key={item.name} size={4}>
            <Card>
              <Text>{item.name}</Text>
              <Text>{item.image}</Text>
              <Text>{item.link}</Text>
              <Text>{item.text}</Text>
            </Card>
          </GridColumn>
        ))}
      </GridContainer>
    </Container>
    <Footer
      details={[
        <div key="social">
          {Object.values(SOCIAL).map(({ title, url, icon }) => (
            <Icon key={icon} name={icon as IconProps["name"]} title={title} url={url} />
          ))}
        </div>,
        <Text key="rights">All Rights Reserved @ {NAME}</Text>,
      ]}>
      <Text id="contact" type="h2">
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
