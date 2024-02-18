import { Section } from './styles';
import Paisagem from '../../img/paisagem.jpg';

export const ImgDowload = () => {
  return (
    <Section>
      <h2>5</h2>
      <div className="content">
        <div className="banner">
          <img src={Paisagem} alt="paisagem" />
          <span>Imovel Guide</span>
        </div>
        <button>Download</button>
      </div>
    </Section>
  );
};
