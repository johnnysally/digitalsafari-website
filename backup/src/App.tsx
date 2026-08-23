import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ChatWidget from './components/chat/ChatWidget';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';
import ServicesPage from './pages/ServicesPage';
import BusinessesPage from './pages/BusinessesPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import GetStartedPage from './pages/GetStartedPage';

const App = () => {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-slate-950">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/how-it-works" element={<HowItWorksPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/services/accommodation" element={<ServicesPage />} />
                        <Route path="/services/food" element={<ServicesPage />} />
                        <Route path="/services/transport" element={<ServicesPage />} />
                        <Route path="/services/experiences" element={<ServicesPage />} />
                        <Route path="/businesses" element={<BusinessesPage />} />
                        <Route path="/faq" element={<FAQPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/get-started" element={<GetStartedPage />} />
                    </Routes>
                </main>
                <Footer />
                <ChatWidget />
            </div>
        </BrowserRouter>
    );
};

export default App;