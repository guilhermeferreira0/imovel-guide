import { useRef } from 'react';
import InputMask from 'react-input-mask';
import { Section, Form } from './styles';

export const Message = () => {
  const cpf = useRef();
  const tel = useRef();
  const mensagem = useRef();

  return (
    <Section>
      <h3>2</h3>
      <Form action="/">
        <h2>Mande uma mensagem:</h2>
        <InputMask
          mask="999.999.999-99"
          type="text"
          name="cpf"
          id="icpf"
          className="inputData"
          placeholder="Digite seu CPF"
          ref={cpf}
        />
        <InputMask
          mask="(99)9999-9999"
          type="text"
          name="tel"
          id="itel"
          className="inputData"
          placeholder="Digite seu Telefone"
          ref={tel}
        />
        <input
          type="text"
          name="msg"
          id="imsg"
          className="inputMessage"
          placeholder="Digite o assunto"
          ref={mensagem}
        />

        <button
          onClick={() =>
            window.alert(`
            CPF: ${cpf.current.value}
            TEL: ${tel.current.value}
            MSG: ${mensagem.current.value}
            Mensagem Enviada`)
          }
        >
          Enviar Mensagem
        </button>
      </Form>
    </Section>
  );
};
