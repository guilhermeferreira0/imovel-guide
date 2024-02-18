import styled from 'styled-components';

export const Main = styled.main`
  display: grid;
  width: 100%;
  gap: 20px;
  padding: 5%;
  grid-template-columns: 100%;

  @media(min-width: 768px) {
    & {
      grid-template-columns: 1fr 1fr;
      gap: 10%;
      margin-bottom: calc(150px + 5%);
    }
  }

  @media(min-width: 992px){
    & {
      grid-template-columns: 1fr 1fr 1fr;
      margin-bottom: calc(13px + 5%);
    }
  }
`;
