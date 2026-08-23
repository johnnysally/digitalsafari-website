import { useParams } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

const allServices = [
    {
        id: 'accommodation',
        title: 'Accommodation',
        description: 'Discover and connect with hotels, BnBs, apartments, lodges, guest houses, and vacation homes.',
        icon: '🏨',
        features: ['Hotel discovery', 'Room browsing', 'Booking management', 'Property listings'],
    },
    {
        id: 'food',
        title: 'Food',
        description: 'Discover restaurants, menus, and food-ordering options available through the ecosystem.',
        icon: '🍽️',
        features: ['Restaurant discovery', 'Menu browsing', 'Food ordering', 'Delivery tracking'],
    },
    {
        id: 'transport',
        title: 'Transport',
        description: 'Connect customers with available transportation services for their journey.',
        icon: '🚗',
        features: ['Vehicle discovery', 'Ride booking', 'Shuttle services', 'Live tracking'],
    },
    {
        id: 'experiences',
        title: 'Experiences',
        description: 'Discover destinations, activities, attractions, and other travel experiences.',
        icon: '🌍',
        features: ['Destination guides', 'Activity discovery', 'Tourism experiences', 'Local recommendations'],
    },
];

const ServicesPage = () => {
    const { id } = useParams<{ id: string }>();

    if (id) {
        const service = allServices.find((s) => s.id === id);
        if (!service) return <div className="pt-32 text-center text-slate-400">Service not found.</div>;

        return (
            <div className="pt-32 pb-24 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="text-6xl mb-6">{service.icon}</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
                    <p className="text-lg text-slate-400 mb-8">{service.description}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
                    {service.features.map((feature) => (
                        <Card key={feature}>
                            <p className="text-white font-medium">✓ {feature}</p>
                        </Card>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 px-4">
            <SectionHeader
                title="Our Services"
                subtitle="Connected services for every part of your journey."
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
                {allServices.map((service) => (
                    <Card key={service.id} hover className="text-center">
                        <div className="text-5xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                        <p className="text-sm text-slate-400">{service.description}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;