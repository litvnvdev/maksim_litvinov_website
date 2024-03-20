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
    background: ${({ theme }) => theme.footerBg};
    color: ${({ theme }) => theme.footerText};
    padding: 3rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (min-width: 56px) and (max-width: 768px) {
      flex-wrap: wrap;
      gap: 2rem;
    }
  `,
  Container: styled.div`
    display: flex;
    justify-content: center;
    gap: 4rem;
    @media (min-width: 56px) and (max-width: 768px) {
      gap: 2rem;
    }
  `,
  Subtitle: styled.h3`
    font-size: 1.1rem;
    font-weight: 500;
    @media (min-width: 56px) and (max-width: 768px) {
      font-size: 0.95rem;
    }
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
