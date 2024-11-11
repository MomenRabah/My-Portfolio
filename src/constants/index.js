import workshop from '../assets/workshop.png'
import warehouse from '../assets/Warehouses.png'
import todolist from '../assets/Todolist.png'

export const HERO_CONTENT = `Passionate Full-Stack Developer | UI/UX Enthusiast | Future Software Engineer
With skills in React, JavaScript, Python, Html, CSS, and a solid foundation in Node.js and MongoDB, etc. I build user-centered, efficient applications. My background in design and marketing fuels my ability to create intuitive user experiences, while my interest in AI and ML keeps me at the forefront of innovation. Let's create solutions that make a difference.`;

export const ABOUT_TEXT= `I am an aspiring software developer with a strong foundation in front-end technologies, including React, JavaScript, HTML, and CSS, along with introductory experience in backend tools like Node.js, MongoDB, Supabase, and additional programming languages like Python. My background in marketing and graphic design enhances my ability to create intuitive UI/UX designs. I also have a solid grasp of AI and ML fundamentals and enjoy exploring innovative technology applications. Committed to building dynamic, scalable software, I focus on crafting solutions that drive business growth and resonate with users. Passionate about continuous learning, I strive for excellence in software engineering and impactful, user-centered experiences.`


export const EXPERIENCES = [

  {
    year: "2022 - Present",
    role: "Marketing Asistant",
    company: "Crystalat Est",
    description: `Support marketing strategies to boost brand awareness and customer engagement, while managing online storefronts and optimizing social media content. Collaborate with the team to align efforts with business goals and drive measurable growth.`,
    technologies: ["Zid", "Social Media Bussiness Platforms"],
  },
  {
    year: "2020 - 2022",
    role: "Graphic Designer",
    company: "Crystalat Est",
    description: `Collaborated with clients to create visually engaging designs that aligned with brand identity and business goals. Produced digital and print materials using Adobe Creative Apps to enhance brand presence and ensure consistency across platforms.`,
    technologies: ["Adobe Creative Apps"],
  },
];

export const EDUCATION = [

  {
    Degree: "bachelor's degree",
    Field: "Computer Science",
    Institution: "Imam Abdulrahman Bin Faisal University , Dammam",
    year: "2022 - 2027",
  },
  {
    Degree: "Diploma",
    Field: "Marketing",
    Institution: "mastery academy , Malaysia",
    year: "jan - 2023",
  },
  {
    Degree: "Certificate",
    Field: "Advanced Artificial Intelligence",
    Institution: "KAUST Academy",
    year: "Jan - 2024",
  },
  {
    Degree: "Part of Meta Front-End Developer Professional Certificate",
    Field: "Advanced React",
    Institution: "Meta",
    year: "2024",
  },
  {
    Degree: "Part of Meta Front-End Developer Professional Certificate",
    Field: "React Basics",
    Institution: "Meta",
    year: "2024",
  },
  {
    Degree: "Part of Meta Front-End Developer Professional Certificate",
    Field: "Programming with JavaScript",
    Institution: "Meta",
    year: "2024",
  },
  {
    Degree: "Part of Meta Front-End Developer Professional Certificate",
    Field: "Introduction to Front-End Development",
    Institution: "Meta",
    year: "2024",
  },


];

export const PROJECTS = [
  {
    title: "Full-Stack Todo List",
    description:
      "A ToDo List application built with React, Express, MongoDB, React Query and React Router. Users can create, edit, and delete tasks with a simple Dashboard",
    technologies: ["React JS", "Node.js", "MongoDB" ],
    github: 'https://github.com/MomenRabah/Full-Stack-Todo-List.git',
    image: todolist
  },
  {
    title: "Authenticated Crud Applecation",
    description:
      "A To-Do List application built with React, Supabase, React Query, and React Router. Authenticated users can create, edit, and delete their tasks.",
    technologies: ["React JS", "Supabase", "ReactQuery"],
    github: 'https://github.com/MomenRabah/ToDo-List-Application.git',
    image: todolist
  },
  {
    title: "Automotive Workshop Management System",
    description:
      "a streamlined application for managing customer cases, vehicle orders, and service records in automotive workshops. It enhances workflow efficiency and improves customer satisfaction through organized case and order handling.",
    technologies: ["Python"],
    github: 'https://github.com/MomenRabah/Automotive-Workshop-Management-System.git',
    image: workshop
  },
  {
    title: "Warehouses & product management",
    description:
      "This system allows users to manage storage units and products, with features to add, update, and track items, along with action history. It's ideal for efficient inventory management.",
    technologies: ["C++"],
    github: 'https://github.com/MomenRabah/cs-project.git',
    image: warehouse
  },
];

export const CONTACT = {
  info: "",
  phoneNo: "+966 54 220 6772",
  email: "moamenr24@gmail.com",
};
