import jsPDF from "jspdf";

export default function PDFButton({ data }){
  const handleDownload = () => {
    try{
      const doc = new jsPDF({ unit: 'pt', format: 'a4' });
      doc.setFontSize(18);
      doc.text(`${data.sign} Horoscope`, 40, 60);
      doc.setFontSize(12);
      let y = 100;
      doc.text('Planets:', 40, y); y+=18;
      Object.entries(data.planets || {}).forEach(([p,v]) => { doc.text(`${p}: ${v}`, 60, y); y+=16; });
      y+=10;
      doc.text('Daily:', 40, y); y+=16; doc.text(data.predictions.daily, 60, y); y+=24;
      doc.text('Weekly:', 40, y); y+=16; doc.text(data.predictions.weekly, 60, y); y+=24;
      doc.text('Monthly:', 40, y); y+=16; doc.text(data.predictions.monthly, 60, y);
      doc.save(`${data.sign}-horoscope.pdf`);
    }catch(err){ console.error(err); alert("Failed to generate PDF"); }
  };

  return <button onClick={handleDownload} className="btn-primary">Download PDF</button>;
}
