import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import MuseumHermitage from "@/pages/MuseumHermitage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/museum/hermitage" element={<MuseumHermitage />} />
      </Routes>
    </Router>
  );
}

export default App;
