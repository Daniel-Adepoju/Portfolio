'use client'
import ProjectCard from '../components/ProjectCard'

const data = [
     {
        name:'fun facts',
        pic: '/funfactImg.png',
        url: 'https://fun-facts-psi.vercel.app/'
     },
    {
        name: 'web quiz',
        pic: '/webQuizImg.png',
        url: 'https://web-quiz-eight.vercel.app/'
    },
    {
        name: 'samurai game',
        pic: '/samuraiImg.png',
        url: 'https://running-samurai-game.vercel.app/'
    },
    {
        name:'game db',
        pic: '/gamedbImg.png', 
        url: 'https://game-db-ten.vercel.app/'
    },
    {
        name:'rock paper scissors',
        pic: '/rockPaperScissorsImg.png',
        url: 'https://rock-paper-scissors-gamma-one.vercel.app/'
    }
]
const projectsMap = data.flatMap((item) => {
   return <ProjectCard
    key={item.url}
    data={item}/>
})

function Projects() {
  return (
    <div className='projectsContainer'>
        {projectsMap}
    </div>
  )
}

export default Projects