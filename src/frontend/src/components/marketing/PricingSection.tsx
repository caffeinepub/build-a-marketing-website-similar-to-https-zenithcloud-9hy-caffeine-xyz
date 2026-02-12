import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { marketingContent } from '../../content/marketingContent';
import SectionShell from './SectionShell';
import MotionInView from './MotionInView';

export default function PricingSection() {
  return (
    <SectionShell id="pricing" className="bg-muted/30">
      <div className="text-center mb-12 lg:mb-16">
        <MotionInView>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 minecraft-text">
            {marketingContent.pricing.title}
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            {marketingContent.pricing.subtitle}
          </p>
        </MotionInView>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {marketingContent.pricing.plans.map((plan, index) => (
          <MotionInView key={index} delay={index * 0.1}>
            <div
              className={`relative mc-card p-8 transition-all duration-300 hover:shadow-xl ${
                plan.recommended
                  ? 'border-primary shadow-lg scale-105 md:scale-110'
                  : 'hover:border-primary/50'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded text-sm font-bold mc-pixel-border">
                  Recommended
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4 font-medium">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground font-medium">/month</span>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                variant={plan.recommended ? 'default' : 'outline'}
                className={`w-full mb-6 font-bold transition-all duration-200 hover:scale-105 ${
                  plan.recommended ? 'mc-button' : 'mc-button-outline'
                }`}
              >
                <Link to="/payment">{plan.cta}</Link>
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionInView>
        ))}
      </div>
    </SectionShell>
  );
}
