import { HeaderStyle } from './styles';
import ImovelGuideLogotipo from '../../img/ImovelGuideLogotipo.jpg';

export const Header = () => {
  return (
    <HeaderStyle>
      <img src={ImovelGuideLogotipo} alt="Logotipo" />
      <nav className="links">
        <ul>
          <li>
            <a href="#">Condominios</a>
          </li>
          <li>
            <a href="#">Fórum</a>
          </li>
          <li>
            <a href="#">Guia</a>
          </li>
          <li>
            <a href="#">Artigos</a>
          </li>
          <li>
            <a href="#">Ferramentas</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#">Colar Imóvel</a>
          </li>
          <li>
            <a href="#">Planos</a>
          </li>
          <li>
            <a href="#">Entrar</a>
          </li>
        </ul>
      </nav>
      <button>
        <a href="#">Cadastre-se</a>
      </button>

      <div className="menu">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </HeaderStyle>
  );
};
