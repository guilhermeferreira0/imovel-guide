import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 100%;

  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  img {
    width: 100%;
    border: 1px solid black;
    border-radius: 5px;
    z-index: -1;
  }

  .banner {
    position: relative;
    width: 100%;
  }

  span {
    z-index: 1;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    background-color: ${colors.orangeTransparent};

    padding: 0.4rem 6rem;
    color: #fff;
    font-size: 2em;
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
`;
