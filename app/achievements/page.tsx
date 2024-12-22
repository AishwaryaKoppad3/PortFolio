import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Award, Star } from "lucide-react";

const achievements = [
  {
    title: "Hackathon Winner",
    description: "First place in University Hackathon 2022",
    icon: Trophy,
  },
  {
    title: "Open Source Contributor",
    description: "Major contributions to popular React libraries",
    icon: Star,
  },
  {
    title: "Technical Excellence Award",
    description: "Recognized for outstanding technical contributions",
    icon: Award,
  },
];

export default function AchievementsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold">Achievements</h1>
      <p className="mt-4 text-muted-foreground">
        Recognition and accomplishments throughout my career.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => (
          <Card key={achievement.title} className="transition-transform hover:scale-105">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <achievement.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>{achievement.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">Certifications</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>AWS Certified Solutions Architect</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Amazon Web Services • 2023
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Professional Scrum Master I</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Scrum.org • 2022
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}