import styled from "styled-components";
import { FaLinkedin, FaGithubSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";

import { Container, Content, Wrapper } from "../styles/utils";
import MeImg2 from "../assets/images/me2.jpg";

const HeroTextBlock = styled.div`
  line-height: 1.6;
  display: flex;
  font-size: 1.1rem;
  flex-direction: column;
  max-width: 550px;
`;

const HeroText = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.pText};
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
`;
const IconBlock = styled.div`
  margin-top: 1.5rem;
  display: flex;
  max-width: 5rem;
  justify-content: space-between;
`;

const TechBlock = styled.div`
  display: flex;
  align-items: center;
  max-width: 31rem;
  gap: 0.5rem;
  justify-content: space-between;
`;

const Hero = () => {
  return (
    <Wrapper>
      <Container direction="column">
        <Content gap="15rem" width="107rem">
          <HeroTextBlock>
            <h1
              style={{ fontSize: "3.8rem", lineHeight: 1.1, fontWeight: 600 }}
            >
              Front-End React Developer
            </h1>
            <HeroText>
              Hi! I'm Maksim Litvinov. A passionate Front-end React Developer
              based in Krasnodar, Russia. 📍
            </HeroText>
            <IconBlock>
              <FaLinkedin size={35} style={{ cursor: "pointer" }} />
              <FaGithubSquare size={35} style={{ cursor: "pointer" }} />
            </IconBlock>
          </HeroTextBlock>
          <HeroImg />
        </Content>
        <TechBlock>
          <p>Tech Stack</p>
          <FaHtml5 size={50} />
          <FaCss3Alt size={50} />
          <IoLogoJavascript size={50} />
          <SiTypescript size={50} />
          <FaReact size={50} />
          <TbBrandNextjs size={50} />
        </TechBlock>
      </Container>
    </Wrapper>
  );
};

export default Hero;
