import React from "react";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Виртуальные музеи мира</h1>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Исследуйте величайшие музеи планеты не выходя из дома. Погрузитесь в
            мир искусства, истории и культуры.
          </p>
          <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors">
            Начать путешествие
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Почему выбирают нас
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Globe" size={32} className="text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Музеи всего мира
              </h4>
              <p className="text-gray-600 text-sm">
                Более 100 известных музеев из разных стран
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Eye" size={32} className="text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Высокое качество
              </h4>
              <p className="text-gray-600 text-sm">
                HD изображения и виртуальные туры 360°
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Доступно 24/7
              </h4>
              <p className="text-gray-600 text-sm">
                Посещайте музеи в любое удобное время
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Museums Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Популярные музеи
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Эрмитаж */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=400&h=300&fit=crop"
                alt="Эрмитаж"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Эрмитаж
                </h3>
                <p className="text-gray-600 mb-4">
                  Один из крупнейших и самых значительных художественных и
                  культурно-исторических музеев мира
                </p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
                  Посетить виртуально
                </button>
              </div>
            </div>

            {/* Лувр */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=400&h=300&fit=crop"
                alt="Лувр"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Лувр</h3>
                <p className="text-gray-600 mb-4">
                  Самый посещаемый музей мира и памятник архитектуры. Дом для
                  Моны Лизы и тысяч шедевров
                </p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
                  Посетить виртуально
                </button>
              </div>
            </div>

            {/* Ленские столбы */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
                alt="Ленские столбы"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Ленские столбы
                </h3>
                <p className="text-gray-600 mb-4">
                  Природный парк в России, объект Всемирного наследия ЮНЕСКО с
                  уникальными скальными образованиями
                </p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
                  Посетить виртуально
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
