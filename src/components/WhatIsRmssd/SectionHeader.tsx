type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  id?: string;
};

export default function SectionHeader({ eyebrow, title, id }: SectionHeaderProps) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.12em] text-blue">{eyebrow}</p>

      <h2 id={id} className="mt-2 text-3xl font-black tracking-[-0.8px] text-navy md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
