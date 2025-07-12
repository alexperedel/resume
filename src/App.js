import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Telstra from './pages/Telstra';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/telstra" element={<Telstra />} />
                <Route path="*" element={<h1>404: Page Not Found</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
