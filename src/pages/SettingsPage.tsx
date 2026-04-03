import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/lib/auth-context";
import { LANGUAGES, GRADES } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function SettingsPage() {
  const { user, profile, refreshProfile } = useAuth();
  const [language, setLanguage] = useState(profile?.language || "Tamil");
  const [grade, setGrade] = useState(profile?.grade || 4);
  const { toast } = useToast();

  useEffect(() => {
    if (profile) {
      setLanguage(profile.language || "Tamil");
      setGrade(profile.grade || 4);
    }
  }, [profile]);

  const handleSave = () => {
    if (user && profile) {
      const updated = { ...profile, language, grade };
      localStorage.setItem(`profile_${user.id}`, JSON.stringify(updated));
      refreshProfile();
      toast({ title: "Settings saved!", description: "Your preferences have been updated." });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 h-14 flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/dashboard"><ArrowLeft className="h-4 w-4 mr-1" /> Dashboard</Link>
          </Button>
          <h1 className="font-heading font-semibold">Settings</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-lg space-y-6">
        {/* Account info */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-heading font-semibold mb-4">Account</h3>
          <div className="space-y-2 text-sm">
            <p><span className="text-muted-foreground">Name:</span> {profile?.name || "—"}</p>
            <p><span className="text-muted-foreground">Email:</span> {profile?.email || user?.email || "—"}</p>
            <p><span className="text-muted-foreground">Role:</span> {profile?.role || "—"}</p>
          </div>
        </div>

        {/* Language */}
        <div className="bg-card border border-border rounded-lg p-6">
          <Label className="font-heading font-semibold">Language Preference 🇮🇳</Label>
          <select value={language} onChange={e => setLanguage(e.target.value)}
            className="w-full mt-2 bg-input border border-border rounded-md px-3 py-2 text-sm text-foreground">
            {LANGUAGES.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>

        {/* Grade */}
        <div className="bg-card border border-border rounded-lg p-6">
          <Label className="font-heading font-semibold">Grade</Label>
          <select value={grade} onChange={e => setGrade(Number(e.target.value))}
            className="w-full mt-2 bg-input border border-border rounded-md px-3 py-2 text-sm text-foreground">
            {GRADES.map(g => <option key={g} value={g}>Grade {g}</option>)}
          </select>
        </div>

        <Button className="w-full" onClick={handleSave}>
          <Save className="mr-2 h-4 w-4" /> Save Changes
        </Button>
      </main>
    </div>
  );
}
