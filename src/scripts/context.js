import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [section, setSection] = useState('Intro');
    const [scrollY, setScrollY] = useState(0);
    const [isMobile, setIsMobile] = useState(false)

    // This is hacky. I'd like to use useLocation here which is a hook that react router provides, but i've got dependency issues and the router needs a higher version React.
    const [isSandbox, setIsSandbox] = useState(window.location === "http://localhost:3000/sandbox" || window.location === "http://neekode.com/sandbox")

    return (
        <ThemeContext.Provider
            value={{section, setSection, scrollY, setScrollY, isMobile, setIsMobile, isSandbox, setIsSandbox}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const HexDescriptionContext = createContext();
export const HexDescriptionProvider = ({children}) => {
    const [innerText, setInnerText] = useState();

    return (
        <HexDescriptionContext.Provider value={{innerText, setInnerText}}>
            {children}
        </HexDescriptionContext.Provider>
    )
}

