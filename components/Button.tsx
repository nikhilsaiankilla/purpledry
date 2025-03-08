import React from 'react'

const Button = ({
  children,
  className = "" 
}: {
  children: React.ReactNode;
  className?: string; 
}) => {
  return (
    <button className={`px-3 py-2 rounded-md bg-primary text-white text-sm font-normal hover:bg-primary cursor-pointer ${className}`}>
      {children}
    </button>
  )
}

export default Button;
