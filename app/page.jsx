"use client"
import Image from "next/image"
import Skills from "./components/skills"
import useIntersection from "./components/useIntersection"

function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-32 md:px-12">
      <section className="grid min-h-[70vh] items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <span className="logo-reveal block">
          <img
            src="/Logo Files/For Web/png/White logo - no background.png"
            alt="logo"
            className="mx-auto w-4/5 max-w-sm opacity-90"
          />
        </span>
        <div className="flex flex-col gap-6">
          <p
            className="section-reveal text-sm uppercase tracking-[0.3em] text-gold"
            ref={useIntersection("show")}
          >
            Welcome to my portfolio
          </p>
          <h1
            className="section-reveal max-w-2xl text-4xl leading-tight text-white md:text-6xl"
            ref={useIntersection("show")}
          >
            Hi, I'm Ubiquitous, a software developer.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-white/60">
            During the long COVID-19 lockdown, I wrote my first {"Hello, World"} program, and I’ve
            loved programming ever since.
          </p>
        </div>
      </section>
      <section
        id="about"
        className="section-reveal grid gap-8 border-y border-white/10 py-16 md:grid-cols-[0.7fr_1.3fr]"
        ref={useIntersection("show")}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-gold">About</p>
        <div> 
          <h2 className="mb-5 text-3xl text-white md:text-4xl">
            Turning ideas into useful interfaces.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-white/60">
            I enjoy building simple, useful, and intuitive digital experiences that turn ideas into
            products people can actually use.
          </p>
        </div>
      </section>
      <Skills />
    </main>
  )
}

export default Home
