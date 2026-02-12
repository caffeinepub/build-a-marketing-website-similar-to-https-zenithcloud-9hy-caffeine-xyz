import { marketingContent } from '../../content/marketingContent';
import SectionShell from './SectionShell';
import MotionInView from './MotionInView';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQSection() {
  return (
    <SectionShell id="faq">
      <div className="text-center mb-12 lg:mb-16">
        <MotionInView>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 minecraft-text">
            {marketingContent.faq.title}
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            {marketingContent.faq.subtitle}
          </p>
        </MotionInView>
      </div>

      <MotionInView delay={0.2}>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {marketingContent.faq.items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="mc-card px-6 hover:border-primary/50 transition-colors duration-200"
              >
                <AccordionTrigger className="text-left text-lg font-bold hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed font-medium">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </MotionInView>
    </SectionShell>
  );
}
