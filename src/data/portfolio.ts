// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: "Mohd Ahmad",
  firstName: "Mohd",
  lastName: "Ahmad",
  role: "Full Stack Developer",
  tagline:
    "I ship production products used by 60K+ people — from pixel-perfect interfaces to the APIs, databases and app-store releases behind them.",
  location: "Delhi, India",
  email: "m.ahmad8929@gmail.com",
  phone: "+91 8929691406",
  resume: "/Mohd-Ahmad-Resume.pdf",
  photo: "/profile.jpg",
  availability: "Open to full-time roles & freelance projects",
  socials: {
    github: "https://github.com/ahmad8929",
    linkedin: "https://linkedin.com/in/ahmad8929",
  },
};

export const rotatingWords = ["streaming platforms", "admin panels", "booking platforms", "storefronts", "dashboards"];

export const heroStats = [
  { value: "60K+", label: "users on products I build" },
  { value: "130K+", label: "audios managed via my admin tools" },
];

export const about = {
  paragraphs: [
    "I'm a Full Stack Developer who likes owning a product end to end — the easing on a hover, the layout that holds up at 320px, the API that answers in milliseconds, and the pipeline that ships it.",
    "Right now I build Nasheedio, a Dubai-based audio platform with 60K+ users — its listener app, Creator Studio, the admin panel the content team uses to manage 130K+ audios, and the analytics dashboard used by the CEO and core team.",
    "Before that I built the Laravel backend and handled App Store & Play Store releases for a pet-care app, shipped e-commerce stores for fashion brands, and rebuilt a salon booking platform as a typed Node.js SaaS.",
  ],
  stats: [
    { value: 60, suffix: "K+", label: "Users on Nasheedio" },
    { value: 130, suffix: "K+", label: "Audios managed via admin" },
    { value: 20, suffix: "+", label: "Products shipped" },
    { value: 2, suffix: "+ yrs", label: "Production experience" },
  ],
};

export type SkillGroup = { title: string; blurb: string; items: string[]; accent: "lime" | "coral" | "violet" | "sky" };

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    blurb: "Component-driven, responsive UIs that are fast and a joy to use.",
    items: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Zustand", "TanStack Query"],
    accent: "lime",
  },
  {
    title: "Styling & UI",
    blurb: "Pixel-perfect, responsive, animated — CSS is my playground.",
    items: ["Tailwind CSS", "CSS3 / Animations", "shadcn/ui", "Material UI", "Ant Design", "Responsive Design"],
    accent: "coral",
  },
  {
    title: "Backend",
    blurb: "REST APIs, auth and payments that hold up in production.",
    items: ["Node.js", "Express.js", "Laravel", "Prisma", "REST APIs", "JWT / OAuth"],
    accent: "violet",
  },
  {
    title: "Data, DevOps & Releases",
    blurb: "From schema to app store.",
    items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Google Cloud", "CI/CD", "App Store & Play Store", "Firebase"],
    accent: "sky",
  },
];

export const marqueeTech = [
  "React", "Next.js", "TypeScript", "Node.js", "Laravel", "Express", "PostgreSQL", "MongoDB",
  "Prisma", "Tailwind CSS", "Docker", "Google Cloud", "Redis", "App Store & Play Store",
];

export type Experience = {
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  about: string;
  points: string[];
  stack: string[];
  link?: string;
  caseStudy?: string;
  current?: boolean;
};

