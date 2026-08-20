This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



@@@@@@@@@@@@@@@@@@@@@@@@@@@^^^^^^^^^^^^^%%%&&&&&&&&&&&&&&&&&&****************************************************************************
*****************************************************************************************************************************************
DigitalSafari Marketing Website

Your journey. One platform.

1. Project Overview

The DigitalSafari website is the official public-facing marketing and information website for the DigitalSafari SaaS platform.

The website is not the DigitalSafari SaaS application itself. The SaaS platform already exists as the operational product where customers, businesses, riders, administrators, and other users perform real activities.

The purpose of this website is to:

Introduce DigitalSafari to the public.

Explain the problem DigitalSafari solves.

Explain how the platform works.

Present DigitalSafari's services clearly.

Build trust and credibility.

Showcase the benefits for customers and businesses.

Provide information about the company and its vision.

Generate customer and business leads.

Direct customers into the existing DigitalSafari SaaS application.

Direct businesses into the existing partner registration/onboarding flow.

Support marketing campaigns, search visibility, social media traffic, partnerships, and future expansion.

The website should feel like the official digital headquarters of DigitalSafari: modern, trustworthy, African, adventurous, intelligent, and technology-driven.

2. Product Positioning

DigitalSafari is a unified digital platform designed to connect travel and hospitality services in one ecosystem.

The broader DigitalSafari platform brings together services such as:

Accommodation

Food and restaurants

Transportation

Travel experiences

Bookings

Orders

Payments

Business management

Customer discovery

Digital concierge capabilities

The marketing website should communicate this vision without pretending that every future feature is already available.

Core positioning

DigitalSafari connects the journey.

A customer should be able to understand that DigitalSafari is designed to make discovering, planning, booking, ordering, and experiencing destinations easier through one connected platform.

3. Primary Website Goals

The website has six primary goals.

Goal 1: Explain

A first-time visitor should understand DigitalSafari within a few seconds.

The visitor should know:

What DigitalSafari is.

Who it serves.

What services it connects.

Why it is useful.

Where to start.

Goal 2: Build Trust

The website should make DigitalSafari look like a serious technology company rather than an unfinished software project.

Trust should come from:

Professional design.

Clear messaging.

Real product screenshots.

Real partner information where available.

Transparent company information.

Professional contact channels.

Consistent branding.

Strong performance.

Mobile responsiveness.

Secure navigation.

Goal 3: Convert Customers

The website should move interested visitors into the existing DigitalSafari SaaS.

Primary customer CTA:

Start Your Journey

This CTA should link to the existing customer application.

Goal 4: Acquire Businesses

The website should convince businesses to join DigitalSafari.

Primary business CTA:

Become a Partner

This should link to the existing partner registration/onboarding flow.

Goal 5: Support Marketing

The website should be suitable as the destination for:

Instagram campaigns.

TikTok campaigns.

Facebook campaigns.

LinkedIn campaigns.

X campaigns.

Google search traffic.

QR codes.

Business cards.

Posters.

Digital advertisements.

Creator/influencer campaigns.

Press coverage.

Goal 6: Establish the Brand

The website should establish DigitalSafari as a serious travel and hospitality technology brand originating in Africa and designed for scalable regional growth.

4. What the Website Is NOT

The marketing website should not duplicate the functionality of the SaaS application.

Do not rebuild:

Customer dashboards.

Restaurant dashboards.

Accommodation dashboards.

Rider dashboards.

Finance dashboards.

Operations dashboards.

Admin dashboards.

Booking management systems.

Order management systems.

Internal reporting systems.

Those belong to the existing SaaS platform.

The marketing website should link users to those systems when appropriate.

5. Recommended Architecture

The recommended architecture is:

                         DIGITALSAFARI
                              |
              +---------------+---------------+
              |                               |
       MARKETING WEBSITE                 EXISTING SaaS
              |                               |
     www.digitalsafari.com             app.digitalsafari.com
              |                               |
       Public information              Authenticated system
       Brand experience                Real transactions
       SEO and marketing               Customer operations
       Lead generation                 Partner operations

The domains are examples and may be changed according to the actual deployment.

