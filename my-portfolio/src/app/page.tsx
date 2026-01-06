import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@radix-ui/react-navigation-menu"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"

export default function Home() {
  return (
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
  )
}