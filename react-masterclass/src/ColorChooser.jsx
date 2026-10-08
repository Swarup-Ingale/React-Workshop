import React, { useState } from 'react';

export default function ColorChooser() {
    // 1. Initialize State
    const [selectedColor, setSelectedColor] = useState('None');

    return (
        <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
            <h2>
                You have selected: <span style={{ color: selectedColor }}>{selectedColor}</span>
            </h2>

            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <button
                    onClick={() => setSelectedColor('Red')}
                    style={{ padding: '10px 20px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}>
                    Red
                </button>
                <button
                    onClick={() => setSelectedColor('Blue')}
                    style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>
                    Blue
                </button>
                <button
                    onClick={() => setSelectedColor('Green')}
                    style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}>
                    Green
                </button>
                <button
                    onClick={() => setSelectedColor('Yellow')}
                    style={{ padding: '10px 20px', backgroundColor: 'gold', color: 'black', border: 'none', borderRadius: '5px' }}>
                    Yellow
                </button>
            </div>
        </div>
    );
}


// import React, { useState } from "react";
// export default function Counter() {
//     const [count, setcount] = useState(0);
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={() => setcount(count + 1)}>Click Me</button>
//         </div>
//     )
// }
