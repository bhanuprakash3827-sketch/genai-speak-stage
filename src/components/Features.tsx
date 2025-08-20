import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Eye, Brain, BarChart3, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Advanced AI Analysis",
    description: "Our GPT-powered system understands context, evaluates responses, and provides human-like interview experiences.",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: Mic,
    title: "Speech Recognition & Analysis",
    description: "Real-time speech processing analyzes your tone, pace, clarity, and confidence levels during responses.",
    gradient: "from-accent/20 to-accent/5"
  },
  {
    icon: Eye,
    title: "Facial Expression Detection",
    description: "Computer vision technology tracks facial expressions, eye contact, and body language for comprehensive feedback.",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: BarChart3,
    title: "Detailed Performance Analytics",
    description: "Get comprehensive reports on your strengths, improvement areas, and progress tracking over time.",
    gradient: "from-accent/20 to-accent/5"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Practice anytime, anywhere. No scheduling required - your AI interviewer is always ready when you are.",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Your interview sessions are completely private and secure. All data is encrypted and never shared.",
    gradient: "from-accent/20 to-accent/5"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powered by
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Cutting-Edge AI
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the most realistic interview simulation with our advanced AI technology 
            that analyzes every aspect of your performance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-border/50 hover:border-primary/30 transition-smooth group hover:shadow-card"
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce`}>
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;