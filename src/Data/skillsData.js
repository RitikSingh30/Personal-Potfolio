import {BiCodeCurly,BiLogoReact,BiLogoGit} from 'react-icons/bi'
import {TbTool,TbBrandCpp} from 'react-icons/tb'
import {SiJavascript,SiTailwindcss,SiMongodb,SiVercel} from 'react-icons/si'
import {FaNodeJs,FaJava} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight} from 'react-icons/md'

const skillsData = [
    {
      icon:[MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight],
      data:'Languages',
      subData:'Languages that I have picked up over the years',
      allSkills:[
        {
          skillIcon:SiJavascript,
          skillName:'JavaScript'
        },
        {
          skillIcon:TbBrandCpp,
          skillName:'C++'
        },
        {
          skillIcon:FaJava,
          skillName:'Java'
        }
      ]
    },
    {
      icon:[BiCodeCurly],
      data:'Libraries & Frameworks',
      subData:'Libraries and Frameworks that I prefer to work with',
      allSkills:[
        {
          skillIcon:BiLogoReact,
          skillName:'React'
        },
        {
          skillIcon:SiTailwindcss,
          skillName:'Tailwind CSS'
        },
        {
          skillIcon:FaNodeJs,
          skillName:'Node.js'
        },
        {
          skillIcon:SiMongodb,
          skillName:'MongoDB'
        },

      ]
    },
    {
      icon:[TbTool],
      data:'Tools',
      subData:'Tools that I know and use on a daily basis',
      allSkills:[
        {
          skillIcon:BiLogoGit,
          skillName:'Git'
        },
        {
          skillIcon:AiFillGithub,
          skillName:'GitHub'
        },
        {
          skillIcon:SiVercel,
          skillName:'Vercel'
        },

      ]
    },
  ]

  export default skillsData ;