export const profile = {
  name: "Hema Karumuri",
  short: "Hema K.",
  role: "Frontend Developer",
  tagline: "React.js · JavaScript · SharePoint · Power Platform",
  email: "karumurihemak@gmail.com",
  phone: "+91-9381612019",
  github: "https://github.com/Ammulu-2",
  linkedin: "https://www.linkedin.com/",
  photo: "./profile.jpg",
  resume: "./Hema_Karumuri_Frontend_Developer_Resume.pdf",
  liveProject: "",
  about:
    "Frontend Developer with 3+ years of experience building enterprise-grade, high-traffic web applications using React.js (Hooks, Context API), JavaScript (ES6+), HTML5 and CSS3. Skilled in designing component-driven UI architectures, integrating REST APIs, and optimizing customer-facing workflows for global clients. Actively expanding into SharePoint Online, SPFx, Power Platform, and Azure to support enterprise digital transformation initiatives.",
};

export const stats = [
  { value: "3+", label: "years experience" },
  { value: "25+", label: "reusable components shipped" },
  { value: "40%", label: "fewer workflow steps" },
  { value: "30%", label: "fewer UI defects" },
];

export const skills = [
  {
    icon: "ti-layout",
    title: "Frontend",
    items:
      "React.js (Hooks, Context API), JavaScript (ES6+), TypeScript, HTML5, CSS3, Bootstrap, Tailwind CSS, Material UI, Fabric UI",
  },
  {
    icon: "ti-building-skyscraper",
    title: "Enterprise & Platform",
    items: "SharePoint Online, SharePoint REST APIs, SPFx, Power Apps, Power Automate, Azure",
  },
  {
    icon: "ti-api",
    title: "API & Data",
    items: "REST API Integration, JSON, CRUD Operations, Postman, MySQL",
  },
  {
    icon: "ti-cloud",
    title: "Tools & DevOps",
    items: "Git, GitLab, CI/CD Pipelines, AWS, JIRA",
  },
  {
    icon: "ti-checkbox",
    title: "Quality & Delivery",
    items: "Unit Testing, UAT Support, Defect Resolution, Agile/Scrum, Code Reviews, Documentation",
  },
];

export const experience = [
  {
    title: "Frontend Developer",
    company: "Tata Consultancy Services (TCS), Gandhinagar, Gujarat, India",
    period: "Sep 2022 – present",
    points: [
      "Designed and developed 25+ reusable React.js components, reducing development time by 30% and improving UI consistency across enterprise applications.",
      "Built scalable single-page applications (SPA) using React.js, JavaScript, HTML5, CSS3 and Bootstrap, supporting high-traffic customer workflows for global clients.",
      "Integrated and validated 20+ REST APIs using JSON and Postman, ensuring accurate handling of product configuration, subscription mapping and billing data.",
      "Optimized critical customer journeys, reducing workflow steps by 40% and increasing conversion rates by 25–40%.",
      "Implemented pre-sales and post-sales self-service modules, enabling 80%+ customer self-service and reducing operational support dependency.",
      "Resolved 30+ UAT and production defects via JIRA, improving system stability and release quality.",
      "Supported Agile/Scrum ceremonies, sprint planning and CI/CD deployments using Git, GitLab and AWS pipelines; authored technical documentation and UI guidelines.",
    ],
  },
];

export const projects = [
  {
    icon: "ti-refresh",
    title: "CFL Project — React Migration & UI Modernization",
    location: "London client",
    blurb:
      "Led frontend migration to a modern React architecture, decreasing UI-related production defects by 30% through scalable, modular component design. Built reusable React components and transformed Figma wireframes into fully responsive, pixel-perfect UI. Documented application processes and component workflows to speed up onboarding.",
    tags: ["React", "TypeScript", "Next.js", "JavaScript", "Figma", "REST APIs", "Jest", "Git"],
  },
  {
    icon: "ti-shopping-cart",
    title: "Enterprise self-service platform",
    location: "TCS, global client",
    blurb:
      "Built pre-sales and post-sales self-service modules on React.js and REST APIs, enabling 80%+ customer self-service and cutting operational support dependency, while improving product discoverability by 25% through data-driven UI design.",
    tags: ["React.js", "JavaScript", "REST APIs", "Bootstrap", "JIRA"],
  },
];

export const certifications = [
  { name: "React – The Complete Guide (Redux & Next.js)", issuer: "Udemy", year: "2026" },
  { name: "Microsoft Azure Security Technologies (AZ-500)", issuer: "Microsoft", year: "2022" },
  { name: "Namaste JavaScript", issuer: "NamasteDev.com", year: "2022" },
];

export const education = [
  {
    degree: "B.Tech, Electronics and Communication Engineering",
    school: "PVP Siddhartha Engineering College, Vijayawada, Andhra Pradesh",
    period: "2022",
  },
];

export const nav = [
  { id: "home", icon: "ti-home", label: "Home" },
  { id: "about", icon: "ti-user", label: "About" },
  { id: "skills", icon: "ti-code", label: "Skills" },
  { id: "experience", icon: "ti-briefcase", label: "Experience" },
  { id: "projects", icon: "ti-layout-grid", label: "Projects" },
  { id: "credentials", icon: "ti-certificate", label: "Credentials" },
  { id: "contact", icon: "ti-mail", label: "Contact" },
];
