import { Section, Form } from './styles';

export const Message = () => {
  return (
    <Section>
      <h3>2</h3>
      <Form action="/">
        <h2>Mande uma mensagem:</h2>
        <input
          type="text"
          name="cpf"
          id="icpf"
          className="inputData"
          placeholder="Digite seu CPF"
        />
        <input
          type="text"
          name="tel"
          id="itel"
          className="inputData"
          placeholder="Digite seu Telefone"
        />
        <input
          type="text"
          name="msg"
          id="imsg"
          className="inputMessage"
          placeholder="Digite o assunto"
        />
        <button type="submit">Enviar Mensagem</button>
      </Form>
    </Section>
  );
};
