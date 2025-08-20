import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Users, GraduationCap, Heart, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Code,
    title: "Technical Interviews",
    description: "Practice coding challenges, system design, and technical discussions for software engineering roles.",
    features: ["Coding Problems", "System Design", "Algorithm Questions", "Technical Deep-dives"],
    color: "primary"
  },
  {
    icon: Users,
    title: "HR & Behavioral",
    description: "Master soft skills, behavioral questions, and situational scenarios for any role.",
    features: ["STAR Method", "Culture Fit", "Leadership Scenarios", "Conflict Resolution"],
    color: "accent"
  },
  {
    icon: GraduationCap,
    title: "MBA & Consulting",
    description: "Tackle case studies, business scenarios, and strategic thinking challenges.",
    features: ["Case Studies", "Market Analysis", "Strategic Planning", "Presentation Skills"],
    color: "primary"
  },
  {
    icon: Heart,
    title: "Clinical & Healthcare",
    description: "Practice medical scenarios, patient interactions, and clinical decision-making.",
    features: ["Patient Scenarios", "Clinical Reasoning", "Medical Ethics", "Communication"],
    color: "accent"
  }
];

const InterviewCategories = () => {
  return (
    <section id="categories" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Interview Types for Every
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Career Path
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI adapts to different interview styles and industries, providing tailored experiences 
            that match real-world scenarios you'll encounter.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-border/50 hover:border-primary/30 transition-smooth group hover:shadow-card"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      category.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                    }`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-card-foreground">{category.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground mt-4">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:border-primary/50 transition-smooth"
                    >
                      Start Practice
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InterviewCategories;