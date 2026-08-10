import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ scrollToSection, refs }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", ref: refs.homeRef },
        { name: "About", ref: refs.aboutRef },
        { name: "Skills", ref: refs.skillsRef },
        { name: "Experience", ref: refs.experienceRef },
        { name: "Academics", ref: refs.academicsRef },
        { name: "Projects", ref: refs.projectsRef },
        { name: "Contact", ref: refs.contactRef },
    ];

    const handleNavClick = (ref) => {
        scrollToSection(ref);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800 px-4 sm:px-8 py-4 flex justify-between items-center transition-all">
            {/* Logo */}
            <h1 
                className="text-xl sm:text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent cursor-pointer select-none" 
                onClick={() => handleNavClick(refs.homeRef)}
            >
                DLVVS
            </h1>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-medium tracking-wide">
                {navLinks.map((link) => (
                    <button
                        key={link.name}
                        onClick={() => handleNavClick(link.ref)}
                        className="transition-colors duration-300 text-slate-400 hover:text-blue-400 font-semibold"
                    >
                        {link.name}
                    </button>
                ))}
            </div>

            {/* Mobile Hamburger Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-slate-300 hover:text-white rounded-xl focus:outline-none bg-slate-800/60 border border-slate-700/60"
                aria-label="Toggle Navigation Menu"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Dropdown Drawer */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-slate-900/95 border-b border-slate-800 backdrop-blur-xl p-6 flex flex-col space-y-4 md:hidden shadow-2xl animate-in slide-in-from-top duration-300">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleNavClick(link.ref)}
                            className="text-left py-2 px-4 rounded-xl text-base font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all border border-transparent hover:border-slate-700/50"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
}