import styled from "styled-components";

const ButtonStyled = styled.button`
  width: ${props => props.big ? '30%' : 'auto'};
  font-weight: 300;
  font-size: ${props => props.big ? "2.5rem" : (props.small ? "1rem" : (props.medium ? "1.8rem" : "1.3rem"))};
  text-transform: ${props => props.big ? "uppercase" : "none"};
  border: ${props => props.big ? `1px solid ${props.colors.fontColor}` : (props.small ? `1px solid transparent` : `none`)};
  background-color: transparent;
  padding: ${props => props.big ? "1rem 2rem" : (props.small ? ".5rem 1rem" : "0.8rem 1rem")};
  color: ${props => props.small ? props.colors.backgroundSecondaryColor : props.colors.fontColor};
  text-align: center;
  transition: .4s;
  &:hover {
    cursor: pointer;
    border: ${props => props.small ? `1px solid ${props.colors.accentColor}` : (props.big ? `1px solid ${props.colors.fontColor}` : `none`)};
  }
`;

export {ButtonStyled}