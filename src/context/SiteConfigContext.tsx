import React, { createContext, useContext, useEffect, useState } from "react";
import { getSiteConfig } from "../api/publicApi";
import type { SiteConfig } from "../types";

const SiteConfigContext = createContext<SiteConfig | null>(null);

export const SiteConfigProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [config, setConfig] = useState<SiteConfig | null>(null);

  useEffect(() => {
    getSiteConfig()
      .then((siteConfig) => {
        const partnerLanding = siteConfig.app_links.partner_landing;
        const isLocalPartnerUrl = partnerLanding?.includes("localhost") || partnerLanding?.includes("127.0.0.1");

        setConfig({
          ...siteConfig,
          app_links: {
            ...siteConfig.app_links,
            partner_landing: isLocalPartnerUrl
              ? siteConfig.app_links.transport_partner
              : partnerLanding,
          },
        });
      })
      .catch(() => setConfig(null));
  }, []);

  return <SiteConfigContext.Provider value={config}>{children}</SiteConfigContext.Provider>;
};

export const useSiteConfig = () => useContext(SiteConfigContext);