import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { marketingContent } from '../../content/marketingContent';
import MotionInView from './MotionInView';

export default function HeroSection() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionInView>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-tight minecraft-text">
              {marketingContent.hero.headline}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 lg:mb-10 max-w-3xl mx-auto font-medium">
              {marketingContent.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-base lg:text-lg px-8 py-6 font-bold transition-all duration-200 hover:scale-105 group mc-button"
              >
                <Link to="/plans">
                  {marketingContent.hero.primaryCTA}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </MotionInView>
      </div>
    </section>
  );
}
