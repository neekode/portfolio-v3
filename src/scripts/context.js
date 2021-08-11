import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [section, setSection] = useState('Intro');
    const [scrollY, setScrollY] = useState(0);
    const [isMobile, setIsMobile] = useState(false)

    return (
        <ThemeContext.Provider value={{section, setSection, scrollY, setScrollY, isMobile, setIsMobile}}>
            {children}
        </ThemeContext.Provider>
    )
}

