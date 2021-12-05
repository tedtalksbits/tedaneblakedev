import projectOneImg from '../images/project1.jpg'
import projectTwoImg from '../images/project2.jpg'
import projectThreeImg from '../images/project3.jpg'
import projectFourImg from '../images/project4.jpg'

export const projectsData = [
   {
      preview: projectOneImg,
      title: 'React Blog',
      techs: ["react", "styled-components", "Node JS", "API", "MongoDB"],
      link: 'https://github.com/tedtalksbits/react-blog',
      id: "left_card",
      desc: "A blog built with react that showcases many of the basic principles of a modern web app.",
      type: "Web App",
      demo: ""
   },
   {
      preview: projectTwoImg,
      title: 'Custom UI Elements',
      techs: ["react", "styled-components", "react hooks", "Custom Theming"],
      link: 'https://github.com/tedtalksbits/react-dashboard-refactor',
      id: 'center_card',
      desc: "Using custom themes, this basic app was done to show case color theory as well as theme switching.",
      type: "Web App",
      demo: "http://tedtalksbits.github.io/react-dashboard-refactor"
   },
   {
      preview: projectThreeImg,
      title: 'Modern Blackboard',
      techs: ["react", "styled-components", "Rest API", "JSON Server"],
      link: 'https://github.com/tedtalksbits/modern-blackboard',
      id: 'right_card',
      desc: "This is a personal project that aims to eleviate the eye strain on my college's official blackboard.",
      type: "Web App",
      demo: "https://tedtalksbits.github.io/modern-blackboard"
   },
   {
      preview: projectFourImg,
      title: 'Social Media',
      techs: ["react", "Rest API", "MongoDB", "redux", "material-ui"],
      link: 'https://github.com/tedtalksbits/memories_fullstack',
      id: 'right_card',
      desc: "Building this app helped me explore CRUD more in detail and also learn about redux and material ui. ",
      type: "Web App",
      demo: "https://emandtedblake.netlify.app"
   },
]