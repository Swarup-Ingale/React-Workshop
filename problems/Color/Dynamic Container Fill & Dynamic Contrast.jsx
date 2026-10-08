// Modify ColorChooser.jsx so that clicking a button doesn't just change the text, but dynamically changes the entire container's background color. If 'None' or 'Yellow' is selected, text must be dark; otherwise, the text must switch to white for legibility.

import React, { useState } from 'react';

export default function ColorChooserChallenge1() {
    const [selectedColor, setSelectedColor] = useState('None');

    // Helper map for background rendering
    const colorMap = {
        Red: '#EF4444',
        Blue: '#3B82F6',
        Green: '#10B981',
        Yellow: '#FBBF24',
        None: '#1E293B'
    };

    const isLight = selectedColor === 'Yellow';

    return (
        <div style={{
            textAlign: 'center',
            padding: '50px',
            fontFamily: 'sans-serif',
            backgroundColor: colorMap[selectedColor],
            color: isLight ? '#000000' : '#FFFFFF',
            minHeight: '250px',
            borderRadius: '12px',
            margin: '20px auto',
            maxWidth: '500px',
            transition: 'background-color 0.3s ease'
        }}>
            <h2>Active Color: {selectedColor}</h2>

            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                {['Red', 'Blue', 'Green', 'Yellow'].map((color) => (
                    <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        style={{
                            padding: '10px 18px',
                            backgroundColor: '#0F172A',
                            color: '#FFFFFF',
                            border: '1px solid #475569',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        {color}
                    </button>
                ))}
            </div>
        </div>
    );
}