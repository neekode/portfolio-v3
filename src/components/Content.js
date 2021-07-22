import React from 'react';
import Intro from './Intro'
import About from './About'
import Experience from './Experience'
import Connect from './Connect'
import NavBar from './NavBar';
import Background from './Background';
import {ThemeContext} from './../scripts/context';
import {useContext, useEffect, useRef, useState} from 'react';

// TODO: Refactor all of this.
function Content() {
    const {setScrollY} = useContext(ThemeContext);
    const handleScroll = (e) => setScrollY(window.scrollY);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        if (window.addEventListener) {
            window.addEventListener('load', handleScroll, false); //W3C
        }
    }, []);

    // TODO: position logic
    // const handleScroll = (e) => {
    //     let currentPos = window.scrollY;
    //
    //     const elTops = {
    //         intro: sectionEls.intro.offset().top,
    //         about: sectionEls.about.offset().top,
    //         works: sectionEls.works.offset().top,
    //         connect: sectionEls.connect.offset().top
    //     }
    //
    //     if (currentPos => elTops.intro && currentPos < elTops.about + 50) {
    //         dispatch({ type: 'SWITCH_SECTION', payload :'Intro'} )
    //     };
    //
    //     if (currentPos > elTops.about - 50 && currentPos  <= elTops.works + 50) {
    //         dispatch({ type: 'SWITCH_SECTION', payload :'About'} )
    //     };
    //
    //     if (currentPos > elTops.works - 50 && currentPos <= elTops.connect + 50) {
    //         dispatch({ type: 'SWITCH_SECTION', payload :'Works'} )
    //     };
    //
    //     if (currentPos > elTops.connect - 50) {
    //         dispatch({ type: 'SWITCH_SECTION', payload :'Connect'} )
    //     };
    // }

    return (
        <div id="Content">
            <Background/>

            <Intro/>

            <NavBar/>

            <About/>
            <Experience/>
            {/* projects */}
            <Connect/>
        </div>
  );
}

export default Content;