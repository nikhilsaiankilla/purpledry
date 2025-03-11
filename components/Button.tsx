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
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`px-3 py-2 rounded-md bg-primary text-white hover:bg-transparent outline-1 hover:text-primary hover:outline-primary text-sm font-normal transition-all duration-150 ease-in-out cursor-pointer inline-block ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
