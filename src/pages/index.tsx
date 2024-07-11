import Home from './Home';
import SearchResults from './SearchResults';
import NotFound from './NotFound';

// pages
const HomePage: React.FC = () => <Home />;
const SearchResultsPage: React.FC = () => <SearchResults />;
const NotFoundPage: React.FC = () => <NotFound />;

// export
export { HomePage, SearchResultsPage, NotFoundPage };
