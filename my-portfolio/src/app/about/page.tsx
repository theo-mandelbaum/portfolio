import { Separator } from "@/components/ui/separator"
import Image from "next/image";

export default function About() {
  return (
    <div className="space-y-8 pb-12 max-w-2xl mx-auto px-4 w-full">
      {/* Profile Header Section */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <Image
            src='/image.JPG'
            alt='Theo Mandelbaum'
            width={150}
            height={150}
            className="rounded-full object-cover border-2 border-muted"
          />
        </div>
        
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight">Theo Mandelbaum</h1>
          <p className="text-muted-foreground text-lg font-medium">
            Software Developer & Data Engineering Student
          </p>
        </div>
      </div>

      <Separator />

      <div className="max-w-2xl text-xl leading-relaxed text-foreground space-y-6">
        <p className="font-semibold text-2xl text-primary">Hey!</p>
        
        <p className="text-muted-foreground">
          I'm a Senior Computer Science major at James Madison University, preparing for graduation this Spring. 
          As a student, I’ve developed a deep passion for <span className="text-foreground font-medium">software development, data engineering, and data science</span>. 
          I am specifically driven by opportunities to apply these technical skills toward improving learning and digital accessibility.
        </p>

        <p className="text-muted-foreground">
          Currently, I contribute to <a href="https://musiccpr.org/" className="font-medium text-primary underline-offset-4 hover:underline">MusicCPR</a>, 
           a full-stack web platform that provides teachers and students with standards-aligned music education tools.
        </p>

        <p className="text-muted-foreground">
          When I&apos;m not coding, you can find me at the gym, cheering for DC sports teams, playing pickleball, or pulling some strings on my bass.
        </p>
      </div>
    </div>
  )
}