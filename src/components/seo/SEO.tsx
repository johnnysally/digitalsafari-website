import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SERVICES_DATA } from "../../utils/constants";
import { useSiteConfig } from "../../context/SiteConfigContext";

const defaultDescription = "Discover stays, food, transport, and unforgettable experiences across Kenya with DigitalSafari.";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": { title: "DigitalSafari | Your Complete Travel Platform in Kenya", description: defaultDescription },
  "/about": { title: "About DigitalSafari | Connecting African Travel", description: "Learn how DigitalSafari connects travelers with trusted hospitality and travel businesses across Kenya." },
  "/how-it-works": { title: "How DigitalSafari Works | Travel and Hospitality in Kenya", description: "See how travelers discover services and how Kenyan businesses join the DigitalSafari platform." },
  "/services": { title: "Travel Services in Kenya | DigitalSafari", description: "Explore accommodation, food, transport, and local experiences through DigitalSafari." },
  "/businesses": { title: "Become a DigitalSafari Partner", description: "Grow your hotel, restaurant, transport, or experience business by joining DigitalSafari." },
  "/faq": { title: "DigitalSafari FAQs", description: "Find answers about DigitalSafari bookings, services, partner registration, and availability in Kenya." },
  "/contact": { title: "Contact DigitalSafari", description: "Contact the DigitalSafari support team about travel services, bookings, or becoming a business partner." },
  "/get-started": { title: "Get Started with DigitalSafari", description: "Choose your path and start using the DigitalSafari customer or partner platform." },
  "/partner-registration": { title: "Register as a DigitalSafari Partner", description: "Apply to join DigitalSafari and connect your hospitality business with travelers across Kenya." },
};

const setMeta = (name: string, content: string, attribute = "name") => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const setLink = (rel: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
};

export const SEO: React.FC = () => {
  const { pathname } = useLocation();
  const config = useSiteConfig();
  const type = pathname.startsWith("/services/") ? pathname.split("/")[2] : undefined;
  const service = type ? SERVICES_DATA.find((item) => item.id === type) : undefined;
  const metadata = service
    ? { title: `${service.badge} in Kenya | DigitalSafari`, description: service.description }
    : pageMetadata[pathname] || { title: "Page Not Found | DigitalSafari", description: defaultDescription };
  const siteName = config?.site_name || "DigitalSafari";
  const canonicalUrl = `${window.location.origin}${pathname}`;

  useEffect(() => {
    document.title = metadata.title;
    setMeta("description", metadata.description);
    setMeta("og:title", metadata.title, "property");
    setMeta("og:description", metadata.description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", canonicalUrl, "property");
    setMeta("og:site_name", siteName, "property");
    setMeta("twitter:card", "summary", "name");
    setMeta("twitter:title", metadata.title);
    setMeta("twitter:description", metadata.description);
    setLink("canonical", canonicalUrl);

    const structuredData = service
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.description,
          areaServed: { "@type": "Country", name: "Kenya" },
          provider: { "@type": "Organization", name: siteName, url: window.location.origin },
        }
      : {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteName,
          description: config?.site_description || defaultDescription,
          url: window.location.origin,
        };
    let script = document.head.querySelector<HTMLScriptElement>('script[data-seo="structured-data"]');
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seo = "structured-data";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, [canonicalUrl, config, metadata.description, metadata.title, service, siteName]);

  return null;
};