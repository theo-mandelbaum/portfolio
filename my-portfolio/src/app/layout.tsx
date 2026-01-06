import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@radix-ui/react-navigation-menu"
import { Button } from "../components/ui/button"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Theo Mandelbaum Portfolio",
  description: "By Theo Mandelbaum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
        {children}
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
      </body>
    </html>
  );
}
