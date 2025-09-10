import { useState } from "react";
import Navbar from "../components/Navbar";
import ZodiacSelector from "../components/ZodiacSelector";
import HoroscopeCard from "../components/HoroscopeCard";
import PDFButton from "../components/PDFButton";

export default function Home(){
  const [profile, setProfile] = useState({ dob: "", time: "", place: "" });
  const [sign, setSign] = useState("");
  const [horoscope, setHoroscope] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!profile.dob || !profile.time) return alert("Please enter date and time of birth.");
    setLoading(true);
    try {
      const res = await fetch("/api/horoscope", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...profile, sign })
      });
      const json = await res.json();
      if(json?.success) setHoroscope(json.data);
      else alert("Unable to get horoscope.");
    } catch (err) {
      console.error(err);
      alert("Error generating horoscope.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundImage: "linear-gradient(180deg, rgba(11,12,26,0.85), rgba(26,22,48,0.9)), url('/assets/backgrounds/nebula.jpg')", backgroundSize: 'cover' }}>
      <div className="app-container">
        <Navbar />
        <header className="mt-8">
          <h1 className="text-4xl font-bold">Astro Dashboard</h1>
          <p className="text-gray-300 mt-1">Personalized daily, weekly and monthly horoscopes — modern, accurate and beautifully styled.</p>
        </header>

        <main className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-1 card">
            <h3 className="text-xl font-semibold mb-4">Enter Details</h3>

            <label className="text-sm text-gray-300">Date of Birth</label>
            <input type="date" value={profile.dob} onChange={e=>setProfile({...profile, dob:e.target.value})} className="search-input mb-3" />

            <label className="text-sm text-gray-300">Time of Birth</label>
            <input type="time" value={profile.time} onChange={e=>setProfile({...profile, time:e.target.value})} className="search-input mb-3" />

            <label className="text-sm text-gray-300">Birth Place</label>
            <input type="text" placeholder="City, Country" value={profile.place} onChange={e=>setProfile({...profile, place:e.target.value})} className="search-input mb-3" />

            <label className="text-sm text-gray-300">Zodiac (optional)</label>
            <ZodiacSelector value={sign} onChange={setSign} />

            <div className="mt-4 flex gap-3">
              <button className="btn-primary" onClick={handleGenerate} disabled={loading}>
                {loading ? "Generating..." : "Generate Horoscope"}
              </button>
              <button className="px-4 py-2 rounded-lg border border-white/10" onClick={()=>{ setProfile({dob:"",time:"",place:""}); setSign(""); setHoroscope(null); }}>
                Reset
              </button>
            </div>
          </section>

          <section className="lg:col-span-2 space-y-4">
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Snapshot</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/3 p-4 rounded-lg">
                  <div className="text-sm text-gray-300">Selected Sign</div>
                  <div className="font-semibold mt-2">{sign || "Auto-detect"}</div>
                </div>
                <div className="bg-white/3 p-4 rounded-lg">
                  <div className="text-sm text-gray-300">DOB</div>
                  <div className="font-semibold mt-2">{profile.dob || "-"}</div>
                </div>
                <div className="bg-white/3 p-4 rounded-lg">
                  <div className="text-sm text-gray-300">TOB</div>
                  <div className="font-semibold mt-2">{profile.time || "-"}</div>
                </div>
              </div>
            </div>

            { horoscope ? (
              <div className="space-y-4">
                <HoroscopeCard data={horoscope} />
                <PDFButton data={horoscope} />
              </div>
            ) : (
              <div className="card">
                <h3 className="text-lg font-semibold">Your Horoscope will appear here</h3>
                <p className="text-gray-300 mt-2">After you provide your birth details and click Generate, a personalized horoscope will be shown with planetary positions and recommendations.</p>
              </div>
            )}
          </section>
        </main>

        <footer className="mt-8 text-center text-gray-400">© {new Date().getFullYear()} Subrat Chakraborty (DWTech)</footer>
      </div>
    </div>
  );
}
