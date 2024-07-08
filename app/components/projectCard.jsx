'use client'
import Link from "next/link"
import useIntersection from "../components/useIntersection"
const ProjectCard = ({data,...rest}) => {

  return (
    <div suppressHydrationWarning ref={useIntersection('flip')}
    className="projectsCard">
        <img className='pic' src={data.pic}/>
      <span className="name">
        {data.name}
      </span>

  <Link href={data.url} className="view">View </Link>
    </div>
  )
}
 
export default ProjectCard