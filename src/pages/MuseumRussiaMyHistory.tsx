import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function MuseumRussiaMyHistory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <Icon name="ArrowLeft" size={20} />
              Назад к музеям
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">
              Россия моя история
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div>
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop"
              alt="Россия моя история"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Мультимедийный исторический парк
            </h2>
            <p className="text-lg text-gray-600">
              Уникальное пространство, где история России оживает с помощью
              современных технологий. Познакомьтесь с богатым наследием народа
              Саха и узнайте о ключевых событиях российской истории.
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Icon name="MapPin" size={16} />
                Республика Саха (Якутия)
              </span>
              <span className="flex items-center gap-1">
                <Icon name="Clock" size={16} />
                60 мин
              </span>
              <span className="flex items-center gap-1">
                <Icon name="Image" size={16} />
                16 экспонатов
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Crown" size={20} className="text-red-600" />
                История Российской империи
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Интерактивные экспонаты о великих правителях и событиях
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Mountain" size={20} className="text-blue-600" />
                Культура народа Саха
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Традиции, обычаи и духовное наследие якутского народа
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Zap" size={20} className="text-purple-600" />
                Современная Россия
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Достижения науки, технологий и культуры XXI века
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Users" size={20} className="text-green-600" />
                Герои Якутии
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Выдающиеся личности, прославившие родной край
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Gem" size={20} className="text-orange-600" />
                Природные богатства
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Алмазы, золото и другие сокровища якутской земли
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Headphones" size={20} className="text-indigo-600" />
                Аудиогид
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Профессиональное сопровождение на русском и якутском языках
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Начать экскурсию
          </Button>
        </div>
      </main>
    </div>
  );
}
