import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [section, setSection] = useState('Intro');
    const [scrollY, setScrollY] = useState(0);
    const [isMobile, setIsMobile] = useState(false)
    const [isSandbox, setIsSandbox] = useState(false)

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

