import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  Settings, 
  Play, 
  Square, 
  SkipForward,
  Brain,
  Clock,
  Volume2,
  Camera
} from "lucide-react";
import DashboardHeader from "@/components/DashboardHeader";

const Interview = () => {
  const [currentStep, setCurrentStep] = useState<'setup' | 'interview' | 'completed'>('setup');
  const [interviewType, setInterviewType] = useState('');
  const [role, setRole] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [duration, setDuration] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes
  const videoRef = useRef<HTMLVideoElement>(null);

  const questions = [
    "Tell me about yourself and your background.",
    "Why are you interested in this role?",
    "What is your greatest strength?",
    "Describe a challenging project you worked on.",
    "Where do you see yourself in 5 years?",
  ];

  const interviewTypes = [
    { value: "technical", label: "Technical Interview" },
    { value: "behavioral", label: "Behavioral Interview" },
    { value: "case", label: "Case Study" },
    { value: "clinical", label: "Clinical Interview" },
  ];

  const roles = [
    { value: "software-engineer", label: "Software Engineer" },
    { value: "product-manager", label: "Product Manager" },
    { value: "data-scientist", label: "Data Scientist" },
    { value: "business-analyst", label: "Business Analyst" },
    { value: "ux-designer", label: "UX Designer" },
  ];

  useEffect(() => {
    if (currentStep === 'interview' && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [currentStep, timeRemaining]);

  const startInterview = () => {
    if (interviewType && role && difficulty && duration) {
      setCurrentStep('interview');
      // Initialize camera
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(err => console.log('Error accessing media devices:', err));
    }
  };

  const endInterview = () => {
    setCurrentStep('completed');
    setIsRecording(false);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      endInterview();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (currentStep === 'setup') {
    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader />
        
        <main className="container mx-auto px-6 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-foreground mb-2">Start New Interview</h1>
              <p className="text-muted-foreground">Configure your interview session parameters</p>
            </div>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Interview Configuration</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Choose your interview type and settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Interview Type</label>
                  <Select onValueChange={setInterviewType}>
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="Select interview type" />
                    </SelectTrigger>
                    <SelectContent>
                      {interviewTypes.map(type => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Target Role</label>
                  <Select onValueChange={setRole}>
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="Select target role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map(role => (
                        <SelectItem key={role.value} value={role.value}>
                          {role.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Difficulty Level</label>
                  <Select onValueChange={setDifficulty}>
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="Select difficulty level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="expert">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Session Duration</label>
                  <Select onValueChange={setDuration}>
                    <SelectTrigger className="bg-input border-border">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="45">45 minutes</SelectItem>
                      <SelectItem value="60">60 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-4">
                  <Button 
                    onClick={startInterview} 
                    disabled={!interviewType || !role || !difficulty || !duration}
                    className="w-full"
                    variant="hero"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Start Interview Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  if (currentStep === 'interview') {
    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader />
        
        <main className="container mx-auto px-6 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-120px)]">
            {/* Video Section */}
            <div className="lg:col-span-2 space-y-4">
              <Card className="bg-card border-border h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <Badge variant="default" className="bg-red-500 text-white">
                        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                        LIVE
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        Question {currentQuestion + 1} of {questions.length}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-mono text-foreground">
                        {formatTime(timeRemaining)}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 bg-muted rounded-lg overflow-hidden relative">
                    <video
                      ref={videoRef}
                      autoPlay
                      muted
                      className="w-full h-full object-cover"
                      style={{ display: videoEnabled ? 'block' : 'none' }}
                    />
                    {!videoEnabled && (
                      <div className="w-full h-full flex items-center justify-center bg-muted">
                        <Camera className="w-16 h-16 text-muted-foreground" />
                      </div>
                    )}
                    
                    {/* AI Analysis Overlay */}
                    <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <Brain className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-foreground">AI Analysis Active</span>
                      </div>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">Eye Contact</span>
                          <span className="text-xs text-green-500">Good</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">Speech Clarity</span>
                          <span className="text-xs text-primary">Excellent</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">Confidence</span>
                          <span className="text-xs text-orange-500">Moderate</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-4 mt-4">
                    <Button
                      variant={audioEnabled ? "default" : "destructive"}
                      size="icon"
                      onClick={() => setAudioEnabled(!audioEnabled)}
                    >
                      {audioEnabled ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                    </Button>
                    
                    <Button
                      variant={videoEnabled ? "default" : "destructive"}
                      size="icon"
                      onClick={() => setVideoEnabled(!videoEnabled)}
                    >
                      {videoEnabled ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
                    </Button>
                    
                    <Button
                      variant={isRecording ? "destructive" : "default"}
                      onClick={() => setIsRecording(!isRecording)}
                    >
                      {isRecording ? <Square className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                      {isRecording ? "Stop Recording" : "Start Recording"}
                    </Button>
                    
                    <Button variant="outline" size="icon">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Question & Controls */}
            <div className="space-y-4">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center">
                    <Volume2 className="w-5 h-5 mr-2 text-primary" />
                    Current Question
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Progress value={(currentQuestion / questions.length) * 100} className="h-2" />
                    
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-foreground font-medium leading-relaxed">
                        {questions[currentQuestion]}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Button
                        onClick={nextQuestion}
                        className="w-full"
                        variant="default"
                      >
                        <SkipForward className="w-4 h-4 mr-2" />
                        {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Interview"}
                      </Button>
                      
                      <Button
                        onClick={endInterview}
                        variant="outline"
                        className="w-full"
                      >
                        End Interview Early
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground text-sm">Live Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Response Time</span>
                      <Badge variant="default">2.3s</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Clarity Score</span>
                      <Badge variant="default">8.5/10</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Confidence</span>
                      <Badge variant="secondary">Improving</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Eye Contact</span>
                      <Badge variant="default">Good</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Completed state would redirect to feedback page
  return null;
};

export default Interview;