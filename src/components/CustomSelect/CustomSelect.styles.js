import styled from 'styled-components'

const CustomSelectStyled = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 100;
  left: ${props => props.label ? '0' : '-1rem'};
  .select {
    position: relative;
    left: 1rem;
    display: flex;
    flex-direction: column;
    border: 1px solid ${props => props.colors.fontColor}; 
    width: 20rem;
  }
  .select__trigger {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem 1rem;
    font-size: 1rem;
    font-weight: 300;
    color: ${props => props.colors.fontColor};
    background: transparent;
    cursor: pointer;
  }
  .custom-options {
    position: absolute;
    display: block;
    text-align: ${props => props.big ? 'left' : 'center'};
    top: 120%;
    left: ${props => props.big ? '-1px' : '80%'};
    right: -1px;
    border: 1px solid ${props => props.colors.fontColor};
    background: ${props => props.colors.formBackgroundColor};
    z-index: 2;
  }
  
  .custom-option {
    position: relative;
    display: block;
    padding: 0.2rem 1rem;
    font-size: 1rem;
    font-weight: 300;
    color: ${props => props.colors.fontColor};
    cursor: pointer;
    transition: all 0.5s;
  }
  .custom-option:hover {
    cursor: pointer;
    background-color: ${props => props.colors.accentColor};
  }
 
  .arrow {
    position: relative;
    height: 1rem;
    width: 1rem;
  }
  .arrow::before, .arrow::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0.2rem;
    height: 100%;
    transition: all 0.5s;
  }

  .arrow::before {
    left: -5px;
    transform: ${props => props.open ? 'rotate(45deg)' : 'rotate(-45deg)'};
    background-color: ${props => props.colors.fontColor};
  }
  .arrow::after {
    left: 5px;
    transform: ${props => props.open ? 'rotate(-45deg)' : 'rotate(45deg)'};
    background-color: ${props => props.colors.fontColor};
  }
  
  .error {
    left: ${props => props.big ? '137px' : '325px' }; 
    top: 35px;
  }
`;

export {CustomSelectStyled}