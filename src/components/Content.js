import React from "react";
import Background from "./Background";
import Sandbox from "./Sandbox";
import InnerContent from "./InnerContent";
import {ThemeContext} from "./../scripts/context";
import {useContext, useEffect} from "react";
import {
    BrowserRouter as Router,
    Route,

} from "react-router-dom";

// Big Wrapper
function Content() {
    const {setScrollY, setIsMobile, isSandbox} = useContext(ThemeContext);
    const handleScroll = (e) => setScrollY(window.scrollY);
    const handleResize = (e) => {
        if (window.outerWidth > 800) {
            setIsMobile(false)
        } else {
            setIsMobile(true)
        }
    }
    // Attach scroll handler on Init
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        if (window.addEventListener) {
            window.addEventListener("load", handleScroll, false); //W3C
            window.addEventListener("load", handleResize, false);
        }
    }, [handleResize, handleScroll]);


    return (
        <div id="Content" className={`${isSandbox ? 'content-sandbox' : ''}`}>
            <Router>
                <Background/>
                <Route path="/sandbox">
                    <Sandbox/>
                </Route>
                <Route path="/">
                    <InnerContent/>
                </Route>
            </Router>
        </div>
    );
}

export default Content;
