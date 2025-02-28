import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; 
import styled from 'styled-components'; 

const WhatsAppButton = styled.a`
  position: fixed; 
  bottom: 20px; 
  right: 20px; 
  background-color: #25d366; 
  color: white; 
  border-radius: 50%; 
  width: 50px; 
  height: 50px; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
  z-index: 1000; 
  transition: background-color 0.3s ease; 

  &:hover {
    background-color: #128c7e; 
  }
`;

const WhatsAppIcon = () => {
  return (
    <WhatsAppButton
      href="https://wa.me/+963998026793" 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="تواصل معنا عبر واتساب" 
    >
      <FaWhatsapp />
    </WhatsAppButton>
  );
};

export default WhatsAppIcon;