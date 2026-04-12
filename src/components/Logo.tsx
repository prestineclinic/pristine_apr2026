import React from 'react';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className, size = 40 }) => {
  return (
    <img
      src="/images/logo.png"
      alt="Pristine Clinic"
      className={cn("object-contain", className)}
      style={{ width: size, height: size }}
    />
  );
};
