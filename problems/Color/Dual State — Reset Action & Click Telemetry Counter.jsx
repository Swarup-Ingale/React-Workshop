import React, { useState } from 'react';

export default function ColorChooserChallenge2() {
    const [selectedColor, setSelectedColor] = useState('None');
    const [clickCount, setClickCount] = useState(0);

    const handleColorChange = (color) => {
        setSelectedColor(color);
        setClickCount((prevCount) => prevCount + 1);
    };

    const handleReset = () => {
        setSelectedColor('None');
        setClickCount(0);
    };

    return (
        <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
            <h2>Selected: <span style={{ color: selectedColor }}>{selectedColor}</span></h2>
            <p style={{ color: '#64748B' }}>Total Interactions: <strong>{clickCount}</strong></p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '15px' }}>
                <button onClick={() => handleColorChange('Red')} style={{ padding: '8px 16px', background: 'red', color: 'white' }}>Red</button>
                <button onClick={() => handleColorChange('Blue')} style={{ padding: '8px 16px', background: 'blue', color: 'white' }}>Blue</button>
                <button onClick={() => handleColorChange('Green')} style={{ padding: '8px 16px', background: 'green', color: 'white' }}>Green</button>
                <button onClick={() => handleColorChange('Yellow')} style={{ padding: '8px 16px', background: 'gold', color: 'black' }}>Yellow</button>
            </div>

            <div style={{ marginTop: '20px' }}>
                <button
                    onClick={handleReset}
                    style={{ padding: '8px 20px', background: '#334155', color: '#FFF', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Reset All
                </button>
            </div>
        </div>
    );
}