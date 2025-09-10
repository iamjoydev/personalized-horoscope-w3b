import { useState } from "react";
import ZodiacSelector from "../components/ZodiacSelector";
import HoroscopeCard from "../components/HoroscopeCard";
import PDFButton from "../components/PDFButton";

export default function Home() {
  const [zodiac, setZodiac] = useState("");
  const [horoscope, setHoroscope] = useState(null);

  const fetchHoroscope = async () => {
    const res = await fetch(`/api/horoscope?sign=${zodiac}`);
    const data = await res.json();
    setHoroscope(data);
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-cosmic-gradient p-6">
      <h1 className="text-5xl font-extrabold mb-4">🔮 Personalized Horoscope</h1>
      <p className="text-gray-300 mb-6 text-lg">Discover your destiny with cosmic guidance ✨</p>

      <ZodiacSelector zodiac={zodiac} setZodiac={setZodiac} />

      <button className="btn-primary mt-4" onClick={fetchHoroscope} disabled={!zodiac}>
        Get Horoscope
      </button>

      {horoscope && (
        <>
          <HoroscopeCard horoscope={horoscope} />
          <PDFButton horoscope={horoscope} />
        </>
      )}
    </main>
  );
}
