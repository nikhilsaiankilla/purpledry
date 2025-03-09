import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href: string; 
  className?: string;
  ariaLabel?: string; 
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  className = "",
  ariaLabel,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`px-3 py-2 rounded-md bg-primary text-white text-sm font-normal hover:bg-primary cursor-pointer inline-block ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
