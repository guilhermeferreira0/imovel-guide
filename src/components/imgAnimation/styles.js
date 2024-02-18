import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 100%;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 5px;
    gap: 15px;
    overflow: hidden;
  }

  img {
    max-width: 100%;
    transition: all .4s ease;
    animation: zoomIn 6s alternate infinite;
  }

  @keyframes zoomIn {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(5);
    }
  }
`;
