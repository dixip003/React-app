
//#region  Example 1
import React, { useState } from 'react'
import { ButtonComp } from './ButtonComp'
import '../../App.css'


export const CallbackComp = () => {

    const [count, setCount] = useState(0)

    return (
        <div>
            {count}
            <button onClick={() => setCount(count + 1)} > Increase count</button>
            <ButtonComp message='hard code message' count={count} />
        </div>
    )
};
//#endregion

//#region Example 2
// import { useState } from 'react';
// import ProductPage from './ProductPage';

// export const CallbackComp = () => {
//     const [isDark, setIsDark] = useState(false);
//     return (
//         <>
//             <label>
//                 <input
//                     type="checkbox"
//                     checked={isDark}
//                     onChange={e => setIsDark(e.target.checked)}
//                 />
//                 Dark mode
//             </label>
//             <hr />
//             <ProductPage
//                 referrerId="wizard_of_oz"
//                 productId={123}
//                 theme={isDark ? 'dark' : 'light'}
//             />
//         </>
//     );
// }
//#endregion