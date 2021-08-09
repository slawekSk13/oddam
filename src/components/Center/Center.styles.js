import styled from "styled-components";

const CenterStyled = styled.div`
  display: ${props => props.vertical ? 'flex' : 'block'};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  width: ${props => props.width};
`;

export {CenterStyled}