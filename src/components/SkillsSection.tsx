import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  { name: "Python", level: 90, category: "Programming" },
  { name: "Java", level: 85, category: "Programming" },
  { name: "C++", level: 80, category: "Programming" },
  { name: "HTML/CSS", level: 85, category: "Web" },
  { name: "Data Structures & Algorithms", level: 88, category: "CS Fundamentals" },
  { name: "Machine Learning", level: 82, category: "AI/ML" },
  { name: "Artificial Intelligence", level: 78, category: "AI/ML" },
  { name: "C", level: 75, category: "Programming" },
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <Card key={skill.name} className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {skill.category}
                  </span>
                </div>
                <div className="space-y-2">
                  <Progress value={skill.level} className="h-3" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Proficiency</span>
                    <span className="font-medium">{skill.level}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;