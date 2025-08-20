import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CommunitySection from '@/components/CommunitySection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CommunitySection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}