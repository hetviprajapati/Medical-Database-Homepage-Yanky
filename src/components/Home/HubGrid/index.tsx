import { hubCards } from '@/app/data/rmssd';
import HubCard from './HubCard';

export default function HubGrid() {
  return (
    <section className="mt-10">
      <div className="grid gap-4 md:grid-cols-2">
        {hubCards.map((card) => (
          <HubCard key={card.title} title={card.title} description={card.description} icon={card.icon} />
        ))}
      </div>
    </section>
  );
}
