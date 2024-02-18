import { Section, SectionProfile, Blur } from './styles';
import P from 'prop-types';
import Perfil01 from '../../img/perfil01.jpg';
import Perfil02 from '../../img/perfil02.jpg';
import { useState } from 'react';

export const Profiles = () => {
  const [telOpen, setTelOpen] = useState(false);

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
            <h4>3100 pontos</h4>
            <p onClick={() => setTelOpen((prev) => !prev)}>Ver telefone</p>

            {telOpen && <Tel number={'(99)9999 9999'} />}
          </div>
        </div>
        <div className="profiles">
          <Blur url={Perfil02} className="perfil02">
            <img src={Perfil02} alt="user2" />
          </Blur>
          <div className="info">
            <h3>Nome Corretor 02</h3>
            <h4>1250 pontos</h4>
            <p onClick={() => setTelOpen((prev) => !prev)}>Ver Telefone</p>

            {telOpen && <Tel number={'(99)9999 9999'} />}
          </div>
        </div>
      </SectionProfile>
    </Section>
  );
};

export const Tel = ({ number }) => {
  return <p>{number}</p>;
};

Tel.propTypes = {
  number: P.string,
};
