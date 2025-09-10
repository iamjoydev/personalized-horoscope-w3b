export default function handler(req, res) {
  const { sign } = req.query;
  if (!sign) {
    return res.status(400).json({ error: "Missing zodiac sign" });
  }

  const horoscopes = {
    aries: "Today, your cosmic energy is overflowing. Take action!",
    taurus: "Financial growth is on your horizon. Stay grounded!",
    gemini: "Love and creativity align for you today!",
  };

  res.status(200).json({
    sign,
    prediction: horoscopes[sign.toLowerCase()] || "Your stars are quiet today 🌌",
  });
}