The important architectural principle is:

The website and SaaS should remain logically separate.

The website can link to the SaaS, but it should not become a duplicate of the SaaS.

6. Recommended Technology Stack

Frontend

Next.js

TypeScript

Tailwind CSS

shadcn/ui where useful

Framer Motion for controlled animations

Why Next.js?

Next.js is suitable because the website needs:

Excellent SEO.

Fast page loading.

Server-side rendering/static generation where appropriate.

Clean routing.

Image optimization.

Metadata management.

Scalable component architecture.

Easy deployment.

Why TypeScript?

TypeScript provides:

Better maintainability.

Safer component interfaces.

Better developer experience.

Fewer runtime mistakes.

Easier future development.

Styling

Use Tailwind CSS for:

Layout.

Responsive design.

Spacing.

Typography.

Colors.

Breakpoints.

Component styling.

Animation

Use Framer Motion selectively.

Animations should improve the experience, not slow the website down.

Avoid excessive:

Parallax.

Automatic movement.

Large animated backgrounds.

Heavy video effects.

Long loading animations.

7. Website Structure

The initial website should contain the following primary routes:

/
├── /about
├── /how-it-works
├── /services
├── /services/accommodation
├── /services/food
├── /services/transport
├── /services/experiences
├── /businesses
├── /faq
├── /contact
└── /get-started

Additional pages can be added later.

8. Navigation Structure

The main navigation should be simple.

Recommended navigation:

Logo

Home
About
How It Works
Services
For Businesses
FAQ
Contact

[Start Your Journey]

The primary CTA should visually stand out.

The navigation must work perfectly on:

Desktop.

Tablet.

Mobile.

On mobile, use a clean mobile menu.

9. Homepage

The homepage is the most important page.

It should not try to explain every technical detail.

Its job is to:

Capture attention.

Explain DigitalSafari.

Demonstrate value.

Build trust.

Send the visitor to the correct next step.

10. Homepage Hero Section

The hero should contain:

Brand

DigitalSafari

Main headline

Suggested direction:

Your journey. One platform.

Alternative messaging can be tested later.

Supporting text

Explain that DigitalSafari connects accommodation, food, transportation, and experiences through one digital platform.

Primary CTA

Start Your Journey

Links to the existing customer SaaS.

Secondary CTA

Become a Partner

Links to the existing partner onboarding flow.

Visual

Use a high-quality DigitalSafari visual or product composition showing the connected travel experience.

The hero should immediately communicate:

Travel.

Discovery.

Technology.

Connection.

African identity.

Convenience.

11. Problem Section

The website should explain the problem DigitalSafari solves.

Example concept:

Travelers often have to use different platforms for different parts of a journey.

One platform for accommodation.

Another for food.

Another for transportation.

Another for discovering activities.

This creates unnecessary friction.

Businesses also operate across fragmented channels and may struggle to reach customers digitally.

DigitalSafari is designed to connect these experiences.

The section should visually communicate fragmentation versus connection.

12. Solution Section

Introduce DigitalSafari as the solution.

The message should be simple:

Discover
   ↓
Choose
   ↓
Book / Order
   ↓
Move
   ↓
Experience

Explain that DigitalSafari is designed to connect the different parts of a journey.

Avoid making unsupported claims.

Only describe functionality that actually exists or clearly label future functionality as part of the roadmap.

13. Services Section

The homepage should have a service overview.

Recommended services:

Accommodation

Discover and connect with:

Hotels.

BnBs.

Apartments.

Lodges.

Guest houses.

Vacation homes.

Food

Discover restaurants, menus, and food-ordering options available through the DigitalSafari ecosystem.

Transport

Connect customers with available transportation services.

Experiences

Discover destinations, activities, attractions, and other travel experiences as this functionality becomes available.

Each service card should have:

Icon/image.

Short description.

Learn More CTA.

14. How It Works Section

Explain DigitalSafari in four or five simple steps.

Example:

01 — Discover

Explore destinations, accommodation, food, transport, and experiences.

02 — Choose

Compare available options and select what fits your needs.

03 — Book or Order

Complete the required booking or order through the DigitalSafari platform.

