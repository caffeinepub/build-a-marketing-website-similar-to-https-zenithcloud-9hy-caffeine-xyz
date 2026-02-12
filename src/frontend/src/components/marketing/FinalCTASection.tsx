import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { marketingContent } from '../../content/marketingContent';
import SectionShell from './SectionShell';
import MotionInView from './MotionInView';

export default function FinalCTASection() {
  return (
    <SectionShell id="final-cta" className="bg-gradient-to-br from-primary/10 to-accent/10">
      <MotionInView>
        <div className="max-w-4xl mx-auto text-center mc-card p-12 lg:p-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 minecraft-text">
            {marketingContent.finalCTA.headline}
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 lg:mb-10 font-medium">
            {marketingContent.finalCTA.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-base lg:text-lg px-8 py-6 font-bold transition-all duration-200 hover:scale-105 group mc-button"
            >
              <Link to="/plans">
                {marketingContent.finalCTA.primaryCTA}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base lg:text-lg px-8 py-6 font-bold transition-all duration-200 hover:scale-105 mc-button-outline"
            >
              <Link to="/about">{marketingContent.finalCTA.secondaryCTA}</Link>
            </Button>
          </div>
        </div>
      </MotionInView>
    </SectionShell>
  );
}
