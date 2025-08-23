import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton: React.FC = () => {
  const phoneNumber = '9849720295';
  const message = "Hi I'm interested in your services.";
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '120px', // distance from bottom
        left: '20px',   // distance from left
        backgroundColor: '#25D366',
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
      <FaWhatsapp />
    </a>
  );
};

export default WhatsappButton;
