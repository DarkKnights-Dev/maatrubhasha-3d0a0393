import { useState } from "react";
import { Link } from "react-router-dom";
import { sampleStudents } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const classAvg = [
  { subject: "Mathematics", avg: 72 },
  { subject: "Science", avg: 65 },
  { subject: "Social Studies", avg: 58 },
  { subject: "English", avg: 70 },
];

const statusColor: Record<string, string> = {
  "On Track": "bg-success/20 text-success",
  "Needs Attention": "bg-warning/20 text-warning",
  "At Risk": "bg-destructive/20 text-destructive",
};

export default function Teacher() {
  const [gradeFilter, setGradeFilter] = useState("all");

  const filtered = gradeFilter === "all"
    ? sampleStudents
    : sampleStudents.filter(s => s.grade.toString() === gradeFilter);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 h-14 flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/"><ArrowLeft className="h-4 w-4 mr-1" /> Home</Link>
          </Button>
          <Users className="h-5 w-5 text-primary" />
          <h1 className="font-heading font-semibold">Teacher / Parent Dashboard</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl space-y-8">
        {/* Filters */}
        <div className="flex items-center gap-4">
          <label className="text-sm text-muted-foreground">Filter by grade:</label>
          <select value={gradeFilter} onChange={e => setGradeFilter(e.target.value)}
            className="bg-card border border-border rounded-md px-3 py-1.5 text-sm text-foreground">
            <option value="all">All Grades</option>
            {[4, 5, 6].map(g => <option key={g} value={g.toString()}>Grade {g}</option>)}
          </select>
        </div>

        {/* Students table */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  {["Name", "Grade", "Language", "Last Active", "Avg Score", "Status"].map(h => (
                    <th key={h} className="text-left text-xs font-heading font-semibold text-muted-foreground px-4 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(s => (
                  <tr key={s.id} className="border-t border-border hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3 font-medium">{s.name}</td>
                    <td className="px-4 py-3 text-sm">{s.grade}</td>
                    <td className="px-4 py-3 text-sm">🇮🇳 {s.language}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{s.lastActive}</td>
                    <td className="px-4 py-3 text-sm font-semibold">{s.avgScore}%</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor[s.status]}`}>{s.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Class averages chart */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-heading font-semibold mb-4">Class Average Scores by Subject</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={classAvg}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(234 20% 20%)" />
              <XAxis dataKey="subject" tick={{ fill: "hsl(34 20% 60%)", fontSize: 12 }} />
              <YAxis tick={{ fill: "hsl(34 20% 60%)", fontSize: 12 }} />
              <Tooltip contentStyle={{ background: "hsl(234 30% 18%)", border: "1px solid hsl(45 30% 25%)", borderRadius: 8, color: "hsl(34 47% 94%)" }} />
              <Bar dataKey="avg" fill="hsl(45 80% 45%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
}
