import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiReactquery,
  SiVite,
} from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";

import { Container, Content, Wrapper, Text } from "../../styles/styles";
import Hand from "../../assets/images/waving_hand.svg";
import { SOCIAL_LINKS } from "../../shared/consts";

import {
  HeroImg,
  HeroTextBlock,
  HeroTitle,
  HeroTitleBlock,
  IconBlock,
  SocialLink,
  TechBlock,
  WavingHand,
} from "./styles";

const Hero = () => {
  return (
    <Wrapper id="home" xl_pt="10rem" m_pt="5rem" l_pt="10rem" sm_pt="3rem">
      <Container direction="column" xl_pt="5rem">
        <Content gap="15rem" width="107rem" media_direction="column-reverse">
          <HeroTextBlock>
            <HeroTitleBlock>
              <HeroTitle>Frontend Developer</HeroTitle>
              <WavingHand src={Hand} alt="" />
            </HeroTitleBlock>
            <Text mt="1rem" sm_text_align="center">
              Hi! I&apos;m Maksim Litvinov — a frontend developer with 3 years
              of commercial experience, based in 📍 Krasnodar, Russia. I build
              SPAs, PWAs, and Telegram Mini Apps with React and TypeScript.
            </Text>
            <IconBlock maxwidth="5rem">
              <SocialLink href={SOCIAL_LINKS.LINKEDIN} target="_blank">
                <FaLinkedin size={35} style={{ cursor: "pointer" }} />
              </SocialLink>
              <SocialLink href={SOCIAL_LINKS.GITHUB} target="_blank">
                <FaGithubSquare size={35} style={{ cursor: "pointer" }} />
              </SocialLink>
            </IconBlock>
          </HeroTextBlock>
          <HeroImg />
        </Content>
        <TechBlock>
          <Text border="2px solid" pr="1rem" pl="1rem" maxwidth="10rem">
            <strong>Tech Stack</strong>
          </Text>
          <IconBlock>
            <FaReact size={50} title="React" />
            <SiTypescript size={50} title="TypeScript" />
            <TbBrandNextjs size={50} title="Next.js" />
            <SiTailwindcss size={50} title="Tailwind CSS" />
            <SiReactquery size={50} title="TanStack Query" />
            <SiVite size={50} title="Vite" />
          </IconBlock>
        </TechBlock>
      </Container>
    </Wrapper>
  );
};

export default Hero;
