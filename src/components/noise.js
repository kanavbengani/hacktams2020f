import React from 'react';

const Noise = () => (
   <div style={{
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      background: 'url("/images/noise.png")',
      opacity: 0.2,
      backgroundSize: '440px',
      zIndex: -1,
   }} />
);

export default Noise;
