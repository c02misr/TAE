import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BioSectionProps {
  onPrevious: () => void;
  onNext: () => void;
}

const BioSection = ({ onPrevious, onNext }: BioSectionProps) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-start relative">
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 hidden md:flex"
            onClick={onPrevious}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="w-full md:w-1/2">
            <div className="rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl transition-transform duration-300 hover:scale-105">
              <img 
                src="/lovable-uploads/ca4848ce-dccc-46aa-8158-349cb4009805.png"
                alt="Tim"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-semibold mb-6">Tim</h2>
            <ScrollArea className="h-[400px] w-full rounded-md border p-6">
              <div className="text-lg text-muted-foreground space-y-4">
                <p>
                  Tim was born and raised in Southern California, and lived his entire life in this area. As a child Tim loved music, and became a self-taught
                  musician, beginning with piano (age 11) and guitar (age 14). He played by ear, learned to sing, and relished the great music of the era. Throughout
                  his life Tim dabbled in song writing, played guitar and piano, sang, and thoroughly enjoyed music as a hobby.
                </p>
                <p>
                  As a teenager, Tim became interested in meteorology, and found joy in learning about the weather and how nature gives rise to the wondrous
                  changes that we all see from day to day. In college Tim majored in atmospheric sciences, and learned the necessary math & physics that underpin
                  these fields. He graduated and went on to a long career in atmospheric sciences in the aerospace industry.
                </p>
                <p>
                  Tim now has a second career that focuses on his life-long passion for music. In 2023 Tim began taking advanced lessons with guitar instructor (and
                  now band member) Eddie, and in 2024 at the same music school Tim was fortunate to meet Annabelle and Stacy. With the acoustic guitars and our
                  blended melody/harmony vocals, we knew we had something special. In August 2024, the cover-band Timeless Acoustic Echoes was born.
                </p>
              </div>
            </ScrollArea>
          </div>

          <Button 
            variant="outline" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 hidden md:flex"
            onClick={onNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BioSection;