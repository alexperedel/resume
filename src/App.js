import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Programming from './pages/Programming';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/programming" element={<Programming />} />
                <Route path="*" element={<h1>404: Page Not Found</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
