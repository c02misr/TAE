import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full backdrop-blur-sm bg-black/10 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-center">
        <div className="flex gap-12">
          <button 
            onClick={scrollToTop}
            className="text-lg text-white hover:text-primary transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('discography')} 
            className="text-lg text-white hover:text-primary transition-colors"
          >
            Music
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-lg text-white hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-lg text-white hover:text-primary transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;