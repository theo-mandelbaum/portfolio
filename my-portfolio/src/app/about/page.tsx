import { Separator } from "@/components/ui/separator"
import Image from "next/image";

export default function About() {
  return (
    <div className="space-y-4 pb-8 max-w-2xl mx-auto px-4 w-full">
      <div className="space-y-2 flex justify-center">
        <Image
          src='/image.JPG'
          alt='professional headshot'
          width={130}
          height={130}
         />
      </div>
      <Separator />
      <div>
        <div className="max-w-2xl text-lg leading-relaxed text-foreground space-y-8">
          <p>Hey!</p>
          <p>My name is Theo Mandelbaum, I'm a Senior Computer Science major at James Madison University, ready for graduation in the Spring.</p>
        </div>
      </div>
    </div>
  )
}