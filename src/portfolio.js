/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import genesisLogo from "./assets/images/shohan/genesis.png";
import certPython from "./assets/images/shohan/cert-python.png";
import certDp900 from "./assets/images/shohan/cert-dp900.png";
import certDiffusion from "./assets/images/shohan/cert-diffusion.png";
import certRapids from "./assets/images/shohan/cert-rapids.png";

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "shohan-2927",
  title: "Hi, I'm Shohan",
  subTitle: emoji(
    "I am an aspiring developer focused on building interactive, user-friendly digital experiences while diving deep into the foundations of modern artificial intelligence. Right now, I'm sharpening my web development skills to bring functional applications to life and mastering PyTorch to design, train, and experiment with intelligent neural networks."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shohan-2927",
  linkedin: "https://www.linkedin.com/in/2927shohan",
  gmail: "shohan26579@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "COMPUTER SCIENCE STUDENT LEARNING WEB DEVELOPMENT AND AI",
  skills: [
    emoji("⚡ Build responsive websites with HTML, CSS, and JavaScript"),
    emoji("⚡ Learning to connect web applications to databases with SQL"),
    emoji("⚡ Experiment with neural networks using Python and PyTorch"),
    emoji("⚡ Research AI-generated image detection with deep learning")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-brain"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Debrecen",
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2025 - Present",
      desc: "Stipendium Hungaricum scholar studying core computer science: programming, discrete mathematics, operating systems, data structures and algorithms, and databases.",
      descBullets: ["Grade average 5.0 out of 5.0"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Co-founder & Manager",
      company: "Genesis Inc.",
      companylogo: genesisLogo,
      date: "July 2020 – Present",
      desc: "Co-founded and manage a nonprofit in Bangladesh that collects and distributes food and clothing donations to people in need."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Research",
  subtitle: "WHAT I AM WORKING ON NOW",
  projects: [
    {
      projectName:
        "Does residual fusion help generalization to unseen generators?",
      projectDesc:
        "In progress. A fusion-depth analysis of combining SRM noise residuals with RGB images for detecting AI-generated images, focused on generators the model never saw in training."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle: "Industry certifications and courses I have completed",
  achievementsCards: [
    {
      title: "IT Specialist – Python",
      subtitle:
        "Certiport · March 2026. IT Specialist certification in Python, scored 780 out of 1000.",
      image: certPython,
      imageAlt: "Certiport IT Specialist Python",
      footerLink: []
    },
    {
      title: "Azure Data Fundamentals (DP-900)",
      subtitle:
        "Microsoft · June 2026. Covers core data concepts and data services on Azure.",
      image: certDp900,
      imageAlt: "Microsoft DP-900",
      footerLink: []
    },
    {
      title: "Generative AI with Diffusion Models",
      subtitle:
        "NVIDIA Deep Learning Institute · October 2025. Building and training diffusion models for image generation.",
      image: certDiffusion,
      imageAlt: "NVIDIA Generative AI with Diffusion Models",
      footerLink: []
    },
    {
      title: "Fundamentals of Accelerated Data Science",
      subtitle:
        "NVIDIA Deep Learning Institute · November 2025. Speeding up data science workflows with GPUs.",
      image: certRapids,
      imageAlt: "NVIDIA Fundamentals of Accelerated Data Science",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "", // Left empty so your phone number is not shown on a public site
  email_address: "shohan26579@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
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
