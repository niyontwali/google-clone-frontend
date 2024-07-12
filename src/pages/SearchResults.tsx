import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { RootState } from '../redux/store';
import { setQuery } from '../redux/reducers/searchSlice';
import { useSearchQuery } from '../redux/apiSlice';
import { ErrorData, FetchBaseQueryErrorWithData, SearchResult } from '@/vite-env';
import Spinner from '@/components/Spinner';
import Error from '@/components/Error';
import SearchResultHeader from '@/components/SearchResultHeader';
import Footer from '@/components/Footer';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

const SearchResults: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { query } = useSelector((state: RootState) => state.search);
  const {
    data: searchResults,
    error,
    isLoading,
    refetch,
  } = useSearchQuery(query);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('q');
    if (q && q !== query) {
      dispatch(setQuery(q));
    }
  }, [location.search, dispatch, query]);

  useEffect(() => {
    if (query) {
      refetch();
    }
  }, [query, refetch]);

  if (isLoading) {
    return <Spinner className='flex justify-center items-center gap-3' />;
  }

  const handleError = (
    error: FetchBaseQueryError | SerializedError
  ): ErrorData | undefined => {
    if ('status' in error && 'data' in error) {
      const fetchError = error as FetchBaseQueryErrorWithData;
      return {
        message: fetchError.data.message || 'Unknown error',
        status: fetchError.status,
        data: {
          data: fetchError.data.data || [],
          message: fetchError.data.message || '',
        },
      };
    }
    return undefined;
  };

  // Usage
  if (error) {
    return <Error errorData={handleError(error)} />;
  }

  if (error) {
    return <Error errorData={error} />;
  }

  const getDisplayLink = (link: string) => {
    if (!link.startsWith('http://') && !link.startsWith('https://')) {
      return `http://${link}`;
    }
    return link;
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <SearchResultHeader />

      <main className='flex-grow bg-white'>
        <div className='max-w-7xl mx-auto py-8 px-8 sm:px-10 lg:px-0'>
          {searchResults?.data && (
            <div className='space-y-8 pt-[100px] sm:pt-[150px]'>
              {searchResults.data.map((result: SearchResult, index: number) => (
                <div
                  key={index}
                  className='flex flex-col sm:flex-row max-w-2xl'
                >
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
                    <p className='text-sm text-gray-600'>{result.snippet}</p>
                  </div>
                  {result?.image && (
                    <div className='mt-2 sm:mt-0 sm:ml-4'>
                      <img
                        src={result.image}
                        alt={result.title}
                        className='w-full sm:w-60 h-auto object-cover rounded-md'
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchResults;
