import { marketingContent } from '../../content/marketingContent';
import SectionShell from './SectionShell';
import MotionInView from './MotionInView';

export default function FeaturesSection() {
  return (
    <SectionShell id="features">
      <div className="text-center mb-12 lg:mb-16">
        <MotionInView>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 minecraft-text">
            {marketingContent.features.title}
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            {marketingContent.features.subtitle}
          </p>
        </MotionInView>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {marketingContent.features.items.map((feature, index) => (
          <MotionInView key={index} delay={index * 0.1}>
            <div className="mc-card p-8 hover:scale-105 transition-transform duration-200">
              <div
                className="w-16 h-16 mb-6 mc-pixel-border bg-primary/20 rounded flex items-center justify-center"
                style={{
                  backgroundImage: 'url(/assets/generated/mc-icons-sprite.dim_1024x1024.png)',
                  backgroundSize: '512px 512px',
                  backgroundPosition: `${(index % 4) * -128}px ${Math.floor(index / 4) * -128}px`,
                  imageRendering: 'pixelated'
                }}
              />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">{feature.description}</p>
            </div>
          </MotionInView>
        ))}
      </div>
    </SectionShell>
  );
}
