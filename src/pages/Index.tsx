import BookNowDialog from "@/components/BookNowDialog";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 container mx-auto px-4">
        <div className="guitar-design">
          <div className="guitar-strings">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="guitar-string" />
            ))}
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl text-center font-semibold mb-16">
          Timeless Acoustic Echoes
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
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
        
        <div className="text-center mb-16">
          <BookNowDialog />
        </div>
      </main>
    </div>
  );
};

export default Index;