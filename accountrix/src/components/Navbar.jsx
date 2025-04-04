import React from 'react'
import accountrixLogo from '../assets/accountrix-logo.png'

export default function Navbar() {
    return (
        <nav className="relative z-10 py-4 w-full max-w-7xl flex justify-between items-center px-6">
            <img src={accountrixLogo} alt="Accountrix" className="h-10" />
            <div className="hidden md:flex gap-6">
                <button className="text-white">Our offerings ▼</button>
                <button className="text-white flex items-center gap-1">
                    Accountrix Talent Cloud
                    <span className="bg-red-600 text-white text-xs px-1 py-0.5 rounded">NEW</span> ▼
                </button>
            </div>
            <div className="flex items-center gap-4">
                <button className="hidden md:block bg-white text-blue-700 px-4 py-2 rounded">Buy online</button>
                <button className="text-white text-2xl">🛒</button>
                <button className="text-white text-2xl">☰</button>
            </div>
        </nav>

    )
}
