import { marketingContent } from '../../content/marketingContent';
import SectionShell from './SectionShell';
import MotionInView from './MotionInView';

export default function FeaturesSection() {
  return (
    <SectionShell id="features">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {marketingContent.features.items.map((feature, index) => (
          <MotionInView key={index} delay={index * 0.1}>
            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 rounded-full mc-card flex items-center justify-center p-4 hover:scale-110 transition-transform duration-200 border-4">
                <span className="text-sm font-bold leading-tight break-words">{feature.title}</span>
              </div>
            </div>
          </MotionInView>
        ))}
      </div>
    </SectionShell>
  );
}
