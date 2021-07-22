import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [section, setSection] = useState('Intro');
    const [scrollY, setScrollY] = useState(0);

    return (
        <ThemeContext.Provider value={{section, setSection, scrollY, setScrollY}}>
            {children}
        </ThemeContext.Provider>
    )
}

