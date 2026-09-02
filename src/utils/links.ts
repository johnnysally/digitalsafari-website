import type { SiteConfig } from "../types";

export const LINKS = {
  getCustomerUrl: (config?: Pick<SiteConfig, "app_links"> | null) => {
    const baseUrl = config?.app_links?.customer;
    return baseUrl || "/get-started";
  },

  getPartnerUrl: (config?: Pick<SiteConfig, "app_links"> | null) => {
    if (config?.app_links?.partner_landing && config.app_links.partner_landing !== "/partner-registration") {
      return "/partner-registration";
    }
    return "/partner-registration";
  },

  getServiceUrl: (config: Pick<SiteConfig, "app_links"> | null | undefined, serviceId?: string) => {
    const baseUrl = LINKS.getCustomerUrl(config)?.replace(/\/$/, "");
    if (!serviceId) return baseUrl || "/get-started";
    return baseUrl ? `${baseUrl}/${serviceId}` : "/get-started";
  },

  getWhatsAppUrl: (config?: Pick<SiteConfig, "whatsapp_number"> | null) => {
    const number = config?.whatsapp_number?.replace(/\D/g, "");
    return number ? `https://wa.me/${number}` : undefined;
  },
};
