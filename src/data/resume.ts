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
    period: "Sep 2020 – Jun 2024",
  },
];

export const experience = [
  {
    role: "Full-Stack Application Developer",
    org: "Reimer World Corp — IT Department",
  },
  {
    role: "Teaching Assistant",
    org: "University of Manitoba — Dept. of Computer Science",
  },
  {
    role: "Marker",
    org: "University of Manitoba — Dept. of Computer Science",
  },
  {
    role: "Estimator & Office Manager",
    org: "Midwest Fence",
  },
  {
    role: "Labourer",
    org: "Midwest Fence · Gardon Construction",
  },
];

export const projects = [
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
    subtitle: "Embedded systems research — University of Manitoba",
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

export const skills = {
  technical: [
    "SQL",
    "DB2 & z/OS",
    "Python",
    "Java / Jakarta EE",
    "Payara Server",
    "Node.js",
    "React",
    "Next.js",
    "Linux / Unix",
    "C",
    "Android Development",
    "TensorFlow",
    "Godot",
    "Unity",
    "Source SDK",
    "Embedded Systems",
    "Real-Time Networks",
    "Data Analysis",
    "Microsoft Office",
  ],
  soft: [
    "Communication",
    "Problem Solving",
    "Decision Making",
    "Creativity",
    "Time Management",
    "Friendly",
    "Teamwork",
    "Adaptability",
    "Learning Ability",
    "Working Under Pressure",
    "Management",
    "Project Management",
    "Cyber Security",
    "Confidentiality",
    "Safety",
  ],
};

export const hobbies = [
  "Drawing",
  "Tinkering",
  "Magic: The Gathering",
  "Dungeons & Dragons",
  "Video Games & Game Design",
  "Warhammer 40k",
  "Hiking",
  "Camping",
  "Canoeing",
  "Cooking",
  "Urban Exploring",
];
