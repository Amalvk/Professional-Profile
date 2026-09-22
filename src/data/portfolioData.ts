import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiSocketdotio,
  SiWebrtc,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiFirebase,
  SiJira,
  SiJenkins,
  SiFigma,
  SiSonarqubeserver,
  SiStripe,
  SiPostman,
  SiNetlify,
  SiCursor,
  SiGithubcopilot,
  SiClaudecode,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { FiCpu, FiTerminal } from "react-icons/fi";

export const profile = {
  name: "Amal VK",
  title: "Frontend Developer",
  tagline:
    "Experienced software professional with significant expertise in React, building scalable, high-quality web applications and collaborating effectively with cross-functional teams. Passionate about innovation, continuous learning, performance optimization, and creating impactful user experiences.",
  location: "Kerala, India",
  email: "amalvkp@gmail.com",
  resumeUrl: "/resume/Resume_AmalVK.pdf",
};

// Start of professional career, used to compute experience duration dynamically.
export const experienceStartDate = new Date(2021, 9, 6);

export function getExperienceDuration(now: Date = new Date()): string {
  let years = now.getFullYear() - experienceStartDate.getFullYear();
  let months = now.getMonth() - experienceStartDate.getMonth();
  if (now.getDate() < experienceStartDate.getDate()) months -= 1;
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return `${years}.${months}`;
}

export const summaryParagraphs = [
  (years: string) =>
    `My name is Amal VK, and I'm from Calicut, Kerala. I have ${years} years of experience in the field of information technology. Over the years, I've worked in different roles that helped me build strong communication skills, a good work ethic, and the ability to adapt easily.`,
  () =>
    "As a passionate problem-solver and BTech graduate, I've contributed to various technology projects and enjoy working collaboratively towards shared goals. Outside of work, I'm an avid traveler, chess enthusiast, and culinary explorer. I'm eager to continue growing through exciting projects, with a particular interest in web development, as it aligns perfectly with my passion for innovation and continuous learning.",
];

export const socialLinks = [
  { name: "Email", url: `mailto:${profile.email}`, icon: "email" },
  { name: "GitHub", url: "https://github.com/amalvk", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/amal-vk-70420b147/",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/amal_v_k",
    icon: "instagram",
  },
];

export type Skill = {
  name: string;
  icon?: IconType;
  color?: string;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Context API" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Material UI", icon: SiMui, color: "#007FFF" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "Django REST Framework" },
      { name: "REST API design" },
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "WebRTC", icon: SiWebrtc },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Jira", icon: SiJira, color: "#0052CC" },
      { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "SonarQube", icon: SiSonarqubeserver, color: "#4E9BCD" },
      { name: "Stripe API", icon: SiStripe, color: "#635BFF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "VS Code", icon: DiVisualstudio, color: "#5C2D91" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
    ],
  },
  {
    title: "AI Tools & Editors",
    skills: [
      { name: "Cursor", icon: SiCursor },
      { name: "GitHub Copilot", icon: SiGithubcopilot },
      { name: "Claude Code", icon: SiClaudecode, color: "#D97757" },
      { name: "Codex", icon: FiTerminal },
      { name: "Antigravity", icon: FiCpu, color: "#0d9488" },
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  companyFullName?: string;
  empId?: string;
  url?: string;
  logo?: string;
  logoBg?: string;
  date: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Talks & Talks",
    empId: "TTIND27",
    url: "https://talksandtalks.ai/",
    logo: "/logos/companies/talksandtalks.png",
    date: "Jun 2025 - May 2026",
    bullets: [
      "Collaborated with the R&D team on Agentic task API integrations, including email automation and HR onboarding workflows",
      "Integrated real-time streaming data APIs to enable seamless live data updates in applications",
      "Developed interactive dashboards using React with responsive, data-driven UI",
      "Integrated Stripe Payment APIs to manage subscription flows, including plan creation, recurring billing, payment confirmation, and secure transaction handling",
    ],
  },
  {
    role: "Associate Consultant",
    company: "Infosys",
    empId: "1347914",
    url: "https://www.infosys.com/",
    logo: "/logos/companies/infosys.jpg",
    date: "Mar 2024 - May 2025",
    bullets: [
      "Team Collaboration and Client Interaction",
      "Involved in requirement analysis and solution design within an Agile Scrum environment",
      "POC implementing WebSocket integration in React for real-time data updates",
      "Implemented Redux middleware for handling all authentication-related APIs",
      "Project Implementation and Testing",
      "Developed cross-browser compatible and fully responsive user interfaces for seamless user experience across devices",
    ],
  },
  {
    role: "Analyst - Web Development",
    company: "Invenics",
    empId: "200061",
    url: "https://www.invenics.com/",
    logo: "/logos/companies/invenics.jpeg",
    logoBg: "bg-black",
    date: "20 Feb 2023 - 15 Mar 2024",
    bullets: [
      "Demonstrated proficiency in building complex user interfaces and applications using React.js",
      "Enhanced efficiency through Redux centralized data management",
      "Best practices, coding standards, and architectural guidelines to facilitate knowledge sharing among team members",
      "Integrated real-time data functionalities through Firebase",
    ],
  },
  {
    role: "Software Engineer",
    company: "iLearningEngines",
    empId: "ILE127",
    url: "https://ilearningengines.com/",
    logo: "/logos/companies/ile.jpeg",
    date: "6 Oct 2021 - 10 Feb 2023",
    bullets: [
      "Managed state using Context API for efficient data flow and better user experience",
      "Experienced in developing robust REST API applications",
      "Explored Node.js and Express.js throughout development lifecycle",
      "Demonstrated SonarQube concepts to elevate code quality",
      "Data Structures and ECMAScript (ES6+) features",
    ],
  },
];

