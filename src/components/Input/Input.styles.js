import styled from 'styled-components';

const InputStyled = styled.input`
  color: ${props => props.colors.fontColor};
  font-size: 1.1rem;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${props => props.error ? props.colors.errorColor : props.colors.fontColor};
  padding: .1rem 0;
  margin: 3rem 0 4rem;
  background-color: transparent;
  &::placeholder {
    color: ${props => props.colors.placeholderColor}
  }
  &:focus {
    outline: none;
  }
`;

const TextAreaStyled = styled.textarea`
  color: ${props => props.colors.fontColor};
  font-size: 1.1rem;
  border: none;
  width: 100%;
  border-bottom: 1px solid ${props => props.error ? props.colors.errorColor : props.colors.fontColor};
  padding: .1rem 0;
  margin: 1rem 0;
  resize: none;
  background-color: transparent;
  &::placeholder {
    color: ${props => props.colors.placeholderColor}
  } 
  &:focus {
      outline: none;
    }
`;

export {InputStyled, TextAreaStyled}