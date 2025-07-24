import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card shadow-elegant hover:shadow-elegant transition-all duration-300 group">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                    Bachelor of Technology (B.Tech)
                  </CardTitle>
                  <p className="text-xl text-muted-foreground mt-1">
                    Computer Engineering
                  </p>
                </div>
                <Badge className="bg-gradient-primary text-primary-foreground w-fit">
                  Currently Pursuing
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Institution</h4>
                    <p className="text-muted-foreground">
                      Kolhapur Institute of Technology's College of Engineering, Kolhapur
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Current Year</h4>
                    <p className="text-muted-foreground">3rd Year</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Specialization</h4>
                    <p className="text-muted-foreground">
                      Artificial Intelligence & Machine Learning
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Location</h4>
                    <p className="text-muted-foreground">Kolhapur, Maharashtra, India</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-border/50 pt-6">
                <h4 className="font-semibold text-lg mb-3">Key Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Computer Science Fundamentals</Badge>
                  <Badge variant="secondary">Data Structures & Algorithms</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Artificial Intelligence</Badge>
                  <Badge variant="secondary">Software Engineering</Badge>
                  <Badge variant="secondary">Programming Languages</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;