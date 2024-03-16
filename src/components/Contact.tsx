import styled from "styled-components";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";

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
          <Title font_size="1.4rem" mt="3rem">
            Don't be shy! Hit me up! 👇
          </Title>
          <ContactSection.Container>
            <ContactSection.Content>
              <ContactSection.IconContainer>
                <FaLocationDot size={35} />
                <SubTitle>Location</SubTitle>
              </ContactSection.IconContainer>
              <Text>Krasnodar, Russia</Text>
            </ContactSection.Content>

            <ContactSection.Content>
              <ContactSection.IconContainer>
                <IoIosMail size={35} />
                <SubTitle>Mail</SubTitle>
              </ContactSection.IconContainer>
              <Text>maximlitvinov.2611@gmail.com</Text>
            </ContactSection.Content>

            <ContactSection.Content>
              <ContactSection.IconContainer>
                <FaTelegram size={35} />
                <SubTitle>Telegram</SubTitle>
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
    margin-top: 3rem;
    display: flex;
    gap: 3rem;
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
};
export default Contact;
