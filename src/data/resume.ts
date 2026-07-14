// Résumé content. Edit here. The page renders straight from this.

export const site = {
  name: "Andrew Marinic",
  tagline: "Full-Stack / DevSecOps Engineer",
  description: "Résumé, projects, and the occasional side quest.",
  socials: {
    github: "https://github.com/AMarinic92",
    linkedin: "https://www.linkedin.com/in/andrew-marinic/",
  },
} as const;

export const profile =
  "I am a conscientious, resourceful developer with strong multitasking, analytical, problem-solving, and decision-making skills. I love building both software and physical things, and especially combining the two. I communicate well in writing and in person, work equally happily on a team or solo, stay calm under pressure, and adapt quickly to change. I'm always picking up new skills and ideas in my own time and bringing them back to my work.";

export const education = [
  {
    degree: "Bachelor of Science",
    detail: "Major in Computer Science, Minor in Chemistry",
    school: "University of Manitoba",
    period: "Sep 2020 – 2024",
  },
];

export const experience = [
  {
    role: "Full-Stack / DevSecOps Engineer",
    org: "Reimer World Corp., IT Department",
    period: "Sep 2024 – present",
    blurb:
      "Working the technical side of the transportation industry, I own frontend, backend microservices, a desktop application, and security automation for an internal logistics and dispatch platform, shipping end-to-end, from UI through infrastructure and CI/CD. On the web side I build with React, Next.js, and TypeScript on the frontend and Node.js microservices on the backend, backed by MySQL, alongside the PHP and Java / Jakarta EE (Payara) systems we maintain. I designed and built a scheduled, unattended security-scanning pipeline from scratch: SAST, SCA, and DAST driving Trivy, Semgrep, Gitleaks, OSV-Scanner, ZAP, and Nuclei, running on AWS with Bitbucket Pipelines for CI/CD and auto-filing findings into our ticketing and chat tools. I also keep docs current and jump on things when systems break. We keep the team cohesive with Teams and Atlassian tooling.",
  },
  {
    role: "Creative Team – Programming & Fabrication",
    org: "Killer Noob Escape",
    period: "Apr 2026 – present",
    blurb:
      "On the creative team I work across code and hardware for the escape-room experiences: programming the embedded systems behind the puzzles and effects — ESP32 and Arduino firmware on FreeRTOS, NFC and RS485 puzzle electronics, and air/pneumatic monitoring — while also taking on the physical side with repairs, fabrication, and builds.",
  },
  {
    role: "Teaching Assistant",
    org: "University of Manitoba, Dept. of Computer Science",
    period: "Jan 2024 – May 2024",
    blurb:
      "Qualified after high grades in computer organization and programming practices. I assisted students in office hours, over email, and on discussion boards, and supported staff with approved lecture substitution, invigilation, and relaying student difficulties. The role demanded professionalism to uphold academic integrity and a welcoming atmosphere, plus timely communication with supervisors.",
  },
  {
    role: "Marker",
    org: "University of Manitoba, Dept. of Computer Science",
    period: "Jan 2024 – May 2024",
    blurb:
      "Marked for computer organization and programming practices after strong performance in both. The role required frequent communication with supervisors on marking schemes and schedules, flagging scheme irregularities and suspected academic-integrity issues. Marking was done mainly on Crowdmark, and keeping pace with university deadlines took strong time management.",
  },
  {
    role: "Estimator & Office Manager",
    org: "Midwest Fence",
    period: "Seasonal 2018 – 2020",
    blurb:
      "Met customers for in-person measurements, quoting, booking, and project management. The estimating side carried significant office work: managing phones, email, and files, coordinating with other management staff, and handling drop-in customers.",
  },
];

