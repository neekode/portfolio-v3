// FOR LATER
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useRef } from 'react';
// import  $  from 'jquery';
// import AnchorLink from 'react-anchor-link-smooth-scroll';

import  React  from 'react';
import { useContext, useEffect, useReducer } from 'react';
import Content from './components/Content';

import Context  from './scripts/context';
import reducer from './scripts/reducer';

function App() {
  // Initializes state in context
  const initialState = useContext(Context);
  // Initializes reducer to allow state and dispatch items to be used

  // NOTE: this is global state, able to be used anywhere in the application. this should only be used where it's necessary for a piece of state
  // to be used EVERYWHERE IN THE APPLICATION. component-based state should be used whenever context is unnecessaru, and is utilized with useState();
  const [state, dispatch] = useReducer(reducer, initialState);

  // Is fired for default value of section. 
  useEffect(() => init(), []);

  const init = () => {
      dispatch({ type: 'SWITCH_SECTION' , payload: 'Intro'})
  }

  return (
    <div id="App">
      <Context.Provider value={{ state, dispatch }} >
        <Content />
      </Context.Provider>
    </div>
  );
}

export default App;