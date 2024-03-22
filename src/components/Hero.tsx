import styled, { keyframes } from "styled-components";
import { FaLinkedin, FaGithubSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";

import { Container, Content, Wrapper, Title, Text } from "../styles/styles";
import MeImg2 from "../assets/images/me2.jpg";
import Hand from "../assets/images/waving_hand.svg";

interface HeroProps {
  maxwidth?: string;
}

const borderAnimation = keyframes`
0%{
  border-top-left-radius: 65% 40%;
  border-top-right-radius: 85%;
  border-bottom-left-radius:70%;
  border-bottom-right-radius: 65% 40%;
}
50%{
    border-top-left-radius: 55%;
    border-top-right-radius: 65% 45%;
    border-bottom-left-radius: 65% 45%;
    border-bottom-right-radius: 55%;
}


  100%{
    border-top-left-radius: 65% 40%;
  border-top-right-radius: 85%;
  border-bottom-left-radius:70%;
  border-bottom-right-radius: 65% 40%;
  }
`;

const HeroTextBlock = styled.div`
  line-height: 1.6;
  display: flex;
  font-size: 1.1rem;
  flex-direction: column;
  max-width: 34.375rem;
  @media (min-width: 424px) and (max-width: 767px) {
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 56px) and (max-width: 585px) {
    margin: 0 auto;
    text-align: center;
  }
`;
const HeroTitleBlock = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  align-items: center;
  @media (min-width: 56px) and (max-width: 767px) {
    margin: 0 auto;
  }
`;
const HeroTitle = styled(Title)`
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 2rem;
  }
  @media (min-width: 56px) and (max-width: 585px) {
    text-align: center;
    font-size: 1.5rem;
  }
  @media (min-width: 375px) and (max-width: 424px) {
    text-align: center;
    font-size: 1.25rem;
  }
  @media (min-width: 56px) and (max-width: 375px) {
    width: 14rem;
    font-size: 1.25rem;
    line-height: 1.5;
  }
  
`;

const HeroImg = styled.div`
  background-image: url(${MeImg2});
  background-position: 40%;
  background-size: cover;
  background-repeat: no-repeat;
  border: 4px solid ${({ theme }) => theme.border};
  border-radius: 50%;
  width: 25rem;
  height: 25rem;

  animation-name: ${borderAnimation};
  animation-duration: 7s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  @media (min-width: 980px) and (max-width: 1440px) {
    width: 15rem;
    height: 15rem;
  }
  @media (min-width: 768px) and (max-width: 980px) {
    width: 10rem;
    height: 10rem;
  }
  @media (min-width: 425px) and (max-width: 767px) {
    width: 18rem;
    height: 18rem;
  }
  @media (min-width: 56px) and (max-width: 424px) {
    width: 10rem;
    height: 10rem;
  }
`;
const IconBlock = styled.div<HeroProps>`
  margin-top: 1.2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: ${(props) => props.maxwidth};
  justify-content: space-between;

  @media (min-width: 425px) and (max-width: 767px) {
    margin: 1.5rem auto;
  }
  @media (min-width: 56px) and (max-width: 424px) {
    margin: 1rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const TechBlock = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  max-width: 33rem;
  gap: 0.5rem;
  justify-content: space-between;

  @media (min-width: 425px) and (max-width: 767px) {
    margin: 1rem auto;
    flex-direction: column;
  }
  @media (min-width: 56px) and (max-width: 424px) {
    flex-direction: column;
  }
`;
const Link = styled.a`
  transition: 0.3s;
  cursor: pointer;
  color: currentColor;
  text-decoration: none;

  &:hover {
    color: #919191;
  }
`;
const WavingHand = styled.img`
  position: absolute;
  height: 4rem;
  width: 4rem;
  top: 4.25rem;
  right: 9.5rem;
  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 3.5rem;
    height:3.5rem;
    top: 3rem;
    right: 14rem;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 2.75rem;
    height: 2.75rem;
    top: -0.25rem;
    right: 3.5rem;
  }
  @media (min-width: 586px) and (max-width: 767px) {
    width: 2.5rem;
    height: 2.5rem;
    top: -0.15rem;
    right: -3rem;
  }
  @media (min-width: 425px) and (max-width: 585px) {
    width: 2rem;
    height: 2rem;
    top: -0.1rem;
    right: -2.55rem;
  }
  @media (min-width: 375px) and (max-width: 424px) {
    width: 1.75rem;
    height: 1.75rem;
    top: -0.1rem;
    right: -2rem;
  }
  @media (min-width: 56px) and (max-width: 375px) {
    top: 2.1rem;
    right: 2rem;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const Hero = () => {
  return (
    <Wrapper id="home" xl_pt="10rem" m_pt="5rem" l_pt="10rem" sm_pt="3rem">
      <Container direction="column" xl_pt="5rem">
        <Content gap="15rem" width="107rem" media_direction="column-reverse">
          <HeroTextBlock>
            <HeroTitleBlock>
              <HeroTitle>Front-End React Developer</HeroTitle>
              <WavingHand src={Hand} />
            </HeroTitleBlock>
            <Text mt="1rem" sm_text_align="center">
              Hi! I'm Maksim Litvinov. A passionate Front-end React Developer
              based in Krasnodar, Russia. 📍
            </Text>
            <IconBlock maxwidth="5rem">
              <Link>
                <FaLinkedin size={35} style={{ cursor: "pointer" }} />
              </Link>
              <Link href="https://github.com/litvnvdev" target="_blank">
                <FaGithubSquare size={35} style={{ cursor: "pointer" }} />
              </Link>
            </IconBlock>
          </HeroTextBlock>
          <HeroImg />
        </Content>
        <TechBlock>
          <Text border="2px solid" pr="1rem" pl="1rem" maxwidth="10rem">
            <strong>Tech Stack</strong>
          </Text>
          <IconBlock>
            <FaHtml5 size={50} />
            <FaCss3Alt size={50} />
            <IoLogoJavascript size={50} />
            <SiTypescript size={50} />
            <FaReact size={50} />
            <TbBrandNextjs size={50} />
          </IconBlock>
        </TechBlock>
      </Container>
    </Wrapper>
  );
};

export default Hero;
