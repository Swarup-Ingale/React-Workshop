import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ColorChooser from './ColorChooser';

function Home() {
    return (
        <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
            <h1>Welcome to the Full-Stack Workshop</h1>
            <p>This is the home route of our Single Page Application.</p>
        </div>
    );
}

function Speakers() {
    const team = [
        { name: 'Swarup Ingale', role: 'Founder & Software Engineer' },
        { name: 'Amit Mishra', role: 'DevSecOps Engineer & Co-Founder' }
    ];

    return (
        <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif', textAlign: 'center' }}>
            <h2>Workshop Speakers</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
                {team.map((member) => (
                    <div key={member.name} style={{ padding: '20px', background: '#1E293B', color: '#FFF', borderRadius: '8px' }}>
                        <h3 style={{ margin: '0 0 8px 0', color: '#38BDF8' }}>{member.name}</h3>
                        <p style={{ margin: 0, color: '#94A3B8', fontSize: '0.9rem' }}>{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <nav style={{ padding: '16px 32px', backgroundColor: '#0F172A', display: 'flex', gap: '24px' }}>
                <Link to="/" style={{ color: '#FFF', textDecoration: 'none' }}>Home</Link>
                <Link to="/colors" style={{ color: '#FFF', textDecoration: 'none' }}>Color Lab</Link>
                <Link to="/speakers" style={{ color: '#38BDF8', textDecoration: 'none' }}>Speakers</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/colors" element={<ColorChooser />} />
                <Route path="/speakers" element={<Speakers />} />
            </Routes>
        </BrowserRouter>
    );
}