export const projects: {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  href?: string;
}[] = [
  {
    title: "Coffin Animatronic (Reborn)",
    subtitle: "Embedded C firmware: SAME51 / Microchip Harmony",
    period: "Sep 2025 – present",
    description:
      "A ground-up rebuild of my Halloween 2024 coffin animatronic firmware. Written in embedded C on the SAME51 with Microchip Harmony/MCC, driving the hardware from scratch: custom drivers for SKC6812 (NeoPixel) addressable LEDs and a D-Sun PIR motion sensor, TCC-timed NeoPixel signalling, and hand-tuned SERCOM and clock configuration, now running on FreeRTOS. The original 2024 build drove pneumatic relays and a piston for randomized, eerie motion.",
    href: "https://github.com/AMarinic92/Coffin-Reborn",
  },
  {
    title: "Card Barrage",
    subtitle: "Full-stack Magic: The Gathering engine: Next.js · Go · Postgres + Memgraph",
    period: "Nov 2025 – present",
    description:
      "A Magic: The Gathering companion I'm building end to end, born out of the hobby. An Express/Next.js front end (Next.js handling auth) talks to a Go backend chosen for its low-level control and concurrency. Data is split across two stores: Postgres via GORM as the single source of truth, and a Memgraph graph database modelling the fundamental gameplay relationships to drive a card suggestion engine.",
    href: "https://github.com/AMarinic92/Card-Barrage",
  },
  {
    title: "Killer Air",
    subtitle: "Embedded firmware: Arduino Mega + FreeRTOS",
    period: "Killer Noob Escape",
    description:
      "An air-compressor monitoring rig on an Arduino Mega running FreeRTOS. It reads the compressor's state and watches for the conditions I care about, with the RTOS juggling the monitoring tasks on tight timing. An embedded build in the space where firmware meets real hardware.",
  },
  {
    title: "ESP32 Puzzle System",
    subtitle: "Embedded firmware: ESP32 + FreeRTOS, RS485 & NFC",
    period: "Killer Noob Escape",
    description:
      "A physical puzzle system built on the ESP32 with FreeRTOS, tying together an RS485 bus and two PN5180 NFC readers. The RTOS coordinates the readers and bus traffic so the puzzle can react to tags in real time. The kind of software-meets-physical build I enjoy most.",
  },
  {
    title: "AI Accessibility Checker",
    subtitle: "WCAG 2.2 AA scanner for the Internet Archive: Python · TypeScript · Docker",
    period: "Jan – Apr 2024",
    description:
      "A COMP 4560 capstone project built with the Internet Archive as the client: an AI-assisted tool that scans web content for Web Content Accessibility Guidelines (WCAG) 2.2 level-AA issues and returns practical, prioritized recommendations. A containerized Python and TypeScript stack, delivered by a small team over a single term.",
    href: "https://github.com/AMarinic92/4560-IA-Accessibility-Checker",
  },
];

