import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin } from "lucide-react";

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
                <div className="mb-6">
                  <h4 className="font-semibold mb-4 text-lg">Get in Touch</h4>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a 
                      href="mailto:anuragilake727@gmail.com"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>anuragilake727@gmail.com</span>
                    </a>
                    
                    <a 
                      href="https://wa.me/919322051167"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>+91 9322051167</span>
                    </a>
                    
                    <a 
                      href="https://www.linkedin.com/in/anurag-ilake-7881a32b0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
                
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