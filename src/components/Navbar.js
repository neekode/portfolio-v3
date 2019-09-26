import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
import { useRef } from 'react';
// import { textillate } from 'textillate';

import { $ } from 'jquery';
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar() {

  let navItem = useRef();
  
  const handleMouseEnter = () => {
    $(navItem.current).addClass('animated infinite bounce')
  }

  const handleMouseLeave = () => {
    $(navItem.current).removeClass('animated infinite bounce')
  }
    
  return (
    <div id="Navbar">
        <div className="container center">
            

            <AnchorLink href="#Works" > <span className="nav-item" ref={navItem} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>works</span> </AnchorLink>
            <AnchorLink href="#About"   onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> <span className="nav-item">about me</span> </AnchorLink>
            <AnchorLink href="#Connect"   onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> <span className="nav-item">connect</span> </AnchorLink>

        </div>
    </div>
  );
}

export default Navbar;