"use client"
import ProjectCard from "../components/projectCard"

const data = [
  {
    name: "first Estates",
    url: "https://firstestates.vercel.app/",
  },
  {
    name: "web quiz",
    url: "https://web-quiz-eight.vercel.app/",
  },
  {
    name: "samurai game",
    url: "https://running-samurai-game.vercel.app/",
  },
  {
    name: "game db",
    url: "https://game-db-ten.vercel.app/",
  },
  {
    name: "rock paper scissors",
    url: "https://rock-paper-scissors-gamma-one.vercel.app/",
  },
]
const projectsMap = data.flatMap((item) => {
  return (
    <ProjectCard
      key={item.url}
      data={item}
    />
  )
})

function Projects() {
  return (
    <div className="mx-auto mt-24 grid w-full max-w-6xl grid-cols-1 gap-6 bg-ash/40 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:px-12">
      {projectsMap}
    </div>
  )
}

export default Projects
