import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@radix-ui/react-navigation-menu"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo/Name */}
          <div className="font-bold text-xl">TM</div>

          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-4">
              <NavigationMenuItem>
                <NavigationMenuLink href="/">Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/projects">Projects</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="https://blog.mandelbaumtheo.org">Blogs</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/about">About</NavigationMenuLink>
              </NavigationMenuItem>
              {/* ... other items */}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Social Icons or "Contact" Button */}
          <Button variant="outline">Resume</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Project — spans 2 columns on md+ */}
          <div className="md:col-span-2 bg-slate-100 rounded-xl p-6">
            <Card className="border-none shadow-none bg-transparent"> {/* Made card "invisible" so it uses the div's background */}
              <CardHeader className="p-2 px-4"> {/* Tighten top/bottom padding */}
                <CardTitle className="text-base">Main Project</CardTitle> 
              </CardHeader>
              <CardContent className="p-2 px-4 pb-4"> {/* Tighten content padding */}
                <div className="h-24 bg-muted rounded-md" /> {/* Force a shorter height (h-24) instead of aspect-video */}
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2 bg-slate-100 rounded-xl p-6">
            <Card className="border-none shadow-none bg-transparent"> {/* Made card "invisible" so it uses the div's background */}
              <CardHeader className="p-2 px-4"> {/* Tighten top/bottom padding */}
                <CardTitle className="text-base">Project 2</CardTitle> 
              </CardHeader>
              <CardContent className="p-2 px-4 pb-4"> {/* Tighten content padding */}
                <div className="h-24 bg-muted rounded-md" /> {/* Force a shorter height (h-24) instead of aspect-video */}
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2 bg-slate-100 rounded-xl p-6">
            <Card className="border-none shadow-none bg-transparent"> {/* Made card "invisible" so it uses the div's background */}
              <CardHeader className="p-2 px-4"> {/* Tighten top/bottom padding */}
                <CardTitle className="text-base">Project 3</CardTitle> 
              </CardHeader>
              <CardContent className="p-2 px-4 pb-4"> {/* Tighten content padding */}
                <div className="h-24 bg-muted rounded-md" /> {/* Force a shorter height (h-24) instead of aspect-video */}
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2 bg-slate-100 rounded-xl p-6">
            <Card className="border-none shadow-none bg-transparent"> {/* Made card "invisible" so it uses the div's background */}
              <CardHeader className="p-2 px-4"> {/* Tighten top/bottom padding */}
                <CardTitle className="text-base">Project 4</CardTitle> 
              </CardHeader>
              <CardContent className="p-2 px-4 pb-4"> {/* Tighten content padding */}
                <div className="h-24 bg-muted rounded-md" /> {/* Force a shorter height (h-24) instead of aspect-video */}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="w-full border-t bg-background/95 backdrop-blur">
        <div className="container mx-auto flex flex-col items-center justify-center py-6">
          <nav className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
            <a href="https://www.linkedin.com/in/theo-mandelbaum" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://github.com/theo-mandelbaum" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://mandelbaumtheo@gmail.com" className="hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}