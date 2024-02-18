import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const FooterStyle = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.blue};
  padding: 3rem;
  height: 120px;

  p {
    color: #fff;
    font-weight: bold;
  }

  img {
    width: 200px;
  }

`;
