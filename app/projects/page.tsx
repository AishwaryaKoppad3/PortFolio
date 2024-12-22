import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js and Stripe integration.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    link: "https://github.com/username/project1",
  },
  {
    title: "CodeClub",
    description: "An educational platform designed to enhance coding skills. It provides a seamless integration with the Codeforces API, allowing students to solve real-world coding problems and improve their problem-solving abilities. Users earn rewards for completing challenges, fostering a competitive learning environment.",
    technologies: ["React", "Express", "Tailwind", "Node.js"],
    link: "https://github.com/harshchinmalliofficial/CodeClub",
  },
  {
    title: "PDF CHATBOT",
    description: "A cutting-edge machine learning project that enables users to interact with PDFs through a chatbot interface. Ideal for students and professionals, this tool simplifies information extraction by allowing conversational queries on uploaded documents. Built using advanced natural language processing techniques.",
    technologies: ["Python", "Langchain", "Pandas"],
    link: "https://github.com/harshchinmalliofficial/PDF-CHATBOT",
  },
  
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-4 text-muted-foreground">
        A collection of my recent projects and contributions.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="transition-transform hover:scale-105">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <Link
                href={project.link}
                className="mt-4 inline-block text-sm text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}