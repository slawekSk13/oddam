import styled from "styled-components";

const SelectStyled = styled.label`
  position: relative;
  top: 2rem;
  font-size: 1.1rem;
  font-weight: 100;
  margin-left: 1rem;
select {
  position: relative;
  left: 1rem;
  border: 1px solid ${props => props.colors.fontColor};
  padding: .4rem 5rem .4rem 1rem;
  font-size: 1.1rem;
  font-weight: 100;
  background: transparent;
  &:active {
    outline: none;
  }
  option {
    font-weight: 100;
    width: 1rem;
    padding: .4rem;
    background: transparent;
  }
}
`;

export {SelectStyled}