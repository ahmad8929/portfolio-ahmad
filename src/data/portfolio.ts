// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: "Mohd Ahmad",
  firstName: "Mohd",
  lastName: "Ahmad",
  role: "Full-Stack Developer",
  tagline: "I build fast, polished web apps — from pixel-perfect interfaces to the APIs behind them.",
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

export const rotatingWords = ["storefronts", "dashboards", "brand sites", "admin panels", "web apps"];

export const about = {
  paragraphs: [
    "I'm a developer who cares about the details users feel but rarely notice — the easing on a hover, the layout that holds up at 320px, the page that loads before you blink.",
    "Over the last two years I've shipped production work for a Dubai-based audio startup, built MERN e-commerce for a fragrance brand, and delivered complete websites for clothing labels, a JNU professor, an NGO and a school store — often owning everything from the design system to deployment.",
    "Outside the editor you'll find me at a chessboard (district-level runner-up) or grinding LeetCode problems.",
  ],
  stats: [
    { value: 2, suffix: "+", label: "Years building for production" },
    { value: 15, suffix: "+", label: "Websites & apps shipped" },
    { value: 100, suffix: "+", label: "Bugs squashed via Jira" },
    { value: 25, suffix: "%", label: "Faster load time delivered" },
  ],
};

export type SkillGroup = { title: string; blurb: string; items: string[]; accent: "lime" | "coral" | "violet" | "sky" };

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    blurb: "Component-driven UIs that are fast, accessible and a joy to use.",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Redux Toolkit", "Zustand"],
    accent: "lime",
  },
  {
    title: "Styling & UI",
    blurb: "Pixel-perfect, responsive, animated — CSS is my playground.",
    items: ["Tailwind CSS", "CSS3 / Animations", "HTML5", "Ant Design", "shadcn/ui", "Bootstrap"],
    accent: "coral",
  },
  {
    title: "Backend",
    blurb: "REST APIs, auth and payments that hold up in production.",
    items: ["Node.js", "Express.js", "RESTful APIs", "JWT", "OAuth", "Cloudinary"],
    accent: "violet",
  },
  {
    title: "Data & Tools",
    blurb: "From schema to shipping.",
    items: ["MongoDB", "Git & GitHub", "Vercel", "Jira", "VS Code", "Refine"],
    accent: "sky",
  },
];

export const marqueeTech = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB",
  "Redux", "Ant Design", "Flutter", "Zustand", "JWT", "Vercel", "Git",
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
  current?: boolean;
};

