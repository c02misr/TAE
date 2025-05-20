
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
        
        <h1 className="text-4xl md:text-5xl text-center font-semibold mb-16">Meet the Trio</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {["Tim", "Annie", "Eddie"].map((name, i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  src={`/placeholder.svg`}
                  alt={`${name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold">{name}</h3>
              {name === "Tim" ? (
                <div className="text-lg text-muted-foreground space-y-4">
                  <p>
                    ......
                  </p>
                  <p>
                    Check out Tim's original song on the subject of climate change{" "}
                    <a 
                      href="https://www.youtube.com/watch?v=pAy4Jr5SDwo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      here
                    </a>. Tim remains optimistic that humanity can and will do the right things in the coming decades!
                  </p>
                </div>
              ) : (
                <p className="text-lg text-muted-foreground">
                  ......
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
