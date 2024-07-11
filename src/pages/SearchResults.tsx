import { ChangeEvent, FormEvent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { RootState } from '../redux/store';
import { setQuery } from '../redux/reducers/searchSlice';
import { useSearchQuery } from '../redux/apiSlice';
import { SearchResult } from '@/vite-env';
import Spinner from '@/components/Spinner';
import Error from '@/components/Error';

const SearchResults = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { query } = useSelector((state: RootState) => state.search);

  const { data: searchResults, error, isLoading } = useSearchQuery(query);

  console.log({ data: searchResults?.data });

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

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

  return (
    <div className='min-h-screen flex flex-col'>
      {/* Header */}
      <header className='border-b bg-white shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center'>
          <Link to='/'>
            <img
              src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
              alt='Google'
              className='h-6 mr-8'
            />
          </Link>
          <div className='flex-grow'>
            <form onSubmit={handleSearch}>
              <div className='flex items-center border rounded-full p-3 shadow-sm hover:shadow-md'>
                <input
                  type='text'
                  className='flex-grow focus:outline-none'
                  value={query}
                  onChange={handleQueryChange}
                />
                <button type='submit' className='ml-3'>
                  <svg
                    className='w-5 h-5 text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className='ml-4 flex items-center'>
            <button className='p-2 hover:bg-gray-100 rounded-full'>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            </button>
            <button className='ml-2 bg-blue-500 text-white rounded-full w-8 h-8'>
              U
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='flex-grow bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          {searchResults?.data && (
            <div>
              <div className='space-y-8'>
                {searchResults?.data?.map(
                  (result: SearchResult, index: number) => (
                    <div key={index} className='flex max-w-2xl'>
                      <div className='flex-grow'>
                        <a
                          href={`${result.displayLink}`}
                          target='_blank'
                          className='text-sm text-gray-600 mb-1'
                          rel='noopener noreferrer'
                        >
                          {result.displayLink}
                        </a>
                        <h3 className='text-xl text-blue-800 hover:underline mb-1'>
                          <a
                            href={`${result.displayLink}`}
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
