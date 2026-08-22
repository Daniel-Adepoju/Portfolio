import { signal } from "@preact/signals-react"
import { effect } from "@preact/signals-react"
import useIntersection from "../components/useIntersection"
const skills = ["Javascript", "CSS", "HTML", "Mongoose", "React", "NextJS"]

const skill = signal(skills)

function Skills() {
  const skillMap = skill.value.map((val) => {
    return (
      <li
        className="skill-reveal border-b border-white/10 pb-3 text-xl text-white/80"
        key={val}
        ref={useIntersection("slidein")}
      >
        {val}
        <span className="float-right text-gold">+</span>
      </li>
    )
  })

  return (
    <section
      className="section-reveal grid gap-8 border-b border-white/10 pb-16 md:grid-cols-[0.7fr_1.3fr]"
      ref={useIntersection("show")}
    >
      <h2 className="text-sm uppercase tracking-[0.3em] text-gold">Skills</h2>
      <ul className="grid gap-4 sm:grid-cols-2">{skillMap}</ul>
    </section>
  )
}

export default Skills
export { skill }