export const experience: Experience[] = [
  {
    company: "Nasheedio",
    role: "Frontend Developer",
    type: "Full-time",
    period: "Jun 2025 — Present",
    location: "Dubai-based · Remote",
    about: "A growing audio startup building a community-driven platform for creators and listeners.",
    points: [
      "Develop new features and enhance the web platform to improve usability and functionality.",
      "Fixed bugs, optimised UI components and improved performance for a seamless listening experience.",
      "Built the Nasheedio Creator Awards '26 campaign site end-to-end.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind"],
    link: "https://nasheedio.com",
    current: true,
  },
  {
    company: "RxR Perfumery",
    role: "Full Stack Developer",
    type: "Contract",
    period: "Mar 2025 — Jun 2025",
    location: "Remote",
    about: "A Delhi-based fragrance brand expanding its business through digital e-commerce.",
    points: [
      "Built a scalable e-commerce platform on the MERN stack with integrated payments and order management.",
      "Designed and optimised a mobile-first responsive UI, increasing customer engagement and retention.",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    company: "Plutonic Services",
    role: "Frontend Developer",
    type: "Internship",
    period: "Sep 2024 — Feb 2025",
    location: "Noida, India",
    about: "A service-based startup delivering software solutions for clients across multiple domains.",
    points: [
      "Contributed to Employee Management and Campaign Management systems, shipping on time.",
      "Resolved 100+ bugs via Jira and optimised APIs — cutting load time by 25% and downtime by 40%.",
    ],
    stack: ["React", "Ant Design", "Redux", "REST APIs"],
  },
];

export type FeaturedProject = {
  name: string;
  kind: string;
  summary: string;
  highlights: string[];
  stack: string[];
  images: string[];
  links: { label: string; href: string }[];
  accent: string;
};

export const featured: FeaturedProject[] = [
  {
    name: "Marvel's Online Clothings",
    kind: "Client · E-commerce platform",
    summary:
      "A complete commerce system for an ethnic-wear label — a storefront, a staff admin panel and the API that powers both, running on its own domain.",
    highlights: [
      "Next.js 16 App Router storefront with SEO built in — sitemap, robots and dynamic OG images",
      "Separate staff admin built with React 19, Refine and Ant Design, themed to the brand",
      "Custom design tokens, Zustand cart state, media served from a dedicated subdomain",
    ],
    stack: ["Next.js 16", "TypeScript", "Tailwind v4", "Zustand", "React 19", "Refine", "Ant Design"],
    images: ["/projects/marvel.jpg", "/projects/marvel-admin.jpg"],
    links: [
      { label: "Live site", href: "https://www.marvelsazamgarh.in" },
      { label: "Storefront code", href: "https://github.com/ahmad8929/marvel" },
      { label: "Admin code", href: "https://github.com/ahmad8929/marvel-admin" },
    ],
    accent: "#c8f135",
  },
  {
    name: "Bloomtales Boutique",
    kind: "Client · Full-stack e-commerce",
    summary:
      "A boutique store for sarees, kurtis and ethnic wear, shipping across India — built full-stack from the database to the checkout.",
    highlights: [
      "Secure auth with email verification and JWT sessions",
      "Cloudinary-powered product media and payment gateway integration",
      "Modern, responsive shopping flow with rate-limited APIs for scale",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Node.js", "Express", "MongoDB", "Cloudinary"],
    images: ["/projects/bloomtales.jpg"],
    links: [
      { label: "Live site", href: "https://www.bloomtales.in" },
      { label: "Frontend code", href: "https://github.com/ahmad8929/bloom-tales-frontend" },
      { label: "Backend code", href: "https://github.com/ahmad8929/bloom-backend" },
    ],
    accent: "#ff5c39",
  },
];

export type ProjectCategory = "Client" | "Company";

export type Project = {
  name: string;
  category: ProjectCategory;
  description: string;
  stack: string[];
  image?: string;
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    name: "Nasheedio",
    category: "Company",
    description: "Muslim-friendly audio platform — nasheeds, podcasts and playlists for a global community.",
    stack: ["Next.js", "React", "TypeScript"],
    image: "/projects/nasheedio.jpg",
    href: "https://nasheedio.com",
  },
  {
    name: "Nasheedio Creator Awards '26",
    category: "Company",
    description: "Campaign site for a global creator awards — voting, creator sign-ups and a live leaderboard.",
    stack: ["React", "TypeScript", "Tailwind", "shadcn/ui"],
    image: "/projects/nasheedio-awards.jpg",
    href: "https://nasheediocreatoraward.vercel.app",
    repo: "https://github.com/ahmad8929/nasheediocreatoraward",
  },
  {
    name: "Gyan Hub",
    category: "Client",
    description: "A friendly school store — used & new books, uniforms and stationery — across web, mobile and API.",
    stack: ["Next.js", "Flutter", "Node.js", "Express"],
    image: "/projects/gyanhub.jpg",
    href: "https://gh-web-ten.vercel.app",
    repo: "https://github.com/ahmad8929/GH-Web",
  },
  {
    name: "Prof. Dhananjai K. Pandey",
    category: "Client",
    description: "Academic website for a JNU marine geoscientist — research, publications, awards and expeditions.",
    stack: ["React", "TypeScript", "Framer Motion", "shadcn/ui"],
    image: "/projects/dhananjai.jpg",
    href: "https://dhananjai.vercel.app",
    repo: "https://github.com/ahmad8929/dhananjai",
  },
  {
    name: "Vidya Setu Foundation",
    category: "Client",
    description: "NGO website for free education — sponsor a child, volunteer and donate flows.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    image: "/projects/vidyasetu.jpg",
    href: "https://ngo-lake-delta.vercel.app",
    repo: "https://github.com/ahmad8929/ngo",
  },
  {
    name: "COCUS",
    category: "Client",
    description: "Brand site for a premium coconut-water label from Delhi, with wedding partnership enquiries.",
    stack: ["React", "TypeScript", "Supabase", "Tailwind"],
    image: "/projects/cocus.jpg",
    href: "https://cocus.vercel.app",
    repo: "https://github.com/ahmad8929/cocus",
  },
  // TODO: add live links / screenshots for the three projects below.
  {
    name: "Pet Basket",
    category: "Client",
    description: "Online store for pet food, toys and accessories.",
    stack: ["React", "Tailwind"],
  },
  {
    name: "Angel Home Salon",
    category: "Client",
    description: "Website for an at-home beauty & salon service with service listings and bookings.",
    stack: ["React", "Tailwind"],
  },
  {
    name: "Supreme Restaurant",
    category: "Client",
    description: "Restaurant website with menu, gallery and reservation enquiries.",
    stack: ["React", "Tailwind"],
  },
  {
    name: "RxR Perfumery Store",
    category: "Company",
    description: "MERN e-commerce for a fragrance brand with payments and order management.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    name: "Employee Management System",
    category: "Company",
    description: "Internal HR dashboard built at Plutonic Services — employees, attendance and roles.",
    stack: ["React", "Ant Design", "Redux"],
  },
  {
    name: "Campaign Management System",
    category: "Company",
    description: "Tool for creating, scheduling and tracking marketing campaigns at Plutonic Services.",
    stack: ["React", "Ant Design", "REST APIs"],
  },
];

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
