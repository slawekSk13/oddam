import styled from "styled-components";

const OrganizationsListItem = styled.li`
  margin: 1rem 0;
  font-family: 'Merriweather', serif;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.colors.fontColor};
  div {
    font-family: inherit;

    h3 {
      font-family: inherit;
      font-size: 1.6rem;
      font-weight: 300;
      margin-bottom: .5rem;
    }

    h6 {
      font-family: inherit;
      font-weight: 300;
      font-size: .9rem;
      font-style: italic;
    }
  }

  p {
    font-family: inherit;
    font-size: .9rem;
    font-weight: 300;
  }
`;

export {OrganizationsListItem}