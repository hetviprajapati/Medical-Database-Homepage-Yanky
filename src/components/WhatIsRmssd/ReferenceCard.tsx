import { ArrowRight } from 'lucide-react';

export type Reference = {
  category: string;
  title: string;
  description: string;
  url: string;
  linkLabel?: string;
};

type ReferenceCardProps = Reference;

export default function ReferenceCard({ category, title, description, url, linkLabel = 'View source' }: ReferenceCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-xs font-bold uppercase tracking-wide text-blue">{category}</p>

      <h3 className="mt-2 text-lg font-bold text-navy">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-blue hover:underline"
      >
        {linkLabel}
        <ArrowRight className="h-4 w-4" />
      </a>
    </article>
  );
}
