import { signal} from "@preact/signals-react";
import { effect } from "@preact/signals-react";
import useIntersection from '../components/useIntersection'
const skills = [
 'Javascript','CSS','HTML','Mongoose','React','NextJS',
]
   
const skill = signal(skills)

function Skills() {

    const skillMap = skill.value.map((val) => {
      return <li  key={val}
      ref={useIntersection('slidein')}>
        {val}
        </li>
    })
    


  return (
    <div className="skills">
    <h3>Skills</h3>
    <ul>
    {skillMap}
    </ul>
  </div>
  )
}

export default Skills
export {skill}