export const experience: Experience[] = [
  {
    company: "Nasheedio",
    role: "Software Developer",
    type: "Full-time",
    period: "Jul 2025 — Present",
    location: "Dubai-based · Remote",
    about: "A Muslim-friendly audio streaming platform with 60K+ users and a 130K+ audio library.",
    points: [
      "Ship features across 4 products — listener web app, Creator Studio, admin panel and analytics dashboard.",
      "Built the admin workflows the content team uses to manage 130K+ audios — bulk upload, draft approval, audit logs.",
      "Top contributor to Creator Studio — audio upload & scheduling, creator verification and the AIRA AI studio.",
      "Built the Creator Awards '26 site end-to-end — creator sign-ups, ~1,000 public votes and a live leaderboard.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Firebase"],
    link: "https://app.nasheedio.com",
    caseStudy: "nasheedio",
    current: true,
  },
  {
    company: "Pet Basket",
    role: "Full Stack Developer",
    type: "Contract",
    period: "Mar 2025 — Jun 2025",
    location: "India",
    about: "A pet marketplace & services app — pets, accessories, grooming and vet care.",
    points: [
      "Built most of the 20-module Laravel admin panel and REST APIs — listings, offers, orders and RBAC.",
      "Integrated Firebase auth (Google, Facebook, Apple), push notifications and Razorpay payments across app and API.",
      "Handled App Store & Play Store deployment — builds, signing and store submissions via Codemagic CI/CD.",
    ],
    stack: ["Laravel", "REST APIs", "Firebase", "Razorpay", "Codemagic", "App Store"],
    link: "https://play.google.com/store/apps/details?id=in.centeosclients.petbasket",
    caseStudy: "pet-basket",
  },
  {
    company: "Plutonic Services",
    role: "Frontend Developer Intern",
    type: "Internship",
    period: "Sep 2024 — Feb 2025",
    location: "Noida, India",
    about: "An AI-powered software services company delivering products for clients across domains.",
    points: [
      "Built Employee and Campaign Management modules with React, Redux and Ant Design in an agile team.",
      "Resolved 100+ Jira bugs and optimized API performance — cutting load time 25% and downtime 40%.",
    ],
    stack: ["React", "Redux", "Ant Design", "REST APIs"],
    link: "https://techplutonic.com",
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type Category = "Company" | "Client" | "Freelance" | "Personal";
export type Platform = "Web" | "Mobile" | "Backend" | "AI";

export type CaseSection = { title: string; points: string[] };

export type Project = {
  slug: string;
  name: string;
  kind: string;
  category: Category;
  platforms: Platform[];
  summary: string;
  stack: string[];
  accent: string;
  /** Wide browser screenshot (1440×900) */
  cover?: string;
  /** Extra wide screenshots for the case study */
  gallery?: string[];
  /** Phone screenshots (portrait) */
  phones?: string[];
  icon?: string;
  links?: { label: string; href: string }[];
  private?: string;
  /* Case-study fields — present ⇒ gets its own /work/[slug] page */
  featured?: boolean;
  caseStudy?: {
    role: string;
    period: string;
    team: string;
    overview: string;
    metrics: { value: string; label: string }[];
    sections: CaseSection[];
    note?: string;
  };
};

export const projects: Project[] = [
  /* ---------------- Featured case studies ---------------- */
  {
    slug: "nasheedio",
    name: "Nasheedio",
    kind: "Company · Audio streaming platform",
    category: "Company",
    platforms: ["Web", "Backend", "AI"],
    summary:
      "Four products for a Dubai-based audio platform with 60K+ users — listener app, Creator Studio, admin panel and an AI-assisted analytics dashboard.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Material UI", "Zustand", "TanStack Query", "Firebase", "Node.js", "Express", "PostgreSQL", "Google Cloud Storage"],
    accent: "#c8f135",
    cover: "/projects/nasheedio-app.jpg",
    gallery: ["/projects/nasheedio-awards.jpg", "/projects/nasheedio.jpg"],
    links: [
      { label: "Web app", href: "https://app.nasheedio.com" },
      { label: "Creator Awards '26", href: "https://nasheediocreatoraward.vercel.app" },
    ],
    featured: true,
    caseStudy: {
      role: "Software Developer",
      period: "Jul 2025 — Present",
      team: "Product team of 5–6 developers",
      overview:
        "Nasheedio is a Muslim-friendly audio platform for nasheeds, podcasts and Quran recitation. I work across all four of its products — the app 60K+ listeners use, the studio creators publish from, the admin panel the content team runs the catalog with, and the dashboard leadership uses to understand growth.",
      metrics: [
        { value: "60K+", label: "Users" },
        { value: "130K+", label: "Audios in the library" },
        { value: "4", label: "Products I ship to" },
        { value: "~1,000", label: "Creator Awards votes" },
      ],
      sections: [
        {
          title: "Listener web app",
          points: [
            "Onboarding flow with preference capture, OTP verification and forgot-password.",
            "Referral program, recommended feed, time-based and artist-mix tabs, playlists and event pages.",
            "Optimized artist and track pages — loading states, not-found UI and faster navigation.",
          ],
        },
        {
          title: "Admin panel — used daily by the content team",
          points: [
            "Bulk audio upload and a draft review & approval workflow with remarks and resubmission.",
            "Video uploader, subscription plans, app themes, events and featured sections.",
            "Every admin mutation routed through Firestore audit logging with device-session tracking.",
          ],
        },
        {
          title: "Creator Studio — top contributor",
          points: [
            "Audio upload form and scheduled publishing for creators.",
            "Creator verification flow, profile & social links, support and events pages.",
            "AIRA AI studio page with poetry & speech tabs, and the monetization / streaming-revenue section.",
          ],
        },
        {
          title: "Data & Growth Dashboard — used by the CEO & core team",
          points: [
            "15+ analytics modules on PostgreSQL — active users, trending audio, subscriptions and cohort retention.",
            "User Intelligence 360 profiles and Segment Intelligence comparisons of subscriber behaviour.",
            "AIRA — a natural-language data assistant that routes questions to parameterized, read-only SQL tools.",
            "Email campaigns and newsletter editor (Brevo) with images on Google Cloud Storage.",
          ],
        },
      ],
    },
  },
  {
    slug: "bloomtales",
    name: "Bloomtales Boutique",
    kind: "Freelance · Full-stack e-commerce",
    category: "Freelance",
    platforms: ["Web", "Backend"],
    summary:
      "The complete online store for a women's fashion startup — storefront, admin panel and API — live and shipping across India.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
    accent: "#ff5c39",
    cover: "/projects/bloomtales.jpg",
    links: [
      { label: "Live site", href: "https://www.bloomtales.in" },
      { label: "Frontend code", href: "https://github.com/ahmad8929/bloom-tales-frontend" },
      { label: "Backend code", href: "https://github.com/ahmad8929/bloom-backend" },
    ],
    featured: true,
    caseStudy: {
      role: "Full Stack Developer (freelance)",
      period: "Jul 2025 — Present",
      team: "Storefront & admin solo · API with a teammate",
      overview:
        "A friend was launching a boutique for sarees, kurtis and ethnic wear and needed a real store, not a template. I built the storefront and the admin panel the owner runs the business from, worked with a teammate on the API, and kept shipping improvements for over a year.",
      metrics: [
        { value: "~100", label: "Monthly shoppers" },
        { value: "166", label: "Commits to the storefront" },
        { value: "Pan-India", label: "Shipping" },
        { value: "1 yr+", label: "Live & maintained" },
      ],
      sections: [
        {
          title: "Storefront",
          points: [
            "Catalog with categories, product pages, reviews, cart and checkout with a payment gateway.",
            "JWT auth with email verification, password reset, profile and order history.",
            "SEO built in — sitemap, robots, structured pages for shipping, FAQ, privacy and terms.",
          ],
        },
        {
          title: "Admin panel",
          points: [
            "Products, orders, customers and coupons management.",
            "Sales analytics and a reels section for shoppable video content.",
          ],
        },
        {
          title: "API & infrastructure",
          points: [
            "Contributed to the Node.js + Express + MongoDB REST API, including rate limiting.",
            "Cloudinary for product media; deployed on Vercel and cloud hosting.",
          ],
        },
      ],
    },
  },
  {
    slug: "angel-home-salon",
    name: "Angel Home Salon",
    kind: "Client · On-demand salon services",
    category: "Client",
    platforms: ["Mobile", "Web", "Backend"],
    summary:
      "Customer app, provider app, admin backend and website for a Delhi at-home salon brand — live on Google Play with a 5.0 rating.",
    stack: ["Next.js", "PHP", "CodeIgniter", "MySQL", "Firebase", "Codemagic", "App Store", "Google Play", "Flutter"],
    accent: "#ff4fa3",
    cover: "/projects/anglehome-web.jpg",
    phones: ["/projects/store/anglehome-1.jpg", "/projects/store/anglehome-2.jpg", "/projects/store/anglehome-3.jpg", "/projects/store/anglehome-4.jpg", "/projects/store/anglehome-5.jpg", "/projects/store/anglehome-6.jpg"],
    icon: "/projects/store/anglehome-icon.png",
    links: [
      { label: "Website", href: "https://angelhomesalon.com" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.angelhomesalon.customer" },
    ],
    featured: true,
    caseStudy: {
      role: "Lead developer (freelance)",
      period: "Mar 2026 — Sep 2026",
      team: "Solo",
      overview:
        "Angel Home Salon brings salon services to customers' homes across Delhi NCR. I took a white-label on-demand services platform (eDemand) and turned it into their product — rebranding, new features, store compliance and launch — across four codebases.",
      metrics: [
        { value: "4", label: "Codebases shipped" },
        { value: "5.0★", label: "Google Play rating" },
        { value: "2", label: "Store releases" },
        { value: "6 mo", label: "Launch & maintenance" },
      ],
      sections: [
        {
          title: "Customer app & store releases",
          points: [
            "Passwordless phone login, redesigned splash & onboarding, and checkout / address fixes.",
            "Firebase push notifications, location-based service discovery and Meta Ads SDK for campaigns.",
            "Resolved App Store validation issues and set up Codemagic builds for iOS releases.",
          ],
        },
        {
          title: "Provider app & admin backend",
          points: [
            "Provider (beautician) app for managing bookings.",
            "Admin toggle for passwordless login, profile-completion flow and cart management endpoints.",
          ],
        },
        {
          title: "Website — angelhomesalon.com",
          points: [
            "Next.js booking website with login parity with the app and a profile-completion prompt.",
            "Account-deletion page for store policy, a self-healing version updater and cPanel deployment.",
          ],
        },
      ],
      note: "Built on the eDemand platform; all listed work is my customisation and feature development.",
    },
  },
  {
    slug: "pet-basket",
    name: "Pet Basket",
    kind: "Contract · Pet marketplace platform",
    category: "Company",
    platforms: ["Mobile", "Backend"],
    summary:
      "Pet marketplace app with 400+ downloads — I built the Laravel admin & APIs, integrations and App Store / Play Store releases.",
    stack: ["Laravel 12", "Sanctum", "REST APIs", "Firebase Auth", "FCM", "Razorpay", "Codemagic", "App Store Connect", "Google Play Console"],
    accent: "#ffc700",
    phones: ["/projects/store/petbasket-1.jpg", "/projects/store/petbasket-2.jpg", "/projects/store/petbasket-3.jpg", "/projects/store/petbasket-4.jpg", "/projects/store/petbasket-5.jpg", "/projects/store/petbasket-6.jpg"],
    icon: "/projects/store/petbasket-icon.png",
    links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=in.centeosclients.petbasket" }],
    featured: true,
    caseStudy: {
      role: "Full Stack Developer",
      period: "Mar 2025 — Jun 2025",
      team: "Team of 3 · top committer",
      overview:
        "Pet Basket is a one-stop app for pet parents — buy pets and accessories, book grooming and training, and consult vets. I owned the Laravel backend and admin, the app's payment & auth integrations, and its releases to both stores.",
      metrics: [
        { value: "400+", label: "Downloads" },
        { value: "2", label: "App stores" },
        { value: "20", label: "Admin modules" },
        { value: "3", label: "Sign-in providers" },
      ],
      sections: [
        {
          title: "Laravel backend & admin",
          points: [
            "Built most of the 20-module admin panel — pet listings, breeds, banners & offers, grooming, COD collection.",
            "User and role management (RBAC) and REST APIs secured with Sanctum.",
          ],
        },
        {
          title: "Integrations",
          points: [
            "Firebase authentication with Google, Facebook and Sign in with Apple, wired through app and API.",
            "Razorpay payments, push notifications via FCM and pincode-based delivery checks.",
          ],
        },
        {
          title: "App Store & Play Store deployment",
          points: [
            "Handled release builds, code signing and store submissions for both platforms.",
            "Codemagic CI/CD pipeline for signed iOS builds straight to App Store Connect.",
          ],
        },
      ],
    },
  },

  /* ---------------- More case studies ---------------- */
  {
    slug: "centros-salon",
    name: "Centros Salon",
    kind: "Client · Salon & home-services SaaS",
    category: "Client",
    platforms: ["Backend", "Web", "Mobile"],
    summary:
      "Rebuilt a legacy PHP booking platform as a typed Node.js SaaS — new REST API, Next.js admin panel and a customer app moved onto it.",
    stack: ["Node.js 20", "TypeScript", "Express", "PostgreSQL", "Prisma", "Zod", "Docker", "Vitest", "Swagger", "Next.js", "TanStack Table"],
    accent: "#e8739a",
    caseStudy: {
      role: "Full Stack Developer (freelance)",
      period: "Jul 2026 — Aug 2026",
      team: "Solo",
      overview:
        "Centros Salon ran on a legacy PHP system with ~180 POST-only RPC endpoints and business logic spread across hundreds of helpers. I designed and built a clean replacement — then moved the admin panel and the customer app onto it.",
      metrics: [
        { value: "20", label: "API modules" },
        { value: "48", label: "Database models" },
        { value: "87", label: "Automated tests" },
        { value: "3", label: "Apps on one API" },
      ],
      sections: [
        {
          title: "Backend architecture",
          points: [
            "Versioned REST API (/api/v1) with a layered controller → service → repository design.",
            "15-minute access tokens with rotating, hashed per-device refresh tokens.",
            "Booking pipeline with auto-cancel, OTP-guarded completion, commissions and settlements.",
            "Dockerised Postgres, Zod validation, Helmet, rate limiting, Winston logs and Swagger docs.",
          ],
        },
        {
          title: "Admin panel (Next.js)",
          points: [
            "Shop module in 6 milestones — catalog, variants, inventory, orders & shipping, reviews, dashboard.",
            "Admin-dispatched bookings, cities, providers, rich-text services with media, analytics with CSV export.",
          ],
        },
        {
          title: "Customer app migration",
          points: [
            "Moved the customer app off the legacy backend in 18 milestones — auth, discovery, booking, shop, notifications.",
            "Redesigned the experience with a new design foundation and removed dead legacy code.",
          ],
        },
      ],
    },
  },
  {
    slug: "marvels",
    name: "Marvel's Online Clothings",
    kind: "Client · E-commerce platform",
    category: "Client",
    platforms: ["Web", "Backend"],
    summary:
      "Storefront, staff admin panel and API for an ethnic-wear label — running on its own domain with online payments.",
    stack: ["Next.js 16", "TypeScript", "Tailwind v4", "Zustand", "React 19", "Refine", "Ant Design", "Express 5", "Prisma", "PostgreSQL", "Cashfree"],
    accent: "#8b6dff",
    cover: "/projects/marvel.jpg",
    gallery: ["/projects/marvel-admin.jpg"],
    links: [
      { label: "Live site", href: "https://www.marvelsazamgarh.in" },
      { label: "Storefront code", href: "https://github.com/ahmad8929/marvel" },
      { label: "Admin code", href: "https://github.com/ahmad8929/marvel-admin" },
    ],
    caseStudy: {
      role: "Full Stack Developer (freelance)",
      period: "Aug 2026 — Sep 2026",
      team: "Solo",
      overview:
        "A clothing label in Azamgarh wanted a store that felt premium and that staff could run themselves. I built all three pieces — storefront, admin and API — and deployed them on the brand's own domain.",
      metrics: [
        { value: "3", label: "Apps" },
        { value: "21", label: "Database models" },
        { value: "Own", label: "Domain & API" },
        { value: "SEO", label: "Sitemap, OG images" },
      ],
      sections: [
        {
          title: "Storefront",
          points: [
            "Next.js 16 App Router with sitemap, robots and dynamic OG images.",
            "Brand design tokens, Zustand cart, media served from a dedicated subdomain.",
          ],
        },
        {
          title: "API",
          points: [
            "Express 5 + Prisma on Neon Postgres — catalog, auth, checkout and Cashfree payments.",
            "Image processing with Sharp, transactional email and the admin API; deployed on Hostinger.",
          ],
        },
        { title: "Admin", points: ["React 19 + Refine + Ant Design admin themed to the brand."] },
      ],
    },
  },
  {
    slug: "job-apply-automate",
    name: "Job Apply Automate",
    kind: "Personal · AI productivity tool",
    category: "Personal",
    platforms: ["AI", "Web", "Backend"],
    summary:
      "Paste a job post — AI extracts the details, drafts a tailored email, and sends it from Gmail with my resume attached. Every application is tracked.",
    stack: ["Next.js", "NextAuth", "Express", "TypeScript", "Neon Postgres", "Gemini", "OpenAI", "Claude", "Gmail API"],
    accent: "#4cc9f0",
    private: "Private · personal tool",
    caseStudy: {
      role: "Solo builder",
      period: "Sep 2026",
      team: "Solo",
      overview:
        "Applying to jobs meant re-typing the same email dozens of times. I built a personal tool that turns a screenshot or pasted job post into a ready-to-send application.",
      metrics: [
        { value: "3", label: "AI providers" },
        { value: "Auto", label: "Fallback between models" },
        { value: "Gmail", label: "Send with resume" },
        { value: "1-user", label: "Locked-down auth" },
      ],
      sections: [
        {
          title: "How it works",
          points: [
            "Extracts role, company and contact from a screenshot or text with Gemini, ChatGPT or Claude — auto-falls back if one fails.",
            "Free mode too: generates a prompt for the ChatGPT app and parses the pasted reply into a draft.",
            "Sends through the Gmail API with the resume attached and logs each application to Postgres.",
          ],
        },
        {
          title: "Security",
          points: [
            "Only one allowed email can sign in (NextAuth).",
            "Browser talks only to a Next.js route that forwards to the API with a server-side key — secrets never reach the client.",
          ],
        },
      ],
    },
  },
  {
    slug: "pg-price-intelligence",
    name: "P&G Price Intelligence",
    kind: "Client · Price tracking platform",
    category: "Client",
    platforms: ["Web", "Backend"],
    summary:
      "Tracks competitor prices across Qatar retailers — a Playwright scraper, an Express API with PDF reports and a Next.js analytics dashboard.",
    stack: ["Python", "Playwright", "Node.js", "Express", "PostgreSQL", "Neon", "Next.js", "Recharts", "PDFKit"],
    accent: "#2f8f76",
    caseStudy: {
      role: "Full Stack Developer",
      period: "Aug 2026",
      team: "Team project",
      overview:
        "A price-intelligence platform for monitoring product prices across Qatar retailers — collected automatically, stored centrally and surfaced as charts and reports.",
      metrics: [
        { value: "3", label: "Services" },
        { value: "Scheduled", label: "Scraping runs" },
        { value: "PDF", label: "Exportable reports" },
        { value: "Shared", label: "Postgres warehouse" },
      ],
      sections: [
        {
          title: "Pipeline",
          points: [
            "Python + Playwright scrapers on a schedule, writing raw snapshots and prices to Neon Postgres.",
            "Express REST API with raw SQL (no ORM) and PDF report generation.",
            "Next.js dashboard with Recharts for price history and comparisons.",
          ],
        },
      ],
    },
  },

  /* ---------------- Grid-only projects ---------------- */
  {
    slug: "gyan-hub",
    name: "Gyan Hub",
    kind: "Client · School store",
    category: "Client",
    platforms: ["Web", "Mobile", "Backend"],
    summary: "Used & new books, uniforms and stationery — a Next.js store, a mobile app and a Node.js API.",
    stack: ["Next.js", "Node.js", "Express"],
    accent: "#4cc9f0",
    cover: "/projects/gyanhub.jpg",
    links: [{ label: "Live", href: "https://gh-web-ten.vercel.app" }],
  },
  {
    slug: "dhananjai",
    name: "Prof. Dhananjai K. Pandey",
    kind: "Client · Academic website",
    category: "Client",
    platforms: ["Web"],
    summary: "Website for a JNU marine geoscientist — research, publications, awards and expeditions.",
    stack: ["React", "TypeScript", "Framer Motion", "shadcn/ui"],
    accent: "#4cc9f0",
    cover: "/projects/dhananjai.jpg",
    links: [{ label: "Live", href: "https://dhananjai.vercel.app" }],
  },
  {
    slug: "vidya-setu",
    name: "Vidya Setu Foundation",
    kind: "Client · NGO website",
    category: "Client",
    platforms: ["Web"],
    summary: "Free-education NGO site with sponsor-a-child, volunteer and donate flows.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    accent: "#c8f135",
    cover: "/projects/vidyasetu.jpg",
    links: [{ label: "Live", href: "https://ngo-lake-delta.vercel.app" }],
  },
  {
    slug: "cocus",
    name: "COCUS",
    kind: "Client · Brand website",
    category: "Client",
    platforms: ["Web"],
    summary: "Brand site for a premium coconut-water label with wedding partnership enquiries.",
    stack: ["React", "TypeScript", "Supabase", "Tailwind"],
    accent: "#c8f135",
    cover: "/projects/cocus.jpg",
    links: [{ label: "Live", href: "https://cocus.vercel.app" }],
  },
  {
    slug: "metal-wood-blast",
    name: "Metal & Wood Blast",
    kind: "Client · Business website",
    category: "Client",
    platforms: ["Web"],
    summary: "Single-page site for a custom metal fabrication, woodwork and interiors studio.",
    stack: ["Next.js 16", "TypeScript", "Tailwind v4", "Playwright"],
    accent: "#c9a46a",
    cover: "/projects/metalwoodblast.jpg",
    links: [{ label: "Code", href: "https://github.com/ahmad8929/metal_and_woodblast" }],
  },
  {
    slug: "velora",
    name: "Velora Perfumes",
    kind: "Client · Boutique storefront",
    category: "Client",
    platforms: ["Web"],
    summary: "Editorial storefront for an Indian boutique fragrance retailer with Supabase auth.",
    stack: ["Next.js", "TypeScript", "Tailwind v4", "Supabase", "Framer Motion"],
    accent: "#c9a46a",
    cover: "/projects/velora.jpg",
    links: [{ label: "Code", href: "https://github.com/ahmad8929/velora" }],
  },
  {
    slug: "plumberpro",
    name: "PlumberPro",
    kind: "Client · Lead-generation site",
    category: "Client",
    platforms: ["Web"],
    summary: "Design-led plumbing site for Delhi NCR with booking leads stored via Prisma and a custom SVG illustration system.",
    stack: ["Next.js", "TypeScript", "Tailwind v4", "Prisma", "Radix"],
    accent: "#ff5c39",
    cover: "/projects/plumberpro.jpg",
  },
  {
    slug: "puffy-woods",
    name: "Puffy Woods",
    kind: "Client · Furniture e-commerce",
    category: "Client",
    platforms: ["Web", "Backend"],
    summary: "Furniture store with COD checkout, coupons, order tracking and a full admin panel.",
    stack: ["Next.js", "Supabase", "GSAP", "Zustand", "Zod"],
    accent: "#c9a46a",
    links: [{ label: "Code", href: "https://github.com/ahmad8929/puffy-woods" }],
  },
  {
    slug: "plutonic",
    name: "Employee & Campaign Management",
    kind: "Company · Plutonic Services",
    category: "Company",
    platforms: ["Web"],
    summary: "Internal HR and marketing-campaign systems — 100+ bugs fixed, 25% faster load time.",
    stack: ["React", "Redux", "Ant Design"],
    accent: "#8b6dff",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const caseStudies = projects.filter((p) => p.caseStudy);
export const otherProjects = projects.filter((p) => !p.featured);

export const education = [
  {
    school: "Chaudhary Charan Singh University",
    degree: "B.Tech — Computer Science",
    period: "2020 — 2024",
    place: "Meerut, Uttar Pradesh",
    score: "CGPA 7.9",
  },
  {
    school: "Galaxy Convent School",
    degree: "Intermediate (Class XII)",
    period: "2019 — 2020",
    place: "Muzaffarnagar, Uttar Pradesh",
    score: "74%",
  },
];

export const achievements = [
  { icon: "♞", title: "2nd place — District Chess", text: "Runner-up at the Saharanpur district-level chess tournament, 2017." },
  { icon: "⚡", title: "3rd place — College Hackathon", text: "Placed third and won a cash prize in my third year." },
  { icon: "◆", title: "7 LeetCode badges", text: "Solved problems daily for six months straight, earning seven badges." },
  { icon: "✦", title: "Founded a coding club", text: "Organised and led my college coding club — weekly challenges and workshops." },
];
