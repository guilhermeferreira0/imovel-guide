import { useRef, useState } from 'react';
import { Section, Div } from './styles';

export const RuleOf3 = () => {
  const num1 = useRef();
  const num2 = useRef();
  const num3 = useRef();
  const num4 = useRef();

  const [resInput, setResInput] = useState();

  const calc = () => {
    const total =
      (num2.current.value * num3.current.value) / num1.current.value;
    console.log(total);
    setResInput(Number(total));
    return;
  };

  return (
    <Section>
      <h2>3</h2>
      <Div>
        <h2>Regra de 3</h2>
        <div className="inputs">
          <div>
            <input
              type="number"
              name="num1"
              id="inum1"
              placeholder="60"
              ref={num1}
            />
            <span></span>
            <input
              type="number"
              name="num2"
              id="inum2"
              placeholder="100"
              ref={num2}
            />
          </div>
          <div>
            <input
              type="number"
              name="num3"
              id="inum3"
              placeholder="30"
              ref={num3}
            />
            <span></span>
            <input
              className="inputRes"
              type="number"
              name="num4"
              id="inum4"
              value={resInput}
              ref={num4}
            />
          </div>
        </div>

        <button onClick={() => calc()}>Calcular</button>
      </Div>
    </Section>
  );
};
