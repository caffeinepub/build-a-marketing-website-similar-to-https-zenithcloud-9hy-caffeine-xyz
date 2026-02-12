import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import SiteLayout from './components/layout/SiteLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PlansPage from './pages/PlansPage';
import PaymentMethodPage from './pages/PaymentMethodPage';
import ReviewPage from './pages/ReviewPage';
import MorePage from './pages/MorePage';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const plansRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/plans',
  component: PlansPage,
});

const paymentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/payment',
  component: PaymentMethodPage,
});

const reviewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/reviews',
  component: ReviewPage,
});

const moreRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/more',
  component: MorePage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  plansRoute,
  paymentRoute,
  reviewRoute,
  moreRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