04 — Move

Use connected transportation services where available.

05 — Experience

Enjoy your journey.

The actual steps should be adjusted to match the features currently implemented in the SaaS.

15. Customer Section

Create a dedicated section for travelers/customers.

Headline example:

Everything you need for the journey, connected.

Explain the benefits:

Discover services.

Find accommodation.

Explore food options.

Access transportation.

Make bookings/orders through the platform.

Manage activities through the customer application.

CTA:

Start Your Journey

The button should open the existing SaaS.

16. Business Partner Section

This is one of the most important sections.

DigitalSafari is also a B2B platform.

The website should explain why businesses should join.

Target businesses include:

Hotels.

BnBs.

Apartments.

Lodges.

Guest houses.

Restaurants.

Food businesses.

Transport providers.

Tourism businesses.

Experience providers.

Business value proposition

Businesses can potentially use DigitalSafari to:

Increase digital visibility.

Reach customers.

Receive bookings.

Receive orders.

Manage relevant business activity through the existing SaaS.

Build a digital presence.

Access platform-based business tools.

Only advertise features that are actually implemented.

CTA

Become a DigitalSafari Partner

Link directly to the existing partner onboarding system.

17. About Page

The About page should explain the story behind DigitalSafari.

Recommended sections:

Our Story

Explain why DigitalSafari was created.

The story should focus on the problem of fragmented travel and hospitality services.

Our Mission

Example direction:

To make travel and hospitality services easier to discover, access, and connect through technology.

Our Vision

Example direction:

To build a connected digital ecosystem for travel and hospitality across Africa.

These statements can be refined as the official company strategy develops.

Our Values

Possible values:

Customer First.

Innovation.

Trust.

Accessibility.

Local Impact.

Excellence.

Responsible Growth.

18. How It Works Page

This page should explain the platform in more depth than the homepage.

Separate the explanation into:

Customer Journey

Visit DigitalSafari
       ↓
Discover services
       ↓
Choose service
       ↓
Open SaaS platform
       ↓
Register / Login
       ↓
Book / Order
       ↓
Manage activity

Business Journey

Visit DigitalSafari
       ↓
Become a Partner
       ↓
Register business
       ↓
Complete onboarding
       ↓
Create business profile
       ↓
Publish services
       ↓
Receive customers/orders/bookings
       ↓
Manage business through SaaS

The exact workflow should reflect the actual SaaS implementation.

19. Services Pages

Each service should have its own page.

Accommodation

Explain:

What accommodation partners can offer.

What customers can discover.

How the platform connects customers and accommodation businesses.

CTA:

Explore Accommodation

Link to the relevant SaaS destination.

Food

Explain:

Restaurant discovery.

Menus.

Food ordering.

Restaurant partnerships.

CTA:

Explore Food

Transport

Explain:

Connected transport services.

Customer convenience.

Transport provider participation.

CTA:

Explore Transport

Experiences

Explain:

Activities.

Destinations.

Tourism experiences.

Future expansion of the ecosystem.

Do not claim features that have not been implemented.

20. For Businesses Page

This page should be designed as a conversion page.

Structure:

Hero
   ↓
Why Join DigitalSafari?
   ↓
Who Can Join?
   ↓
Business Benefits
   ↓
How Partnership Works
   ↓
Partner Experience
   ↓
FAQ
   ↓
Become a Partner

The final CTA should link directly to the existing partner registration flow.

21. FAQ Page

The FAQ should answer common questions.

Suggested questions:

What is DigitalSafari?

Explain the platform in simple language.

Who can use DigitalSafari?

Customers and participating businesses.

What services are available?

Only list currently available services.

How do I book accommodation?

Explain the customer flow.

How do I order food?

Explain the actual implemented flow.

How can my business join?

Provide the partner registration process.

Is DigitalSafari available outside Kenya?

State the actual current availability.

If expansion is planned, describe it as a future objective rather than current availability.

Is DigitalSafari a travel agency?

Answer according to the actual business/legal model.

How can I contact DigitalSafari?

Provide official contact channels.

22. Contact Page

The Contact page should include:

Official business email.

Phone number if available.

