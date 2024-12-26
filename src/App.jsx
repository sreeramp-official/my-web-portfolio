import { Contact, Education, Hero, Navbar, Projects, Skills } from "./components"

const App = () => {
  return (
    <main className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </main>
  )
}

export default App