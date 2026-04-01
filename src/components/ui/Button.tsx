import { Link } from 'react-router-dom';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  to?: string;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  asLink,
  to,
  className = '',
  children,
  ...props
}) => {
  const baseClasses = `btn btn-${variant} btn-${size} ${className}`;

  if (asLink && to) {
    return (
      <Link to={to} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
