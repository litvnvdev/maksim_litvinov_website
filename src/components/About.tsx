import styled from "styled-components";

import { Wrapper, Container, Content, Text, SubTitle } from "../styles/styles";
import meAtWork from "../assets/images/meAtWork2.png"; //TODO: fix large size all images

const AboutContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 9rem;
  justify-content: space-between;
  max-width: 100rem;

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin: 1rem auto;
    gap: 5rem;
  }
  @media (min-width: 425px) and (max-width: 1023px) {
    margin: 0 auto;
    gap: 1rem;
    max-width: 70rem;
    flex-direction: column-reverse;
    align-items: center;
  }

  @media (min-width: 56px) and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    max-width: 50rem;
    margin: 1rem auto;
    gap:2rem;
  }
`;

const AboutImgBlock = styled.div`
  box-shadow: 5px 10px 25px 1px ${({ theme }) => theme.shadow};
  background-position: 30% 40%;
  background-size: cover;
  background-image: url(${meAtWork}),
    linear-gradient(242deg, rgba(54, 53, 55, 1) 0%, rgba(249, 249, 249, 1) 100%);
  border-radius: 5% 5% 50%;
  width: 25rem;
  height: 25rem;

  @media (min-width: 767px) and (max-width: 1440px) {
    width: 20rem;
    height: 20rem;
  }
  @media (min-width: 375px) and (max-width: 768px) {
    height: 18rem;
    width: 18rem;
  }
  @media (min-width: 65px) and (max-width: 374px) {
    height: 15rem;
    width: 15rem;
  }
`;

const AboutTextBlock = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  max-width: 40rem;
  @media (min-width: 1024px) and (max-width: 1440px) {
    max-width: 30rem;
  }
  @media (min-width: 767px) and (max-width: 1023px) {
    gap: 0.7rem;
    margin: 3rem auto;
    max-width: 41rem;
    text-align: justify;
    h4 {
      text-align: center;
    }
  }
  @media (min-width: 375px) and (max-width: 768px) {
    max-width: 30rem;
    gap: 1.5rem;
    text-align: justify;
    h4 {
      text-align: center;
    }
  }
`;

const About = () => {
  return (
    <Wrapper m_pt="2rem" l_pt="9rem" sm_pt="1rem">
      <Container sm_pt="4rem">
        <Content direction="column">
          <SubTitle>About Me</SubTitle>
          <AboutContainer>
            <AboutImgBlock />

            <AboutTextBlock>
              <h4 style={{ fontSize: "1.1rem" }}>
                Front-end Developer based in Krasnodar, Russia 📍
              </h4>
              <Text sm_text_align='justify'>
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
