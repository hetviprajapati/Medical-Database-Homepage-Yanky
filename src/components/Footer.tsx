const footerItems = [
  {
    type: 'text',
    label: '© 2025 RMSSD.COM',
  },
  {
    type: 'link',
    label: 'Privacy Policy',
    href: '#',
  },
  {
    type: 'link',
    label: 'Terms of Use',
    href: '#',
  },
  {
    type: 'link',
    label: 'Methodology',
    href: '#',
  },
  {
    type: 'link',
    label: 'Contact',
    href: '#',
  },
  {
    type: 'link',
    label: 'DOI: 10.5281/rmssd.db.v1.0',
    href: '#',
  },
  {
    type: 'link',
    label: 'Open Data License CC-BY 4.0',
    href: '#',
  },
] as const;

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-5 xl:px-0">
        <p className="text-[13px] font-bold leading-[1.35] text-brown-dark">
          <strong>Medical Disclaimer:</strong> Content is for research and educational purposes only. RMSSD values are computed from raw RR
          intervals per the 1996 Task Force standards. This database does not provide medical advice. Data are community-submitted and
          validated via open, peer-reviewed protocol. Use in clinical decision-making only with professional oversight.
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] font-medium text-brown-dark">
          {footerItems.map((item, index) => (
            <span key={item.label} className="contents">
              {index > 0 && <span>•</span>}

              {item.type === 'link' ? (
                <a href={item.href} className="transition hover:text-blue">
                  {item.label}
                </a>
              ) : (
                <span>{item.label}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
