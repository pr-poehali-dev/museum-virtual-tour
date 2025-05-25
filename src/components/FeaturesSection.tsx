import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Headphones",
      title: "Профессиональный аудио-гид",
      description: "Экспертные рассказы о каждом экспонате от искусствоведов",
    },
    {
      icon: "Zap",
      title: "Интерактивность",
      description: "Управляйте темпом экскурсии и изучайте детали",
    },
    {
      icon: "Clock",
      title: "Доступно 24/7",
      description: "Посещайте музеи в любое удобное время",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Почему выбирают наши экскурсии?
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name={feature.icon as any}
                  size={32}
                  className="text-purple-600"
                />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
