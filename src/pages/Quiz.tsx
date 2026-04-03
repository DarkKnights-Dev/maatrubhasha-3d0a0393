import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { sampleQuizQuestions, sampleLessons } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Quiz() {
  const { id } = useParams();
  const questions = sampleQuizQuestions[id || "1"] || sampleQuizQuestions["1"];
  const lesson = sampleLessons.find(l => l.id === id);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  const handleNext = () => {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);
    if (current + 1 >= questions.length) {
      setDone(true);
    } else {
      setCurrent(current + 1);
    }
  };

  const score = answers.reduce((acc, a, i) => acc + (a === questions[i].correct ? 1 : 0), 0);
  const pct = Math.round((score / questions.length) * 100);
  const emoji = pct > 80 ? "🎉" : pct >= 50 ? "💪" : "📚";
  const message = pct > 80 ? "Excellent work!" : pct >= 50 ? "Good effort! Keep practicing!" : "Keep learning, you'll get there!";

  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-background">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-card border border-border rounded-lg p-10 text-center max-w-md card-glow">
          <p className="text-6xl mb-4">{emoji}</p>
          <h2 className="font-heading text-2xl font-bold mb-2">Quiz Complete!</h2>
          <p className="text-4xl font-heading font-bold gold-text mb-2">{score}/{questions.length}</p>
          <p className="text-muted-foreground mb-6">{message}</p>
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1" asChild>
              <Link to={`/lesson/${id}`}>Review Lesson</Link>
            </Button>
            <Button className="flex-1" asChild>
              <Link to="/dashboard">Back to Dashboard</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 h-14 flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to={`/lesson/${id}`}><ArrowLeft className="h-4 w-4 mr-1" /> Back</Link>
          </Button>
          <span className="text-sm text-muted-foreground">{lesson?.title}</span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">Question {current + 1} of {questions.length}</p>
          <div className="flex gap-1">
            {questions.map((_, i) => (
              <div key={i} className={`h-2 w-8 rounded-full ${i < current ? "gold-gradient" : i === current ? "bg-primary/50" : "bg-muted"}`} />
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={current} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <div className="bg-card border border-border rounded-lg p-8 card-glow">
              <h2 className="font-heading text-lg font-semibold mb-6">{q.question}</h2>
              <div className="space-y-3">
                {q.options.map((opt, i) => (
                  <button key={i} onClick={() => setSelected(i)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      selected === i
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/30"
                    }`}>
                    <span className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs ${
                        selected === i ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground"
                      }`}>
                        {selected === i ? <CheckCircle className="h-4 w-4" /> : String.fromCharCode(65 + i)}
                      </span>
                      {opt}
                    </span>
                  </button>
                ))}
              </div>
              <Button className="w-full mt-6" disabled={selected === null} onClick={handleNext}>
                {current + 1 === questions.length ? "Finish Quiz" : "Next Question"}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
