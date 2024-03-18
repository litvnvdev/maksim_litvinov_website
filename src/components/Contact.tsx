import styled from "styled-components";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaTelegram, FaLinkedin } from "react-icons/fa";

import {
  Wrapper,
  Container,
  Content,
  SubTitle,
  Title,
  Text,
} from "../styles/styles";

const Contact = () => {
  return (
    <Wrapper m_pt="2rem" l_pt="9rem" sm_pt="1rem">
      <Container sm_pt="4rem">
        <Content direction="column">
          <SubTitle>Contact</SubTitle>
          <Title font_size="1.4rem" md_font="1.25rem" mt="3rem">
            Don't be shy! Hit me up! 👇
          </Title>
          <ContactSection.Container>
            <ContactSection.Content>
              <ContactSection.IconContainer>
                <FaLocationDot size={35} />
                <SubTitle font_size="1rem">Location</SubTitle>
              </ContactSection.IconContainer>
              <Text>Krasnodar, Russia</Text>
            </ContactSection.Content>

            <ContactSection.Content>
              <ContactSection.IconContainer>
                <IoIosMail size={35} />
                <SubTitle font_size="1rem">Mail</SubTitle>
              </ContactSection.IconContainer>
              <Text>
                <ContactSection.Link href="mailto:maximlitvinov.2611@gmail.com">
                  maximlitvinov.2611@gmail.com
                </ContactSection.Link>
              </Text>
            </ContactSection.Content>

            <ContactSection.Content>
              <ContactSection.IconContainer>
                <FaTelegram size={35} />
                <SubTitle font_size="1rem">Telegram</SubTitle>
              </ContactSection.IconContainer>
              <Text>
                <ContactSection.Link
                  href="https://t.me/maksimlitvinov_v"
                  target="_blank"
                >
                  @maksimlitvinov_v
                </ContactSection.Link>
              </Text>
            </ContactSection.Content>
            <ContactSection.Content>
              <ContactSection.IconContainer>
                <FaLinkedin size={35} />
                <SubTitle font_size="1rem">Linkedin</SubTitle>
              </ContactSection.IconContainer>
              <Text>@maksimlitvinov_v</Text>
            </ContactSection.Content>
          </ContactSection.Container>
        </Content>
      </Container>
    </Wrapper>
  );
};

const ContactSection = {
  Container: styled.div`
    max-width: 100rem;
    margin-top: 3rem;
    display: flex;
    gap: 3rem;

    @media (min-width: 490px) and (max-width: 1024px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
    @media (min-width: 56px) and (max-width: 490px) {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  IconContainer: styled.div`
    align-items: center;
    display: flex;
    gap: 1rem;
    padding-bottom: 0.5rem;
  `,
  Link: styled.a`
    transition: 0.3s;
    cursor: pointer;
    color: currentColor;
    text-decoration: none;

    &:hover {
      color: ${({theme})=>theme.link};
    }
  `,
};
export default Contact;
