import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Download, 
  Play, 
  Calendar, 
  Clock, 
  TrendingUp, 
  Brain,
  MoreVertical,
  Eye,
  Trash2
} from "lucide-react";
import { Link } from "react-router-dom";
import DashboardHeader from "@/components/DashboardHeader";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const History = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  const interviews = [
    {
      id: 1,
      type: "Technical",
      role: "Software Engineer",
      company: "Google",
      score: 85,
      date: "2024-01-15",
      duration: "45 min",
      status: "completed",
      improvement: "+7%"
    },
    {
      id: 2,
      type: "Behavioral",
      role: "Product Manager", 
      company: "Microsoft",
      score: 78,
      date: "2024-01-12",
      duration: "30 min",
      status: "completed",
      improvement: "+3%"
    },
    {
      id: 3,
      type: "Technical",
      role: "Data Scientist",
      company: "Meta",
      score: 92,
      date: "2024-01-10", 
      duration: "60 min",
      status: "completed",
      improvement: "+12%"
    },
    {
      id: 4,
      type: "Case Study",
      role: "Business Analyst",
      company: "McKinsey",
      score: 76,
      date: "2024-01-08",
      duration: "40 min", 
      status: "completed",
      improvement: "-2%"
    },
    {
      id: 5,
      type: "Technical",
      role: "Frontend Developer",
      company: "Netflix",
      score: 88,
      date: "2024-01-05",
      duration: "50 min",
      status: "completed", 
      improvement: "+9%"
    },
    {
      id: 6,
      type: "Behavioral",
      role: "UX Designer",
      company: "Apple",
      score: 81,
      date: "2024-01-03",
      duration: "35 min",
      status: "completed",
      improvement: "+5%"
    }
  ];

  const stats = {
    totalSessions: interviews.length,
    averageScore: Math.round(interviews.reduce((acc, int) => acc + int.score, 0) / interviews.length),
    totalHours: Math.round(interviews.reduce((acc, int) => acc + parseInt(int.duration), 0) / 60 * 10) / 10,
    thisMonth: interviews.filter(int => new Date(int.date).getMonth() === new Date().getMonth()).length
  };

  const filteredInterviews = interviews.filter(interview => {
    const matchesSearch = interview.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         interview.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         interview.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || interview.type.toLowerCase() === filterType;
    return matchesSearch && matchesFilter;
  });

  const sortedInterviews = [...filteredInterviews].sort((a, b) => {
    switch (sortBy) {
      case "score":
        return b.score - a.score;
      case "duration":
        return parseInt(b.duration) - parseInt(a.duration);
      case "date":
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

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

  const getImprovementColor = (improvement: string) => {
    if (improvement.startsWith("+")) return "text-green-500";
    if (improvement.startsWith("-")) return "text-red-500";
    return "text-muted-foreground";
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Interview History</h1>
          <p className="text-muted-foreground">Track your progress and review past interview sessions</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Sessions</p>
                  <p className="text-3xl font-bold text-foreground">{stats.totalSessions}</p>
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
                </div>
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Hours</p>
                  <p className="text-3xl font-bold text-foreground">{stats.totalHours}h</p>
                </div>
                <Clock className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">This Month</p>
                  <p className="text-3xl font-bold text-foreground">{stats.thisMonth}</p>
                </div>
                <Calendar className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="bg-card border-border mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search by role, type, or company..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-input border-border"
                  />
                </div>
              </div>
              
              <div className="flex gap-4">
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-40 bg-input border-border">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="behavioral">Behavioral</SelectItem>
                    <SelectItem value="case study">Case Study</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40 bg-input border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Latest First</SelectItem>
                    <SelectItem value="score">Highest Score</SelectItem>
                    <SelectItem value="duration">Longest First</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interview Sessions */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Interview Sessions</CardTitle>
            <CardDescription className="text-muted-foreground">
              {sortedInterviews.length} session(s) found
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sortedInterviews.map((interview) => (
                <div key={interview.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-smooth">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1">
                        <h3 className="font-semibold text-foreground">{interview.role}</h3>
                        <Badge variant="outline" className="text-xs">
                          {interview.type}
                        </Badge>
                        {interview.company && (
                          <span className="text-sm text-muted-foreground">at {interview.company}</span>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(interview.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {interview.duration}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <Badge variant={getScoreBadge(interview.score)} className="mb-1">
                        {interview.score}%
                      </Badge>
                      <p className={`text-xs ${getImprovementColor(interview.improvement)}`}>
                        {interview.improvement}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Link to={`/feedback/${interview.id}`}>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                      </Link>
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-popover border-border">
                          <DropdownMenuItem>
                            <Play className="w-4 h-4 mr-2" />
                            Retake Interview
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="w-4 h-4 mr-2" />
                            Download Report
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete Session
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              ))}

              {sortedInterviews.length === 0 && (
                <div className="text-center py-12">
                  <Brain className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No interviews found</h3>
                  <p className="text-muted-foreground mb-6">
                    {searchTerm || filterType !== "all" 
                      ? "Try adjusting your search or filter criteria" 
                      : "Start your first interview to see your history here"
                    }
                  </p>
                  <Link to="/interview">
                    <Button variant="hero">
                      <Play className="w-4 h-4 mr-2" />
                      Start New Interview
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default History;