import { createGlobalStyle } from 'styled-components';
import RobotoBlack from './fonts/Roboto-Black.ttf';
import RobotoLight from './fonts/Roboto-Light.ttf';
import RobotoBold from './fonts/Roboto-Bold.ttf';
import RobotoMedium from './fonts/Roboto-Medium.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBlack}) format('ttf'),
        url(${RobotoLight}) format('ttf'),
        url(${RobotoBold}) format('ttf'),
        url(${RobotoMedium}) format('ttf'),;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
      font-family: 'Roboto';
      font-weight: 600;
  }
`;
