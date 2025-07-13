import Header from '../components/Header';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ArmaniExchangeCoverLetter from "../components/ArmaniExchangeCoverLetter";

export default function Optus() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-12">
            <Header />
            <ArmaniExchangeCoverLetter />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}