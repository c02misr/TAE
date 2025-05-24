
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
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/9a347345-b6e9-4e1e-b34f-b821e8a93715.png"
                alt="Tim"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold">Tim</h3>
            <div className="text-lg text-muted-foreground max-h-[350px] overflow-y-auto pr-2">
              <p className="whitespace-pre-line">
                Tim Press was born and raised in Southern California, and lived his entire life in this area. As a child Tim loved music, and became a self-taught musician, beginning with piano (age 11) and guitar (age 14). He played by ear, learned to sing, and relished the great music of the era. Throughout his life Tim dabbled in song writing, played guitar and piano, sang, and thoroughly enjoyed music as a hobby.

                As a teenager, Tim became interested in meteorology, and found joy in learning about the weather and how nature gives rise to the wondrous changes that we all see from day to day. In college Tim majored in atmospheric sciences, and learned the necessary math & physics that underpin these fields. He graduated and went on to a long career in atmospheric sciences in the aerospace industry.

                Tim now has a second career that focuses on his life-long passion for music. In 2023 Tim began taking advanced lessons with guitar instructor (and now band member) Eddie, and in 2024 at the same music school Tim was fortunate to meet Annabelle and Stacy. With the acoustic guitars and our blended melody/harmony vocals, we knew we had something special. In August 2024, the cover-band Timeless Acoustic Echoes was born.
                
                Check out Tim's original song on the subject of climate change 
                <Button 
                  variant="link" 
                  className="px-0 py-0 h-auto text-primary font-medium underline decoration-2 decoration-primary hover:text-primary/80 hover:decoration-primary/80"
                  asChild
                >
                  <a href="https://www.youtube.com/watch?v=pAy4Jr5SDwo" target="_blank" rel="noopener noreferrer">
                    here
                  </a>
                </Button>
                . Tim remains optimistic that humanity can and will do the right things in the coming decades!
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/3fc45c5d-5fad-4c50-b33f-bdc86015ad34.png"
                alt="Annabelle"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold">Annabelle</h3>
            <div className="text-lg text-muted-foreground max-h-[350px] overflow-y-auto pr-2">
              <p className="whitespace-pre-line">
                Annabelle Lee is an aspiring musician, singer-songwriter. Music has been intertwined with her life from a young age. Starting with singing, and eventually progressing into instruments like the guitar, drums, ukulele.

                Annabelle has been in choir every year since 4th grade, including Honor Choir starting in 6th grade.

                Countless music lessons, rehearsals, summer camps, and performances later, Annabelle is now fortunate enough to be able to sing with Timeless Acoustic Echoes.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/c879c558-f267-4b69-a8d6-badde487180b.png"
                alt="Eddie"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold">Eddie</h3>
            <div className="text-lg text-muted-foreground max-h-[350px] overflow-y-auto pr-2">
              <p className="whitespace-pre-line">
                Eddie Oropeza is a lead guitarist and professional musician in multiple bands. Eddie plays songs ranging the full spectrum from mellow folk and acoustic ballads to the highest energy lead guitar parts in modern punk rock/thrash bands. If he's not on a national or an international tour, or at a gig somewhere in Southern California, Eddie spends time as an accomplished guitar teacher, with students ranging in age from the very young to the most senior of the boomers. Eddie's talent as a guitarist, bassist, and ukulele player, and his patience when teaching all skill levels, is a unique combination that Timeless Acoustics Echoes is fortunate to have!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
