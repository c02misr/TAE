import BookNowDialog from "@/components/BookNowDialog";
import Navbar from "@/components/Navbar";
import { Music } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="h-screen relative bg-[#f5f0ea] flex items-center justify-center">
        <div className="music-notes absolute w-full">
          {[...Array(5)].map((_, i) => (
            <Music key={i} className="music-note" />
          ))}
        </div>
        <h1 className="text-7xl md:text-9xl font-semibold mb-16 relative z-10">
          Timeless Acoustic Echoes
        </h1>
      </section>

      {/* Meet the Band Section */}
      <section className="py-24 bg-white">
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
      <section className="py-24 bg-[#f5f0ea]">
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

      {/* Tour Dates Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl mb-12 text-center">Tour Dates</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              {[
                { date: "12.24", location: "Copenhagen, Denmark" },
                { date: "12.26", location: "Berlin, Germany" },
                { date: "12.28", location: "Paris, France" }
              ].map((event) => (
                <div key={event.date} className="flex items-center justify-between p-4 border-b">
                  <div>
                    <span className="text-xl font-semibold">{event.date}</span>
                    <p className="text-muted-foreground">{event.location}</p>
                  </div>
                  <BookNowDialog />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#f5f0ea]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-8">Contact</h2>
          <p className="text-2xl mb-8">Taeinfo@gmail.com</p>
          <div className="flex justify-center gap-4">
            <a href="https://www.instagram.com/timelessacousticechoes/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-lg hover:text-primary transition-colors">
              Instagram
            </a>
            <a href="https://www.youtube.com/@TimelessAcousticEchoes-tae" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-lg hover:text-primary transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;