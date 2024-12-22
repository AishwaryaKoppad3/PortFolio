import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-2">
        <div className="flex flex-col justify-center text-center md:text-left">
          <div className="space-y-2">
            <p className="text-primary text-lg">Hello, I'm</p>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight">
              <span className="gradient-text">Aishwarya Koppad</span>
            </h1>
          </div>
          <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
            <span className="text-primary text-lg" >A Software Engineer </span>Passionate about building scalable applications and solving complex problems.
            Experienced in full-stack development with modern technologies.
          </p>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Contact Me</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
        <div className="order-first md:order-last flex items-center justify-center">
          <div className="relative h-48 w-48 md:h-64 md:w-64">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-3xl" />
            <div className="card-gradient relative h-full w-full rounded-lg border border-primary/10 p-4 md:p-8">
              <pre className="font-mono text-xs md:text-sm text-muted-foreground overflow-x-auto">
                <code>{`const developer = {
  name: "Aishwarya Koppad",
  role: "Software Engineer",
  skills: ["React", 
  "Node.js",
  "express.js",
  "tailwind"],
  loves: "Clean Code"
};`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-16 md:mt-24">
        <h2 className="text-2xl md:text-3xl font-bold gradient-text text-center md:text-left">Skills</h2>
        <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Frontend Development",
              skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
            },
            {
              title: "Backend Development",
              skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
            },
            {
              title: "DevOps & Tools",
              skills: ["Git", "Docker", "AWS", "CI/CD"],
            },
          ].map((category) => (
            <div
              key={category.title}
              className="card-gradient rounded-lg border border-primary/10 p-4 md:p-6 shadow-lg transition-transform hover:scale-105"
            >
              <h3 className="font-semibold text-primary">{category.title}</h3>
              <ul className="mt-3 md:mt-4 space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm md:text-base">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 md:mt-24">
        <h2 className="text-2xl md:text-3xl font-bold gradient-text text-center md:text-left">Education</h2>
        <div className="mt-6 md:mt-8">
          <div className="card-gradient rounded-lg border border-primary/10 p-4 md:p-6 shadow-lg">
            <h3 className="font-semibold text-primary">Bachelor of Computer Application</h3>
            <p className="mt-2 text-sm md:text-base text-muted-foreground">
              KLE TECHNOLOGICAL UNIVERSITY • 2022 - 2025
            </p>
            <p className="mt-3 md:mt-4 text-sm md:text-base">
              Relevant coursework: Data Structures, Algorithms, Software Engineering,
              Database Systems, Web Development
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}