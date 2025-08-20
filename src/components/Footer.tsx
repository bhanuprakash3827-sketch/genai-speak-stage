import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">AI</span>
              </div>
              <span className="text-xl font-bold text-foreground">MockInterview</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Master your interview skills with AI-powered practice sessions designed for the modern job market.
            </p>
            <div className="flex space-x-4 mt-6">
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-smooth">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Interview Types</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">API Access</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Contact</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-smooth">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 AI MockInterview. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Built with 💙 for interview success
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;