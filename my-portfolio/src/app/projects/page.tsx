import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "SQL Data Warehousing",
    description:
      "A focused data warehouse created from raw customer and product data. This warehouse includes a bronze, silver, and gold layer, implementing the Medallion Architecture of data design. SQL scripts that are used for data cleaning and aggregation are included.",
    href: "https://github.com/theo-mandelbaum/sql-data-warehouse-project",
    tech: ["Data Cleaning", "PostgreSQL", "Data Modeling", "ETL Processes"],
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Custom Ruby Interpreter",
    description:
      "A custom-built programming language implemented in Ruby. This project features a full execution pipeline including a lexer, a recursive-descent parser for custom grammar, and an AST evaluator using the Visitor pattern to handle loops, conditionals, and functions.",
    href: "https://github.com/theo-mandelbaum/ruby-interpreter",
    tech: ["Ruby", "Lexical Analysis", "Design Patterns", "AST Parsing"],
    gradient: "from-pink-500/20 to-yellow-500/20",
  },
  {
    title: "Virginia Flora and Fauna",
    description:
      "A centralized biodiversity platform designed to manage and display Virginia’s species data. It implements a multi-role user system for researcher observations and features a filtering engine for habitat and conservation tracking.",
    href: "https://github.com/theo-mandelbaum/virginia-flora-and-fauna",
    tech: ["SQL", "Relational Modeling", "Flask", "Data Analysis"],
    gradient: "from-purple-500/20 to-emerald-500/20",
  },
  {
    title: "TASync",
    description:
      "A full-stack scheduling website for Educators, TAs and Students. In this app, I handled model creation using an Object Relational Model, webpage routing, developed ninja APIs and utilized tailwind CSS through Syncfusion's calendar component.",
    href: "https://github.com/theo-mandelbaum/TASync-public",
    tech: ["Django", "Python", "React", "JavaScript", "REST APIs"],
    gradient: "from-orange-500/20 to-rose-500/20",
  },
  {
    title: "Local Library",
    description:
      "A full-stack library management web app using Python/Django to organize books, authors, genres, and languages.",
    href: "https://github.com/theo-mandelbaum/django_local_library",
    tech: ["Django", "Python", "REST APIs"],
    gradient: "from-blue-500/20 to-gray-500/20",
  },
  {
    title: "Custom Unix Shell",
    description:
      "A Unix-style shell built in C with piping, redirection, and job control.",
    href: "https://github.com/theo-mandelbaum/multithreaded-servers",
    tech: ["C", "POSIX", "Fork/Exec", "Multithreaded Servers"],
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
]

export default function Projects() {
  return (
    <div className="space-y-6 pb-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Projects
        </h1>
        <p className="text-muted-foreground text-lg">
          An overview of things I’ve built, from full-stack web apps to low-level systems work.
        </p>
        <p className="text-muted-foreground text-sm">
          Projects are listed from most recent to least recent.
        </p>
      </div>

      <Separator />

      <div className="space-y-6">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            target="_blank"
            className="block"
          >
            <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] active:scale-[0.99]">
              <div
                className={`h-full bg-gradient-to-r ${project.gradient}`}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-semibold">
                        {project.title}
                      </h2>
                      <span className="text-sm font-medium group-hover:underline flex items-center gap-1">
                        View on GitHub <span className="transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </div>

                    <p className="text-muted-foreground max-w-3xl">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-background/70 px-3 py-1 text-sm border border-border/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}