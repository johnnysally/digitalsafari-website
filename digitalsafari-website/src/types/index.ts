export interface AppLinks {
    customer: string | null;
    transport_partner: string | null;
    restaurant_partner: string | null;
    accommodation_partner: string | null;
}

export interface SocialLinks {
    instagram: string | null;
    tiktok: string | null;
    facebook: string | null;
    linkedin: string | null;
    x: string | null;
    youtube: string | null;
}

export interface AiChatConfig {
    enabled: boolean;
    name: string;
    greeting: string;
    color: string;
}

export interface SiteConfig {
    site_name: string;
    site_tagline: string;
    site_description: string;
    support_email: string | null;
    support_phone: string | null;
    whatsapp_number: string | null;
    app_links: AppLinks;
    social_links: SocialLinks;
    ai_chat: AiChatConfig;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    link: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}