import DataPreview from '@/components/Home/DataPreview';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Home/Hero';
import HubGrid from '@/components/Home/HubGrid';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="mx-auto max-w-5xl px-5 xl:px-0">
          <Hero />
          <HubGrid />
          <DataPreview />
        </div>
      </main>
      <Footer />
    </div>
  );
}
