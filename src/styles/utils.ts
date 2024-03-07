import styled from "styled-components";

type StyleProps = {
  direction?: string;
  gap?: string;
  width?: string;
};

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
  padding-top: 15rem;
`;
export const Content = styled.div<StyleProps>`
  margin: 0 auto;
  max-width: ${(props) => props.width};
  position: relative;
  display: flex;
  background: ${({ theme }) => theme.background};
  flex-direction: ${(props) => props.direction};
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};
`;
