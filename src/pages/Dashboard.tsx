import { Link } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useAuth } from "@/lib/auth-context";
import { sampleLessons } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Flame, ArrowRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const quizHistory = [
  { name: "Fractions", score: 80 },
  { name: "Water Cycle", score: 100 },
  { name: "Addition", score: 60 },
  { name: "Solar System", score: 90 },
  { name: "Shapes", score: 70 },
];

const subjectProgress = [
  { subject: "Mathematics", progress: 65 },
  { subject: "Science", progress: 45 },
  { subject: "Social Studies", progress: 20 },
  { subject: "English", progress: 30 },
];

export default function Dashboard() {
  const { profile } = useAuth();
  const name = profile?.name || "Student";
  const language = profile?.language || "your language";
  const streak = profile?.streak || 5;

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center border-b border-border px-4 gap-4">
            <SidebarTrigger />
            <h1 className="font-heading font-semibold text-lg">Dashboard</h1>
            <div className="ml-auto flex items-center gap-2 text-sm">
              <Flame className="h-4 w-4 text-primary" />
              <span className="font-semibold text-primary">{streak} day streak</span>
            </div>
          </header>

          <main className="flex-1 overflow-auto p-6 space-y-6">
            {/* Welcome */}
            <div className="bg-card border border-border rounded-lg p-6 card-glow">
              <h2 className="font-heading text-xl font-bold">Welcome back, {name}! 👋</h2>
              <p className="text-muted-foreground mt-1">Ready to learn in {language}?</p>
            </div>

            {/* Today's lesson */}
            <div className="bg-card border border-primary/30 rounded-lg p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Today's Lesson</p>
                  <h3 className="font-heading font-semibold">{sampleLessons[0].title}</h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <Clock className="h-3 w-3" /> {sampleLessons[0].duration_mins} mins
                    <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-xs">{sampleLessons[0].language}</span>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link to={`/lesson/${sampleLessons[0].id}`}>Continue <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>

            {/* Progress + Quiz chart */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-heading font-semibold mb-4">Subject Progress</h3>
                <div className="space-y-4">
                  {subjectProgress.map(s => (
                    <div key={s.subject}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{s.subject}</span>
                        <span className="text-muted-foreground">{s.progress}%</span>
                      </div>
                      <Progress value={s.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-heading font-semibold mb-4">Quiz Score History</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={quizHistory}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(234 20% 20%)" />
                    <XAxis dataKey="name" tick={{ fill: "hsl(34 20% 60%)", fontSize: 11 }} />
                    <YAxis tick={{ fill: "hsl(34 20% 60%)", fontSize: 11 }} />
                    <Tooltip contentStyle={{ background: "hsl(234 30% 18%)", border: "1px solid hsl(45 30% 25%)", borderRadius: 8, color: "hsl(34 47% 94%)" }} />
                    <Bar dataKey="score" fill="hsl(45 80% 45%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* My Lessons */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">My Lessons</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sampleLessons.map(lesson => (
                  <Link to={`/lesson/${lesson.id}`} key={lesson.id}
                    className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-all hover:-translate-y-1 group">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-xs font-medium">{lesson.subject}</span>
                      <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs">🇮🇳 {lesson.language}</span>
                    </div>
                    <h4 className="font-heading font-semibold text-sm mb-2 group-hover:text-primary transition-colors">{lesson.title}</h4>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Grade {lesson.grade}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {lesson.duration_mins} min</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
