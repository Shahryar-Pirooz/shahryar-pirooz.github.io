import { FiArrowUpRight, FiGithub, FiMail } from "react-icons/fi";

const projects = [
  {
    name: "Tria",
    description:
      "A focused password generator built around three input values and deterministic output.",
    url: "https://shahryar-pirooz.github.io/Tria/",
    tag: "Utility",
  },
  {
    name: "RSS Reader",
    description:
      "A small, fast RSS/Atom reader built with Next.js and TypeScript.",
    url: "https://rss-reader-eight-sepia.vercel.app/",
    tag: "Full Stack",
  },
  {
    name: "Taskoryx",
    description:
      "A modular task-management frontend built with TypeScript, Vite, and Tailwind CSS.",
    url: "https://five-o-one.github.io/Taskyrox/",
    tag: "Frontend",
  },
];

const stack = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Vue.JS",
  "Nuxt.JS",
  "Tailwind CSS",
  "Nest.JS",
  "PostgreSQL",
  "MariaDB",
  "Redis",
  "Docker",
  "Linux",
  "Git",
  "Bash",
];

export default function Home() {
  return (
    <main>
      <section id="home" className="min-h-[88vh] flex items-center py-24">
        <div className="max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Software Engineer · Frontend · Backend
          </div>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            I build software with{" "}
            <span className="gradient-text">clarity and purpose.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted md:text-xl">
            Software engineer focused on modern frontend development and backend. I build full-stack applications, developer
            tools, and open-source projects, with a strong interest in Linux,
            self-hosting, system design, and clean architecture.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              View projects <FiArrowUpRight className="ml-1 inline" />
            </a>
            <a
              href="mailto:dev.shahryar@gmail.com"
              className="rounded-full border border-border px-6 py-3 font-semibold transition hover:border-emerald-400/40 hover:bg-white/5"
            >
              Contact me <FiMail className="ml-1 inline" />
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[.25em] text-emerald-300">
            Selected work
          </p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Projects</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group rounded-3xl p-7 transition duration-300 hover:-translate-y-2 hover:border-sky-400/30 hover:shadow-2xl hover:shadow-emerald-950/30"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[.2em] text-sky-300">
                  {project.tag}
                </span>
                <FiArrowUpRight className="text-muted transition group-hover:text-emerald-300" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold">{project.name}</h3>
              <p className="mt-4 leading-7 text-muted">{project.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="glass rounded-[2rem] p-7 md:p-12">
          <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.25em] text-sky-300">
                About me
              </p>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Engineering beyond the UI.
              </h2>
            </div>
            <div className="space-y-5 text-muted leading-8">
              <p>
                I work across the stack, from polished interfaces and frontend
                architecture to APIs, databases, and backend services.
              </p>
              <p>
                My current focus is Go, reliable backend systems, developer
                tooling, and practical infrastructure. I also enjoy Linux, open
                source, self-hosting, and understanding how systems behave
                underneath the abstractions.
              </p>
              <p>
                I value simple architecture, maintainable code, explicit
                trade-offs, and software that remains understandable as it
                grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="tech" className="py-20">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[.25em] text-emerald-300">
            Toolkit
          </p>
          <h2 className="mt-3 text-4xl font-bold">Tech I use</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-xl border border-border bg-white/[.03] px-4 py-2.5 text-sm text-foreground/85"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="rounded-[2rem] border border-sky-400/20 bg-gradient-to-br from-sky-400/10 via-transparent to-emerald-400/10 p-8 text-center md:p-16">
          <h2 className="text-4xl font-bold md:text-6xl">
            Let's build something useful.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted">
            Open to interesting engineering problems, open-source collaboration,
            and conversations about software architecture.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="mailto:dev.shahryar@gmail.com"
              className="rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 px-6 py-3 font-semibold text-slate-950"
            >
              Send email
            </a>
            <a
              href="https://github.com/Shahryar-Pirooz"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-6 py-3 font-semibold"
            >
              <FiGithub className="mr-2 inline" /> GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl border-t border-border px-5 py-8 text-sm text-muted md:px-8">
        © {new Date().getFullYear()} Shahryar Pirooz
      </footer>
    </main>
  );
}
