import Navbar from "@/components/Navbar";
import { Music, Instagram, Youtube } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

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
        
        {/* Logo */}
        <div className="absolute top-24 right-8 z-20 flex flex-col items-end gap-4">
          <img 
            src="/lovable-uploads/07d56651-0afb-4355-98b7-a23ef9230ba9.png" 
            alt="TAE Logo" 
            className="w-[200px] h-auto object-contain animate-fade-in"
          />
          <img 
            src="/lovable-uploads/b5d0d494-003a-4cd8-bfa8-4490b82f6a62.png" 
            alt="TAE Logo Secondary" 
            className="w-[150px] h-auto object-contain animate-fade-in"
          />
        </div>

        <div className="relative z-10 text-white pt-24 container mx-auto px-4">
          <div className="backdrop-blur-md bg-black/20 inline-block p-8 rounded-lg border border-white/10 shadow-2xl animate-scale-in transition-all duration-300 hover:scale-105 hover:bg-black/30">
            <h1 className="text-4xl md:text-7xl font-semibold whitespace-nowrap tracking-wide">
              <span className="text-[#bb1c26]">T</span><span className="text-white">imeless</span>{" "}
              <span className="text-[#bb1c26]">A</span><span className="text-white">coustic</span>{" "}
              <span className="text-[#bb1c26]">E</span><span className="text-white">choes</span>
            </h1>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 max-w-2xl z-10 animate-slide-in-right">
          <div className="backdrop-blur-lg bg-black/30 p-10 rounded-lg border border-white/10 shadow-2xl transition-all duration-300 hover:translate-x-2 hover:bg-black/40">
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

      {/* About Tim Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3">
              <div className="rounded-full overflow-hidden border-4 border-primary/20">
                <img 
                  src="/lovable-uploads/ca4848ce-dccc-46aa-8158-349cb4009805.png"
                  alt="Tim Press"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-semibold mb-6">Tim Press</h2>
              <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                <div className="text-lg text-muted-foreground space-y-4">
                  <p>
                    Tim Press was born and raised in Southern California, and lived his entire life in this area. As a child Tim loved music, and became a self-taught
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
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center font-semibold mb-16">Meet the Trio</h2>
          
          <div className="max-w-4xl mx-auto">
            <Carousel opts={{ loop: true }}>
              <CarouselContent>
                {[
                  {
                    name: "Tim",
                    description: "Tim Press was born and raised in Southern California, and lived his entire life in this area. As a child Tim loved music, and became a self-taught musician, beginning with piano (age 11) and guitar (age 14). He played by ear, learned to sing, and relished the great music of the era. Throughout his life Tim dabbled in song writing, played guitar and piano, sang, and thoroughly enjoyed music as a hobby.",
                    image: "/lovable-uploads/ca4848ce-dccc-46aa-8158-349cb4009805.png"
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
                    <div className="flex flex-col md:flex-row gap-8 items-center p-6">
                      <div className="w-full md:w-1/2">
                        <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 text-left space-y-4">
                        <h3 className="text-3xl font-semibold">{member.name}</h3>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                          {member.description}
                        </p>
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
