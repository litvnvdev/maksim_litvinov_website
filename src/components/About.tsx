import styled from "styled-components";

import { Wrapper, Container, Content, Text, SubTitle } from "../styles/utils";
import meAtWork from "../assets/images/meAtWork2.png";

const AboutContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  max-width: 100rem;
`;

const AboutImgBlock = styled.div`
  box-shadow: 5px 10px 25px 1px ${({theme})=> theme.shadow};
  background-position: 30% 40%;
  background-size: cover;
  background-image:  url(${meAtWork}), linear-gradient(242deg, rgba(54,53,55,1) 0%, rgba(249,249,249,1) 100%);
  border-radius: 5% 5% 50%;
  width: 25rem;
  height: 25rem;
`;

const AboutTextBlock = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  max-width: 40rem;
`;

const About = () => {
  return (
    <Wrapper>
      <Container>
        <Content direction="column">
          <SubTitle>About Me</SubTitle>
          <AboutContainer>
            <AboutImgBlock />

            <AboutTextBlock>
              <h4 style={{ fontSize: "1.1rem" }}>
                Front-end Developer based in Krasnodar, Russia 📍
              </h4>
              <Text>
                Hey, my name is Maksim, and I'm a Frontend Developer. My passion
                is to create and develop a clean UI/UX for users.
                <br />
                <br />
                My main stack currently is React/Next.js + Tailwind
                CSS/styled-components or SCSS and TypeScript.
              </Text>
            </AboutTextBlock>
          </AboutContainer>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default About;
