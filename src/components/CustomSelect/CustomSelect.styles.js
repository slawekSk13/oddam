import styled from 'styled-components'

const CustomSelectStyled = styled.div`
  position: relative;
  user-select: none;
  width: 100%;
  .select {
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid ${props => props.colors.fontColor}; 
  }
  .select__trigger {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 300;
    color: ${props => props.colors.fontColor};
    background: transparent;
    cursor: pointer;
  }
  .custom-options {
    position: absolute;
    display: block;
    text-align: center;
    top: 120%;
    left: 90%;
    right: -1px;
    border: 1px solid ${props => props.colors.fontColor};
    background: transparent;
    z-index: 2;
  }
  
  .custom-option {
    position: relative;
    display: block;
    padding: 1rem;
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
  .custom-option.selected {
    color: #ffffff;
    background-color: #305c91;
  }

  .arrow {
    position: relative;
    height: 2rem;
    width: 2rem;
  }
  .arrow::before, .arrow::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0.4rem;
    height: 100%;
    transition: all 0.5s;
  }

  .arrow::before {
    left: -10px;
    transform: ${props => props.open ? 'rotate(45deg)' : 'rotate(-45deg)'};
    background-color: ${props => props.colors.fontColor};
  }
  .arrow::after {
    left: 10px;
    transform: ${props => props.open ? 'rotate(-45deg)' : 'rotate(45deg)'};
    background-color: ${props => props.colors.fontColor};
  }
`;

export {CustomSelectStyled}