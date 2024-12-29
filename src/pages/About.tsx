import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <Link 
          to="/" 
          className="absolute top-20 left-4 md:left-8 p-2 hover:text-primary transition-colors"
          aria-label="Back to home"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
        
        <h1 className="text-4xl md:text-5xl text-center font-semibold mb-16">About Us</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  src={`/placeholder.svg`}
                  alt={`Band member ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold">Band Member {i}</h3>
              <p className="text-lg text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;