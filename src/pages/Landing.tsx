import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Mic, Brain, Wifi, Users, Languages, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "260M", label: "Students struggle with English-medium education" },
  { value: "40%", label: "Lower retention in non-native language learning" },
  { value: "30%", label: "Better outcomes with mother tongue instruction" },
];

const features = [
  { icon: Languages, title: "Multilingual Lessons", desc: "Learn in Tamil, Hindi, Bengali, and 5 more languages" },
  { icon: Mic, title: "AI Voice Guidance", desc: "Listen to lessons read aloud in your mother tongue" },
  { icon: Brain, title: "Adaptive Quizzes", desc: "Questions that adjust to your learning pace" },
  { icon: Wifi, title: "Offline Mode", desc: "Download lessons and learn without internet" },
  { icon: Users, title: "Parent Dashboard", desc: "Track your child's progress in real time" },
];

const steps = [
  { num: "1", title: "Select Language", desc: "Choose your mother tongue from 8 Indian languages" },
  { num: "2", title: "Choose Subject", desc: "Pick Maths, Science, Social Studies or English" },
  { num: "3", title: "Watch Lesson", desc: "Animated stories that make concepts come alive" },
  { num: "4", title: "Take Quiz", desc: "Test your understanding with fun questions" },
  { num: "5", title: "Track Progress", desc: "See your scores, streaks, and growth" },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="font-heading text-xl font-bold gold-text">🇮🇳 MaatruBhasha</Link>
          <div className="flex gap-3">
            <Button variant="ghost" asChild><Link to="/login">Login</Link></Button>
            <Button asChild><Link to="/signup">Start Free</Link></Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6">
              <span className="gold-text">MaatruBhasha</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-body">
              Learn in your language. Learn for life.
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
              An AI-powered platform that delivers school lessons in your mother tongue — so every child in India can understand, enjoy, and excel.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 animate-pulse-gold" asChild>
              <Link to="/signup">Start Learning Free <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="container mx-auto grid md:grid-cols-3 gap-6 max-w-5xl">
          {stats.map((s, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg p-8 text-center card-glow hover:border-primary/50 transition-colors">
              <p className="text-4xl font-heading font-bold gold-text mb-2">{s.value}</p>
              <p className="text-muted-foreground text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-deep/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Everything a student needs to <span className="gold-text">thrive</span>
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                  <f.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold mb-2 text-sm">{f.title}</h3>
                <p className="text-muted-foreground text-xs">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            How it <span className="gold-text">works</span>
          </h2>
          <div className="space-y-4">
            {steps.map((s, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                  <span className="font-heading font-bold text-primary-foreground">{s.num}</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
                {i < steps.length - 1 && <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground hidden md:block" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-heading font-bold mb-4">Ready to learn in your language?</h2>
          <p className="text-muted-foreground mb-8">Join thousands of students across India learning in their mother tongue.</p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <Link to="/signup">Start Learning Free <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-heading font-semibold gold-text">🇮🇳 MaatruBhasha</span>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link to="/login" className="hover:text-foreground transition-colors">Login</Link>
            <Link to="/signup" className="hover:text-foreground transition-colors">Sign Up</Link>
          </div>
          <span>© 2026 MaatruBhasha. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
