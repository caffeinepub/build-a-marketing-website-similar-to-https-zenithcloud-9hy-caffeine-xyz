import { SiX, SiGithub, SiLinkedin, SiDiscord } from 'react-icons/si';
import { Heart } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { marketingContent } from '../../content/marketingContent';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'crafthost-server';

  return (
    <footer className="bg-muted/30 backdrop-blur-lg border-t-4 border-border mc-pixel-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/assets/generated/crafthost-logo.dim_512x192.png"
              alt={marketingContent.brandName}
              className="h-8 w-auto mb-4"
              style={{ imageRendering: 'pixelated' }}
            />
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              {marketingContent.footer.tagline}
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Product</h3>
            <ul className="space-y-3">
              {marketingContent.footer.productLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              {marketingContent.footer.companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-muted/60 backdrop-blur-sm hover:bg-accent flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mc-pixel-border"
                aria-label="Twitter"
              >
                <SiX className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-muted/60 backdrop-blur-sm hover:bg-accent flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mc-pixel-border"
                aria-label="GitHub"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-muted/60 backdrop-blur-sm hover:bg-accent flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mc-pixel-border"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a
                href={marketingContent.social.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-muted/60 backdrop-blur-sm hover:bg-accent flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mc-pixel-border"
                aria-label="Discord"
              >
                <SiDiscord className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-medium">
            © {currentYear} {marketingContent.brandName}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground font-medium flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded font-bold"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
