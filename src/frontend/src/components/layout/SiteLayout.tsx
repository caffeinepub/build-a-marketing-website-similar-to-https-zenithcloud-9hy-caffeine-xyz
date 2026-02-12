import { Outlet } from '@tanstack/react-router';
import TopNav from '../marketing/TopNav';
import Footer from '../marketing/Footer';
import DiscordCTABlock from '../marketing/DiscordCTABlock';

export default function SiteLayout() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <main>
        <Outlet />
      </main>
      <DiscordCTABlock />
      <Footer />
    </div>
  );
}
