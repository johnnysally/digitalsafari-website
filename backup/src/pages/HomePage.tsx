import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import HowItWorks from '../components/sections/HowItWorks';
import CustomerCTA from '../components/sections/CustomerCTA';
import BusinessCTA from '../components/sections/BusinessCTA';
import FAQ from '../components/sections/FAQ';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Services />
            <HowItWorks />
            <CustomerCTA />
            <BusinessCTA />
            <FAQ />
        </>
    );
};

export default HomePage;