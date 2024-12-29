import { Link } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex-1">
          <Link to="/about" className="text-lg hover:text-primary transition-colors">
            About
          </Link>
        </div>
        
        <div className="flex-1 text-center">
          <Link to="/" className="text-2xl font-semibold">
            T.A.E
          </Link>
        </div>
        
        <div className="flex-1 flex justify-end gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
             className="hover:text-primary transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
             className="hover:text-primary transition-colors">
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;