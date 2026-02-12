import TopNav from '../components/marketing/TopNav';
import HeroSection from '../components/marketing/HeroSection';
import FeaturesSection from '../components/marketing/FeaturesSection';
import SocialProofSection from '../components/marketing/SocialProofSection';
import PricingSection from '../components/marketing/PricingSection';
import FAQSection from '../components/marketing/FAQSection';
import FinalCTASection from '../components/marketing/FinalCTASection';
import Footer from '../components/marketing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SocialProofSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
