import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IService, ISkill, IProject } from "./types";
import { BsCircleFill } from "react-icons/bs"

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "Build beautiful and scalable applications using <b> HTML </b>, <b> CSS </b> and <b> React.js </b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "Handle database, server, and api's using <b> Express </b>",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust REST API using <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "Daily problem solver in <b>Leet Code</b> ",
  },
//   {
//     Icon: AiOutlineAntDesign,
//     title: "UI/UX designer",
//     about:
//       "Create stunning user interface designs using <b>Figma</b> and <b>Framer</b> ",
//   },
//   {
//     Icon: RiComputerLine,
//     title: "Whatever",
//     about:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
//   },
];

export const languages: ISkill  [] = [
    {
        name: 'Javascript',
        level: '90%',
        Icon: BsCircleFill 
    },
    {
        name: 'React',
        level: '70%',
        Icon: BsCircleFill 
    },
    {
        name: 'Express',
        level: '75%',
        Icon: BsCircleFill 
    },
    {
        name: 'MongoDB',
        level: '50%',
        Icon: BsCircleFill 
    },
    {
        name: 'Mongoose',
        level: '50%',
        Icon: BsCircleFill 
    },
    {
        name: 'HTML & CSS',
        level: '90%',
        Icon: BsCircleFill 
    },
]

export const tools: ISkill[] = [
    {
        name: 'Figma',
        level: '30%',
        Icon: BsCircleFill,
    },
    {
        name: 'Framer',
        level: '35%',
        Icon: BsCircleFill 
    },
]

export const projects:IProject[] = [
    {
        id: 1, 
        name: "Example Blog",
        description: 
        "This site is an example blog site",
        image_path: '/img/EXAMPLE_BLOG_SITE.jpg',
        deployed_url: "https://blog-site-with-sanity.vercel.app",
        github_url: "https://github.com/TheTwistedDev/blog-site-with-sanity",
        category: ["react", "typescript", "next","node"],
        key_techs:["React", "Next.js", "Sanity.io", "Typescript","Tailwindcss"],
    },
    {
        id: 2,
        name: "NFT MarketPlace",
        description: 
        'This app is a Test NFT MarketPlace',
        image_path: '/img/NFT_MarketPlace.jpg',
        deployed_url: 'https://nft-challenge-xi.vercel.app',
        github_url: 'https://github.com/TheTwistedDev/nft-challenge',
        category: ["react", "express", "node", "typescript", "next"],
        key_techs: ["React", "Next.js", "ThirdWeb", "Sanity.io", "Typescript", "Next-Auth", "Tailwindcss"],
    },
    {
        id: 3,
        name: "Example Ecommerce Site",
        description: 
        'This app is an example ecommerce site',
        image_path: '/img/EXAMPLE_ECOMMERCE_SITE.jpg',
        deployed_url: 'https://ecommerce-site-eight.vercel.app',
        github_url: 'https://github.com/TheTwistedDev/ecommerce-site',
        category: ["react", "express", "node", "next"],
        key_techs: ["React", "Next.js", "Sanity.io", "Stripe.js", "Tailwindcss"],
    }, 
]