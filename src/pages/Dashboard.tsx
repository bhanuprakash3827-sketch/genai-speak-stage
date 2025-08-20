import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Brain, 
  Trophy, 
  Clock, 
  TrendingUp, 
  Play, 
  BarChart3, 
  Calendar,
  Star,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";
import DashboardHeader from "@/components/DashboardHeader";

const Dashboard = () => {
  const [recentInterviews] = useState([
    {
      id: 1,
      type: "Technical",
      role: "Software Engineer",
      score: 85,
      date: "2024-01-15",
      duration: "45 min",
      status: "completed"
    },
    {
      id: 2,
      type: "Behavioral", 
      role: "Product Manager",
      score: 78,
      date: "2024-01-12",
      duration: "30 min",
      status: "completed"
    },
    {
      id: 3,
      type: "Technical",
      role: "Data Scientist", 
      score: 92,
      date: "2024-01-10",
      duration: "60 min",
      status: "completed"
    }
  ]);

  const [upcomingInterviews] = useState([
    {
      id: 4,
      type: "Case Study",
      role: "Business Analyst",
      scheduledDate: "2024-01-20",
      scheduledTime: "2:00 PM",
      company: "TechCorp"
    }
  ]);

  const stats = {
    totalInterviews: 12,
    averageScore: 84,
    improvementRate: 15,
    currentStreak: 5
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, John!</h1>
          <p className="text-muted-foreground">Continue your interview preparation journey</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Interviews</p>
                  <p className="text-3xl font-bold text-foreground">{stats.totalInterviews}</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Average Score</p>
                  <p className="text-3xl font-bold text-foreground">{stats.averageScore}%</p>
                </div>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Improvement</p>
                  <p className="text-3xl font-bold text-foreground">+{stats.improvementRate}%</p>
                </div>
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Current Streak</p>
                  <p className="text-3xl font-bold text-foreground">{stats.currentStreak}</p>
                </div>
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-orange-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Link to="/interview" className="block">
            <Card className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-smooth cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Start New Interview</h3>
                    <p className="text-primary-foreground/80">Begin your next practice session</p>
                  </div>
                  <Play className="w-8 h-8" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/analytics" className="block">
            <Card className="bg-card border-border hover:bg-card/80 transition-smooth cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">View Analytics</h3>
                    <p className="text-muted-foreground">Track your progress</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/schedule" className="block">
            <Card className="bg-card border-border hover:bg-card/80 transition-smooth cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Schedule Session</h3>
                    <p className="text-muted-foreground">Plan your practice time</p>
                  </div>
                  <Calendar className="w-8 h-8 text-accent" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Recent Activity & Upcoming */}
        <Tabs defaultValue="recent" className="space-y-6">
          <TabsList className="bg-muted">
            <TabsTrigger value="recent">Recent Interviews</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
            <TabsTrigger value="progress">Progress Overview</TabsTrigger>
          </TabsList>

          <TabsContent value="recent" className="space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Recent Interview Sessions</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Your latest practice sessions and performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentInterviews.map((interview) => (
                    <div key={interview.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Brain className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{interview.type} - {interview.role}</h4>
                          <p className="text-sm text-muted-foreground">
                            {interview.date} • {interview.duration}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={interview.score >= 80 ? "default" : "secondary"}>
                          {interview.score}%
                        </Badge>
                        <Link to={`/feedback/${interview.id}`}>
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Upcoming Scheduled Sessions</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Your planned interview practice sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                {upcomingInterviews.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingInterviews.map((interview) => (
                      <div key={interview.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{interview.type} - {interview.role}</h4>
                            <p className="text-sm text-muted-foreground">
                              {interview.scheduledDate} at {interview.scheduledTime}
                            </p>
                            {interview.company && (
                              <p className="text-sm text-primary">{interview.company}</p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                          <Button variant="default" size="sm">
                            Join Session
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No upcoming sessions scheduled</p>
                    <Link to="/schedule">
                      <Button variant="default" className="mt-4">
                        Schedule a Session
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Skill Progress</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Track your improvement across different areas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground">Technical Skills</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground">Communication</span>
                      <span className="text-sm text-muted-foreground">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground">Problem Solving</span>
                      <span className="text-sm text-muted-foreground">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground">Confidence</span>
                      <span className="text-sm text-muted-foreground">71%</span>
                    </div>
                    <Progress value={71} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Achievement Badges</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Unlock achievements as you improve
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Star className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-xs text-foreground font-medium">First Interview</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Trophy className="w-8 h-8 text-accent" />
                      </div>
                      <p className="text-xs text-foreground font-medium">High Scorer</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-2">
                        <Target className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <p className="text-xs text-muted-foreground font-medium">Consistent</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;