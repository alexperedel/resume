import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Telstra from './pages/Telstra';
import Optus from "./pages/Optus";
import JbHiFi from "./pages/JbHiFi";
import Travelex from "./pages/Travelex";
import JoTraikos from "./pages/JoTraikos";
import Petbarn from "./pages/Petbarn";

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
                <Route path="*" element={<h1>404: Page Not Found</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
