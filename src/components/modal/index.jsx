import P from 'prop-types';
import { Section, DivModal } from './styles';
import Paisagem from '../../img/paisagem.jpg';
import { useState } from 'react';

export const Modal = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Section>
      <h2>4</h2>
      <div>
        <img src={Paisagem} alt="paisagem-modal" />
        <button onClick={() => setOpenModal((prev) => !prev)}>
          Abrir imagem no modal
        </button>
      </div>
      <ImgModal
        isOpen={openModal}
        setOpenModal={() => setOpenModal(!openModal)}
      />
    </Section>
  );
};

export const ImgModal = ({ isOpen, setOpenModal }) => {
  if (isOpen) {
    return (
      <DivModal>
        <div>
          <img src={Paisagem} alt="paisagem" />
        </div>
        <button onClick={setOpenModal}>Fechar</button>
      </DivModal>
    );
  }
};

ImgModal.propTypes = {
  isOpen: P.bool,
  setOpenModal: P.func,
};
