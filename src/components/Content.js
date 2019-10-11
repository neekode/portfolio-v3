import $ from 'jquery';
import React from 'react';
import Intro from './Intro'
import About from './About'
import Works from './Works'
import Connect from './Connect'
import MyNav from './MyNav.js';

import Background from './Background';

import Context from './../scripts/context';
import { useContext, useEffect } from 'react';

function Content() {

  const sectionEls = {
    intro: {},
    about: {},
    works: {},
    connect: {}
  }

  const { state, dispatch } = useContext( Context );
  
  // useEffect calls with an empty array as the second argument render once before the component mounts, and then once after. 
  // Useful for default or initial values. 
  useEffect(() => init(), []);
  
  //useEffect(() => changeBg(), [state.section]);

  
  const init = () => {
    // For some reason, the onScroll event doesn't seem to fire with the conventional listener being put into the "div" element down below,
    // So using useEffect above allows us to attach the handler manually.
    window.addEventListener("scroll", handleScroll)

    // Initializing elements and wrapping in jQuery for easy accessiblity
    sectionEls.intro = $('#Intro'); 
    sectionEls.about = $('#About'); 
    sectionEls.works = $('#Works'); 
    sectionEls.connect = $('#Connect')
  }

  const handleScroll = (e) => { 
      let currentPos = window.scrollY;

      const elTops = {
        intro: sectionEls.intro.offset().top,
        about: sectionEls.about.offset().top,
        works: sectionEls.works.offset().top,
        connect: sectionEls.connect.offset().top
      }

      if (currentPos => elTops.intro && currentPos < elTops.about + 50) { 
        dispatch({ type: 'SWITCH_SECTION', payload :'Intro'} ) 
      };
      
      if (currentPos > elTops.about - 50 && currentPos  <= elTops.works + 50) { 
        dispatch({ type: 'SWITCH_SECTION', payload :'About'} )  
      };

      if (currentPos > elTops.works - 50 && currentPos <= elTops.connect + 50) { 
        dispatch({ type: 'SWITCH_SECTION', payload :'Works'} )  
      };

      if (currentPos > elTops.connect - 50) { 
        dispatch({ type: 'SWITCH_SECTION', payload :'Connect'} ) 
      };
  }
    
  return (
    <div id="Content">
        <Background /> 
        
        <Intro />

        <MyNav /> 

        <About />
        <Works />
        <Connect />
    </div>
  );
}

export default Content;