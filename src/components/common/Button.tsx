import { ReactNode } from 'react';
import { Button as BSButton } from 'react-bootstrap';

import '@/styles/components/Button.scss';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary';
  size?: 'sm' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  href?: string;
}

const Button = ({
  children,
  variant = 'primary',
  size,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  href,
}: ButtonProps) => {
  return (
    <BSButton
      variant={variant}
      size={size}
      onClick={onClick}
      type={type}
      className={className}
      disabled={disabled}
      href={href}
    >
      {children}
    </BSButton>
  );
};

export default Button;
