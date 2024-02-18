import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Nav = styled.div`
  background-color: ${colors.blue};
  position: absolute;
  top: 8vh;
  right: 0;
  width: 40vw;
  height: 92vw;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-around;
  z-index: 2;

  @media(min-width: 992px) {
    & {
      display: none;
    }
  }

`;
