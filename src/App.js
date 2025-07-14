import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Telstra from './pages/Telstra';
import Optus from "./pages/Optus";
import JbHiFi from "./pages/JbHiFi";
import Travelex from "./pages/Travelex";
import JoTraikos from "./pages/JoTraikos";
import Petbarn from "./pages/Petbarn";
import Armani from "./pages/Armani";
import CalvinKlein from "./pages/CalvinKlein";
import WildRhino from "./pages/WildRhino";
import Gazman from "./pages/Gazman";
import Salvos from "./pages/Salvos";
import Subiaco from "./pages/Subiaco";
import Herdsman from "./pages/Herdsman";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/telstra" element={<Telstra />} />
                <Route path="/optus-letter" element={<Optus />} />
                <Route path="/jbhifi" element={<JbHiFi />} />
                <Route path="/travelex" element={<Travelex />} />
                <Route path="/jotraikos" element={<JoTraikos />} />
                <Route path="/petbarn" element={<Petbarn />} />
                <Route path="/armani" element={<Armani />} />
                <Route path="/calvinklein" element={<CalvinKlein />} />
                <Route path="/wildrhino" element={<WildRhino />} />
                <Route path="/gazman" element={<Gazman />} />
                <Route path="/salvos" element={<Salvos />} />
                <Route path="/subiacorestoration" element={<Subiaco />} />
                <Route path="/herdsmanmarket" element={<Herdsman />} />
                <Route path="*" element={<h1>404: Page Not Found</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
