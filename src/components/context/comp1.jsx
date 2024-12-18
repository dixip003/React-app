import React, {useContext} from 'react'
import {ThemeContext} from './ProviderComp'
import '../../App.css'

export const Comp1 = ({ setTheme}) => {

    const theme = useContext(ThemeContext);
    console.log('theme', theme)
    return (
        <div className={theme === 'dark' ? 'bg-red': 'bg-blue'} >
            <p>Comp1</p>
            <button name='update theme' aria-label='update theme' onClick={() => setTheme('blue')}> Update Theme </button>
         </div>
    )
}

export default Comp1;