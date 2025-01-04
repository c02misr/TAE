import { Music } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="h-screen relative bg-[#2b2b2b] flex flex-col items-center justify-start">
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/125ad645-543b-41c1-82d3-ecdafa7bc42b.png" 
          alt="Timeless Acoustic Echoes performing" 
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
      </div>
      
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
  );
};

export default HeroSection;