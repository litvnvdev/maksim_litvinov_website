import styled from "styled-components";
import { FaTelegram, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  const curentYear = new Date();

  return (
    <FooterSection.Wrapper>
      <FooterSection.Container>
        <FooterSection.Subtitle>
          Copyright © {curentYear.getFullYear()}. All rights are reserved
        </FooterSection.Subtitle>
      </FooterSection.Container>
      <FooterSection.Container>
        <FooterSection.Link
          href="https://t.me/maksimlitvinov_v"
          target="_blank"
        >
          <FaTelegram size={35} />
        </FooterSection.Link>
        <FooterSection.Link href="#" target="_blank">
          <FaLinkedin size={35} />
        </FooterSection.Link>
        <FooterSection.Link href="https://github.com/litvnvdev" target="_blank">
          <FaGithubSquare size={35} />
        </FooterSection.Link>
      </FooterSection.Container>
    </FooterSection.Wrapper>
  );
};

const FooterSection = {
  Wrapper: styled.footer`
    padding: 3rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,
  Container: styled.div`
    color: #fff;
    display: flex;
    justify-content: center;
    gap: 5rem;
  `,
  Subtitle: styled.h3`
    font-size: 1.1rem;
    font-weight: 500;
  `,
  Link: styled.a`
    transition: 0.3s;
    cursor: pointer;
    color: currentColor;
    text-decoration: none;

    &:hover {
      color: #919191;
    }
  `,
};

export default Footer;
