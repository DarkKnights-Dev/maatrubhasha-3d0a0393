import { useParams, Link } from "react-router-dom";
import { sampleLessons } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Volume2, BookOpen, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Lesson() {
  const { id } = useParams();
  const lesson = sampleLessons.find(l => l.id === id);
  const { toast } = useToast();

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Lesson not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 h-14 flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/dashboard"><ArrowLeft className="h-4 w-4 mr-1" /> Back</Link>
          </Button>
          <div className="flex items-center gap-2">
            <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-xs">{lesson.subject}</span>
            <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs">🇮🇳 {lesson.language}</span>
            <span className="text-xs text-muted-foreground">Grade {lesson.grade}</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="font-heading text-3xl font-bold mb-6">{lesson.title}</h1>

        <Button variant="outline" className="mb-6" onClick={() => toast({ title: "🔊 Reading aloud...", description: "AI voice narration would play here in " + lesson.language })}>
          <Volume2 className="mr-2 h-4 w-4" /> Read Aloud in {lesson.language}
        </Button>

        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          {lesson.content.split("\n\n").map((p, i) => (
            <p key={i} className="text-foreground/90 leading-relaxed mb-4 last:mb-0">{p}</p>
          ))}
        </div>

        {/* Cultural story section */}
        <div className="bg-secondary/50 border border-primary/20 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="h-5 w-5 text-primary" />
            <h3 className="font-heading font-semibold">Kavya's Story</h3>
          </div>
          <p className="text-foreground/80 text-sm leading-relaxed">
            Kavya is a curious girl from a small village in Tamil Nadu. Every evening, she sits under the neem tree with her grandmother and asks questions about the world. Today's lesson reminded her of something her grandmother once said: "Understanding comes not from the language of books, but from the language of the heart." Kavya smiled — she finally understood the concept because she learned it in her own language.
          </p>
        </div>

        <Button size="lg" className="w-full" asChild>
          <Link to={`/quiz/${lesson.id}`}>Take Quiz <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </Button>
      </main>

      <footer className="border-t border-border py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-xs text-muted-foreground">
          Powered by Bhashini API + Claude AI
        </div>
      </footer>
    </div>
  );
}
