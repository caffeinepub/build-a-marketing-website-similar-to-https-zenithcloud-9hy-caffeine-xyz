import { marketingContent } from '../content/marketingContent';
import MotionInView from '../components/marketing/MotionInView';
import { Pickaxe, Sword, Shield, Compass } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-16 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionInView>
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 minecraft-text">
              {marketingContent.about.title}
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              {marketingContent.about.subtitle}
            </p>
          </div>
        </MotionInView>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
          <MotionInView delay={0.1}>
            <div className="mc-card p-8">
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6 mc-pixel-border">
                <Pickaxe className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">{marketingContent.about.mission.title}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {marketingContent.about.mission.description}
              </p>
            </div>
          </MotionInView>

          <MotionInView delay={0.2}>
            <div className="mc-card p-8">
              <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mb-6 mc-pixel-border">
                <Compass className="w-8 h-8 text-accent-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-4">{marketingContent.about.vision.title}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {marketingContent.about.vision.description}
              </p>
            </div>
          </MotionInView>
        </div>

        <MotionInView delay={0.3}>
          <div className="max-w-4xl mx-auto">
            <div className="mc-card p-8 lg:p-12 text-center">
              <div className="flex justify-center gap-8 mb-8">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mc-pixel-border">
                  <Sword className="w-8 h-8 text-primary" />
                </div>
                <div className="w-16 h-16 bg-destructive/20 rounded-lg flex items-center justify-center mc-pixel-border">
                  <Shield className="w-8 h-8 text-destructive" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-6">{marketingContent.about.story.title}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {marketingContent.about.story.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </MotionInView>
      </div>
    </div>
  );
}
