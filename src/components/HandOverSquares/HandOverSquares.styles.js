import styled from "styled-components";

const HandOverSquareStyled = styled.div`
  display: inline-block;
  height: 120px;
  width: 120px;
  margin: 2.5rem .5rem.5rem;
  position: relative;
  text-align: center;
  h6 {
    color: ${props => props.colors.fontColor};
    font-weight: 300;
    font-size:1.5rem;
  }
  p {
    color: ${props => props.colors.fontColor};
    font-size: 1.2rem;
  }
div {
  position: absolute;
  top: 0;
  //content: '';
  width: 100%;
  height: 100%;
  border: 1px solid ${props => props.colors.fontColor};
  transform: rotate(45deg);
}
`;

export {HandOverSquareStyled}