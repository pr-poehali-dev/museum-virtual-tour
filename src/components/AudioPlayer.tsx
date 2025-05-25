import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface AudioPlayerProps {
  title: string;
  duration: string;
  audioText: string;
  className?: string;
}

export default function AudioPlayer({
  title,
  duration,
  audioText,
  className,
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  const handlePlayAudio = () => {
    if (isPlaying) {
      // Останавливаем воспроизведение
      setIsPlaying(false);
      if (speechRef.current) {
        speechSynthesis.cancel();
      }
      setCurrentTime(0);
    } else {
      // Начинаем воспроизведение
      setIsPlaying(true);

      // Используем Web Speech API для озвучивания текста
      const utterance = new SpeechSynthesisUtterance(audioText);
      utterance.lang = "ru-RU";
      utterance.rate = 0.9;
      utterance.pitch = 1;

      utterance.onend = () => {
        setIsPlaying(false);
        setCurrentTime(0);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
        setCurrentTime(0);
      };

      speechRef.current = utterance;
      speechSynthesis.speak(utterance);
    }
  };

  // Эффект для обновления времени воспроизведения
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <Card className={className}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
            <Icon name="Headphones" size={20} />
            {title}
          </h3>
          <span className="text-sm text-gray-600">{duration}</span>
        </div>

        <p className="text-gray-700 mb-4 italic">{audioText}</p>

        <div className="flex items-center gap-4">
          <Button
            onClick={handlePlayAudio}
            size="sm"
            className="flex items-center gap-2"
          >
            <Icon name={isPlaying ? "Pause" : "Play"} size={16} />
            {isPlaying ? "Пауза" : "Воспроизвести"}
          </Button>

          {isPlaying && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Icon name="Volume2" size={16} />
              <span>{formatTime(currentTime)}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
