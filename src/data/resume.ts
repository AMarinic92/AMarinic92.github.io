// Résumé content. Edit here — the page renders straight from this.

export const site = {
  name: "Andrew Marinic",
  tagline: "Full-Stack Developer",
  description: "Résumé, projects, and the occasional side quest.",
  socials: {
    github: "https://github.com/AMarinic92",
    linkedin: "https://www.linkedin.com/in/andrew-marinic/",
  },
} as const;

export const profile =
  "I am a conscientious, resourceful developer with strong multitasking, analytical, problem-solving, and decision-making skills. I love building both software and physical things — and especially combining the two. I communicate well in writing and in person, work equally happily on a team or solo, stay calm under pressure, and adapt quickly to change. I'm always picking up new skills and ideas in my own time and bringing them back to my work.";

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
    role: "Full-Stack Application Developer",
    org: "Reimer World Corp. — IT Department",
    period: "Sep 2024 – present",
    blurb:
      "Working the technical side of the transportation industry, specializing in Java EE / Glassfish and its modern iterations, Jakarta EE and Payara Server. I also modernize systems with Node.js, React, and Next.js. My work spans full-stack development in both the Java EE and React ecosystems plus technical support when systems fail. I've worked with on-prem servers and AWS (Lightsail and EC2), and built CI/CD pipelines with Jenkins and Bitbucket Pipelines to automate deployments. We keep the team cohesive with Teams and Atlassian tooling.",
  },
  {
    role: "Teaching Assistant",
    org: "University of Manitoba — Dept. of Computer Science",
    period: "Jan 2024 – May 2024",
    blurb:
      "Qualified after high grades in computer organization and programming practices. I assisted students in office hours, over email, and on discussion boards, and supported staff with approved lecture substitution, invigilation, and relaying student difficulties. The role demanded professionalism to uphold academic integrity and a welcoming atmosphere, plus timely communication with supervisors.",
  },
  {
    role: "Marker",
    org: "University of Manitoba — Dept. of Computer Science",
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

export const projects = [
  {
    title: "Coffin Animatronic (Reborn)",
    subtitle: "Embedded C firmware — SAME51 / Microchip Harmony",
    period: "Sep 2025 – present",
    description:
      "A ground-up rebuild of my Halloween 2024 coffin animatronic firmware. Written in embedded C on the SAME51 with Microchip Harmony/MCC, driving the hardware from scratch: custom drivers for SKC6812 (NeoPixel) addressable LEDs and a D-Sun PIR motion sensor, TCC-timed NeoPixel signalling, and hand-tuned SERCOM and clock configuration, now running on FreeRTOS. The original 2024 build drove pneumatic relays and a piston for randomized, eerie motion.",
    href: "https://github.com/AMarinic92/Coffin-Reborn",
  },
  {
    title: "Accessibility Checker",
    subtitle: "Chrome extension with distributed computing — Internet Archive",
    period: "Jan – Apr 2024",
    description:
      "A proof-of-concept built alongside the Internet Archive's UI team lead, exploring machine-learning assessment of WCAG 2.2 accessibility issues. A Chrome extension dispatched tasks to a CUDA-capable server for ML-assisted evaluation of the page. I was team lead and handled the ML implementation and HTML-parsing algorithms. The backend leaned on BS4, TensorFlow, and HF Transformers; the frontend was a Vite-built extension talking to the server over an SSH socket.",
    href: "https://github.com/AMarinic92/4560-IA-Accessibility-Checker",
  },
  {
    title: "Real-Time Networks",
    subtitle: "Embedded systems network — University of Manitoba",
    period: "Jan – Apr 2024",
    description:
      "A topics project on a SAM E51 Curiosity Nano dev board, written entirely in C, investigating whether Real-Time Systems students could take on new topics. We used the onboard debugger to send messages back to OpenOCD, wrote a CAN network driver, and I built a new UART driver for an RS485 peripheral. The result was a small network passing peripheral data across boards — I2C/PWM SERCOM on one board driving another over a private UART link, bridged to a third over CAN, with a Wi-Fi card controlled via HTTP requests.",
    href: "https://github.com/University-of-Manitoba-Computer-Science/RealTimeNetworking",
  },
  {
    title: "Mantis",
    subtitle: "Android bug-tracking application",
    period: "Jan – Apr 2023",
    description:
      "A simple Android bug-tracking app for developers, built as a software-engineering group project using standard Android/Java and the Agile methodology. I held a leadership role plus development duties — JUnit testing and designing domain-specific objects used across layers.",
    href: "https://rozennoureev.github.io/Mantis-website/",
  },
];

// Grouped skills, rendered in order. Technical groups first for a dev portfolio.
export const skills = [
  {
    label: "Programming Languages",
    items: ["C", "Embedded C", "Python", "C++", "Java (SE/EE)", "JavaScript"],
  },
  {
    label: "Frameworks & APIs",
    items: [
      "Node.js",
      "Next.js",
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
    items: ["SQLite", "Neo4j", "HSQLDB", "DB2"],
  },
  {
    label: "Engines",
    items: ["Godot", "Unity", "Source SDK"],
  },
  {
    label: "Systems",
    items: ["Payara Server", "AWS (Lightsail & EC2)", "On-prem Servers"],
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
