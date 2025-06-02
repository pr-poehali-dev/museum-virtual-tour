import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import MuseumHermitage from "@/pages/MuseumHermitage";
import MuseumLenskyPillars from "@/pages/MuseumLenskyPillars";
import MuseumLouvre from "@/pages/MuseumLouvre";
import MuseumRussiaMyHistory from "@/pages/MuseumRussiaMyHistory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/museum/hermitage" element={<MuseumHermitage />} />
        <Route path="/museum/lenskyPillars" element={<MuseumLenskyPillars />} />
        <Route path="/museum/louvre" element={<MuseumLouvre />} />
        <Route
          path="/museum/russiaMyHistory"
          element={<MuseumRussiaMyHistory />}
        />
      </Routes>
    </Router>
  );
}

export default App;
