import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to take on new challenges and opportunities in AI & ML
          </p>
        </div>
        
        <Card className="bg-gradient-card shadow-elegant">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
                  Available for Opportunities
                </Badge>
                <h3 className="text-3xl font-bold mb-2">Anurag Dattatray Ilake</h3>
                <p className="text-xl text-muted-foreground mb-6">
                  AI & ML Engineer | 3rd Year B.Tech Student
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">Education</h4>
                    <p className="text-muted-foreground text-sm">
                      Kolhapur Institute of Technology's College of Engineering
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground text-sm">Kolhapur, Maharashtra</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">Specialization</h4>
                    <p className="text-muted-foreground text-sm">
                      Artificial Intelligence & Machine Learning
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Status</h4>
                    <p className="text-muted-foreground text-sm">Seeking Internship/Entry-level Opportunities</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-border/50 pt-6">
                <p className="text-muted-foreground italic">
                  "Ready to challenge myself and contribute to innovative AI/ML projects. 
                  Let's build the future together!"
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;