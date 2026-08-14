export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-5 xl:px-0">
        <p className="text-[13px] font-bold leading-[1.35] text-brown-dark">
          <strong>Medical Disclaimer:</strong> Content is for research and educational purposes only. RMSSD values are computed from raw RR
          intervals per the 1996 Task Force standards. This database does not provide medical advice. Data are community-submitted and
          validated via open, peer-reviewed protocol. Use in clinical decision-making only with professional oversight.
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-brown-dark font-medium">
          <span>© 2025 RMSSD.COM</span>
          <span>•</span>
          <a href="#">Privacy Policy</a>
          <span>•</span>
          <a href="#">Terms of Use</a>
          <span>•</span>
          <a href="#">Methodology</a>
          <span>•</span>
          <a href="#">Contact</a>
          <span>•</span>
          <span>DOI: 10.5281/rmssd.db.v1.0</span>
          <span>•</span>
          <a href="#">Open Data License CC-BY 4.0</a>
        </div>
      </div>
    </footer>
  );
}
