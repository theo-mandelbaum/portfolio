import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "../components/ui/card"
import Link from "next/link"

const latestProject = {
    title: "SQL Data Warehousing",
    description:
      "A focused data warehouse created from raw customer and product data. This warehouse includes a bronze, silver, and gold layer, implementing the Medallion Architecture of data design. SQL scripts that are used for data cleaning and aggregation are included.",
    href: "https://github.com/theo-mandelbaum/sql-data-warehouse-project",
    tech: ["Data Cleaning", "PostgreSQL", "Data Modeling", "ETL Processes"],
    gradient: "from-indigo-500/20 to-purple-500/20",
  };

export default function Home() {
  return (
    <div className="space-y-12">
      {/* latest project */}
      <div className="space-y-4">
        <div className="px-1">
          <h2 className="text-3xl font-bold tracking-tight">Latest Project</h2>
          <Separator className="mt-2" />
        </div>
        
        <Link
          href={latestProject.href}
          target="_blank"
          className="block"
        >
          <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] active:scale-[0.99]">
            <div className={`h-full bg-gradient-to-r ${latestProject.gradient}`}>
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">
                      {latestProject.title}
                    </h3>
                    <span className="text-sm font-medium group-hover:underline flex items-center gap-1">
                      View on GitHub <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>

                  <p className="text-muted-foreground max-w-3xl">
                    {latestProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {latestProject.tech.map((t) => (
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
      </div>

      {/* latest blog */}
      <div className="space-y-4">
        <div className="px-1">
          <h2 className="text-3xl font-bold tracking-tight">Latest Blog</h2>
          <Separator className="mt-2" />
        </div>
        
        <Link
          href={`https://blog.mandelbaumtheo.org/fourteen`}
          target="_blank"
          className="block"
        >
          <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] active:scale-[0.99]">
            <div className="h-full bg-gradient-to-r from-muted/40 via-blue-500/15 to-muted/40">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">
                      MCP Exploration
                    </h3>
                  </div>

                  <p className="text-muted-foreground">
                    Today, we're diving into MCP (model context protocol) servers. What is the value of MCP servers? What do MCP servers do that an LLM can't do already? What does model context protocol even mean? <br />
                    These are some of the questions that I'll be finding the answer to today...
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  )
}