import React from 'react'
import accountrixLogo from '../assets/accountrix-logo.png'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../components/ui/navigation-menu"
export default function Navbar({ backgroundColor }) {

    
    return (
        <nav className={`relative z-10 py-4 w-full   flex justify-between items-center px-6 ${backgroundColor}`}>
        
            <img src={accountrixLogo} alt="Accountrix" className="h-14" />
            <div className="hidden md:flex gap-6">
                <button className="text-white">Our offerings ▼</button>
                <button className="text-white flex items-center gap-1">
                    Accountrix Talent Cloud
                    <span className="bg-red-600 text-white text-xs px-1 py-0.5 rounded">NEW</span> ▼
                </button>
            </div>
            <div className="flex items-center gap-4">
                <button className="hidden md:block text-white px-4 py-2 rounded">📞 +91 9839384799</button>
                <button className="text-white text-2xl">☰</button>
            </div>
        </nav>

    )
}