WhatsApp if officially supported.

Social media links.

Business location/general operating region where appropriate.

Contact form.

The form should collect only necessary information.

Possible fields:

Name.

Email.

Phone (optional).

Subject.

Message.

Do not collect sensitive information unnecessarily.

23. Get Started Page

This page should act as a routing page.

It can present two choices:

I'm a Customer

Start Your Journey

→ Existing customer SaaS.

I'm a Business

Become a Partner

→ Existing partner onboarding.

This page makes the distinction between the marketing website and SaaS application extremely clear.

24. CTA Strategy

There should be two primary conversion paths.

Customer CTA

START YOUR JOURNEY
        ↓
Existing DigitalSafari SaaS

Business CTA

BECOME A PARTNER
        ↓
Existing Partner Registration

Do not create unnecessary registration forms on the marketing website if the SaaS already handles registration.

25. Design System

The visual identity should be established before building individual pages.

DigitalSafari should feel:

Modern.

Premium.

African.

Adventurous.

Trustworthy.

Intelligent.

Welcoming.

Technology-driven.

Avoid making it look like:

A generic hotel website.

A government portal.

A basic template.

An overly traditional safari brochure.

A cryptocurrency startup.

A generic SaaS dashboard.

The identity should combine African travel culture with modern technology.

26. Color System

Create a formal brand color system.

The final colors should be chosen during brand development and documented as design tokens.

Example structure:

Primary
Secondary
Accent
Background
Surface
Text Primary
Text Secondary
Border
Success
Warning
Error

Do not randomly choose different colors on different pages.

All components should use the same design tokens.

27. Typography

Use a modern, highly readable font system.

Typography hierarchy:

Display
H1
H2
H3
Body Large
Body
Small
Caption
Button

The typography should work well on:

Website.

Mobile.

Social media graphics.

Presentations.

Marketing materials.

28. Images and Visual Content

Use high-quality, authentic visuals.

Prioritize:

Kenyan destinations.

African travelers.

Hotels and accommodation.

Restaurants.

Transport.

Landscapes.

Experiences.

Real DigitalSafari product screenshots.

Avoid excessive generic stock photography.

Where possible, use original photography and verified partner imagery.

All images must be optimized for web performance.

29. Product Screenshots

The website should show the actual DigitalSafari SaaS.

Possible sections:

Inside DigitalSafari

Show screenshots of:

Customer dashboard.

Accommodation discovery.

Booking interface.

Restaurant interface.

Food ordering.

Transport.

Partner dashboard.

Relevant analytics.

Screenshots should be real.

Do not create fake screenshots representing features that don't exist.

30. SEO Strategy

SEO should be part of the website from the beginning.

Every major page should have:

Unique title.

Meta description.

Canonical URL where required.

Open Graph metadata.

Twitter/X metadata.

Structured headings.

Descriptive URLs.

Optimized images.

Alt text.

Internal links.

Potential search themes include:

Travel in Kenya.

Hotels in Kenya.

Accommodation in Naivasha.

Restaurants in Naivasha.

Things to do in Naivasha.

Kenya travel services.

African travel technology.

Digital travel platform Kenya.

Do not keyword-stuff.

Content should be written for humans first.

31. Local SEO

Because DigitalSafari is launching in Kenya, local visibility is important.

The website should eventually support location-based content such as:

/destinations/naivasha
/destinations/nakuru
/destinations/nairobi
/destinations/mombasa

Only create destination pages when there is enough useful and accurate information to justify them.

Do not create hundreds of empty SEO pages.

32. Performance Requirements

The website should be fast.

Requirements:

Optimize images.

Use modern image formats.

Lazy-load non-critical images.

Minimize JavaScript.

Avoid unnecessary dependencies.

Avoid huge client-side bundles.

Use caching where appropriate.

Minimize third-party scripts.

Use responsive images.

Optimize fonts.

The homepage should remain fast even on slower mobile connections.

33. Mobile-First Design

A large portion of DigitalSafari's audience will likely access the website through mobile devices.

Therefore:

Design mobile first.

Test on:

Small phones.

Modern smartphones.

Tablets.

Laptops.

