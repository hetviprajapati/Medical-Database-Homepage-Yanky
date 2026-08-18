import SectionHeader from './SectionHeader';

type InfoSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function InfoSection({ id, eyebrow, title, children, className = '' }: InfoSectionProps) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-heading` : undefined} className={`border-t border-slate-200 py-12 md:py-16 ${className}`}>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeader eyebrow={eyebrow} title={title} id={id ? `${id}-heading` : undefined} />

        <div className="space-y-5 text-[17px] leading-[1.7] text-slate-700">{children}</div>
      </div>
    </section>
  );
}
