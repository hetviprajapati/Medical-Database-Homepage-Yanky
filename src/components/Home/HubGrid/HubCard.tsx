import { FileText, ShieldAlert, HeartPulse, ListTodo } from 'lucide-react';
import { ReactNode } from 'react';

type HubCardProps = {
  title: string;
  description: string;
  icon: string;
};

const icons: Record<string, ReactNode> = {
  document: <FileText className="h-6 w-6" />,
  shield: <ShieldAlert className="h-6 w-6" />,
  pulse: <HeartPulse className="h-6 w-6" />,
  compare: <ListTodo className="h-6 w-6" />,
};

function CardIcon({ type }: { type: string }) {
  const isShield = type === 'shield';

  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
        isShield ? 'bg-alert-light text-alert' : 'bg-navy-light text-navy'
      }`}
    >
      {icons[type]}
    </div>
  );
}

export default function HubCard({ title, description, icon }: HubCardProps) {
  return (
    <a
      href="#"
      className="group flex gap-4 rounded-xl border border-card-border bg-white px-3 py-3 shadow-[0_1px_5px_rgba(15,23,42,0.05)] transition hover:border-slate-400"
    >
      <CardIcon type={icon} />
      <div className="flex min-w-0 flex-col">
        <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.8px] text-navy">{title}</h2>
        <p className="mt-1 text-[14px] leading-[1.35] text-brown-dark font-bold">{description}</p>
        <div className="flex justify-end">
          <span className="text-[14px] font-semibold text-blue">View →</span>
        </div>
      </div>
    </a>
  );
}
