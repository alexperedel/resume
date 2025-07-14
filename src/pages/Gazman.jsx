import Header from '../components/Header';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import GazmanCoverLetter from "../components/GazmanCoverLetter";

export default function Optus() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-12">
            <Header />
            <GazmanCoverLetter />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}