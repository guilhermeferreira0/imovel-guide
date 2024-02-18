import { Section, SectionProfile, Blur } from './styles';
import Perfil01 from '../../img/perfil01.jpg';
import Perfil02 from '../../img/perfil02.jpg';

export const Profiles = () => {
  return (
    <Section>
      <h2>1</h2>
      <SectionProfile>
        <div className="profiles">
          <Blur url={Perfil01}>
            <img src={Perfil01} alt="user1" />
          </Blur>
          <div className="info">
            <h3>Nome Corretor 01</h3>
            <p>3100 pontos</p>
            <a href="/">Ver telefone</a>
          </div>
        </div>
        <div className="profiles">
          <Blur url={Perfil02} className="perfil02">
            <img src={Perfil02} alt="user2" />
          </Blur>
          <div className="info">
            <h3>Nome Corretor 02</h3>
            <p>1250 pontos</p>
            <a href="/">Ver telefone</a>
          </div>
        </div>
      </SectionProfile>
    </Section>
  );
};
