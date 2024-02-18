import { FooterStyle } from './styles';
import Logotipo from '../../img/ImovelGuideLogotipo.jpg';

export const Footer = () => {
  return (
    <FooterStyle>
      <p>₢ Copyright 2022. Todos os direitos resevador.</p>
      <img src={Logotipo} alt="logotipo" />
    </FooterStyle>
  );
};
