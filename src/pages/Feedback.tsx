import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Pause, 
  Download, 
  Share2, 
  TrendingUp, 
  TrendingDown, 
  AlertCircle, 
  CheckCircle,
  Brain,
  Eye,
  Mic,
  Clock,
  Target,
  BookOpen
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import DashboardHeader from "@/components/DashboardHeader";

const Feedback = () => {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Mock data - in real app, fetch based on interview ID
  const interviewData = {
    id: 1,
    type: "Technical",
    role: "Software Engineer",
    date: "2024-01-15",
    duration: "45 min",
    overallScore: 85,
    status: "completed",
    recording: "/mock-interview-recording.mp4"
  };

  const scores = {
    technical: 88,
    communication: 82,
    confidence: 79,
    problemSolving: 91,
    overallPerformance: 85
  };

  const detailedFeedback = [
    {
      question: "Tell me about yourself and your background.",
      score: 85,
      timeSpent: "3:45",
      strengths: ["Clear articulation", "Relevant experience highlighted", "Professional tone"],
      improvements: ["Could be more concise", "Add specific achievements"],
      transcript: "I'm a software engineer with 3 years of experience in full-stack development. I've worked primarily with React and Node.js, building scalable web applications for e-commerce platforms...",
      aiAnalysis: {
        eyeContact: "Good",
        speechPace: "Appropriate", 
        confidence: "Moderate",
        clarity: "Excellent"
      }
    },
    {
      question: "What is your approach to debugging complex issues?",
      score: 92,
      timeSpent: "4:12",
      strengths: ["Systematic approach", "Mentioned specific tools", "Good examples"],
      improvements: ["Could discuss team collaboration more"],
      transcript: "When debugging complex issues, I follow a systematic approach. First, I try to reproduce the issue consistently. Then I use logging and debugging tools like Chrome DevTools...",
      aiAnalysis: {
        eyeContact: "Excellent",
        speechPace: "Good",
        confidence: "High",
        clarity: "Good"
      }
    }
  ];

  const recommendations = [
    {
      area: "Communication",
      suggestion: "Practice speaking more slowly to improve clarity",
      priority: "medium",
      resources: ["Public speaking courses", "Mock interview practice"]
    },
    {
      area: "Technical Depth",
      suggestion: "Provide more specific examples when discussing technical concepts",
      priority: "high",
      resources: ["Technical blog writing", "Code review participation"]
    },
    {
      area: "Confidence",
      suggestion: "Work on maintaining eye contact throughout responses",
      priority: "low",
      resources: ["Video practice sessions", "Mirror practice"]
    }
  ];

  const togglePlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-green-500";
    if (score >= 70) return "text-orange-500";
    return "text-red-500";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 85) return "default";
    if (score >= 70) return "secondary";
    return "destructive";
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Interview Feedback</h1>
              <p className="text-muted-foreground">
                {interviewData.type} Interview - {interviewData.role} • {interviewData.date}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline">
                <Share2 className="w-4 h-4 mr-2" />
                Share Report
              </Button>
              <Button variant="default">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>

        {/* Overall Score Card */}
        <Card className="bg-gradient-primary text-primary-foreground mb-8">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{scores.overallPerformance}%</div>
                <p className="text-primary-foreground/80">Overall Score</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold mb-2">{interviewData.duration}</div>
                <p className="text-primary-foreground/80">Duration</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold mb-2">{detailedFeedback.length}</div>
                <p className="text-primary-foreground/80">Questions</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold mb-2">A-</div>
                <p className="text-primary-foreground/80">Grade</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="bg-muted">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="detailed">Question Analysis</TabsTrigger>
                <TabsTrigger value="recording">Recording Review</TabsTrigger>
                <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Score Breakdown */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Performance Breakdown</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Your scores across different evaluation criteria
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Brain className="w-5 h-5 text-primary" />
                          <span className="text-foreground">Technical Skills</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Progress value={scores.technical} className="w-32 h-2" />
                          <Badge variant={getScoreBadge(scores.technical)} className="min-w-[3rem]">
                            {scores.technical}%
                          </Badge>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Mic className="w-5 h-5 text-accent" />
                          <span className="text-foreground">Communication</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Progress value={scores.communication} className="w-32 h-2" />
                          <Badge variant={getScoreBadge(scores.communication)} className="min-w-[3rem]">
                            {scores.communication}%
                          </Badge>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Target className="w-5 h-5 text-green-500" />
                          <span className="text-foreground">Confidence</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Progress value={scores.confidence} className="w-32 h-2" />
                          <Badge variant={getScoreBadge(scores.confidence)} className="min-w-[3rem]">
                            {scores.confidence}%
                          </Badge>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Brain className="w-5 h-5 text-orange-500" />
                          <span className="text-foreground">Problem Solving</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Progress value={scores.problemSolving} className="w-32 h-2" />
                          <Badge variant={getScoreBadge(scores.problemSolving)} className="min-w-[3rem]">
                            {scores.problemSolving}%
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Key Insights */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Key Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 p-3 bg-green-500/10 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">Strong Technical Knowledge</p>
                          <p className="text-sm text-muted-foreground">
                            Demonstrated excellent understanding of core concepts and provided detailed explanations.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 p-3 bg-primary/10 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">Improving Communication</p>
                          <p className="text-sm text-muted-foreground">
                            Your communication skills showed improvement throughout the interview.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 p-3 bg-orange-500/10 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">Work on Confidence</p>
                          <p className="text-sm text-muted-foreground">
                            Consider practicing more to build confidence in your responses.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="detailed" className="space-y-6">
                {detailedFeedback.map((feedback, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-foreground">Question {index + 1}</CardTitle>
                        <Badge variant={getScoreBadge(feedback.score)}>
                          {feedback.score}%
                        </Badge>
                      </div>
                      <CardDescription className="text-muted-foreground">
                        {feedback.question}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-green-600 mb-2">Strengths</h4>
                          <ul className="space-y-1">
                            {feedback.strengths.map((strength, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-center">
                                <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                                {strength}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-orange-600 mb-2">Areas for Improvement</h4>
                          <ul className="space-y-1">
                            {feedback.improvements.map((improvement, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-center">
                                <AlertCircle className="w-3 h-3 text-orange-500 mr-2" />
                                {improvement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">Your Response</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feedback.transcript}
                        </p>
                      </div>

                      <div className="grid grid-cols-4 gap-4">
                        <div className="text-center">
                          <Eye className="w-5 h-5 text-primary mx-auto mb-1" />
                          <p className="text-xs text-muted-foreground">Eye Contact</p>
                          <p className="text-sm font-medium text-foreground">{feedback.aiAnalysis.eyeContact}</p>
                        </div>
                        <div className="text-center">
                          <Clock className="w-5 h-5 text-accent mx-auto mb-1" />
                          <p className="text-xs text-muted-foreground">Speech Pace</p>
                          <p className="text-sm font-medium text-foreground">{feedback.aiAnalysis.speechPace}</p>
                        </div>
                        <div className="text-center">
                          <Target className="w-5 h-5 text-green-500 mx-auto mb-1" />
                          <p className="text-xs text-muted-foreground">Confidence</p>
                          <p className="text-sm font-medium text-foreground">{feedback.aiAnalysis.confidence}</p>
                        </div>
                        <div className="text-center">
                          <Mic className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                          <p className="text-xs text-muted-foreground">Clarity</p>
                          <p className="text-sm font-medium text-foreground">{feedback.aiAnalysis.clarity}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="recording" className="space-y-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Interview Recording</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Review your interview performance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Play className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                          <p className="text-muted-foreground">Interview recording will be available here</p>
                          <p className="text-sm text-muted-foreground mt-2">
                            Duration: {interviewData.duration}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center space-x-4">
                        <Button variant="default" onClick={togglePlayback}>
                          {isPlaying ? (
                            <>
                              <Pause className="w-4 h-4 mr-2" />
                              Pause
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4 mr-2" />
                              Play Recording
                            </>
                          )}
                        </Button>
                        <Button variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="recommendations" className="space-y-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Personalized Recommendations</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      AI-powered suggestions to improve your interview performance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recommendations.map((rec, index) => (
                        <div key={index} className="p-4 border border-border rounded-lg">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-foreground">{rec.area}</h4>
                            <Badge variant={rec.priority === 'high' ? 'destructive' : rec.priority === 'medium' ? 'secondary' : 'outline'}>
                              {rec.priority} priority
                            </Badge>
                          </div>
                          <p className="text-muted-foreground text-sm mb-3">{rec.suggestion}</p>
                          <div className="flex items-center space-x-2">
                            <BookOpen className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">Recommended Resources:</span>
                          </div>
                          <ul className="mt-2 space-y-1">
                            {rec.resources.map((resource, i) => (
                              <li key={i} className="text-sm text-muted-foreground ml-6">
                                • {resource}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/interview">
                  <Button className="w-full" variant="hero">
                    <Play className="w-4 h-4 mr-2" />
                    Start New Interview
                  </Button>
                </Link>
                <Link to="/history">
                  <Button className="w-full" variant="outline">
                    View All Sessions
                  </Button>
                </Link>
                <Link to="/analytics">
                  <Button className="w-full" variant="outline">
                    Progress Analytics
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Performance Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">vs Last Interview</span>
                    <div className="flex items-center text-green-500">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">+7%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">vs Average</span>
                    <div className="flex items-center text-primary">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">+12%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Improvement Rate</span>
                    <span className="text-sm font-medium text-foreground">15%/month</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Feedback;