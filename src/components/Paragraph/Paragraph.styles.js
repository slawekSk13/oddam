import styled from "styled-components";

const ParagraphStyled = styled.p`
  color: ${props => props.colors.fontColor};
  font-family: ${props => props.regular ? 'Merriweather' : 'inherit'};
  font-size: ${props => props.big ? '2rem' : '1rem'};
  font-weight: 300;
  text-align: center;
`;

export {ParagraphStyled}