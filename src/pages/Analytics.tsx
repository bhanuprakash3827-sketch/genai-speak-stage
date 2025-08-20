import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Brain, 
  Clock, 
  Award, 
  BarChart3, 
  Calendar,
  Zap,
  Users,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, PieChart, Pie, Cell } from "recharts";
import DashboardHeader from "@/components/DashboardHeader";

const Analytics = () => {
  // Mock data for charts
  const progressData = [
    { month: 'Jan', overall: 65, technical: 60, communication: 70, confidence: 58 },
    { month: 'Feb', overall: 72, technical: 75, communication: 68, confidence: 65 },
    { month: 'Mar', overall: 78, technical: 80, communication: 75, confidence: 70 },
    { month: 'Apr', overall: 82, technical: 85, communication: 78, confidence: 75 },
    { month: 'May', overall: 85, technical: 88, communication: 82, confidence: 79 },
  ];

  const categoryData = [
    { category: 'Technical', sessions: 12, avgScore: 85 },
    { category: 'Behavioral', sessions: 8, avgScore: 78 },
    { category: 'Case Study', sessions: 5, avgScore: 82 },
    { category: 'Clinical', sessions: 3, avgScore: 76 },
  ];

  const skillsRadarData = [
    { skill: 'Technical Skills', current: 85, target: 90 },
    { skill: 'Communication', current: 78, target: 85 },
    { skill: 'Problem Solving', current: 92, target: 95 },
    { skill: 'Confidence', current: 72, target: 85 },
    { skill: 'Leadership', current: 68, target: 80 },
    { skill: 'Adaptability', current: 80, target: 88 },
  ];

  const timeSpentData = [
    { name: 'Technical', value: 45, color: '#3b82f6' },
    { name: 'Behavioral', value: 30, color: '#8b5cf6' },
    { name: 'Case Study', value: 20, color: '#10b981' },
    { name: 'Clinical', value: 5, color: '#f59e0b' },
  ];

  const weeklyActivityData = [
    { day: 'Mon', sessions: 2 },
    { day: 'Tue', sessions: 1 },
    { day: 'Wed', sessions: 3 },
    { day: 'Thu', sessions: 2 },
    { day: 'Fri', sessions: 4 },
    { day: 'Sat', sessions: 1 },
    { day: 'Sun', sessions: 0 },
  ];

  const stats = {
    totalSessions: 28,
    averageScore: 84,
    improvementRate: 15,
    currentStreak: 5,
    totalHours: 18.5,
    perfectScores: 3,
    weakestArea: "Confidence",
    strongestArea: "Problem Solving"
  };

  const achievements = [
    { title: "First Interview", description: "Completed your first mock interview", earned: true, date: "2024-01-01" },
    { title: "High Achiever", description: "Scored 90% or higher", earned: true, date: "2024-01-15" },
    { title: "Consistent Practice", description: "5 interviews in a week", earned: true, date: "2024-01-20" },
    { title: "Technical Master", description: "Score 95% in technical interview", earned: false, date: null },
    { title: "Communication Expert", description: "Score 90% in behavioral interview", earned: false, date: null },
    { title: "Marathon Runner", description: "Complete 50 interviews", earned: false, date: null },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Performance Analytics</h1>
              <p className="text-muted-foreground">Track your progress and identify areas for improvement</p>
            </div>
            <Select defaultValue="last-30-days">
              <SelectTrigger className="w-48 bg-input border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-7-days">Last 7 Days</SelectItem>
                <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                <SelectItem value="all-time">All Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Sessions</p>
                  <p className="text-3xl font-bold text-foreground">{stats.totalSessions}</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                    <span className="text-xs text-green-500">+12% this month</span>
                  </div>
                </div>
                <Brain className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Average Score</p>
                  <p className="text-3xl font-bold text-foreground">{stats.averageScore}%</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                    <span className="text-xs text-green-500">+{stats.improvementRate}% overall</span>
                  </div>
                </div>
                <Target className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Practice Hours</p>
                  <p className="text-3xl font-bold text-foreground">{stats.totalHours}h</p>
                  <div className="flex items-center mt-1">
                    <Clock className="w-3 h-3 text-muted-foreground mr-1" />
                    <span className="text-xs text-muted-foreground">This month</span>
                  </div>
                </div>
                <Clock className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Current Streak</p>
                  <p className="text-3xl font-bold text-foreground">{stats.currentStreak}</p>
                  <div className="flex items-center mt-1">
                    <Zap className="w-3 h-3 text-orange-500 mr-1" />
                    <span className="text-xs text-orange-500">days</span>
                  </div>
                </div>
                <Award className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="progress" className="space-y-6">
          <TabsList className="bg-muted">
            <TabsTrigger value="progress">Progress Tracking</TabsTrigger>
            <TabsTrigger value="skills">Skills Analysis</TabsTrigger>
            <TabsTrigger value="patterns">Activity Patterns</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="progress" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Progress Over Time */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Score Progress Over Time</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Track your improvement across different skill areas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={progressData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Line type="monotone" dataKey="overall" stroke="hsl(var(--primary))" strokeWidth={3} />
                      <Line type="monotone" dataKey="technical" stroke="hsl(var(--accent))" strokeWidth={2} />
                      <Line type="monotone" dataKey="communication" stroke="#10b981" strokeWidth={2} />
                      <Line type="monotone" dataKey="confidence" stroke="#f59e0b" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Performance by Category */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Performance by Category</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Average scores across interview types
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={categoryData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Bar dataKey="avgScore" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Recent Performance Summary */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Performance Summary</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Key insights from your recent interview sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                      Strengths
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">{stats.strongestArea}</span>
                        <Badge variant="default">92%</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">Technical Skills</span>
                        <Badge variant="default">88%</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">Response Quality</span>
                        <Badge variant="default">85%</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground flex items-center">
                      <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
                      Areas to Improve
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">{stats.weakestArea}</span>
                        <Badge variant="secondary">72%</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">Eye Contact</span>
                        <Badge variant="secondary">75%</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">Speech Pace</span>
                        <Badge variant="secondary">77%</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground flex items-center">
                      <Award className="w-5 h-5 text-primary mr-2" />
                      Achievements
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">Perfect Scores</span>
                        <Badge variant="outline">{stats.perfectScores}</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">Consistency</span>
                        <Badge variant="outline">{stats.currentStreak} days</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">Improvement</span>
                        <Badge variant="outline">+{stats.improvementRate}%</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Skills Radar Chart */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Skills Assessment</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Current performance vs target goals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <RadarChart data={skillsRadarData}>
                      <PolarGrid stroke="hsl(var(--border))" />
                      <PolarAngleAxis dataKey="skill" tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }} />
                      <PolarRadiusAxis domain={[0, 100]} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }} />
                      <Radar name="Current" dataKey="current" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} strokeWidth={2} />
                      <Radar name="Target" dataKey="target" stroke="hsl(var(--accent))" fill="hsl(var(--accent))" fillOpacity={0.1} strokeWidth={2} strokeDasharray="5 5" />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Skills Progress */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Detailed Skills Breakdown</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Progress towards your target goals
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skillsRadarData.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">{skill.skill}</span>
                        <span className="text-sm text-muted-foreground">{skill.current}% / {skill.target}%</span>
                      </div>
                      <div className="space-y-1">
                        <Progress value={skill.current} className="h-2" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Current: {skill.current}%</span>
                          <span>Target: {skill.target}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="patterns" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Weekly Activity */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Weekly Activity Pattern</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Your interview practice frequency by day
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={weeklyActivityData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Bar dataKey="sessions" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Time Distribution */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Time Distribution</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    How you spend your practice time across categories
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={timeSpentData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {timeSpentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Achievement Badges</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Track your milestones and unlock new achievements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className={`p-4 border rounded-lg ${achievement.earned ? 'border-primary bg-primary/5' : 'border-border bg-muted/30'}`}>
                      <div className="flex items-start space-x-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${achievement.earned ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                          {achievement.earned ? <CheckCircle className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-semibold ${achievement.earned ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {achievement.title}
                          </h4>
                          <p className={`text-sm ${achievement.earned ? 'text-muted-foreground' : 'text-muted-foreground/70'}`}>
                            {achievement.description}
                          </p>
                          {achievement.earned && achievement.date && (
                            <p className="text-xs text-primary mt-1">
                              Earned on {new Date(achievement.date).toLocaleDateString()}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Analytics;