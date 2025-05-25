import { useNavigate } from "react-router-dom";

export const useMuseumNavigation = () => {
  const navigate = useNavigate();

  const handleStartTour = (museumName: string) => {
    const routes: Record<string, string> = {
      "Государственный Эрмитаж": "/museum/hermitage",
      "Ленские столбы": "/museum/lenskyPillars",
      Лувр: "/museum/louvre",
    };

    const route = routes[museumName];
    if (route) {
      navigate(route);
    } else {
      alert(`Скоро откроется экскурсия по ${museumName}!`);
    }
  };

  return { handleStartTour };
};