export type Project = {
  name: string;
  logo?: string;
  image?: string;
  link?: string;
  github?: string;
  description: string[];
  roles: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "NeoroTalks",
    logo: "/logos/projects/neorotalks.png",
    link: "https://talksgpt.talksandtalks.ai/",
    description: [
      "Enterprise-grade Agentic AI ecosystem designed for secure and scalable real-world applications",
      "Supports real-time Agentic AI-driven interactions",
      "Delivers governed, auditable AI solutions for reliable and production-ready deployment",
    ],
    roles: [
      "Integrated D-ID chatbot capabilities to enable real-time AI avatar interactions with voice and video conversations",
      "Collaborated with R&D team on Agentic task APIs including email automation and HR onboarding workflows",
      "Designed and developed dynamic dashboards using React for data visualization and responsive UI/UX",
      "Integrated Microsoft Outlook and Gmail connectors into the frontend, enabling email preview and sending capabilities within Agentic AI-driven workflows",
      "Implemented Redux middleware for handling authentication-related APIs",
      "Integrated Stripe payment APIs for subscription management, recurring billing, and secure transactions",
    ],
    tags: ["React", "Redux", "Stripe", "D-ID", "Agentic AI"],
  },
  {
    name: "TalksSign",
    logo: "/logos/projects/talkssign.png",
    link: "https://dev-talkssign.test4u.co.uk/",
    description: [
      "Enterprise-grade e-signature platform designed for secure document approval and signing workflows",
      "AI-driven document creation with seamless cross-device signing",
      "Delivers AI-powered document generation, editing, and secure cross-device signing experiences",
    ],
    roles: [
      "Designed and developed dynamic document management workflows with configurable signature fields and signing options",
      "Implemented role-based approval flows for admins, reviewers, and clients with multi-stage review and signing processes",
      "Built sequential and parallel signing workflows, enabling signers to sign in order or simultaneously based on business requirements",
      "Developed document review functionality allowing reviewers to approve, reject, or request changes before documents proceed to the next signer",
      "Integrated AI-driven document generation and editing capabilities using LLMs to create documents from key clause inputs",
      "Enabled secure email-based access with URL signing links, providing a seamless signing experience across desktop and mobile devices",
      "Implemented React-based dashboards and workflow management interfaces with secure API integrations and state management",
    ],
    tags: ["React", "LLM Integration", "Workflow Engine", "Auth"],
  },
  {
    name: "TalksMeet",
    logo: "/logos/projects/talksmeet.png",
    description: [
      "Enterprise-grade video collaboration platform designed for scheduling and managing business meetings",
      "Supports real-time audio/video communication with WebRTC-powered interactions",
      "Delivers seamless Meetings & Interviews and team collaboration",
    ],
    roles: [
      "Collaborated on the development of an internal meeting management platform for organizations",
      "Integrated WebRTC and LiveKit to enable real-time audio and video conferencing capabilities",
      "Implemented Socket.IO-based real-time event handling for meeting status updates and participant synchronization",
      "Developed meeting scheduling, invitation, and participant management workflows",
      "Built responsive React-based interfaces for daily standups, interview sessions, and business meetings",
      "Implemented meeting room controls including participant management, mute/unmute, and session monitoring",
      "Collaborated with backend teams to integrate meeting APIs, notifications, and calendar-based scheduling features",
    ],
    tags: ["React", "WebRTC", "LiveKit", "Socket.IO"],
  },
  {
    name: "Southern California Edison (SCE)",
    logo: "/logos/projects/sce.png",
    link: "https://www.sce.com/",
    description: [
      "Major electric utility company serving Central, Coastal, and Southern California.",
      "Provides electricity to approximately 15 million people across 430 cities and communities.",
      "Committed to delivering reliable and sustainable energy solutions.",
    ],
    roles: [
      "Managed project workflows using Jira for task tracking and progress monitoring",
      "Developed user interfaces adhering to Figma-based design guidelines",
      "Conducted bug fixes to enhance application stability and performance",
      "Authored Software Requirements Specification (SRS) documentation",
      "Participated in PI Planning and sprint meetings to align project goals",
      "Performed code merging and version control to maintain codebase integrity",
      "Managed code deployment with Jenkins to streamline software delivery",
    ],
    tags: ["React", "Figma", "Jenkins", "Agile"],
  },
  {
    name: "FundsDB",
    logo: "/logos/projects/fundsdb.png",
    link: "https://www.invenics.com/fundsdb/",
    description: [
      "Search environment designed to help individuals and organizations kickstart their funding journey",
      "It is constantly updated with new funding opportunities",
      "Keeps users up to date on funding updates and deadlines",
    ],
    roles: [
      "Built the web page to be visually appealing and user-friendly",
      "Implemented search for funding opportunities based on various criteria such as category, location, and deadline",
      "Implemented user authentication",
    ],
    tags: ["React", "Search", "Auth"],
  },
  {
    name: "iLE Product",
    logo: "/logos/projects/ile.jpeg",
    link: "https://aaisolutions.com/",
    description: [
      "e-Learning platform which delivers educational content",
      "The admin can control over trainees to various classes or batches",
      "Trainee can consume the educational materials, assessments, live section and can view the reports as well",
    ],
    roles: [
      "Implemented the Parent role in the platform",
      "Added a Test-Preview screen that helps trainers find test sections, questions, answers, and scores",
      "Implemented module sequencing",
      "Fixed minor and major bugs that directly affect the UI within the given time",
      "Set up API endpoints and schema validation",
    ],
    tags: ["React", "e-Learning", "REST API"],
  },
];

