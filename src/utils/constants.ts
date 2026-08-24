export interface NavItem {
    label: string;
    href: string;
}

export const NAV_ITEMS: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Services", href: "/services" },
    { label: "For Businesses", href: "/businesses" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
];

export const SERVICES_DATA = [
    {
        id: "accommodation",
        number: "01",
        badge: "ACCOMMODATION",
        count: "60+",
        title: "Find your perfect place to stay.",
        subtitle: "Explore accommodation options across Kenya—from hotels to BnBs and lodges—and book through our seamless platform.",
        description: "DigitalSafari connects you with verified hotels, BnBs, lodges, guest houses, and holiday apartments. Filter by location, budget, and amenities to find your ideal getaway.",
        features: [
            "Explore accommodation options directly from your smartphone.",
            "Filter easily by destination, dates, and amenities.",
            "Save favorite options and compare side by side.",
            "Manage bookings directly through the customer app."
        ],
        ctaText: "EXPLORE ACCOMMODATION →",
        href: "/services/accommodation",
        pills: ["Hotels", "BnBs", "Apartments", "Lodges"],
        locations: ["Naivasha", "Nakuru", "Nairobi", "Mombasa"]
    },
    {
        id: "food",
        number: "02",
        badge: "FOOD & DINING",
        count: "45+",
        title: "Discover food wherever you are.",
        subtitle: "Discover restaurants, menus, and meals with easy food ordering options directly through the DigitalSafari platform.",
        description: "Whether you want dining recommendations near Lake Naivasha or quick meal delivery to your lodge, DigitalSafari puts top local menus at your fingertips.",
        features: [
            "Browse menus and order from top local restaurants",
            "Choose takeout or delivery options",
            "Pay directly through DigitalSafari platform",
            "Track food orders in real time"
        ],
        ctaText: "EXPLORE FOOD & DINING →",
        href: "/services/food",
        pills: ["Restaurants", "Local Cuisine", "Delivery", "Dine-in"],
        locations: ["Naivasha Town", "Kariandusi", "Nakuru CBD"]
    },
    {
        id: "transport",
        number: "03",
        badge: "TRANSPORTATION",
        count: "40+",
        title: "Get there without the hassle.",
        subtitle: "Connect with our operators to make your journey from start to finish easy—find taxis, shuttles, and transportation services all in one DigitalSafari platform.",
        description: "Reliable ground transport is vital for travel. Book local taxis, inter-city shuttles, car rentals, and safari vehicles directly through our verified partner network.",
        features: [
            "Find transportation options wherever you choose",
            "Connect with verified providers in right destination",
            "Multiple vehicle and transit options available",
            "Manage transport booking through the customer app"
        ],
        ctaText: "EXPLORE TRANSPORT →",
        href: "/services/transport",
        pills: ["Taxis", "Shuttles", "Car Hire", "Airport Transfers"],
        locations: ["Nairobi-Naivasha Route", "Nakuru Shuttles", "Airport Pickups"]
    },
    {
        id: "experiences",
        number: "04",
        badge: "EXPERIENCES",
        count: "25+",
        title: "Discover what Kenya has to offer.",
        subtitle: "DigitalSafari connects travelers with guided tours, excursions, and nature experiences directly from local tour operators and experienced guides through our platform.",
        description: "From Hell's Gate bicycle safaris and Lake Naivasha boat rides to Mount Longonot hikes, uncover authentic local experiences with certified local guide partners.",
        features: [
            "Guided safari experiences",
            "Local activities & tour booking",
            "Cultural events and tours",
            "Unforgettable destination spots"
        ],
        ctaText: "EXPLORE EXPERIENCES →",
        href: "/services/experiences",
        pills: ["Safaris", "Boat Tours", "Hiking", "Culture"],
        highlightCard: {
            tag: "Guiding Company",
            text: "Explore destination tours and nature experiences directly from local tour operators and experienced guides through our platform."
        }
    }
];

export const BUSINESS_BENEFITS = [
    { title: "Digital Visibility", description: "Establish a professional online presence for your hotel, BnB, transport, or experience business.", icon: "Globe" },
    { title: "More Booking & Orders", description: "Access a growing base of customers searching for services in your location.", icon: "TrendingUp" },
    { title: "Business Management Tools", description: "Seamlessly manage inventory, bookings, menus, and customer requests.", icon: "Sliders" },
    { title: "Performance & Analytics", description: "Track sales, revenue, customer reviews, and business performance.", icon: "BarChart3" },
    { title: "Onboarding Support", description: "Dedicated support team to guide you through setting up and scaling smoothly.", icon: "Headphones" },
    { title: "Grow with a Platform", description: "As DigitalSafari expands across Kenya, your business grows with us.", icon: "Rocket" }
];

export const PARTNER_TYPES = [
    { title: "Accommodation", desc: "Hotels, BnBs, Lodges, Apartments, Guest Houses, Cottages" },
    { title: "Food & Beverage", desc: "Restaurants, Cafes, Bars, Bakeries, Cloud Kitchens" },
    { title: "Transport Providers", desc: "Taxis, Shuttles, Rentals, Airport Transfer Services" },
    { title: "Experience Providers", desc: "Tours, Safaris, Local Guides, Water Sports" },
    { title: "Equipment Rentals", desc: "Vehicles, Water sports, Safari gear, Bicycles" },
    { title: "Tour Operators", desc: "Safari packages, Day trips, City tours, Excursions" }
];

export const ONBOARDING_STEPS = [
    { step: "01", title: "Join DigitalSafari", desc: "Create a partner account and submit basic business details in a few minutes." },
    { step: "02", title: "Register your Business", desc: "Upload documentation and complete our verification process." },
    { step: "03", title: "Complete Onboarding", desc: "Set up your business profile, add photos, amenities, and service listings." },
    { step: "04", title: "Publish & Go Live", desc: "Your business becomes visible to customers across the DigitalSafari platform." },
    { step: "05", title: "Receive Customers", desc: "Accept bookings, orders, and customer requests directly through the platform." },
    { step: "06", title: "Manage & Grow", desc: "Use partner analytics and tools to manage your business content & grow your revenue." }
];

export const FAQS = [
    { question: "What is DigitalSafari?", answer: "DigitalSafari is a unified digital platform designed to connect travel and hospitality services—including accommodation, food ordering, transportation, and local experiences—in one seamless ecosystem across Kenya." },
    { question: "Who can use DigitalSafari?", answer: "DigitalSafari serves both travelers (who want an all-in-one platform for discovering and booking services) and hospitality business owners (who want to reach more customers and manage operations)." },
    { question: "Is DigitalSafari available across all of Kenya?", answer: "DigitalSafari is currently actively onboarding partners and expanding services across key tourism hubs including Naivasha, Nakuru, Nairobi, and Coast regions, with rapid expansion ongoing." },
    { question: "How do I book accommodation or order food?", answer: "Clicking 'Start Your Journey' on our website takes you directly to the DigitalSafari customer web app, where you can browse verified stays, view restaurant menus, select dates, and complete bookings securely." },
    { question: "How can my business join as a partner?", answer: "Visit the 'For Businesses' page or click 'Become a Partner' to fill out the quick partner application form. Our onboarding team will verify your business details and guide you to go live quickly." },
    { question: "What fees does DigitalSafari charge business partners?", answer: "DigitalSafari offers competitive, transparent pricing tiers for businesses of all sizes—from boutique BnBs and independent guides to established resort hotels. Contact partners@digitalsafari.co.ke for detailed package structures." }
];