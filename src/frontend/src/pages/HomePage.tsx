import HeroSection from '../components/marketing/HeroSection';
import FeaturesSection from '../components/marketing/FeaturesSection';
import SocialProofSection from '../components/marketing/SocialProofSection';
import FinalCTASection from '../components/marketing/FinalCTASection';
import FAQSection from '../components/marketing/FAQSection';
import FeedbackFormSection from '../components/feedback/FeedbackFormSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <SocialProofSection />
      <FinalCTASection />
      <FAQSection />
      <FeedbackFormSection />
    </>
  );
}