export const liveProjects: Project[] = [
    {
    name: "FlowTrack",
    image: "/screenshots/flowtrack.png",
    link: "https://track-the-task-app.netlify.app/",
    description: ["AI-assisted project management app with role-based demo logins."],
    roles: [
      "Drag-and-drop Kanban boards across Backlog, To Do, In Progress, and Review",
      "Task priorities, due dates, health scoring, and activity indicators",
      "Built-in AI assistant concept for project summaries and reports",
    ],
    tags: ["React", "Vite", "Kanban", "AI Assistant"],
  },
  {
    name: "SplitMate",
    image: "/screenshots/splitmate.png",
    link: "https://thesplitmatebill.netlify.app/",
    description: ["Group expense-splitting app for tracking and settling shared costs."],
    roles: [
      "Splits expenses equally or by custom share, then computes who owes whom",
      "Added voice-powered expense entry",
      "Dark, minimal UI with per-group activity breakdowns",
    ],
    tags: ["React", "Expense Splitting", "Voice Input"],
  },
  {
    name: "Voltora Electric",
    image: "/screenshots/voltora.png",
    link: "https://voltora-electric.netlify.app/",
    description: ["Premium landing experience for an EV scooter brand concept."],
    roles: [
      "Responsive, animated marketing site with a tech-inspired dark theme",
      "Product spec callouts for range, speed, charging, and AI dashboard",
      "Cart/wishlist navigation across Scooters, Technology, and Accessories",
    ],
    tags: ["Next.js", "React", "Tailwind CSS"],
  },

];

export type Education = {
  school: string;
  degree: string;
  duration: string;
  location: string;
  grade: string;
};

export const education: Education[] = [
  {
    school: "APJ Abdul Kalam Technological University",
    degree: "Bachelor of Technology in Computer Engineering",
    duration: "Jul 2016 - Sep 2020",
    location: "M Dasan Institute of Technology, Ulliyeri",
    grade: "6.75 CGPA",
  },
  {
    school: "Higher Secondary Education",
    degree: "Computer Science",
    duration: "Aug 2014 - May 2016",
    location: "Kunhali Maraikkar Higher Secondary School, Kottakkal",
    grade: "84%",
  },
];

export const certifications = [
  {
    company: "Fortunesoft IT Innovations",
    title: "React.js - Internship",
    description:
      "Developed a strong understanding of creating functional and class components and implemented various styling approaches.",
    date: "Sep 2021",
  },
  {
    company: "Right Soft Options",
    title: "Python Full Stack - Internship",
    description:
      "Explored Python Flask frameworks for backend development and integrated the React.js library.",
    date: "Apr 2021",
  },
];
