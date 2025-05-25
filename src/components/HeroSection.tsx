import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Виртуальные Экскурсии
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed">
            Откройте для себя величайшие музеи мира, не выходя из дома.
            Погрузитесь в историю и искусство с аудио-гидом.
          </p>
          <div className="flex items-center justify-center gap-6 text-purple-200">
            <div className="flex items-center gap-2">
              <Icon name="Headphones" size={20} />
              <span>Аудио-рассказы</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Camera" size={20} />
              <span>HD качество</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Globe" size={20} />
              <span>3 музея</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
