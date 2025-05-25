import HeroSection from "@/components/HeroSection";
import MuseumCard from "@/components/MuseumCard";
import FeaturesSection from "@/components/FeaturesSection";
import { museums } from "@/data/museums";
import { useMuseumNavigation } from "@/hooks/useMuseumNavigation";

const Index = () => {
  const { handleStartTour } = useMuseumNavigation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <HeroSection />

      {/* Museums Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Выберите музей для экскурсии
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Каждая экскурсия включает уникальные экспонаты с профессиональными
            аудио-комментариями
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {museums.map((museum) => (
            <MuseumCard
              key={museum.id}
              museum={museum}
              onStartTour={handleStartTour}
            />
          ))}
        </div>
      </section>

      <FeaturesSection />
    </div>
  );
};

export default Index;
