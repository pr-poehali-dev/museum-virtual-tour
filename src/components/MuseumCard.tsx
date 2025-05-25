import { Museum } from "@/types/museum";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface MuseumCardProps {
  museum: Museum;
  onStartTour: (museumName: string) => void;
}

const MuseumCard = ({ museum, onStartTour }: MuseumCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
      <div className="relative overflow-hidden">
        <img
          src={museum.image}
          alt={museum.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-medium text-gray-700">
            {museum.duration}
          </span>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
          {museum.name}
        </CardTitle>
        <CardDescription className="text-purple-600 font-medium flex items-center gap-1">
          <Icon name="MapPin" size={16} />
          {museum.location}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-gray-600 mb-4 leading-relaxed">
          {museum.description}
        </p>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Icon name="Image" size={16} />
              <span>{museum.exhibits} экспонатов</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Headphones" size={16} />
              <span>Аудио-гид</span>
            </div>
          </div>
        </div>

        <Button
          onClick={() => onStartTour(museum.name)}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium py-3 rounded-lg transition-all duration-300 group-hover:shadow-lg"
        >
          <Icon name="Play" size={20} className="mr-2" />
          Начать экскурсию
        </Button>
      </CardContent>
    </Card>
  );
};

export default MuseumCard;
