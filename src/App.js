import { Header } from './components/header';
import { Profiles } from './components/profiles';
import { Message } from './components/message';
import { RuleOf3 } from './components/ruleOf3';
import { Modal } from './components/modal';
import { ImgDowload } from './components/imgDowload';
import { ImgAnimation } from './components/imgAnimation';
import { Footer } from './components/footer';

import { Main } from './styles';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Profiles />
        <Message />
        <RuleOf3 />
        <Modal />
        <ImgDowload />
        <ImgAnimation />
      </Main>
      <Footer />

      <GlobalStyle />
    </div>
  );
}

export default App;
