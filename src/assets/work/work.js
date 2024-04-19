import hyperLoom from "../images/pixels-hyperloom.jpg";
import nectr from "../images/pixels-nectr.jpg";
import bordle from "../images/pixels-bordle.jpg";
import wanderMobile from "../images/pixels-wander-mobile.jpg";
import hyperLoomMobile from "../images/pixels-hyperloom-mobile.jpg";
import nectrMobile from "../images/pixels-nectr-mobile.jpg";
import bordleMobile from "../images/pixels-bordle-mobile.jpg";
import wander from "../images/pixels-wander.jpg";
import strawberry from "../images/tattoo-strawberry.jpg";
import tattooHand from "../images/tattoo-hand.jpg";
import tattooPidgeon from "../images/tattoo-pidgeon.jpg";
import leaves from "../images/tattoo-leaves.jpg";
import cloud from "../images/tattoo-cloud.jpg";
import corona from "../images/graphite-corona.jpg";
import lovers from "../images/graphite-lovers.jpg";
import hands from "../images/grahphite-hands.jpg";
import body1 from "../images/graphite-body1.jpg";
import body3 from "../images/graphite-body4.jpg";
import body4 from "../images/graphite-body5.jpg";
import please from "../images/graphite-please.JPG";
import birds from "../images/2D-birds.jpg";
import clouds from "../images/2D-clouds.jpg";
import rihanna from "../images/2D-rihanna.jpg";
import orange from "../images/2D-orange.jpg";
import newBalance from "../images/2D-newBalance.jpg";
import newBalance2 from "../images/2D-newBalance2.jpg";
import sarah from "../images/2D-sarah.jpg";
import { FaReact, FaJs, FaCss3, FaHtml5 } from "react-icons/fa";
import { TbBrandCypress } from "react-icons/tb";
import { FaSass } from "react-icons/fa";
import { SiMocha, SiChai, SiTypescript } from "react-icons/si";

export const programming = [
  {
    name: "HYPERLOOM",
    img: hyperLoom,
    mobile: hyperLoomMobile,
    abstract:
      "Hyperloom is a web based application that leverages ChatGPT and Midjourney to provide users expansive fictional worlds. It was designed as the final group project of the Turing’s software development program. It was built by a 7 person full stack team over two 2-week sprints.",
    thoughts:
      "While designing the UX for Hyperloom, I discovered a love of brutalist typefaces in minimalist design. I designed and implemented a UX/UI spec and lead a fullstack team to win second place in Turing's internal Demo Comp.",
    repo: "https://github.com/The-Never-Ending-Story/front-end",
    deployment: "https://hyperloom.shane=misra.com/",
    details: {
      type: "Group",
      hours: "60",
      stack: [
        <FaReact />,
        <FaCss3 />,
        <FaHtml5 />,
        <FaJs />,
        <TbBrandCypress />,
      ],
    },
  },
  {
    name: "nectr",
    img: nectr,
    mobile: nectrMobile,
    abstract:
      "Nectr is a web-based Spelling Bee Proxy application. It was built as the final solo project during the third module of Turing. It uses the Free Bee AP.",
    thoughts:
      "I really enjoyed making Nectr. It was the first solo project I did was React and I learned a lot about prop drilling, effectively designing an MVP and how easy React makes app design.",
    repo: "https://github.com/Adam-Meza/nectr-app",
    stack: ["React", "TypeScript"],
    deployment: "https://nectr-game-app.vercel.app/",
    details: {
      type: "Solo",
      hours: "30",
      stack: [
        <SiTypescript />,
        <FaReact />,
        <FaCss3 />,
        <FaHtml5 />,
        <TbBrandCypress />,
      ],
    },
  },
  {
    name: "wander",
    img: wander,
    mobile: wanderMobile,
    abstract:
      "Wander is web based travel appliation, which allows users to search, book and manage reservations. It was created over a 1 week sprint during the second module at Turing. Wander served as an exercise in routing with JavaScript, designing UI using SASS/SCSS, and hosting information locally.",
    thoughts:
      "Wander was the last project I worked with vanilla Javascript. It was also the largest scale project at that time. I definitely pushed myself to build something with log in info, multiple views and an elegant UI/UX",
    repo: "https://github.com/Adam-Meza/Travel-Tracker",
    deployment: "",
    details: {
      type: "Solo",
      hours: "25",
      stack: [
        <FaJs />,
        <FaCss3 />,
        <FaHtml5 />,
        <FaSass />,
        <SiChai />,
        <SiMocha />,
      ],
    },
  },
  {
    name: "boredle",
    img: bordle,
    mobile: bordleMobile,
    thoughts:
      "Bordle was the last in my series of game apps. I really enjoyed it was a continous work into the fun and silly side of programming. Instead of scalability, I looked to build something that could bring joy.",
    abstract:
      "Bordle is mobile based Wordle Proxy application. It allows users to play endless games and see their overall score. It was made during a 8-hour hackathon. It was an excersice in learning a new technology (React Native), working in a fast pased enviorment and mobile deplpoyment.",
    repo: "https://www.google.com/url?q=https://github.com/Adam-Meza/boredle&sa=D&source=docs&ust=1694356983830676&usg=AOvVaw2abIkSFKWqt9_Ym3M52GCh",
    stack: ["React Native"],
    deployment: "",
    details: {
      type: "Solo",
      hours: "16",
      stack: [<FaReact />, <FaCss3 />, <FaHtml5 />, <FaJs />],
    },
  },
];

export const tattoos = [
  {
    img: tattooHand,
  },
  {
    img: strawberry,
  },
  {
    img: tattooPidgeon,
  },
  {
    img: leaves,
  },
  {
    img: cloud,
  },
];

export const art = [
  {
    img: body1,
    title: "Nudes in Blue #12",
    year: "2020",
  },
  {
    img: clouds,
    title: "Cloud",
    year: "2020",
  },
  {
    img: hands,
    title: "is this good enough for you?",
    year: "2019",
  },
  {
    img: lovers,
    title: "Lovers",
    year: "2021",
  },
  {
    img: rihanna,
    title: "Are you feeling it yet Mr. Crabs?",
    year: "2020",
  },
  {
    img: newBalance,
    title: "991.7 mock up",
    year: "2023",
  },
  {
    img: newBalance2,
    title: "991.7 mock up #2",
    year: "2023",
  },
  {
    img: body3,
    title: "Nudes in Blue #9",
    year: "2020",
  },
  {
    img: orange,
    title: "Paradise",
    year: "2020",
  },
  {
    img: sarah,
    title: "Adaptation",
    year: "2020",
  },
  {
    img: body4,
    title: "from a friend",
    year: "2021",
  },
  {
    img: birds,
    title: "Cover for Sean Nagel",
    year: "2021",
  },
  {
    img: corona,
    title: "Love in the Time of Coronavirus",
    year: "2020",
  },
  {
    img: please,
    title: "pretty please",
    year: "2020",
  },
];
export const experience = [
  {
    title: "Turing School of Software Design",
    description:
      "Earned Certificate in Frontend Software Development | 1/2023 - 8/2023",
  },
  {
    title: "Barista",
    description: "La Colombe | 11/2022 - 1/2023",
  },
  {
    title: "Tattoo Artist",
    description: "Heartbreak Studio | 8/2021 - 8/2022",
  },
  {
    title: "Team Trainer",
    description: "Whole Foods Market | 9/2020 - 6/2021",
  },
  {
    title: "Lead Prep / Baker",
    description: "Meadowlark Kitchen | 9/2017- 9-2018",
  },
];
