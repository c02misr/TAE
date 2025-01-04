import Navbar from "@/components/Navbar";
import { Music, Instagram, Youtube } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
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
        <div className="relative z-10 text-white pt-24 container mx-auto px-4">
          <div className="backdrop-blur-md bg-black/20 inline-block p-8 rounded-lg border border-white/10 shadow-2xl animate-scale-in">
            <h1 className="text-4xl md:text-7xl font-semibold whitespace-nowrap tracking-wide">
              Timeless Acoustic Echoes
            </h1>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 max-w-2xl z-10 animate-slide-in-right">
          <div className="backdrop-blur-lg bg-black/30 p-10 rounded-lg border border-white/10 shadow-2xl">
            <p className="text-white text-xl leading-relaxed font-light">
              A trio comprising a unique multi-generational line-up, both in band members and in cover
              song material. We strive to bring our audiences acoustic guitar music blended with beautiful melodies/harmonies found
              in great songs from the 1960s to the 2020s!
            </p>
            <p className="text-white/90 text-lg mt-6 leading-relaxed">
              Our musical genres include Folk, Folk Rock, Soft Rock, Pop Rock,
              Alternative, Pop, and Jazz Pop. We provide our own PA equipment: Microphones, mic stands, and cables; audio mixing
              board (12-channel Mackie ProFX12v3); two BOSS acoustic amplifiers for projecting stereo (L/R) sound, as mixed in
              the mixing board. Each amp provides 60W of sound.
            </p>
          </div>
        </div>
      </section>

      {/* Discography Section */}
      <section id="discography" className="py-24 bg-[#f5f0ea]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl mb-12 text-center">Discography</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/fqu52C6LvE8?start=43"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
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
      <section id="trio" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center font-semibold mb-16">Meet the Trio</h2>
          
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
                <p className="text-lg text-muted-foreground">
                  ......
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#f5f0ea]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-8">Contact</h2>
          <p className="text-2xl mb-8">Taeinfo@gmail.com</p>
          <div className="flex justify-center gap-6">
            <a href="https://www.instagram.com/timelessacousticechoes/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-2 text-lg hover:text-primary transition-colors">
              <Instagram className="w-6 h-6" />
              Instagram
            </a>
            <a href="https://www.youtube.com/@TimelessAcousticEchoes-tae" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-2 text-lg hover:text-primary transition-colors">
              <Youtube className="w-6 h-6" />
              YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
