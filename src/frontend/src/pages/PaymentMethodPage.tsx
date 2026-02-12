import { marketingContent } from '../content/marketingContent';
import MotionInView from '../components/marketing/MotionInView';
import { CreditCard, Wallet, Shield, AlertCircle, FileText } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

export default function PaymentMethodPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-16 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionInView>
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 minecraft-text">
              {marketingContent.payment.title}
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              {marketingContent.payment.subtitle}
            </p>
          </div>
        </MotionInView>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {marketingContent.payment.methods.map((method, index) => (
            <MotionInView key={index} delay={index * 0.1}>
              <div className="mc-card p-8">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6 mc-pixel-border">
                  {method.icon === 'card' && <CreditCard className="w-8 h-8 text-primary" />}
                  {method.icon === 'wallet' && <Wallet className="w-8 h-8 text-primary" />}
                </div>
                <h3 className="text-2xl font-bold mb-3">{method.name}</h3>
                <p className="text-muted-foreground mb-4">{method.description}</p>
                <ul className="space-y-2">
                  {method.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionInView>
          ))}
        </div>

        <MotionInView delay={0.3}>
          <div className="max-w-3xl mx-auto mc-card p-8 lg:p-10 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center mc-pixel-border">
                <AlertCircle className="w-6 h-6 text-warning" />
              </div>
              <h2 className="text-2xl font-bold">{marketingContent.payment.conditions.title}</h2>
            </div>
            <ul className="space-y-3">
              {marketingContent.payment.conditions.items.map((item, index) => (
                <li key={index} className="text-muted-foreground flex items-start gap-3">
                  <span className="text-warning mt-1 font-bold">{index + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </MotionInView>

        <MotionInView delay={0.4}>
          <div className="max-w-3xl mx-auto mc-card p-8 lg:p-10 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mc-pixel-border">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">{marketingContent.payment.security.title}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {marketingContent.payment.security.description}
            </p>
            <ul className="space-y-2">
              {marketingContent.payment.security.features.map((feature, index) => (
                <li key={index} className="text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </MotionInView>

        <MotionInView delay={0.5}>
          <div className="max-w-3xl mx-auto mc-card p-8 lg:p-10 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mc-pixel-border">
                <FileText className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Before proceeding with your purchase, please review our Terms of Service to understand your rights and responsibilities.
            </p>
            <Link to="/tos">
              <Button size="lg" className="mc-pixel-border">
                View Terms of Service
              </Button>
            </Link>
          </div>
        </MotionInView>
      </div>
    </div>
  );
}
