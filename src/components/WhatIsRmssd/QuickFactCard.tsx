import Image from 'next/image';

type QuickFactCardProps = {
  label: string;
  value: string;
  illustration: string;
  illustrationAlt: string;
};

export default function QuickFactCard({ label, value, illustration, illustrationAlt }: QuickFactCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-[0_1px_5px_rgba(15,23,42,0.05)] flex flex-col items-center text-center">
      <Image src={illustration} alt={illustrationAlt} className="h-24 w-24" height={24} width={24} />
      <p className="text-xs font-bold uppercase tracking-wide text-muted">{label}</p>
      <p className="mt-1 text-[17px] font-bold leading-snug text-navy">{value}</p>
    </div>
  );
}
