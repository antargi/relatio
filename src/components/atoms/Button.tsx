import React from 'react';

interface ButtonProps {
  disabled?: boolean;
  focus?: boolean;
  pressed?: boolean;
  warning?: boolean;
  error?: boolean;
  info?: boolean;
  primary?: boolean;
  secondary?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  focus,
  pressed,
  warning,
  error,
  info,
  primary,
  secondary,
  onClick,
}) => {
  console.log('primary', primary);
  let buttonClasses = '';

  if (disabled) {
    buttonClasses += 'opacity-50 cursor-not-allowed';
  } else {
    if (focus) {
      buttonClasses += 'focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';
    }
    if (pressed) {
      buttonClasses += 'active:bg-gray-50';
    }
    if (warning) {
      buttonClasses += 'bg-yellow-500 hover:bg-yellow-600';
    }
    if (error) {
      buttonClasses += 'bg-red-500 hover:bg-red-600';
    }
    if (info) {
      buttonClasses += 'bg-blue-500 hover:bg-blue-600';
    }
    if (primary) {
      buttonClasses += 'bg-fuchsia hover:bg-fuchsia-dark';
    }
    if (secondary) {
      buttonClasses += 'bg-gray-300 text-gray-700 hover:bg-gray-400';
    }
    buttonClasses += ' py-2 px-8 rounded';
  }

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
