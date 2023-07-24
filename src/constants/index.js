import {
  mobile,
  backend,
  creator,
  web,
 
  comingsoon,

} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Applications",
    icon: creator,
  },
];


const projects = [
  {
    name: "Twitter Clone",
    description:
      "Twitter clone that lets users create an account, compose tweets, like tweets, send and receive friend requests as well as customise their profile.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: comingsoon,
    source_code_link: "https://github.com/",
  },
  {
    name: "Uza",
    description:
      "Web application that enables users to buy ans sell products online. Users can create an account, scroll through available products, add to cart and check out.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: comingsoon,
    source_code_link: "https://github.com/",
  },
  {
    name: "AirBnB clone",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: comingsoon,
    source_code_link: "https://github.com/",
  },
];

export { projects, services };
