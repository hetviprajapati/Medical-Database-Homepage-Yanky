import { ArrowRight } from 'lucide-react';

type RelatedArticleCardProps = {
  href: string;
  category: string;
  title: string;
  description: string;
};

export default function ResourceCard({ href, category, title, description }: RelatedArticleCardProps) {
  return (
    <a
      href={href}
      className="group flex min-h-47.5 flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-[0_1px_5px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
    >
      <span className="text-xs font-bold uppercase tracking-wide text-blue">{category}</span>

      <h3 className="mt-3 text-xl font-black text-navy">{title}</h3>

      <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{description}</p>

      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue">
        Read more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </a>
  );
}
