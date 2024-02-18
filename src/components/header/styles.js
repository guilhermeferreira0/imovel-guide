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
    display: flex;
    justify-content: space-between;
    width: 65%;
  }

  ul {
    list-style-type: none;
    list-style-position: inside;
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    text-decoration: underline;
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

  @media(min-width: 992px) {
    nav {
      pointer-events: all;
      opacity: 1;
    }

    button {
      display: flex;
    }
  }
`;

export const MenuBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    cursor: pointer;
    height: 100%;

  div {
    width: 32px;
    height: 2px;
    border: 1px solid #fff;
    transition: all .7s ease;
  }

  ${(props) => {
    if (props.active) {
      return `.line1 {
        transform: rotate(-45deg) translate(-6px, 8px);
      }
      .line2 {
        opacity: 0;
      }
      .line3 {
        transform: rotate(45deg) translate(-5px, -7px);
      }
      `;
    }

    return;
  }}

@media(min-width: 992px) {
    & {
      display: none;
    }
  }
`;
