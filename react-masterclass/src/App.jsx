// Part 1
import React from 'react';
import ColorChooser from './ColorChooser';

export default function App() {
    return <ColorChooser />;
}


// import React from 'react';
// export default function Welcome() {
//     return (
//         <h1> Welcome to React Workshop!</h1>
//     )
// };
// import React from "react";
// import Counter from "./ColorChooser";
// export default function App() {
//     return <Counter />
// }

// Part 2
// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import ColorChooser from './ColorChooser';

// function Home() {
//   return (
//     <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
//       <h1>Welcome to the Full-Stack Workshop</h1>
//       <p>This is the home route of our Single Page Application.</p>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       {/* 1. Global Navigation */}
//       <nav style={{ padding: '20px', backgroundColor: '#0F172A', display: 'flex', gap: '20px' }}>
//         <Link to="/" style={{ color: '#38BDF8', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
//         <Link to="/colors" style={{ color: '#38BDF8', textDecoration: 'none', fontWeight: 'bold' }}>Color Lab</Link>
//       </nav>

//       {/* 2. Route Configuration */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/colors" element={<ColorChooser />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// Part 1 Prob 1:
// import React from 'react';
// import ColorChooserChallenge1 from '../../problems/Color/Dynamic Container Fill & Dynamic Contrast';
// export default function App() {
//   return <ColorChooserChallenge1 />;
// }

// Part 1 Prob 2:
// import React from 'react';
// import ColorChooserChallenge2 from '../../problems/Color/Dual State — Reset Action & Click Telemetry Counter';
// export default function App() {
//   return <ColorChooserChallenge2 />;
// }

// Part 2 Prob 1:
// import React from 'react';
// import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
// import ColorChooser from './ColorChooser';

// function NotFound() {
//   return (
//     <div style={{ textAlign: 'center', padding: '60px 20px', fontFamily: 'sans-serif' }}>
//       <h1 style={{ fontSize: '3rem', color: '#EF4444', margin: 0 }}>404</h1>
//       <p style={{ color: '#64748B' }}>The requested route does not exist within the client router.</p>
//       <Link to="/">
//         <button style={{ padding: '10px 20px', background: '#0284C7', color: '#FFF', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
//           ← Return Home
//         </button>
//       </Link>
//     </div>
//   );
// }

// export default function AppWith404() {
//   // Dynamic active link styling
//   const navStyle = ({ isActive }) => ({
//     color: isActive ? '#38BDF8' : '#94A3B8',
//     textDecoration: 'none',
//     fontWeight: isActive ? 'bold' : 'normal'
//   });

//   return (
//     <BrowserRouter>
//       <nav style={{ padding: '16px 32px', backgroundColor: '#0F172A', display: 'flex', gap: '24px' }}>
//         <NavLink to="/" style={navStyle}>Home</NavLink>
//         <NavLink to="/colors" style={navStyle}>Color Lab</NavLink>
//       </nav>

//       <Routes>
//         <Route path="/" element={<div style={{ textAlign: 'center', padding: '40px' }}>Home Screen</div>} />
//         <Route path="/colors" element={<ColorChooser />} />
//         {/* Wildcard Matcher */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// Part 2 Prob 2:
// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import ColorChooser from './ColorChooser';

// function Home() {
//   return (
//     <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
//       <h1>Welcome to the Full-Stack Workshop</h1>
//       <p>This is the home route of our Single Page Application.</p>
//     </div>
//   );
// }

// function Speakers() {
//   const team = [
//     { name: 'Swarup Ingale', role: 'Founder & Software Engineer' },
//     { name: 'Amit Mishra', role: 'DevSecOps Engineer & Co-Founder' }
//   ];

//   return (
//     <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif', textAlign: 'center' }}>
//       <h2>Workshop Speakers</h2>
//       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
//         {team.map((member) => (
//           <div key={member.name} style={{ padding: '20px', background: '#1E293B', color: '#FFF', borderRadius: '8px' }}>
//             <h3 style={{ margin: '0 0 8px 0', color: '#38BDF8' }}>{member.name}</h3>
//             <p style={{ margin: 0, color: '#94A3B8', fontSize: '0.9rem' }}>{member.role}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <nav style={{ padding: '16px 32px', backgroundColor: '#0F172A', display: 'flex', gap: '24px' }}>
//         <Link to="/" style={{ color: '#FFF', textDecoration: 'none' }}>Home</Link>
//         <Link to="/colors" style={{ color: '#FFF', textDecoration: 'none' }}>Color Lab</Link>
//         <Link to="/speakers" style={{ color: '#38BDF8', textDecoration: 'none' }}>Speakers</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/colors" element={<ColorChooser />} />
//         <Route path="/speakers" element={<Speakers />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }