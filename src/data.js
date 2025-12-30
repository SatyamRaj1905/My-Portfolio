export const data = {
  profile: {
    name: "Satyam Raj",
    role: "Software Developer (Web) • ECE B.Tech",
    bioText:
      "Software developer focused on performance-first web apps and clean engineering. I’ve worked on production sites that consistently meet Core Web Vitals, and I enjoy building fast, reliable experiences with modern React + Node tooling.",
    profileImage: "/profile.png",
    location: "Noida / Jaipur, India",
  },

  links: {
    email: "satyamraj1905@gmail.com",
    phone: "+91 8529228967",
    resume: "https://drive.google.com/file/d/1UPU5OfiAcPeeYdkVrLO_zDKF5dGYLUaC/view?usp=drive_link",
    // URLs weren’t present in the PDF text; add your exact links here anytime:
    linkedin: "https://www.linkedin.com/in/satyam-raj-b59061250/",
    github: "https://github.com/SatyamRaj1905",
    leetcode: "https://leetcode.com/u/strange_quark/",
    cses: "https://cses.fi/user/236427",
    workReport: "", // optional: link to your detailed work report
    sketches: ""    // optional: link to sketches / photography portfolio
  },

  skills: {
    categories: [
      {
        title: "Languages",
        items: ["C/C++", "JavaScript", "TypeScript", "Java", "Python (Micro)", "HTML", "CSS"],
      },
      {
        title: "Frontend",
        items: ["React.js", "Redux", "Recoil", "Next.js", "Tailwind CSS", "npm"],
      },
      {
        title: "Backend",
        items: ["Node.js", "Express.js", "REST APIs", "Git", "GitHub"],
      },
      {
        title: "Database",
        items: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL", "Prisma"],
      },
      {
        title: "Fundamentals",
        items: ["DSA (500+ problems)", "OOP", "DBMS", "OS", "Computer Networks"],
      },
      {
        title: "DevOps",
        items: ["AWS", "Docker", "Cloudflare"],
      },
    ],
    image: "/skills.png",
  },

  projects: [
    {
      id: "lecture-hall",
      title: "Lecture Hall Management System",
      desc:
      "Role-based lecture hall booking system with APIs + live status updates in the UI.",
      tech: ["MERN", "Redux", "WebSockets"],
      image: "/projects/project-2.png",
      link: "https://lt-management-frontend.onrender.com/", // add your live demo link
      bullets: [
        "Role-based booking flow with 4 user roles and 12+ endpoint APIs.",
        "Auto-updating UI for booking statuses using Redux + WebSocket hooks.",
      ],
    },
    {
      id: "parking-lot",
      title: "Parking Lot System (LLD)",
      desc:
        "Thread-safe CLI parking lot system using OOP with scalable architecture.",
      tech: ["Java", "OOP", "Concurrency"],
      image: "/projects/project-3.png",
      link: "https://github.com/SatyamRaj1905/Parking_Lot_LLD", // add GitHub repo
      bullets: [
        "OOP CLI system managing 3 vehicle types across 5 floors.",
        "Thread-safe concurrent handling of up to 100 simulated operations.",
      ],
    },
    {
      id: "doodle-chat",
      title: "Doodle Chat",
      desc:
        "Real-time drawing + chat app with low-latency WebSocket communication and dynamic rooms.",
      tech: ["React", "Node.js", "Socket.IO", "Express"],
      image: "/projects/project-1.png",
      link: "https://multiplayerdrawingandchatwebsite.onrender.com/", // add your live demo link
      bullets: [
        "Real-time drawing + chat with ~100ms latency WebSocket communication.",
        "Dynamic room system with 10+ concurrent user handling.",
      ],
    },
    {
      id: "super-post",
      title: "Superpost AI",
      desc:
        "AI-powered chatbot application using modern, event-driven architecture",
      tech: ["N8N", "Nhost", "OpenAPI", "GraphQl API"],
      image: "/projects/project-3.png",
      link: "https://lovely-dasik-90ed33.netlify.app/", // add GitHub repo
      bullets: [
        "Integrated N8N workflows, OpenAPI responses, and GraphQL APIs for intelligent, real-time interactions",
        "Implemented authentication with Nhost, Hasura-backed database, and deployed on Netlify",
      ],
    },
    {
      id: "mind-vault",
      title: "Mind Vault",
      desc:
        "Scalable Personal Knowledge Management System",
      tech: ["MERN", "Recoil"],
      image: "/projects/project-3.png",
      link: "https://mindvault-frontend.onrender.com/", // add GitHub repo
      bullets: [
        "A scalable MERN knowledge vault for saving important digital content",
        "Implemented platform-specific saving (YouTube, X) with an extensible backend design",
      ],
    },
  ],

  experience: [
    {
      id: "open-limits",
      company: "Open Limits Pvt. Ltd. (Digital Streets)",
      role: "Software Developer Intern",
      dates: "Sept 2025 — Present",
      location: "Noida, India",
      logo: "/experience/company-1.png",
      bullets: [
        "Developed and optimized production web applications with a performance-first approach, consistently meeting Core Web Vitals.",
        "Implemented performance improvements (LCP P75 ~1.7s, INP 64ms, CLS 0.01) with reported +665% session growth and +46% revenue growth.",
        "Collaborated with designers, marketers, and stakeholders; built multiple product sites across different price segments (luxury, professional, etc.).",
      ],
    },
    {
      id: "iit-kgp",
      company: "IIT Kharagpur (ECE Dept.)",
      role: "Research Fellow",
      dates: "Jun 2024 — Jul 2024",
      location: "Kharagpur, India",
      logo: "/experience/company-2.png",
      bullets: [
        "Selected for experimental validation of a biomedical antenna design.",
        "Performed characterization using anechoic chamber / antenna test range (radiation pattern, gain, impedance).",
        "Analyzed measured vs simulated results to evaluate real-world deviations and robustness.",
      ],
    },
    {
      id: "lnmiit-research",
      company: "LNMIIT, Jaipur",
      role: "Research Intern",
      dates: "May 2023 — Nov 2023",
      location: "Jaipur, India",
      logo: "/experience/company-3.png",
      bullets: [
        "Simulated multi-band biomedical antenna (ISM 2.4/5.1 GHz, MedRadio 900 MHz) using EM tools.",
        "Optimized SAR, gain, return loss; automated visualization with Python for ~5× iteration efficiency.",
        "Documented 10+ performance metric comparisons and contributed to 2 technical drafts.",
      ],
    },
    {
      id: "ta",
      company: "Digital Communication Lab, LNMIIT",
      role: "Teaching Assistant",
      dates: "Aug 2024 — Nov 2024",
      location: "Jaipur, India",
      logo: "/experience/company-4.png",
      bullets: [
        "Guided 80+ students with 95% lab evaluation success (modulation, line coding, MATLAB tasks).",
        "Designed 8+ lab manuals and mini-assessment scripts aligned with Bloom’s taxonomy outcomes.",
      ],
    },
  ],

  achievements: [
    {
      id: "iit-top30",
      title: "Top 30 Project Approval (IIT KGP)",
      desc:
        "Among the top 30 candidates whose project got approved at IIT KGP for practical scenario testing.",
      badgeImage: "/achievements/badge-1.png",
    },
    {
      id: "events-earnings",
      title: "₹27k+ in Inter-College Events",
      desc:
        "Secured ₹27k+ across 10+ inter-college sketch/photography events (including IIT-KGP, IIT-D, St. Stephen’s).",
      badgeImage: "/achievements/badge-2.png",
    },
    {
      id: "commissioned",
      title: "₹13k+ via Commissioned Sketches",
      desc:
        "Earned ₹13k+ via 4+ commissioned sketches (add your portfolio link in data.js).",
      badgeImage: "/achievements/badge-3.png",
    },
  ],

  contact: {
    title: "Contact",
    desc:
      "Want to collaborate or chat about web performance, React, or systems design? Drop a message.",
    image: "/contact.png",
  },
};
