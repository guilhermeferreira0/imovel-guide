import { HeaderStyle } from './styles';

export const Header = () => {
  return (
    <HeaderStyle>
      <img src="#" alt="Logotipo" />
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

      <button>Cadastra-se</button>
    </HeaderStyle>
  );
};
