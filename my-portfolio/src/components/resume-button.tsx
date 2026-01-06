"use client";
import { Button } from "./ui/button"

export default function ResumeButton() {
  return (
    <Button
      variant="outline"
      onClick={() => window.open('/resume.pdf', '_blank', 'noopener,noreferrer')}
    >
      Resume
    </Button>
  );
}