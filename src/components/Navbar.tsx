import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex-1 flex gap-6">
          <button 
            onClick={() => scrollToSection('trio')} 
            className="text-lg hover:text-primary transition-colors"
          >
            Trio
          </button>
          <button 
            onClick={() => scrollToSection('discography')} 
            className="text-lg hover:text-primary transition-colors"
          >
            Discography
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-lg hover:text-primary transition-colors"
          >
            Contact
          </button>
        </div>
        
        <div className="flex-1 text-center">
          <Link to="/" className="text-2xl font-semibold">
            T.A.E
          </Link>
        </div>
        
        <div className="flex-1">
          {/* Empty div to maintain layout */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;