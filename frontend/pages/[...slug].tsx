import type { GetServerSideProps } from 'next';
import About from '../src/pages/About';
import App from '../src/pages/App';
import Blog from '../src/pages/Blog';
import BlogCategories from '../src/pages/BlogCategories';
import Blogs from '../src/pages/Blogs';
import CarDetailingPricing from '../src/pages/CarDetailingPricing';
import Contact from '../src/pages/Contact';
import Home1 from '../src/pages/Home1';
import Home2 from '../src/pages/Home2';
import HowLocalServWorks from '../src/pages/HowLocalServWorks';
import Industries from '../src/pages/Industries';
import NewPost from '../src/pages/NewPost';
import PrivacyPolicy from '../src/pages/PrivacyPolicy';
import ProfessionalAutoDetailingVsDiyLa from '../src/pages/ProfessionalAutoDetailingVsDiyLa';
import TermsConditions from '../src/pages/TermsConditions';
import WhatIsLocalServ from '../src/pages/WhatIsLocalServ';
import WhyAiIsTheFutureOfLocalServices from '../src/pages/WhyAiIsTheFutureOfLocalServices';
import NotFoundPage from '../src/pages/NotFoundPage';

const routeMap: Record<string, React.ComponentType<any>> = {
  '/about': About,
  '/': App,
  '/blog': Blog,
  '/blog-categories': BlogCategories,
  '/blogcategories': BlogCategories,
  '/blogs': Blogs,
  '/car-detailing-pricing': CarDetailingPricing,
  '/cardetailingpricing': CarDetailingPricing,
  '/contact': Contact,
  '/home1': Home1,
  '/home2': Home2,
  '/how-local-serv-works': HowLocalServWorks,
  '/howlocalservworks': HowLocalServWorks,
  '/industries': Industries,
  '/new-post': NewPost,
  '/newpost': NewPost,
  '/privacy-policy': PrivacyPolicy,
  '/privacypolicy': PrivacyPolicy,
  '/professional-auto-detailing-vs-diy-la': ProfessionalAutoDetailingVsDiyLa,
  '/professionalautodetailingvsdiyla': ProfessionalAutoDetailingVsDiyLa,
  '/terms-conditions': TermsConditions,
  '/termsconditions': TermsConditions,
  '/what-is-local-serv': WhatIsLocalServ,
  '/whatislocalserv': WhatIsLocalServ,
  '/why-ai-is-the-future-of-local-services': WhyAiIsTheFutureOfLocalServices,
  '/whyaiisthefutureoflocalservices': WhyAiIsTheFutureOfLocalServices,
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string[] | undefined;
  const route = '/' + (slug ? slug.join('/') : '');
  return {
    props: {
      route,
    },
  };
};

export default function CatchAllPage({ route }: { route: string }) {
  const Component = routeMap[route] ?? NotFoundPage;
  return <Component />;
}