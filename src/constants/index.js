import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am an aspiring software engineer with a strong interest in data science, artificial intelligence, and software development. Currently pursuing my M.Tech in Computer Science and Engineering (AI & SE). I am eager to apply my growing knowledge to solve real-world problems, learn from experienced professionals, and contribute to innovative projects that drive progress in technology.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Automatic File Sorter",
    image: project1,
    description:
      "A Streamlit-based app that organizes files in a specified folder into categorized subfolders (e.g., images, documents, videos) based on their file type. Simple and user-friendly, it’s perfect for decluttering directories with ease.",
    technologies: ["Python", "Streamlit"],
  },
  {
    title: "Zomato Restaurant Analysis",
    image: project2,
    description:
      "An exploratory data analysis (EDA) on a Zomato restaurants dataset, focusing on the restaurant landscape in Kochi. It visualizes various aspects such as establishment types, ratings, cuisines, and customer votes.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    title: "Netflix Dataset Analysis",
    image: project3,
    description:
      "SQL queries to analyze the Netflix dataset, uncovering insights like content trends, genre distributions, and top contributors. It serves as a learning resource and framework for exploring similar datasets effectively.",
    technologies: ["SQL", "MySQL"],
  },
  {
    title: "iPhone 15 Pro Website Clone",
    image: project4,
    description:
      "A a clone of Apple's iPhone 15 Pro website, built with React.js and Tailwind CSS, featuring smooth GSAP animations and dynamic 3D model rendering using Three.js. It provides an immersive, responsive user experience similar to the official Apple site.",
    technologies: ["HTML", "CSS", "React Js", "Tailwind CSS"]
  },
];

export const CONTACT = {
  address: "Palakkad, India ",
  phoneNo: "8075057859",
  email: "psreeram3015@proton.me",
};
