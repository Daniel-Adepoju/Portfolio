import Projects from "../components/projects"

const ProjectsPage = () => {
  return (
    <main className="min-h-screen pt-16">
      <header className="mx-auto max-w-6xl px-6 pt-16 lg:px-12">
        <p className="text-sm uppercase tracking-[0.3em] text-gold">Selected work</p>
        <h1 className="mt-4 text-4xl md:text-6xl">Projects</h1>
      </header>
      <Projects />
    </main>
  )
}

export default ProjectsPage
