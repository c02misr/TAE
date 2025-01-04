import Navbar from "@/components/Navbar";
import { Music, Instagram, Youtube } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="h-screen relative bg-[#2b2b2b] flex flex-col items-center justify-start">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/125ad645-543b-41c1-82d3-ecdafa7bc42b.png" 
            alt="Timeless Acoustic Echoes performing" 
            className="w-full h-full object-cover animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        </div>
        
        {/* Desktop Logos Container */}
        <div className="absolute top-16 md:top-24 right-4 md:right-8 z-20 hidden md:flex flex-col gap-3 md:gap-4">
          {/* Original Logo */}
          <img 
            src="/lovable-uploads/07d56651-0afb-4355-98b7-a23ef9230ba9.png" 
            alt="TAE Logo" 
            className="w-[120px] md:w-[200px] h-auto object-contain animate-fade-in"
          />
          {/* New Logo */}
          <img 
            src="/lovable-uploads/50a10782-72c0-496c-abc9-819cbfb08d2d.png" 
            alt="TAE Logo Alternative" 
            className="w-[120px] md:w-[200px] h-auto object-contain animate-fade-in"
          />
        </div>

        <div className="relative z-10 text-white pt-28 md:pt-24 container mx-auto px-4">
          <div className="backdrop-blur-md bg-black/20 inline-block p-4 md:p-8 rounded-lg border border-white/10 shadow-2xl animate-scale-in transition-all duration-300 hover:scale-105 hover:bg-black/30">
            <h1 className="text-2xl md:text-7xl font-semibold tracking-wide leading-tight">
              <span className="text-[#bb1c26]">T</span><span className="text-white">imeless</span>{" "}
              <span className="text-[#bb1c26]">A</span><span className="text-white">coustic</span>{" "}
              <span className="text-[#bb1c26]">E</span><span className="text-white">choes</span>
            </h1>
          </div>

          {/* Mobile Logos - More subtle positioning */}
          <div className="md:hidden flex justify-end gap-3 mt-2 opacity-80">
            <img 
              src="/lovable-uploads/07d56651-0afb-4355-98b7-a23ef9230ba9.png" 
              alt="TAE Logo" 
              className="w-[60px] h-auto object-contain animate-fade-in"
            />
            <img 
              src="/lovable-uploads/959f11e7-1d2b-4a09-abf9-55c394a793cc.png" 
              alt="TAE Logo Alternative" 
              className="w-[60px] h-auto object-contain animate-fade-in"
            />
          </div>
        </div>

        <div className="absolute bottom-8 right-0 left-0 md:right-8 md:left-auto max-w-2xl z-10 animate-slide-in-right px-4 md:px-0">
          <div className="backdrop-blur-lg bg-black/30 p-4 md:p-10 rounded-lg border border-white/10 shadow-2xl transition-all duration-300 hover:translate-x-2 hover:bg-black/40">
            <p className="text-base md:text-xl text-white leading-relaxed font-light">
              A trio comprising a unique multi-generational line-up, both in band members and in cover
              song material. We strive to bring our audiences acoustic guitar music blended with beautiful melodies/harmonies found
              in great songs from the 1960s to the 2020s!
            </p>
            <p className="text-sm md:text-lg text-white/90 mt-3 md:mt-6 leading-relaxed">
              Our musical genres include Folk, Folk Rock, Soft Rock, Pop Rock,
              Alternative, Pop, and Jazz Pop. We provide our own PA equipment: Microphones, mic stands, and cables; audio mixing
              board (12-channel Mackie ProFX12v3); two BOSS acoustic amplifiers for projecting stereo (L/R) sound, as mixed in
              the mixing board. Each amp provides 60W of sound.
            </p>
          </div>
        </div>
      </section>

      {/* Discography Section */}
      <section id="discography" className="py-12 md:py-24 bg-[#f5f0ea]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-5xl mb-6 md:mb-12 text-center">Discography</h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/fqu52C6LvE8?start=43"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/wpqk5LnyeUQ?start=3"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-5xl text-center font-semibold mb-8 md:mb-16">Meet the Trio</h2>
          
          <div className="max-w-4xl mx-auto">
            {isMobile && (
              <div className="flex items-center justify-center mb-4 text-muted-foreground">
                <span className="text-sm animate-pulse">swipe</span>
              </div>
            )}
            <Carousel opts={{ loop: true }} className="px-4 md:px-0">
              <CarouselContent>
                {[
                  {
                    name: "Tim",
                    description: "Tim Press was born and raised in Southern California, and lived his entire life in this area. As a child Tim loved music, and became a self-taught musician, beginning with piano (age 11) and guitar (age 14). He played by ear, learned to sing, and relished the great music of the era. Throughout his life Tim dabbled in song writing, played guitar and piano, sang, and thoroughly enjoyed music as a hobby.\n\nAs a teenager, Tim became interested in meteorology, and found joy in learning about the weather and how nature gives rise to the wondrous changes that we all see from day to day. In college Tim majored in atmospheric sciences, and learned the necessary math & physics that underpin these fields. He graduated and went on to a long career in atmospheric sciences in the aerospace industry.\n\nTim now has a second career that focuses on his life-long passion for music. In 2023 Tim began taking advanced lessons with guitar instructor (and now band member) Eddie, and in 2024 at the same music school Tim was fortunate to meet Annabelle and Stacy. With the acoustic guitars and our blended melody/harmony vocals, we knew we had something special. In August 2024, the cover-band Timeless Acoustic Echoes was born.",
                    image: "/lovable-uploads/9a347345-b6e9-4e1e-b34f-b821e8a93715.png"
                  },
                  {
                    name: "Annabelle",
                    description: "Filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler.",
                    image: "/placeholder.svg"
                  },
                  {
                    name: "Eddie",
                    description: "Filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler filler.",
                    image: "/placeholder.svg"
                  }
                ].map((member, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center p-4 md:p-6">
                      <div className="w-48 md:w-1/2 shrink-0">
                        <div className="aspect-square bg-muted rounded-full overflow-hidden border-4 border-primary/20">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 text-left space-y-3">
                        <h3 className="text-xl md:text-3xl font-semibold text-center md:text-left">{member.name}</h3>
                        <div className="h-[250px] md:h-[300px] overflow-y-auto pr-4 custom-scrollbar">
                          <p className="text-base md:text-xl text-muted-foreground leading-relaxed whitespace-pre-line">
                            {member.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="-left-16 bg-white/80 hover:bg-white" />
                <CarouselNext className="-right-16 bg-white/80 hover:bg-white" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-24 bg-[#f5f0ea]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-5xl mb-4 md:mb-8">Contact</h2>
          <p className="text-lg md:text-2xl mb-4 md:mb-8">tae.livemusic.info@gmail.com</p>
          <div className="flex justify-center gap-4 md:gap-6">
            <a href="https://www.instagram.com/timelessacousticechoes/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-2 text-base md:text-lg hover:text-primary transition-colors">
              <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              Instagram
            </a>
            <a href="https://www.youtube.com/@TimelessAcousticEchoes-tae" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-2 text-base md:text-lg hover:text-primary transition-colors">
              <Youtube className="w-5 h-5 md:w-6 md:h-6" />
              YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
