import styled, { keyframes } from "styled-components";
import { FaLinkedin, FaGithubSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";

import { Container, Content, Wrapper } from "../styles/utils";
import MeImg2 from "../assets/images/me2.jpg";

interface HeroProps {
  mt?: string;
  pr?: string;
  pl?: string;
  maxwidth?: string;
  border?: string;
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
  max-width: 550px;
  @media (min-width: 768px) and (max-width: 980px) {
    max-width: 500px;
  }
`;
const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 3.8rem;
  line-height: 1.1;

  @media (min-width: 980px) and (max-width: 1440px) {
    font-size: 3rem;
  }
  @media (min-width: 768px) and (max-width: 980px) {
    font-size: 2.1rem;
  }
  @media (min-width: 425px) and (max-width: 767px) {
    text-align: center;
    font-size: 2rem;
  }
  @media (min-width: 56px) and (max-width: 424px) {
    text-align: center;
    font-size: 1.2rem;
  }
`;
const HeroText = styled.p<HeroProps>`
  max-width: ${(props) => props.maxwidth};
  margin-top: ${(props) => props.mt};
  color: ${({ theme }) => theme.pText};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  border-right: ${(props) => props.border} ${({ theme }) => theme.pText};

  @media (min-width: 980px) and (max-width: 1440px) {
    font-size: 1rem;
  }
  @media (min-width: 768px) and (max-width: 980px) {
    font-size: 1rem;
  }
  @media (min-width: 425px) and (max-width: 767px) {
    text-align: center;
    font-size: 1.1rem;
    border-bottom: ${(props) => props.border};
    border-right: none;
  }

  @media (min-width: 56px) and (max-width: 424px) {
    border-bottom: ${(props) => props.border};
    border-right: none;
    font-size: 0.9rem;
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

const Hero = () => {
  return (
    <Wrapper>
      <Container direction="column">
        <Content gap="15rem" width="107rem">
          <HeroTextBlock>
            <HeroTitle>Front-End React Developer</HeroTitle>
            <HeroText mt="1rem">
              Hi! I'm Maksim Litvinov. A passionate Front-end React Developer
              based in Krasnodar, Russia. 📍
            </HeroText>
            <IconBlock maxwidth="5rem">
              <FaLinkedin size={35} style={{ cursor: "pointer" }} />
              <FaGithubSquare size={35} style={{ cursor: "pointer" }} />
            </IconBlock>
          </HeroTextBlock>
          <HeroImg />
        </Content>
        <TechBlock>
          <HeroText border="2px solid" pr="1rem" pl="1rem" maxwidth="10rem">
            <strong>Tech Stack</strong>
          </HeroText>
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