Large desktop displays.

Important mobile requirements:

Large touch targets.

Readable text.

Fast loading.

Simple navigation.

Sticky or easily accessible CTA where appropriate.

No horizontal scrolling.

34. Accessibility

The website should follow modern accessibility practices.

Requirements:

Semantic HTML.

Keyboard navigation.

Visible focus states.

Proper color contrast.

Alt text.

Accessible forms.

Proper heading hierarchy.

ARIA only where necessary.

Screen-reader-friendly navigation.

Reduced-motion support where appropriate.

35. Security

The marketing website should not expose secrets.

Never place:

API secrets.

Database credentials.

Private tokens.

Payment secrets.

Admin credentials.

in frontend code.

If the website has forms or server-side functionality:

Validate inputs.

Rate-limit abuse-prone endpoints.

Sanitize data.

Protect against spam.

Use HTTPS.

Keep dependencies updated.

36. Analytics

Analytics should be implemented to understand how the website performs.

Track events such as:

page_view
start_journey_click
become_partner_click
service_view
contact_form_submit
faq_interaction
external_saas_redirect

The most important metric is not simply page views.

Track:

Website visitor → SaaS visitor → registration → transaction

where technically possible and privacy-appropriate.

37. Conversion Funnel

The website should support this funnel:

SOCIAL MEDIA / GOOGLE / REFERRAL
              ↓
       DIGITALSAFARI WEBSITE
              ↓
       Understand Platform
              ↓
       Build Trust
              ↓
       Choose User Type
          ↙         ↘
     CUSTOMER      BUSINESS
        ↓             ↓
   Existing SaaS   Partner SaaS
        ↓             ↓
   Registration   Registration
        ↓             ↓
     Activity       Onboarding

The marketing website's success should ultimately be measured by how effectively it moves qualified visitors into the actual platform.

38. Social Media Integration

The website should link to official DigitalSafari social accounts.

Potential platforms:

Instagram.

TikTok.

Facebook.

LinkedIn.

X.

YouTube.

Social links should appear in the footer and relevant sections.

Do not embed heavy social feeds by default if they significantly affect performance.

39. Footer

The footer should contain:

DigitalSafari

Your journey. One platform.

Explore
- About
- How It Works
- Services
- FAQ

Businesses
- Become a Partner
- Partner Information

Support
- Contact
- Help

Legal
- Privacy Policy
- Terms of Service
- Cookie Policy where applicable

Social
- Instagram
- TikTok
- Facebook
- LinkedIn
- X

© DigitalSafari [YEAR]. All rights reserved.

Only include legal pages once their content has been properly prepared.

40. Legal Pages

Before public launch, prepare appropriate legal documentation.

At minimum:

Privacy Policy.

Terms of Service.

Cookie policy/notice where applicable.

Partner terms where required.

Relevant payment/refund policies.

Legal content should be reviewed appropriately for the markets where DigitalSafari operates.

41. Technical Folder Structure

Recommended structure:

digitalsafari-website/
│
├── app/
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── how-it-works/
│   │   └── page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   ├── accommodation/
│   │   │   └── page.tsx
│   │   ├── food/
│   │   │   └── page.tsx
│   │   ├── transport/
│   │   │   └── page.tsx
│   │   └── experiences/
│   │       └── page.tsx
│   ├── businesses/
│   │   └── page.tsx
│   ├── faq/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── get-started/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── Services.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── CustomerCTA.tsx
│   │   ├── BusinessCTA.tsx
│   │   └── Testimonials.tsx
│   ├── ui/
│   └── forms/
│
├── lib/
│   ├── constants.ts
│   ├── links.ts
│   ├── metadata.ts
│   └── utils.ts
│
├── public/
│   ├── images/
│   ├── icons/
│   ├── logos/
│   └── screenshots/
│
├── styles/
│
├── types/
│
├── tests/
│
├── .env.example
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md

The exact structure can be modified according to the selected Next.js configuration.

42. External SaaS Links

Keep SaaS URLs centralized.

For example:

CUSTOMER_APP_URL
PARTNER_APP_URL

These should not be hardcoded repeatedly throughout components.

