import styled from "styled-components";

const HandOverFormHeaderStyled = styled.div`
  background-color: ${props => props.colors.accentColor};
  width: 100%;
  padding: 3rem 5rem;
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: .5rem;
  }
  p {
    font-size: 1rem;
    font-weight: 100;
  }
`;

export {HandOverFormHeaderStyled}