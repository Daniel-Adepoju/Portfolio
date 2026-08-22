"use client"
import Link from "next/link"
import useIntersection from "../components/useIntersection"
import Image from "next/image"

const ProjectCard = ({ data, ...rest }) => {
  return (
    <div
      suppressHydrationWarning
      ref={useIntersection("flip")}
      className="card-reveal group w-[90%] mx-auto flex min-h-[300px] flex-col items-center overflow-hidden rounded-lg border border-white/10 bg-ash p-5  transition duration-300 hover:-translate-y-2 hover:border-gold/60"
    >
      <Image
        width={500}
        height={500}
        className="mb-6 h-44 w-full object-contain transition duration-500 group-hover:scale-105"
        src={`https://image.thum.io/get/width/800/${data.url}`}
        alt={`${data.name} project preview`}
      />
      <span className="mb-5 text-xl capitalize text-white">{data.name}</span>

      <Link
        target="_blank"
        rel="noreferrer"
        href={data.url}
        className="mt-auto mx-auto font-semibold text-gray-600 tracking-3 inline-flex w-[90%] items-center justify-center border border-gold bg-gold px-4 py-2 font-display text-sm transition hover:bg-gold-light rounded-xl"
      >
        View Project
      </Link>
    </div>
  )
}

export default ProjectCard
