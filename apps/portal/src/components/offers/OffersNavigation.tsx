import type { ProductNavigationItems } from '~/components/global/ProductNavigation';

const navigation: ProductNavigationItems = [
  { href: '/offers/submit', name: 'Analyze your offers' },
  { href: '/offers/features', name: 'Features' },
  { href: '/offers/about', name: 'About' },
];

const navigationAuthenticated: ProductNavigationItems = [
  { href: '/offers/submit', name: 'Analyze your offers' },
  { href: '/offers/dashboard', name: 'My dashboard' },
  { href: '/offers/features', name: 'Features' },
  { href: '/offers/about', name: 'About' },
];

const config = {
  googleAnalyticsMeasurementID: 'G-34XRGLEVCF',
  logo: (
    <img
      alt="Tech Offers Repo"
      className="h-8 w-auto"
      src="/logos/offers-logo.svg"
    />
  ),
  navigation,
  showGlobalNav: false,
  title: 'Tech Offers Repo',
  titleHref: '/offers',
};

export const OffersNavigationAuthenticated = {
  ...config,
  navigation: navigationAuthenticated,
};

export default config;
