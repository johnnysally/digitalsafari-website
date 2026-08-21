import { api } from './axios';
import type { SiteConfig } from '../types';

export const getSiteConfig = async (): Promise<SiteConfig> => {
    const res = await api.get('/web/config');
    return res.data.config;
};

export const sendContact = async (data: {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
}) => {
    const res = await api.post('/web/contact', data);
    return res.data;
};

export const sendAiChat = async (message: string) => {
    const res = await api.post('/web/ai-chat', { message });
    return res.data;
};