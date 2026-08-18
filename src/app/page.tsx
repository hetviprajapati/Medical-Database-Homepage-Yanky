import DataPreview from '@/components/Home/DataPreview';
import Hero from '@/components/Home/Hero';
import HubGrid from '@/components/Home/HubGrid';
import PageContainer from '@/components/PageContainer';

export default function Home() {
  return (
    <PageContainer>
      <Hero />
      <HubGrid />
      <DataPreview />
    </PageContainer>
  );
}
