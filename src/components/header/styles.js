import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const HeaderStyle = styled.header`
  background-color: ${colors.blue};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 20%;
  }

  nav {
    pointer-events: none;
    opacity: 0;
  }

  ul {
    list-style-type: none;
    list-style-position: inside;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  .menu {
    display: flex;
    flex-direction: column;
    gap: 7px;
    cursor: pointer;
    height: 100%;
  }

  .menu div {
    width: 32px;
    height: 2px;
    border: 1px solid #fff;
  }

  button {
    width: 150px;
    height: 20px;
    padding: 1rem;
    background-color: ${colors.blue};
    border: 2px solid #fff;
    border-radius: 50px;
    display: none;
    align-items: center;
    justify-content: center;
  }

  button a {
    text-transform: uppercase;
  }

  @media(min-width: 982px) {
    nav {
      pointer-events: all;
      opacity: 1;
    }

    .menu {
      display: none;
    }

    button {
      display: flex;
    }
  }
`;
