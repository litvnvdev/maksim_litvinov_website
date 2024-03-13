import styled from "styled-components";

type StyleProps = {
  direction?: string;
  gap?: string;
  width?: string;
  mt?: string;
  pr?: string;
  pl?: string;
  maxwidth?: string;
  border?: string;
  xl_pt?:string;
  l_pt?:string;
  m_pt?:string;
  sm_pt?:string;
  media_pb?:string;
  media_direction?:string;
  sm_text_align?:string;
  md_text_align?:string;
  margin_top_center?:string;
  align_items?:string;
  sm_padding?:string;
};

export const Wrapper = styled.section<StyleProps>`
  position: relative;
  background: ${({ theme }) => theme.background};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 10rem;
  padding-bottom: 6rem;
  
  
  
  @media (min-width:768px) and (max-width:980px){
    padding-top:${(props)=>props.l_pt} ;
  }
  @media (min-width: 425px) and (max-width:767px){
    padding-top: ${(props)=>props.m_pt};
  }
  @media (min-width: 56px) and (max-width:424px){
    padding-top: ${(props)=>props.sm_pt};
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
  
  @media (min-width: 56px) and (max-width:1440px){
    padding-top: ${(props)=>props.sm_pt};
  }

`;
export const Content = styled.div<StyleProps>`
  margin: ${(props)=>props.margin_top_center || '0 auto' }  ;
  padding: 0 1rem;
  max-width: ${(props) => props.width};
  position: relative;
  display: flex;
  background: ${({ theme }) => theme.background};
  flex-direction: ${(props) => props.direction};
  justify-content: center;
  align-items: ${(props)=>props.align_items || 'center'};
  gap: ${(props) => props.gap};

  @media (min-width: 768px) and (max-width: 1440px) {
    gap: 3rem;
  }
  @media (min-width: 768px) and (max-width: 980px) {
    gap: 1rem;
  }
  @media (min-width: 425px) and (max-width: 767px) {
    flex-direction: ${(props)=>props.media_direction};
    gap: 1rem;
  }
  @media (min-width: 56px) and (max-width: 424px) {
    flex-direction: ${(props)=>props.media_direction};
    gap: 0.5rem;
    padding: ${(props)=>props.sm_padding};
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 3.8rem;
  line-height: 1.1;

  @media (min-width: 980px) and (max-width: 1440px) {
    font-size: 3rem;
  }
  @media (min-width: 768px) and (max-width: 980px) {
    font-size: 2.1rem;
  }
  @media (min-width: 425px) and (max-width: 767px) {
    text-align: center;
    font-size: 2rem;
  }
  @media (min-width: 56px) and (max-width: 424px) {
    text-align: center;
    font-size: 1.2rem;
  }
`;
export const SubTitle = styled.h3`
font-size: 1.4rem;
font-weight: 600;
`
export const Text = styled.p<StyleProps>`
  max-width: ${(props) => props.maxwidth};
  margin-top: ${(props) => props.mt};
  color: ${({ theme }) => theme.pText};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  border-right: ${(props) => props.border} ${({ theme }) => theme.pText};

  @media (min-width: 980px) and (max-width: 1440px) {
    font-size: 1rem;
  }
  @media (min-width: 768px) and (max-width: 980px) {
    font-size: 1rem;
  }
  @media (min-width: 375px) and (max-width: 767px) {
    text-align: ${(props)=>props.md_text_align};
    font-size: 1rem;
    border-bottom: ${(props) => props.border};
    border-right: none;
  }

  @media (min-width: 56px) and (max-width: 424px) {
    border-bottom: ${(props) => props.border};
    border-right: none;
    font-size: 0.9rem;
    text-align: ${(props)=>props.sm_text_align};
  }
`;
