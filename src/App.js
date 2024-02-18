import { Header } from './components/header';
import { Profiles } from './components/profiles';
import { Message } from './components/message';

import { Main } from './styles';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Profiles />
        <Message />
      </Main>

      <GlobalStyle />
    </div>
  );
}

export default App;
