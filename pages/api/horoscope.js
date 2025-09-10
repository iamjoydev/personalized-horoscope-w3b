export default function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({ error: "Method Not Allowed" });
  try{
    const { dob, time, place, sign } = req.body || {};
    if(!dob || !time) return res.status(400).json({ error: "dob and time required" });

    // Placeholder: simplistic result — replace with AstroSage or astronomia calculations
    const result = {
      sign: sign || "Aries",
      planets: { Sun: "Leo", Moon: "Cancer", Mars: "Gemini", Mercury: "Virgo" },
      predictions: {
        daily: "Today brings clarity; communicate with care.",
        weekly: "This week favors steady progress in work.",
        monthly: "Focus on health and long-term planning this month."
      }
    };
    return res.status(200).json({ success: true, data: result });
  }catch(err){
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
