import { createContext, ReactNode, useContext, useState } from 'react';

type Theme = 'light' | 'dark';
interface ThemeContextType{
    theme:Theme,
    toggleTheme:()=> void,
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () =>{
    const context = useContext(ThemeContext);
    if(context === undefined){
        throw new Error('useConetext mmust be used within a ThemeProvider');
    }
    return context;
};

type ThemeProviderProps={
    children:ReactNode,
}
export const ThemeProvider:React.FC<ThemeProviderProps> = ({children}) =>{
const [theme,setTheme] = useState<Theme>( 'light');
const toggleTheme = () =>{
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
};
    return <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>;

};
