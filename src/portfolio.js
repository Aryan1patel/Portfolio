/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Greeting Section
const illustration = { animated: true };

const greeting = {
  username: "Aryan Patel",
  title: "Hi, I'm Aryan",
  subTitle: emoji(
    "Software Developer skilled in Full-Stack Web Development, Machine Learning and Android Development. Experienced in building real-time apps, scalable APIs, and intelligent systems using JavaScript, Kotlin, Node.js, Express, MongoDB, and Python."
  ),
  resumeLink: "",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Aryan1patel",
  linkedin: "https://linkedin.com/in/aryanpatelap",
  gmail: "ppparyanpatel@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle: "FULL STACK • MACHINE LEARNING DEVELOPER • ANDROID DEVELOPER",
  skills: [
    emoji("⚡ Build full-stack applications with Node.js, Express & React"),
    emoji("⚡ Implement ML/NLP models & APIs using Python"),
    emoji("⚡ Develop Android apps using Kotlin, Jetpack Compose & Retrofit"),
    emoji("⚡ Build real-time systems with Socket.io & WebSockets"),
    emoji("⚡ Design databases & backend architectures with MongoDB & SQL"),
  ],

  softwareSkills: [
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "Kotlin", fontAwesomeClassname: "fab fa-android" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Bennett University, Greater Noida",
      logo: require("./assets/images/collage.png"), // unchanged
      subHeader: "B.Tech in Computer Science & Engineering",
      duration: "2023 – 2027",
      desc: "Specialization in software development, Android development, and ML.",
      descBullets: [
        "Worked on full-stack & mobile development projects",
        "Built real-time, scalable backend systems using Node.js & MongoDB"
      ]
    },
    {
      schoolName: "Kendriya Vidyalaya, Mandla, M.P.",
      logo: require("./assets/images/image.png"), // unchanged
      subHeader: "Higher Secondary Education",
      duration: "Completed 2023",
      desc: "Completed PCM with strong foundation in mathematics & logic.",
      descBullets: ["TriVerse Coding Competition Winner"]
    }
  ]
};

// Proficiency Section
const techStack = {

};


// Work Experience (you have none yet, so hide)
const workExperiences = {
  display: false,
  experience: []
};



// Projects Section
const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I BUILT WITH PASSION & PRECISION",
  projects: [
    {
      image: require("./assets/images/realtime.png"),
      projectName: "Real-Time Financial News Prediction Platform",
      projectDesc:
        "Processed 10,000+ daily news items via Kafka to predict stock movements with 77% directional accuracy using LightGBM and Qdrant vector search. The architecture consists of 15+ Docker microservices with automated CI/CD pipelines, achieving sub-second data latency and zero-downtime deployments.",
      footerLink: [
        { name: "GitHub", url: "" }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Pathfinder Visualization Engine",
      projectDesc:
        "An interactive visualization of Dijkstra’s Algorithm built with Python and Pygame. The tool allows users to draw walls dynamically, adjust grid scaling, and view the optimal path finding process in real-time, designed to demonstrate algorithmic efficiency visually.",
      footerLink: [
        { name: "GitHub", url: "" }
      ]
    }
  ],
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Awards and accomplishments",

  achievementsCards: [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      subtitle: "Data Science Professional Certification",
      image: require("./assets/images/oracel.png"), // Placeholder
      imageAlt: "Oracle Certification",
      footerLink: [
        { name: "View", url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=61F5D9C276AD57C1D811A3B01D45A8EF4485012998016D7CED4C4A07A7A876A2" }
      ]
    },
    {
      title: "Getting Started with Accelerated Computing in Modern CUDA C++",
      subtitle: "NVIDIA Certification",
      image: require("./assets/images/nvidia.png"), // Placeholder
      imageAlt: "NVIDIA Certification",
      footerLink: [
        { name: "View", url: "https://learn.nvidia.com/certificates?id=DQfV4MUURDClhZG-3ZLRkA" }
      ]
    }
  ],
  display: true
};

// Blogs (off)
const blogSection = {
  title: "Blogs",
  subtitle:
    "Sharing knowledge through tech articles soon.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks (off)
const talkSection = {
  title: "Talks",
  subtitle: "",
  talks: [],
  display: false
};

// Podcast (off)
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: true
};

// Contact Section
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open to collaborations, discussions or freelance work.",
  number: "+91 8817839559",
  email_address: "ppparyanpatel@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};