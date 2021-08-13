import styled from "styled-components";

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const Label = styled.label`
  color: ${props => props.colors.fontColor};
  position: relative;
  left: 3rem;
  display: block;
  cursor: pointer;
  margin: 1.3rem 1.2rem .6rem;
  font-size: 1.2rem;
  text-transform: lowercase;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Indicator = styled.div`
  border: 1px solid ${props => props.colors.fontColor};
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 0;
  left: -3rem;

  ${Input}:checked + &::after {
    box-sizing: border-box;
    content: "";
    background-color: ${props => props.colors.accentColor};
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: -1px;
    left: -1px;
    border: 1px solid ${props => props.colors.fontColor};
  }
`;

export {Input, Indicator, Label}