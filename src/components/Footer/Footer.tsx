import { FaTelegram, FaLinkedin, FaGithubSquare } from "react-icons/fa";

import { SOCIAL_LINKS } from "../../shared/consts";

import { Link, Row, Subtitle, Wrapper } from "./styles";

const Footer = () => {
  const currentYear = new Date();

  return (
    <Wrapper>
      <Row>
        <Subtitle>
          Copyright © {currentYear.getFullYear()}. All rights are reserved
        </Subtitle>
      </Row>
      <Row>
        <Link href={SOCIAL_LINKS.TELEGRAM} target="_blank">
          <FaTelegram size={35} />
        </Link>
        <Link href={SOCIAL_LINKS.LINKEDIN} target="_blank">
          <FaLinkedin size={35} />
        </Link>
        <Link href={SOCIAL_LINKS.GITHUB} target="_blank">
          <FaGithubSquare size={35} />
        </Link>
      </Row>
    </Wrapper>
  );
};

export default Footer;
