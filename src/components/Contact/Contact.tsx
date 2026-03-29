import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaTelegram, FaLinkedin } from "react-icons/fa";

import { SubTitle, Title, Text } from "../../styles/styles";
import { SOCIAL_LINKS } from "../../shared/consts";

import {
  Column,
  ExtendContainer,
  ExtendContent,
  ExtendWrapper,
  Grid,
  IconContainer,
  Link,
} from "./styles";

const Contact = () => {
  return (
    <ExtendWrapper id="contact" m_pt="2rem" l_pt="9rem" sm_pt="1rem">
      <ExtendContainer sm_pt="4rem">
        <ExtendContent direction="column">
          <SubTitle>Contact</SubTitle>
          <Title font_size="1.4rem" md_font="1.25rem" mt="3rem">
            Don&apos;t be shy! Hit me up! 👇
          </Title>
          <Grid>
            <Column>
              <IconContainer>
                <FaLocationDot size={35} />
                <SubTitle font_size="1rem">Location</SubTitle>
              </IconContainer>
              <Text>Krasnodar, Russia</Text>
            </Column>

            <Column>
              <IconContainer>
                <IoIosMail size={35} />
                <SubTitle font_size="1rem">Mail</SubTitle>
              </IconContainer>
              <Text>
                <Link href="mailto:maximlitvinov.2611@gmail.com">
                  maximlitvinov.2611@gmail.com
                </Link>
              </Text>
            </Column>

            <Column>
              <IconContainer>
                <FaTelegram size={35} />
                <SubTitle font_size="1rem">Telegram</SubTitle>
              </IconContainer>
              <Text>
                <Link href={SOCIAL_LINKS.TELEGRAM} target="_blank">
                  @maksimlitvinov_v
                </Link>
              </Text>
            </Column>
            <Column>
              <IconContainer>
                <FaLinkedin size={35} />
                <SubTitle font_size="1rem">Linkedin</SubTitle>
              </IconContainer>
              <Text>
                <Link href={SOCIAL_LINKS.LINKEDIN} target="_blank">
                  @maximlitvinovin
                </Link>
              </Text>
            </Column>
          </Grid>
        </ExtendContent>
      </ExtendContainer>
    </ExtendWrapper>
  );
};

export default Contact;
