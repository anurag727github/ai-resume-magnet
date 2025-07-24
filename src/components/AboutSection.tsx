import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <Badge className="mb-4">About Me</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Passionate Developer & Problem Solver
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                I'm currently pursuing my B.Tech in Computer Engineering at 
                <span className="font-semibold text-foreground"> Kolhapur Institute of Technology's College of Engineering</span>, 
                where I'm in my 3rd year of studies.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My journey in technology is driven by a passion for 
                <span className="font-semibold text-foreground"> Artificial Intelligence and Machine Learning</span>. 
                I believe in challenging myself at every step, constantly pushing boundaries to learn and grow.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Beyond coding, I'm an avid cricket enthusiast. The strategic thinking and teamwork in cricket 
                complement my approach to software development - always thinking ahead and working collaboratively.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium">Kolhapur, Maharashtra</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Education</span>
                    <span className="font-medium">B.Tech Computer Engineering</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Year</span>
                    <span className="font-medium">3rd Year</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Specialization</span>
                    <span className="font-medium">AI & ML</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Hobby</span>
                    <span className="font-medium">Cricket</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-primary text-primary-foreground shadow-elegant">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">My Philosophy</h3>
                <p className="text-primary-foreground/90">
                  "I like to challenge myself for every step" - This drives my continuous learning and growth mindset.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;