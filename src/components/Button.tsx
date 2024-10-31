import React, { ReactNode } from 'react'

type btn = "button" | "submit" | "reset"
const Button = ({ children, className, type, onClick }: { children: ReactNode, className?: string, type: btn, onClick?: () => {} }) => {
    return (
        <button type={type} onClick={onClick} className={`flex text-black font-medium bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded-lg  duration-200 text-lg ${className}`}>
            {children}
        </button>
    )
}

export default Button
