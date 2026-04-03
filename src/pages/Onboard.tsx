import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth-context";
import { LANGUAGES, SUBJECTS, GRADES } from "@/lib/data";
import { Check, ChevronRight } from "lucide-react";

export default function Onboard() {
  const [step, setStep] = useState(1);
  const [language, setLanguage] = useState("");
  const [grade, setGrade] = useState(0);
  const [subjects, setSubjects] = useState<string[]>([]);
  const { user, refreshProfile } = useAuth();
  const navigate = useNavigate();

  const toggleSubject = (s: string) => {
    setSubjects(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  const handleFinish = async () => {
    if (user) {
      const existing = localStorage.getItem(`profile_${user.id}`);
      const profile = existing ? JSON.parse(existing) : { id: user.id, name: "", email: "", role: "student", streak: 0 };
      profile.language = language;
      profile.grade = grade;
      profile.subjects = subjects;
      localStorage.setItem(`profile_${user.id}`, JSON.stringify(profile));
      await refreshProfile();
    }
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="font-heading text-2xl font-bold gold-text">🇮🇳 Let's personalize your learning</h1>
          <p className="text-muted-foreground mt-2">Step {step} of 3</p>
          <div className="flex gap-2 justify-center mt-4">
            {[1, 2, 3].map(s => (
              <div key={s} className={`h-2 w-16 rounded-full transition-colors ${s <= step ? "gold-gradient" : "bg-muted"}`} />
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 card-glow">
          {step === 1 && (
            <div className="space-y-4">
              <Label className="text-lg font-heading">Choose your mother tongue 🇮🇳</Label>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {LANGUAGES.map(l => (
                  <Button key={l} variant={language === l ? "default" : "outline"} className="h-12 justify-start" onClick={() => setLanguage(l)}>
                    {language === l && <Check className="mr-2 h-4 w-4" />}
                    {l}
                  </Button>
                ))}
              </div>
              <Button className="w-full mt-6" disabled={!language} onClick={() => setStep(2)}>
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <Label className="text-lg font-heading">Select your grade</Label>
              <div className="grid grid-cols-5 gap-3 mt-4">
                {GRADES.map(g => (
                  <Button key={g} variant={grade === g ? "default" : "outline"} onClick={() => setGrade(g)}>
                    {g}
                  </Button>
                ))}
              </div>
              <Button className="w-full mt-6" disabled={!grade} onClick={() => setStep(3)}>
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <Label className="text-lg font-heading">Choose your subjects</Label>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {SUBJECTS.map(s => (
                  <Button key={s} variant={subjects.includes(s) ? "default" : "outline"} className="h-12" onClick={() => toggleSubject(s)}>
                    {subjects.includes(s) && <Check className="mr-2 h-4 w-4" />}
                    {s}
                  </Button>
                ))}
              </div>
              <Button className="w-full mt-6" disabled={subjects.length === 0} onClick={handleFinish}>
                Start Learning 🚀
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
