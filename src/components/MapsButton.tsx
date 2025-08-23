import React from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa'; // map icon from react-icons

const MapsButton: React.FC = () => {
  const mapsUrl = 'https://maps.app.goo.gl/jAZnipPgXAhP52Df7';

  return (
    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',          
        left: '20px',       
        transform: 'translateY(-50%)',
        backgroundColor: '#4285F4', // Google Maps blue
        color: 'white',
        borderRadius: '50%',
        padding: '15px',
        fontSize: '24px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      <FaMapMarkedAlt />
    </a>
  );
};

export default MapsButton;
