import { SiDiscord } from 'react-icons/si';
import { marketingContent } from '../../content/marketingContent';

export default function DiscordCTABlock() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mc-card p-8 lg:p-12 text-center max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <SiDiscord className="w-16 h-16 discord-icon" aria-hidden="true" />
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
                Join Our Discord
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect with our community of gamers and developers. Get instant support, share experiences, and stay updated with the latest news.
              </p>
            </div>
            <a
              href={marketingContent.social.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="mc-button discord-button px-8 py-3 text-lg font-bold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Join
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
