import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Settings, MessageSquare, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Choose Your Path",
    description: "Select your interview type and role. Our AI customizes questions based on your chosen field and experience level."
  },
  {
    icon: Settings,
    step: "02", 
    title: "Set Your Preferences",
    description: "Configure difficulty level, interview duration, and specific topics you want to focus on during your practice session."
  },
  {
    icon: MessageSquare,
    step: "03",
    title: "Start Your Interview",
    description: "Engage with our AI interviewer through natural conversation. Answer questions while our system analyzes your performance in real-time."
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Get Detailed Feedback",
    description: "Receive comprehensive analysis of your responses, body language, speech patterns, and actionable insights for improvement."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How It
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes with our simple, intuitive process designed 
            to maximize your interview preparation efficiency.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connection line (hidden on mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
                  )}
                  
                  <Card className="relative z-10 bg-gradient-card border-border/50 hover:border-primary/30 transition-smooth group hover:shadow-card">
                    <CardContent className="p-6 text-center">
                      <div className="relative mb-6">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                          <IconComponent className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-accent-foreground">
                          {step.step}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-card-foreground mb-3">
                        {step.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Your First Interview
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • Free trial included
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;