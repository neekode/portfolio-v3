import  React  from 'react';
import Content from './components/Content';
import {ThemeProvider} from './scripts/context';

function App() {
  return (
      <div id="App">
          {/*  Gives App Access to Theme-based context*/}
          <ThemeProvider>
              <Content/>
          </ThemeProvider>
      </div>
  );
}

export default App;