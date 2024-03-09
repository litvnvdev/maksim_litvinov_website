import styled from "styled-components";

type StyleProps = {
  direction?: string;
  gap?: string;
  width?: string;
};

export const Wrapper = styled.section<StyleProps>`
  position: relative;
  background: ${({ theme }) => theme.background};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  padding-bottom: 5rem;

  @media (min-width:56px) and (max-width:424px){
    height: 100vh;
  }
`;
export const Container = styled.div<StyleProps>`
  position: relative;
  display: flex;
  background: ${({ theme }) => theme.background};
  flex-direction: ${(props) => props.direction};
  max-width: 1536px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5rem;
`;
export const Content = styled.div<StyleProps>`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: ${(props) => props.width};
  position: relative;
  display: flex;
  background: ${({ theme }) => theme.background};
  flex-direction: ${(props) => props.direction};
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};

  @media (min-width: 768px) and (max-width: 1440px) {
    gap: 7rem;
  }
  @media (min-width: 768px) and (max-width: 980px) {
    gap: 1rem;
  }
  @media (min-width: 425px) and (max-width: 767px) {
    flex-direction: column-reverse;
    gap: 1rem;
  }
  @media (min-width: 56px) and (max-width: 424px) {
      flex-direction: column-reverse;
      gap: 0.5rem;
    }
  
`;
