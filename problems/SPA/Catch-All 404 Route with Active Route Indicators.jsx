import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import ColorChooser from './ColorChooser';

function NotFound() {
    return (
        <div style={{ textAlign: 'center', padding: '60px 20px', fontFamily: 'sans-serif' }}>
            <h1 style={{ fontSize: '3rem', color: '#EF4444', margin: 0 }}>404</h1>
            <p style={{ color: '#64748B' }}>The requested route does not exist within the client router.</p>
            <Link to="/">
                <button style={{ padding: '10px 20px', background: '#0284C7', color: '#FFF', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                    ← Return Home
                </button>
            </Link>
        </div>
    );
}

export default function AppWith404() {
    // Dynamic active link styling
    const navStyle = ({ isActive }) => ({
        color: isActive ? '#38BDF8' : '#94A3B8',
        textDecoration: 'none',
        fontWeight: isActive ? 'bold' : 'normal'
    });

    return (
        <BrowserRouter>
            <nav style={{ padding: '16px 32px', backgroundColor: '#0F172A', display: 'flex', gap: '24px' }}>
                <NavLink to="/" style={navStyle}>Home</NavLink>
                <NavLink to="/colors" style={navStyle}>Color Lab</NavLink>
            </nav>

            <Routes>
                <Route path="/" element={<div style={{ textAlign: 'center', padding: '40px' }}>Home Screen</div>} />
                <Route path="/colors" element={<ColorChooser />} />
                {/* Wildcard Matcher */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}