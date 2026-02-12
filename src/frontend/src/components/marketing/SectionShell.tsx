import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionShellProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionShell({ children, id, className }: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn('py-16 lg:py-24 scroll-mt-20', className)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
