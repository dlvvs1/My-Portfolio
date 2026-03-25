export default function Navbar({ scrollToSection, refs }) {
    const navLinks = [
        { name: "Home", ref: refs.homeRef },
        { name: "About", ref: refs.aboutRef },
        { name: "Skills", ref: refs.skillsRef },
        { name: "Academics", ref: refs.academicsRef },
        { name: "Projects", ref: refs.projectsRef },
        { name: "Contact", ref: refs.contactRef },
    ];

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-800 px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection(refs.homeRef)}>
                DLVVS
            </h1>

            <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
                {navLinks.map((link) => (
                    <button
                        key={link.name}
                        onClick={() => scrollToSection(link.ref)}
                        className="transition-colors duration-300 text-slate-400 hover:text-blue-400"
                    >
                        {link.name}
                    </button>
                ))}
            </div>
        </nav>
    );
}