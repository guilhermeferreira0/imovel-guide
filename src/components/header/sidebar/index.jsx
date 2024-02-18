import { Nav } from './styles';
import P from 'prop-types';

export const Sidebar = ({ active }) => {
  if (active) {
    return (
      <Nav>
        <a href="#">Condominios</a>
        <a href="#">Fórum</a>
        <a href="#">Guia</a>
        <a href="#">Artigos</a>
        <a href="#">Ferramentas</a>
        <a href="#">Colar Imóvel</a>
        <a href="#">Planos</a>
        <a href="#">Entrar</a>
      </Nav>
    );
  }
  return;
};

Sidebar.propTypes = {
  active: P.bool,
};
