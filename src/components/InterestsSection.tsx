import { Card, CardContent } from "@/components/ui/card";

const interests = [
  {
    title: "Cricket",
    description: "Playing and following cricket develops strategic thinking and teamwork skills that translate well into collaborative software development.",
    icon: "🏏"
  },
  {
    title: "Continuous Learning",
    description: "I challenge myself at every step, constantly seeking new technologies and methodologies to master.",
    icon: "📚"
  },
  {
    title: "Problem Solving",
    description: "Enjoy tackling complex algorithmic challenges and finding elegant solutions to technical problems.",
    icon: "🧩"
  },
  {
    title: "Innovation",
    description: "Passionate about exploring cutting-edge AI/ML technologies and their real-world applications.",
    icon: "💡"
  }
];

const InterestsSection = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Interests & Hobbies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What drives me beyond academics and technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interests.map((interest, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{interest.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {interest.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Card className="bg-gradient-primary text-primary-foreground shadow-elegant max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Growth Mindset</h3>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                "I like to challenge myself for every step" - This philosophy drives my approach to both personal and professional development. 
                Every challenge is an opportunity to grow, learn, and become better than yesterday.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;