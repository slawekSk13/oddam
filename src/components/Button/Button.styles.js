import styled from "styled-components";

const ButtonStyled = styled.button`
  width: ${props => props.width ? props.width : (props.big ? '35%' : 'auto')};
  font-weight: 300;
  font-size: ${props => props.big ? "2.5rem" : (props.small ? "1rem" : (props.medium ? "1.8rem" : "1.3rem"))};
  text-transform: ${props => props.big ? "uppercase" : "none"};
  border: ${props => (props.big || props.border) ? `1px solid ${props.colors.fontColor}` : `1px solid transparent`};
  background-color: transparent;
  padding: ${props => props.big ? "1rem 2rem" : (props.small ? ".5rem 1rem" : "0.8rem 1rem")};
  color: ${props => props.small ? props.colors.backgroundSecondaryColor : props.colors.fontColor};
  text-align: center;
  margin: 0 .5rem;
  transition: .4s;

  &:hover {
    cursor: pointer;
    border: ${props => props.small ? `1px solid ${props.colors.accentColor}` : ((props.big || props.border) ? `1px solid ${props.colors.fontColor}` : `1px solid transparent`)};
  }
`;

export {ButtonStyled}