export default function HoroscopeCard({ data }){
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-semibold">{data.sign} Horoscope</h2>
          <div className="text-sm text-gray-300">Personalized report</div>
        </div>
        <div className="text-sm text-gray-300">Confidence: High</div>
      </div>

      <div className="mb-4">
        <strong className="text-sm text-gray-300">Planets</strong>
        <div className="mt-2 space-y-1">
          { Object.entries(data.planets || {}).map(([p,v]) => <div key={p} className="text-sm">• <strong>{p}</strong>: {v}</div>) }
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white/3 p-4 rounded-lg">
          <div className="text-sm text-gray-300">Daily</div>
          <div className="mt-2">{data.predictions.daily}</div>
        </div>
        <div className="bg-white/3 p-4 rounded-lg">
          <div className="text-sm text-gray-300">Weekly</div>
          <div className="mt-2">{data.predictions.weekly}</div>
        </div>
        <div className="bg-white/3 p-4 rounded-lg">
          <div className="text-sm text-gray-300">Monthly</div>
          <div className="mt-2">{data.predictions.monthly}</div>
        </div>
      </div>
    </div>
  );
}
