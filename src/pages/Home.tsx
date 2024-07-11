import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setQuery } from '../redux/reducers/searchSlice';
import { RootState } from '../redux/store';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { query } = useSelector((state: RootState) => state.search);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(setQuery(query)); 
      navigate(`/search?q=${encodeURIComponent(query)}`); 
    }
  };

  const handleLuckySearch = () => {
    alert("I'm Feeling Lucky feature is not implemented yet.");
  };

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Header */}
      <header className='flex justify-end items-center p-4 space-x-4 text-sm'>
        <a href='#' className='hidden sm:inline'>
          Gmail
        </a>
        <a href='#' className='hidden sm:inline'>
          Images
        </a>
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
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <button className='bg-blue-500 text-white rounded-full w-8 h-8'>
          U
        </button>
      </header>

      {/* Main Content */}
      <main className='flex-grow flex flex-col items-center justify-center px-4 sm:px-0'>
        <img
          src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
          alt='Google'
          className='w-[172px] sm:w-[272px] mb-8'
        />

        <form onSubmit={handleSearch} className='w-full max-w-[584px]'>
          <div className='flex items-center border rounded-full p-3 shadow-sm hover:shadow-md'>
            <svg
              className='w-5 h-5 text-gray-400 mr-3'
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
            <input
              type='text'
              className='flex-grow focus:outline-none text-base'
              value={query}
              onChange={(e) => dispatch(setQuery(e.target.value))}
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
                  d='M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z'
                />
              </svg>
            </button>
          </div>
        </form>

        <div className='mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
          <button
            type='button'
            onClick={handleSearch}
            className='bg-[#f8f9fa] px-4 py-2 text-sm rounded-md hover:border hover:border-gray-300'
          >
            Recherche Google
          </button>
          <button
            onClick={handleLuckySearch}
            className='bg-[#f8f9fa] px-4 py-2 text-sm rounded-md hover:border hover:border-gray-300'
          >
            J'ai de la chance
          </button>
        </div>

        <p className='mt-8 text-sm text-center'>
          Google disponible en :
          <a href='#' className='text-blue-600 mx-1'>
            English
          </a>
          <a href='#' className='text-blue-600 mx-1'>
            Kiswahili
          </a>
          <a href='#' className='text-blue-600 mx-1'>
            Ikinyarwanda
          </a>
        </p>
      </main>

      {/* Footer */}
      <footer className='bg-[#f2f2f2] text-[#70757a] text-sm'>
        <div className='px-8 py-3 border-b border-gray-300'>Rwanda</div>
        <div className='px-8 py-3 flex flex-col sm:flex-row justify-between space-y-7 sm:space-y-0'>
          <div className='flex flex-wrap justify-center sm:justify-start'>
            <a href='#' className='mr-6 mb-2'>
              À propos
            </a>
            <a href='#' className='mr-6 mb-2'>
              Publicité
            </a>
            <a href='#' className='mr-6 mb-2'>
              Entreprise
            </a>
            <a href='#' className='mb-2'>
              Comment fonctionne la recherche Google ?
            </a>
          </div>
          <div className='flex justify-center sm:justify-end space-x-6'>
            <a href='#'>Confidentialité</a>
            <a href='#'>Conditions</a>
            <a href='#'>Paramètres</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
