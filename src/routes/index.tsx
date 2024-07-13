import { HomePage, NotFoundPage, SearchResultsPage } from '@/pages';

const routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/search', element: <SearchResultsPage /> },
  { path: '*', element: <NotFoundPage /> },
];

export default routes;
