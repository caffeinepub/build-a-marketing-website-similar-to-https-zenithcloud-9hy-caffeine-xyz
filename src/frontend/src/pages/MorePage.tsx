import FAQSection from '../components/marketing/FAQSection';
import { marketingContent } from '../content/marketingContent';
import MotionInView from '../components/marketing/MotionInView';
import { Book, ExternalLink } from 'lucide-react';

export default function MorePage() {
  return (
    <div className="pt-24 lg:pt-32 pb-16 lg:pb-24">
      <FAQSection />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
        <MotionInView>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 minecraft-text">
              {marketingContent.more.title}
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              {marketingContent.more.subtitle}
            </p>
          </div>
        </MotionInView>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {marketingContent.more.resources.map((resource, index) => (
            <MotionInView key={index} delay={index * 0.1}>
              <a
                href={resource.href}
                className="mc-card p-6 block hover:scale-105 transition-transform duration-200 group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mc-pixel-border">
                  <Book className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  {resource.title}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground text-sm">{resource.description}</p>
              </a>
            </MotionInView>
          ))}
        </div>
      </div>
    </div>
  );
}
