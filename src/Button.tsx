import React from 'react';
import './styles.css'

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className='yob-btn'>
      {children}
    </button>
  );
};

export default Button;