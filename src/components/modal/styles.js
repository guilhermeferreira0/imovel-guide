import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 100%;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  img {
    width: 100%;
    border: 1px solid black;
    border-radius: 5px;
  }

  button {
    background-color: ${colors.orange};
    padding: 0.4rem;
    border: 2px solid transparent;
    border-radius: 5px;
    color: #fff;
    font-size: 0.8em;
    width: 100%;
    text-transform: uppercase;
    cursor: pointer;
  }

  .modal {
    width: 100vw;
    height: 100%;
  }

`;

export const DivModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10%;
  background-color: rgba(0,0,0, 0.630);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
    margin: auto;
  }
`;