// Grouped skills, rendered in order. Technical groups first for a dev portfolio.
export const skills = [
  {
    label: "Programming Languages",
    items: [
      "C",
      "Embedded C",
      "Python",
      "C++",
      "Java (SE/EE)",
      "PHP",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    label: "Frameworks & APIs",
    items: [
      "Node.js",
      "React",
      "Next.js",
      "Electron",
      "Radix UI",
      "TanStack Query",
      "TanStack Table",
      "react-hook-form",
      "Zod",
      "Cypress",
      "Jest",
      "TensorFlow",
      "Android Development",
      "Vite",
      "Java / Jakarta EE",
      "PrimeFaces",
      "JTOpen",
      "Tailwind CSS",
    ],
  },
  {
    label: "Databases",
    items: ["MySQL", "SQLite", "Neo4j", "HSQLDB", "DB2"],
  },
  {
    label: "Engines",
    items: ["Godot", "Unity", "Source SDK"],
  },
  {
    label: "Systems",
    items: [
      "AWS (Fargate, EC2, ECS, ECR, EventBridge, S3)",
      "Docker / Containers",
      "Payara Server",
      "On-prem Servers",
    ],
  },
  {
    label: "Security",
    items: [
      "SAST / SCA / DAST",
      "Trivy",
      "Semgrep",
      "Gitleaks",
      "OSV-Scanner",
      "OWASP ZAP",
      "Nuclei",
      "SARIF",
    ],
  },
  {
    label: "Other",
    items: [
      "Microsoft 365",
      "Jira",
      "Git (GitLab, GitHub, Bitbucket)",
      "GNU/Linux",
      "Cyber Security",
      "DevSec",
      "Real-Time Networks",
      "Docker / Containers",
      "WCAG 2.2",
      "System Architecture",
      "Troubleshooting",
      "CI (Jenkins, Bitbucket Pipelines)",
    ],
  },
  {
    label: "Team",
    items: [
      "Task Oriented",
      "Leadership",
      "Conflict Resolution",
      "Email",
      "Slack",
      "Discord",
      "Teams",
      "Team Collaboration",
      "Technical Support",
      "Agile Methodology",
    ],
  },
  {
    label: "Personal",
    items: [
      "Time Management",
      "Creativity",
      "Working Under Pressure",
      "Communication",
      "Confidentiality",
      "Safety",
      "Problem Solving",
      "Decision Making",
      "Learning Ability",
      "Adaptability",
      "Project Management",
      "Friendly",
      "Data Analysis",
    ],
  },
];

export const hobbies = [
  "Drawing",
  "Tinkering",
  "Magic: The Gathering",
  "Dungeons & Dragons",
  "Video Games",
  "Warhammer 40k",
  "Hiking",
  "Camping",
  "Canoeing",
  "Cooking",
  "Urban Exploring",
];

// Portfolio: hobby/maker projects shown on /portfolio.
export const kommandosPhotos = [
  "/portfolio/kommandos/k2-1.JPG",
  "/portfolio/kommandos/k2-2.JPG",
  "/portfolio/kommandos/k2-3.JPG",
  "/portfolio/kommandos/k2-4.JPG",
  "/portfolio/kommandos/kb1-1.JPG",
  "/portfolio/kommandos/kb1-2.JPG",
  "/portfolio/kommandos/kb1-3.JPG",
  "/portfolio/kommandos/breacher-1.JPG",
  "/portfolio/kommandos/breacher-2.JPG",
  "/portfolio/kommandos/breacher-3.JPG",
  "/portfolio/kommandos/burna-1.JPG",
  "/portfolio/kommandos/burna-2.JPG",
  "/portfolio/kommandos/burna-3.JPG",
  "/portfolio/kommandos/burna-4.JPG",
  "/portfolio/kommandos/burna-5.JPG",
  "/portfolio/kommandos/comms-1.JPG",
  "/portfolio/kommandos/comms-2.JPG",
  "/portfolio/kommandos/comms-3.JPG",
  "/portfolio/kommandos/comms-4.JPG",
  "/portfolio/kommandos/dakka-1.JPG",
  "/portfolio/kommandos/dakka-2.JPG",
  "/portfolio/kommandos/grot.JPG",
  "/portfolio/kommandos/nob-1.JPG",
  "/portfolio/kommandos/nob-2.JPG",
  "/portfolio/kommandos/nob-3.JPG",
  "/portfolio/kommandos/nob-4.JPG",
  "/portfolio/kommandos/rokit-1.JPG",
  "/portfolio/kommandos/rokit-2.JPG",
  "/portfolio/kommandos/rokit-3.JPG",
  "/portfolio/kommandos/rokit-4.JPG",
  "/portfolio/kommandos/slasha-1.JPG",
  "/portfolio/kommandos/slasha-2.JPG",
  "/portfolio/kommandos/slasha-3.JPG",
  "/portfolio/kommandos/snipa-1.JPG",
  "/portfolio/kommandos/snipa-2.JPG",
  "/portfolio/kommandos/squig-1.JPG",
  "/portfolio/kommandos/squig-2.JPG",
  "/portfolio/kommandos/squig-3.JPG",
];

export const coffinYouTubeId = "_OO-Skr_nrE";
