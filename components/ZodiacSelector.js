const signs = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];

export default function ZodiacSelector({ value="", onChange=()=>{} }){
  return (
    <div className="mt-2 zodiac-grid">
      {signs.map(s => (
        <button key={s} onClick={()=>onChange(s)} className={"px-3 py-2 rounded-lg text-sm " + (value===s ? "bg-gradient-to-r from-accent to-purple-600 text-white" : "bg-white/5 text-gray-200")}>
          {s}
        </button>
      ))}
    </div>
  );
}
