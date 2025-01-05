import HeroSection from '../components/home/HeroSection';
import FeatureSection from '../components/home/FeatureSection';
import InfoSection from '../components/home/InfoSection';
import SignsSection from '../components/home/SignsSection';
import ImpactImage from '../components/home/ImpactImage';
import StatisticsSection from '../components/home/StatisticsSection';
import HistorySection from '../components/home/HistorySection';

function Home() {
  return (
    <div>
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <FeatureSection />
        <InfoSection />
        <SignsSection />
        <ImpactImage />
        <div className="mt-16">
          <StatisticsSection />
        </div>
      </div>
      <HistorySection />
    </div>
  );
}

export default Home;