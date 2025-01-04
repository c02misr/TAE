import Navbar from "@/components/Navbar";
import { Music, Instagram, Youtube } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="h-screen relative bg-[#2b2b2b] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/39c5267e-214c-479d-b05b-270cd7909281.png" 
            alt="Acoustic guitar" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-white text-right w-full container mx-auto px-4">
          <h1 className="text-7xl md:text-9xl font-semibold mb-4">
            Timeless<br />Acoustic<br />Echoes
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 ml-auto max-w-xl">
            Experience the harmonious blend of classical and contemporary acoustic music
          </p>
        </div>
      </section>

      {/* Meet the Band Section */}
      <section id="trio" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl mb-12 text-center">Meet the Trio</h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {['Tim', 'Annie', 'Eddie'].map((member) => (
                <CarouselItem key={member}>
                  <div className="p-6">
                    <div className="aspect-square bg-muted rounded-lg mb-4"></div>
                    <h3 className="text-2xl font-semibold mb-2">{member}</h3>
                    <p className="text-muted-foreground">......</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
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