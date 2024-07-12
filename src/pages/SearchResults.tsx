import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { RootState } from '../redux/store';
import { setQuery } from '../redux/reducers/searchSlice';
import { useSearchQuery } from '../redux/apiSlice';
import { SearchResult } from '@/vite-env';
import Spinner from '@/components/Spinner';
import Error from '@/components/Error';
import SearchResultHeader from '@/components/SearchResultHeader';

const SearchResults = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { query } = useSelector((state: RootState) => state.search);
  const { data: searchResults, error, isLoading } = useSearchQuery(query);

  console.log({ searchResults });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('q');
    if (q) {
      dispatch(setQuery(q));
    }
  }, [location.search, dispatch]);

  if (isLoading)
    return <Spinner className='flex justify-center items-center gap-3' />;
  if (error) return <Error />;

  const getDisplayLink = (link: string) => {
    if (!link.startsWith('http://') && !link.startsWith('https://')) {
      return `http://${link}`;
    }
    return link;
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <SearchResultHeader />

      {/* Main Content */}
      <main className='flex-grow bg-white'>
        <div className='max-w-7xl mx-auto py-8'>
          {searchResults?.data && (
            <div>
              <div className='space-y-8'>
                {searchResults?.data?.map(
                  (result: SearchResult, index: number) => (
                    <div key={index} className='flex max-w-2xl'>
                      <div className='flex-grow'>
                        <a
                          href={getDisplayLink(result.displayLink)}
                          target='_blank'
                          className='text-sm text-gray-600 mb-1'
                          rel='noopener noreferrer'
                        >
                          {result.displayLink}
                        </a>
                        <h3 className='text-xl text-blue-800 hover:underline mb-1'>
                          <a
                            href={getDisplayLink(result.displayLink)}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            {result.title}
                          </a>
                        </h3>
                        <p className='text-sm text-gray-600'>
                          {result.snippet}
                        </p>
                      </div>
                      {result?.image && (
                        <div className='ml-4'>
                          <img
                            src={result.image}
                            alt={result.title}
                            className=' w-60 h-auto object-cover rounded-md'
                          />
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className='bg-gray-100 text-sm text-gray-600'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <p>Rwanda</p>
          <div className='mt-2 flex justify-between'>
            <div>
              <a href='#' className='mr-4'>
                Help
              </a>
              <a href='#' className='mr-4'>
                Send Feedback
              </a>
              <a href='#'>Privacy</a>
            </div>
            <div>
              <a href='#' className='mr-4'>
                Terms
              </a>
              <a href='#'>Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SearchResults;
