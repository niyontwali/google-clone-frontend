import { HomePage, NotFoundPage, SearchResultsPage } from '@/pages';
import { RouteObject } from '@/vite-env';

const routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/search', element: <SearchResultsPage /> },
  { path: '*', element: <NotFoundPage /> },
];

export default routes;