Use environment variables or a centralized configuration file.

Example conceptual structure:

lib/links.ts

CUSTOMER_APP_URL
PARTNER_APP_URL

This makes it easy to change domains later.

43. CTA Behavior

Every CTA should have a clear destination.

Examples:

Start Your Journey
        ↓
Customer SaaS

Become a Partner
        ↓
Partner Registration

Explore Accommodation
        ↓
Accommodation area in SaaS

Explore Food
        ↓
Food area in SaaS

Contact Us
        ↓
Contact page/form

Never create buttons that look functional but do nothing.

44. Content Rules

All website content must follow these rules:

Be clear.

Be concise.

Avoid unnecessary technical jargon.

Avoid unsupported claims.

Never fabricate statistics.

Never claim a feature that does not exist.

Clearly distinguish current functionality from future plans.

Use consistent DigitalSafari terminology.

Use customer-focused language.

Maintain a professional African technology identity.

45. Brand Voice

DigitalSafari should communicate as:

Confident, welcoming, intelligent, adventurous, and trustworthy.

Avoid:

Overly complicated corporate language.

Excessive hype.

Fake urgency.

Unsupported claims such as "Africa's #1 platform" unless proven.

Excessive use of emojis.

Technical jargon in customer-facing content.

Example:

Bad:

Our revolutionary hyper-scale disruptive ecosystem leverages cutting-edge technology to transform the entire travel vertical.

Better:

DigitalSafari connects the services you need for your journey in one digital platform.

46. Marketing Content Integration

The website should be designed to support future marketing campaigns.

Create reusable landing-page patterns that can later support campaigns such as:

/campaigns/naivasha-weekend
/campaigns/summer-travel
/campaigns/business-partners

These should only be added when there is a real campaign.

47. Partner Proof

As DigitalSafari acquires real partners, add trustworthy proof.

Examples:

Partner logos with permission.

Verified testimonials.

Case studies.

Real usage statistics.

Customer reviews.

Business success stories.

Never manufacture testimonials or reviews.

48. Launch Phases

Phase 1 — Foundation

Build:

Brand system.

Homepage.

Navigation.

Footer.

About.

Services.

How It Works.

Business page.

Contact.

Get Started.

Phase 2 — SaaS Integration

Connect:

Customer CTA.

Partner CTA.

Service CTAs.

Analytics.

Tracking.

Phase 3 — Trust

Add:

Real product screenshots.

Real partners.

Testimonials.

Case studies.

Company information.

Phase 4 — SEO

Add:

Search-optimized service pages.

Destination pages.

Structured data where appropriate.

Search Console/analytics setup.

Content strategy.

Phase 5 — Growth

Add:

Campaign landing pages.

Partner stories.

Travel guides.

Destination content.

Referral campaigns.

Creator campaigns.

49. Development Workflow

Recommended workflow:

1. Finalize brand identity
          ↓
2. Create design system
          ↓
3. Build shared layout
          ↓
4. Build homepage
          ↓
5. Build core pages
          ↓
6. Connect SaaS links
          ↓
7. Add SEO
          ↓
8. Add analytics
          ↓
9. Test responsiveness
          ↓
10. Security/performance review
          ↓
11. Deploy
          ↓
12. Monitor and improve

Do not start by building every page simultaneously.

The homepage and design system should establish the visual language first.

50. Testing Requirements

Before launch, test:

Functional

All navigation links.

All CTA buttons.

Customer SaaS redirects.

Partner SaaS redirects.

Contact form.

Social links.

Mobile menu.

Forms and validation.

Responsive

Test:

320px mobile.

375px mobile.

390px mobile.

768px tablet.

1024px laptop.

1440px desktop.

Larger screens.

Browser

Test major modern browsers.

Accessibility

Test keyboard navigation and basic screen-reader behavior.

Performance

Check:

Largest Contentful Paint.

Cumulative Layout Shift.

Interaction responsiveness.

Image sizes.

JavaScript bundle size.

51. Deployment

The website can be deployed using a modern hosting platform such as Vercel or another suitable production provider.

Production environment should include:

Production domain
HTTPS
Environment variables
Analytics
Error monitoring
SEO metadata
Sitemap
Robots.txt

