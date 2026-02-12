import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { marketingContent } from '../../content/marketingContent';
import SectionShell from './SectionShell';
import MotionInView from './MotionInView';

interface PricingSectionProps {
  buyNowHref?: string;
}

export default function PricingSection({ buyNowHref }: PricingSectionProps) {
  return (
    <SectionShell id="pricing" className="bg-transparent">
      <div className="text-center mb-12 lg:mb-16">
        <MotionInView>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 minecraft-text">
            {marketingContent.pricing.title}
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            {marketingContent.pricing.subtitle}
          </p>
        </MotionInView>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {marketingContent.pricing.plans.map((plan, index) => (
          <MotionInView key={index} delay={index * 0.1}>
            <div
              className={`relative mc-card p-6 lg:p-8 transition-all duration-300 hover:shadow-xl flex flex-col h-full ${
                plan.recommended
                  ? 'border-primary shadow-lg md:scale-105'
                  : 'hover:border-primary/50'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded text-sm font-bold mc-pixel-border whitespace-nowrap">
                  Recommended
                </div>
              )}

              {plan.imageFilename && (
                <div className="flex justify-center mb-4">
                  <img
                    src={`/assets/generated/${plan.imageFilename}`}
                    alt={`${plan.name.replace(/ʚ|ɞ/g, '').trim()} icon`}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-xl lg:text-2xl font-bold mb-2 ${plan.titleClass || ''}`}>
                  {plan.name}
                </h3>
                {plan.description && (
                  <p className="text-muted-foreground mb-4 font-medium">{plan.description}</p>
                )}
                <div className="flex items-baseline justify-center gap-1">
                  {plan.priceDisplay ? (
                    <span className={`text-4xl lg:text-5xl font-bold ${plan.priceClass || ''}`}>
                      {plan.priceDisplay}
                    </span>
                  ) : (
                    <>
                      <span className="text-4xl lg:text-5xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground font-medium">/month</span>
                    </>
                  )}
                </div>
              </div>

              {buyNowHref ? (
                <Button
                  asChild
                  size="lg"
                  variant={plan.recommended ? 'default' : 'outline'}
                  className={`w-full mb-6 font-bold transition-all duration-200 hover:scale-105 ${
                    plan.recommended ? 'mc-button' : 'mc-button-outline'
                  }`}
                >
                  <a href={buyNowHref} target="_blank" rel="noopener noreferrer">
                    {plan.cta}
                  </a>
                </Button>
              ) : (
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
              )}

              <ul className="space-y-3 flex-grow">
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
