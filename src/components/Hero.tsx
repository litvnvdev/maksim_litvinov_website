import styled from "styled-components";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

import { Container, Content } from "../styles/utils";

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;
`;
const HeroImg = styled.div`
  max-width: 500px;
  background: salmon;
`;

const Hero = () => {
  return (
    <section>
      <Container direction="column">
        <Content gap="15rem" width="107rem">
          <HeroText>
            <h1>Front-End React Developer</h1>
            <p>
              Hi! I'm Maksim Litvinov. A passionate Front-end React Developer
              based in Krasnodar, Russia. 📍
            </p>
            <div>
              <FaLinkedin size={35} /> <FaGithubSquare size={35} />
            </div>
          </HeroText>
          <HeroImg>Image Here</HeroImg>
        </Content>
      </Container>
    </section>
  );
};

export default Hero;
