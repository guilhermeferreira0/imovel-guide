import { Section, Div } from './styles';

export const RuleOf3 = () => {
  return (
    <Section>
      <h2>3</h2>
      <Div>
        <h2>Regra de 3</h2>
        <div className="inputs">
          <div>
            <input type="number" name="num1" id="inum1" placeholder="60" />
            <span></span>
            <input type="number" name="num2" id="inum2" placeholder="100" />
          </div>
          <div>
            <input type="number" name="num3" id="inum3" placeholder="30" />
            <span></span>
            <input type="number" name="num4" id="inum4" placeholder="50" />
          </div>
        </div>

        <button>Calcular</button>
      </Div>
    </Section>
  );
};
