import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { projects } from "@/data/projects"

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
                        {project.linkLabel ?? "View on GitHub"} <span className="transition-transform group-hover:translate-x-1">→</span>
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