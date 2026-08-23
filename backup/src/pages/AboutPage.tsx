import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

const values = [
    { title: 'Customer First', description: 'Every decision starts with the traveler and business partner in mind.', icon: '🤝' },
    { title: 'Innovation', description: 'Building technology that simplifies travel and hospitality.', icon: '💡' },
    { title: 'Trust', description: 'Reliable, transparent, and secure for everyone involved.', icon: '🛡️' },
    { title: 'Accessibility', description: 'Making travel services available to more people and businesses.', icon: '🌍' },
    { title: 'Local Impact', description: 'Supporting African businesses and communities to grow digitally.', icon: '📈' },
    { title: 'Excellence', description: 'Committed to quality in every part of the experience.', icon: '⭐' },
];

const AboutPage = () => {
    return (
        <div className="pt-32 pb-24 px-4">
            <SectionHeader
                title="About DigitalSafari"
                subtitle="Building a connected digital ecosystem for travel and hospitality across Africa."
            />

            <div className="mt-16 max-w-3xl mx-auto space-y-12">
                <section>
                    <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
                    <p className="text-slate-400 leading-relaxed">
                        DigitalSafari was created to solve the problem of fragmented travel and hospitality services.
                        Travelers often need separate platforms for accommodation, food, transportation, and experiences.
                        Businesses operate across disconnected channels and struggle to reach customers digitally.
                    </p>
                    <p className="text-slate-400 leading-relaxed mt-4">
                        DigitalSafari connects these experiences through one platform — making discovery, booking,
                        ordering, and management simpler for everyone.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                    <p className="text-slate-400 leading-relaxed">
                        To make travel and hospitality services easier to discover, access, and connect through technology.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                    <p className="text-slate-400 leading-relaxed">
                        To build a connected digital ecosystem for travel and hospitality across Africa.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-white mb-6">Our Values</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {values.map((value) => (
                            <Card key={value.title}>
                                <div className="text-3xl mb-3">{value.icon}</div>
                                <h4 className="font-semibold text-white mb-1">{value.title}</h4>
                                <p className="text-sm text-slate-400">{value.description}</p>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;