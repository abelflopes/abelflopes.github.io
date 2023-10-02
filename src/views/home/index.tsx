// React
import React from "react";
// Data
import { DESCRIPTION, NAME } from "@data/intro";
// Components
import { Layout } from "@components/layout-default";
import { Banner } from "@components/banner";
import { Icon } from "@components/icon";
import { Section } from "@components/section";

export const HomeView = (): React.ReactElement => (
  <Layout>
    <Banner
      heading={NAME}
      media={{
        alt: NAME,
        src: "./abel-lopes.jpeg",
      }}
      social={[
        /* eslint-disable react/jsx-key */
        <Icon title="LinkedIn" name="SiLinkedin" url="https://www.linkedin.com/in/abelflopes/" />,
        <Icon
          title="CodersRank"
          name="SiCodersrank"
          url="https://profile.codersrank.io/user/abelflopes/"
        />,
        <Icon title="Npm" name="SiNpm" url="https://www.npmjs.com/~abelflopes" />,
        <Icon title="GitHub" name="SiGithub" url="https://github.com/abelflopes" />,
        /* eslint-enable react/jsx-key */
      ]}>
      {DESCRIPTION}
    </Banner>
    <Section>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, necessitatibus vel quam
      dolore nam quisquam, quos qui asperiores numquam ipsa aperiam, quibusdam nostrum neque quidem
      pariatur quia tenetur ut magni vitae adipisci blanditiis excepturi error quas. Nobis mollitia
      excepturi dicta doloremque eius nemo consequuntur est deleniti ad eligendi, nihil illo
      assumenda laborum quam? Ad alias nemo quo laudantium quidem nisi autem nihil corrupti sequi
      voluptate aliquam culpa iure eligendi eius, odio beatae! Autem velit et at ad, recusandae
      animi eaque fugit vel laborum neque aperiam esse alias veritatis unde, incidunt error, quidem
      deleniti. Repellendus, earum quod perspiciatis excepturi quos cumque!
    </Section>
  </Layout>
);
