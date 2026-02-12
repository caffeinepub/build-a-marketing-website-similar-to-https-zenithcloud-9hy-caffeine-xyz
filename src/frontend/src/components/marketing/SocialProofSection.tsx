import { marketingContent } from '../../content/marketingContent';
import SectionShell from './SectionShell';
import MotionInView from './MotionInView';
import { Quote } from 'lucide-react';

export default function SocialProofSection() {
  return (
    <SectionShell id="social-proof" className="bg-muted/30">
      <div className="text-center mb-12 lg:mb-16">
        <MotionInView>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 minecraft-text">
            {marketingContent.socialProof.title}
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            {marketingContent.socialProof.subtitle}
          </p>
        </MotionInView>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {marketingContent.socialProof.testimonials.map((testimonial, index) => (
          <MotionInView key={index} delay={index * 0.1}>
            <div className="mc-card p-8 h-full flex flex-col">
              <Quote className="w-10 h-10 text-primary/40 mb-4" />
              <p className="text-foreground/90 mb-6 flex-grow leading-relaxed font-medium">
                "{testimonial.quote}"
              </p>
              <div className="border-t-2 border-border pt-4">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground font-medium">{testimonial.role}</p>
              </div>
            </div>
          </MotionInView>
        ))}
      </div>
    </SectionShell>
  );
}
