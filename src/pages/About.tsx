
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

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
          {[
            {
              name: "Tim",
              bio: "Tim has been playing piano since the age of six and joined the trio in 2018. With a background in classical composition and jazz improvisation, he brings a unique blend of technical precision and creative spontaneity to the group. When he's not performing with the trio, Tim teaches piano at the local conservatory and composes original music for independent films. Check out Tim's original song on the subject of climate change <a href='https://www.youtube.com/watch?v=pAy4Jr5SDwo' target='_blank' rel='noopener noreferrer' className='text-primary underline hover:text-primary/80'>here</a>. Tim remains optimistic that humanity can and will do the right things in the coming decades!"
            },
            {
              name: "Annie",
              bio: "Annie is our brilliant violinist who studied at Juilliard before touring with several world-renowned orchestras. Her passionate playing style and innovative approach to string techniques have become a hallmark of our trio's sound. Annie specializes in bridging classical traditions with contemporary experimentation."
            },
            {
              name: "Eddie",
              bio: "Eddie rounds out our trio with his exceptional cello skills. With over 15 years of professional experience, including five years with the National Symphony Orchestra, Eddie brings depth and warmth to our compositions. His masterful bow technique and emotional expressivity create the foundation upon which many of our pieces are built."
            }
          ].map((person, i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  src={`/placeholder.svg`}
                  alt={`${person.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold">{person.name}</h3>
              <ScrollArea className="h-60">
                <div className="text-lg text-muted-foreground pr-4" dangerouslySetInnerHTML={{ __html: person.bio }} />
              </ScrollArea>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
