import styled from "styled-components"

const ButtonStyled = styled.button`
  width: ${props => props.big ? '30%' : 'auto'};
  font-weight: 300;
  font-size: ${props => props.big ? "2.5rem" : (props.small ? "1rem" : "1.3rem")};
  text-transform: ${props => props.big ? "uppercase" : "none"};
  border: ${props => props.big ? `.75px solid ${props.colors.fontColor}` : `.75px solid transparent`};
  background-color: transparent;
  padding: ${props => props.big ? "1rem 2rem" : (props.small ? ".5rem 1rem" : "0.8rem 1.5rem")};
  color: ${props => props.small ? props.colors.backgroundSecondaryColor : props.colors.fontColor};
  text-align: center;
  &:hover {
    cursor: pointer;
    border: .75px solid ${props => props.colors.accentColor};
  }
`;

export {ButtonStyled}