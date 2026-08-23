import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

const services = [
    {
        id: 'accommodation',
        title: 'Accommodation',
        description: 'Discover hotels, BnBs, apartments, lodges, guest houses, and vacation homes.',
        icon: '🏨',
        link: '/services/accommodation',
    },
    {
        id: 'food',
        title: 'Food',
        description: 'Explore restaurants, menus, and food-ordering options available through the platform.',
        icon: '🍽️',
        link: '/services/food',
    },
    {
        id: 'transport',
        title: 'Transport',
        description: 'Connect with available transportation services for your journey.',
        icon: '🚗',
        link: '/services/transport',
    },
    {
        id: 'experiences',
        title: 'Experiences',
        description: 'Discover destinations, activities, attractions, and other travel experiences.',
        icon: '🌍',
        link: '/services/experiences',
    },
];

const Services = () => {
    return (
        <section className="py-24 px-4">
            <SectionHeader
                title="Connected services for your journey"
                subtitle="Everything you need — accommodation, food, transport, and experiences — in one ecosystem."
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
                {services.map((service) => (
                    <Card key={service.id} hover className="text-center">
                        <div className="text-5xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                        <p className="text-sm text-slate-400 mb-4">{service.description}</p>
                        <Link to={service.link} className="text-emerald-400 text-sm font-semibold hover:text-emerald-300">
                            Learn More →
                        </Link>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Services;