import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#Skills" },
  { name: "Other", link: "#Achivements"},
  { name: "Contact", link: "/#Contact" },

];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-fit",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.png",
    spareImg: "/b4.png",
  },

  {
    id: 5,
    title: "Currently learning Spring Security and building bank application",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.png",
    spareImg: "/grid.png",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const MySkills = [
  {
    id: 1,
    title: 'web',
    img: "/materialUi.png",
    className:"",
},
  {
    id: 2,
    title: 'Js',
    img: "/javascript.png",
    className:"",
},
  {
    id: 3,
    title: 'react',
    img: "/reactjs.png",
    className:"",
},
  {
    id: 4,
    title: 'postman',
    img: "/postman.png",
    className:"",
},
  {
    id: 5,
    title: 'spring',
    img: "/spring.png",
    className:"",
},
  {
    id: 6,
    title: 'mysql',
    img: "/mysql.png",
    className:"",
},
  {
    id: 7,
    title: 'docker',
    img: "/docker.png",
    className:"",
},
  {
    id: 8,
    title: 'github-desktop',
    img: "/github-desktop.png",
    className:"",
},
  {
    id: 9,
    title: 'intellij',
    img: "/intellij.png",
    className:"",
},
  {
    id: 11,
    title: 'tailwind',
    img: "/tailwind-css.png",
    className:"",
},
  {
    id: 12,
    title: 'aws',
    img: "/aws.png",
    className:"",
},
  {
    id: 13,
    title: 'mongo',
    img: "/mongo.png",
    className:"",
},
  {
    id: 14,
    title: 'html',
    img: "/html-5.png",
    className:"",
},
  {
    id: 15,
    title: 'nextjs',
    img: "/next.png",
    className:"",
},
  {
    id: 16,
    title: 'Sass',
    img: "/sass.png",
    className:"",
},
  {
    id: 17,
    title: 'redis',
    img: "/redis.png",
    className:"",
},
  {
    id: 18,
    title: 'css-3',
    img: "/css-3.png",
    className:"",
},


];

export const projects = [
  {
    id: 1,
    title: "ToDo List to add your task",
    des: "Organize your tasks effortlessly with this to-do list app. Keep track of your priorities and boost your productivity.",
    img: "/todo.png",
    iconLists: ["/reactjs.png", "/redux.png", "/materialui.png", "/css-3.png"],
    link: "todo-redux-app-rho.vercel.app",
  },
  {
    id: 2,
    title: "ChatBot",
    des: "Using ChatGPT openAPI created ChatBot with Reactjs and SpringBoot(RestClient)",
    img: "/Chatbot.png",
    iconLists: ["/reactjs.png", "/css-3.png", "/javascript.png", "/spring.png"],
    link: "/github.com/RakeshCherry/chatBot",
  },
  {
    id: 3,
    title: "Employee Management System",
    des: "Developed an Employee Management System with role-based authentication (Admin and User panels) using Spring Boot Security 6.",
    img: "/EmployeeManagementSystem.png",
    iconLists: ["/reactjs.png", "/tail.png", "/javascript.png", "/spring.png", "/mysql.png"],
    link: "/github.com/RakeshCherry/EmployeeAttendenceManagement",
  },
  {
    id: 4,
    title: "BookMyHotel",
    des: "Built a full-stack hotel booking app using React.js, Spring Boot, and MySQL with features like listings, booking, and user auth.",
    img: "/BookMyHotel.png",
    iconLists: ["/spring.png", "/tail.png", "/javascript.png", "/reactjs.png", "/mysql.png"],
    link: "/github.com/RakeshCherry/BookMyHotel",
  },
];

export const testimonials = [
  {
    img:"/MERN STACK.png",
    name: "MERN STACK",
    title: "AccioJob",
  },
  {
    img:"/javaPrograming.jpg",
    name: "Java Programming",
    title: "Udemy",
  },
  {
    img:"./web development.jpg",
    name: "Web Development",
    title: "Udemy",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.png",
    nameImg: "/cloudName.png",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.png",
    nameImg: "/appName.png",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.png",
    nameImg: "/hostName.png",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.png",
    nameImg: "/streamName.png",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.png",
    nameImg: "/dockerName.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.png",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.png",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.png",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/discord.png",
    link:"https://discord.gg/DQw9NrawEh",
  },
  {
    id: 2,
    img: "/git.png",
    link:"https://github.com/RakeshCherry",
  },
  {
    id: 3,
    img: "/insta.png",
    link:"https://www.instagram.com/rakeshbhavimani?igsh=MXFlZGxwajV0NmRqcg==",
  },
  {
    id: 4,
    img: "/link.png",
    link:"/LinkedIn",
  },
];

export const Contact = [
  {
    id: 1,
    link:"#Connect",
  },
]