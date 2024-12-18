import { useState } from 'react'
import { Comp1 } from './comp1';
import { ProviderComp } from './ProviderComp';
import '../../App.css';

export const ContextComponent = () => {
    const [theme, setTheme] = useState('dark');
    return (
        <div className="App">
            {/* <ThemeContext.Provider value={theme}>
                <Comp1 setTheme={setTheme} />
            </ThemeContext.Provider> */}

            <ProviderComp theme={theme} setTheme={setTheme} >
                <Comp1 theme={theme} setTheme={setTheme} />
            </ProviderComp>
            Learn React
        </div>
    );
};
