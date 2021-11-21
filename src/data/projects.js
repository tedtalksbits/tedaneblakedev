import projectOneImg from '../images/project1.jpg'
import projectTwoImg from '../images/project2.jpg'
import projectThreeImg from '../images/project3.jpg'

export const projectsData = [
   {
      preview: projectOneImg,
      title: 'React Blog',
      techs: ["react", "styled-components", "Node JS", "API", "MongoDB"],
      link: 'https://github.com/tedtalksbits/react-blog',
      id: "left_card"
   },
   {
      preview: projectTwoImg,
      title: 'Custom UI Elements',
      techs: ["react", "styled-components", "react hooks", "Custom Theming"],
      link: 'https://github.com/tedtalksbits/react-dashboard-refactor',
      id: 'center_card'
   },
   {
      preview: projectThreeImg,
      title: 'Modern Blackboard',
      techs: ["react", "styled-components", "API"],
      link: 'https://github.com/tedtalksbits/modern-blackboard',
      id: 'right_card'
   },
]