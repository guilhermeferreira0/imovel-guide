import { Section } from './styles';
import Paisagem from '../../img/paisagem.jpg';
import { useState } from 'react';

export const ImgDownload = () => {
  const urlToDownload =
    'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg&_gl=1*12gbd2k*_ga*MTE1OTkzNDEwMi4xNzA4MjY4OTc2*_ga_8JE65Q40S6*MTcwODI2ODk3NS4xLjEuMTcwODI2OTEyNy4wLjAuMA..';
  const [download, setDownload] = useState('');
  const [count, setCount] = useState(0);

  return (
    <Section>
      <h2>5</h2>
      <div className="content">
        <div className="banner">
          <img src={Paisagem} alt="paisagem" />
          <span>Imovel Guide</span>
        </div>
        <button
          onClick={() => {
            setDownload(urlToDownload);
            setCount((old) => old + 1);
          }}
        >
          Download
        </button>
        <p style={{ display: 'none' }}>{download}</p>
        {download && (
          <iframe
            src={download + '?c=' + count}
            style={{ display: 'none' }}
          ></iframe>
        )}
      </div>
    </Section>
  );
};
