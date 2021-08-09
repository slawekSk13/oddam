import styled from "styled-components";

const CounterHeaderStyled = styled.h5`
color: ${props => props.colors.fontColor};
  font-size: 1.1rem;
  font-weight: 500;
  margin: 1rem;
  text-transform: ${props => props.up ? 'uppercase' : 'none'};
`;

export {CounterHeaderStyled}