The SaaS and marketing website should be deployed independently when practical.

52. Environment Variables

Never commit secrets.

Example:

NEXT_PUBLIC_CUSTOMER_APP_URL=
NEXT_PUBLIC_PARTNER_APP_URL=
NEXT_PUBLIC_SITE_URL=

ANALYTICS_ID=

Only public configuration should use NEXT_PUBLIC_.

Private credentials must remain server-side.

53. Sitemap

Generate a sitemap containing public pages such as:

/
 /about
 /how-it-works
 /services
 /services/accommodation
 /services/food
 /services/transport
 /services/experiences
 /businesses
 /faq
 /contact
 /get-started

Do not include private SaaS dashboards.

54. Robots

Private SaaS routes should not accidentally become indexed through the marketing website.

The marketing website should expose only public content intended for search engines.

55. Error Pages

Create polished:

404 page.

500/error page.

Loading states where needed.

Example 404 concept:

Looks like you've wandered off the trail.

Then:

Return to DigitalSafari

The tone can remain playful while professional.

56. Future Expansion

The website should be built so DigitalSafari can grow.

Potential future additions:

Destination guides.

Travel blog.

Experiences marketplace.

Business directory.

Tourism campaigns.

Country-specific pages.

City-specific pages.

Partner case studies.

Customer stories.

API/developer information if DigitalSafari later exposes APIs.

Investor/company information.

Careers.

These should be added based on actual business needs.

57. Success Metrics

The website should be measured using meaningful business metrics.

Important metrics include:

Awareness

Website visitors.

Organic search traffic.

Social referrals.

Engagement

Time/engagement on key pages.

Service page visits.

CTA interactions.

Customer conversion

Start Journey clicks.

SaaS registrations.

First bookings/orders where attribution is available.

Business conversion

Partner CTA clicks.

Partner registrations.

Completed onboarding.

Active partners.

Growth

Referral traffic.

Returning users.

Organic growth.

Campaign conversion.

The ultimate goal is not simply:

"We have a beautiful website."

The goal is:

"The website consistently brings customers and businesses into the DigitalSafari ecosystem."

58. Definition of Done

The website is ready for public launch when:

Brand identity is finalized.

Homepage is complete.

About page is complete.

How It Works page is complete.

Services pages are complete.

Business partner page is complete.

FAQ is complete.

Contact page is complete.

Get Started routing is complete.

Customer SaaS link works.

Partner SaaS link works.

All navigation works.

Mobile design is complete.

Desktop design is complete.

Accessibility basics are implemented.

SEO metadata is implemented.

Sitemap is implemented.

Robots configuration is implemented.

Analytics is configured.

Error pages are implemented.

Images are optimized.

Performance is tested.

Security review is completed.

Legal pages are ready.

Production domain is configured.

HTTPS is enabled.

Final content has been reviewed.

No unsupported claims are present.

All external SaaS links have been tested.

59. Final Product Philosophy

The DigitalSafari marketing website should follow one central principle:

The website sells the vision. The SaaS delivers the experience.

The website should make a visitor understand DigitalSafari, trust DigitalSafari, and want to use DigitalSafari.

The SaaS should then provide the actual customer and business experience.

The website should therefore remain:

Simple enough to understand.

Beautiful enough to remember.

Fast enough to use anywhere.

Professional enough to build trust.

Flexible enough to grow with DigitalSafari.

60. Final Vision

DigitalSafari should not be presented as merely another booking website.

The long-term vision is to build a connected digital ecosystem that makes travel and hospitality services easier to discover, access, and coordinate.

The marketing website is the first public layer of that ecosystem.

Its responsibility is to introduce the vision, communicate the value, establish the brand, build trust, and connect users to the DigitalSafari SaaS platform.

                         DIGITALSAFARI

                 DISCOVER        CONNECT
                    ↓               ↓
                 CHOOSE          BOOK/ORDER
                    ↓               ↓
                  MOVE         EXPERIENCE
                         ↓
                       ENJOY
                         ↓
                 RETURN & REFER

DigitalSafari

Your journey. One platform.
