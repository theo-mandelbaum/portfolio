import { Separator } from "@/components/ui/separator"

export default function Projects() {
  return (
    <div className="space-y-4 pb-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Projects
        </h1>
        <p className="text-muted-foreground text-lg">
          An overview of things I've built, from full-stack web apps to experimental projects.
        </p>
      </div>
      <Separator />
    </div>
  )
}