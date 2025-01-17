import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setQuery } from '../redux/reducers/searchSlice';
import { RootState } from '../redux/store';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { logo } from '@/assets';
import MicrophoneSvg from '@/components/MicrophoneSvg';
import SearchSvg from '@/components/SearchSvg';
import CameraSvg from '@/components/CameraSvg';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { query } = useSelector((state: RootState) => state.search);

  // Handle the form submission for search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  // Handle changes in the search input field
  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
  };

  // Handle the "I'm Feeling Lucky" button click
  const handleLuckySearch = () => {
    alert('Coming up soon....');
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow flex flex-col items-center justify-center px-4 sm:px-0 mb-14'>
        {/* Logo Image */}
        <img src={logo} alt='Google' className='w-[172px] sm:w-[272px] mb-8' />
        {/* Search Form */}
        <form onSubmit={handleSearch} className='w-full max-w-[584px]'>
          <div className='flex items-center border rounded-full p-3 shadow-sm hover:shadow-md px-[14px]'>
            <SearchSvg />
            <input
              type='text'
              className='flex-grow focus:outline-none text-base py-[2px] mx-3'
              value={query}
              onChange={handleQueryChange}
            />
            <button type='button' className='ml-3'>
              <MicrophoneSvg />
            </button>
            <button type='button' className='ml-3'>
              <CameraSvg />
            </button>
          </div>
          {/* Buttons for "Google Search" and "I'm Feeling Lucky" */}
          <div className='mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center'>
            <button
              type='submit'
              className='bg-[#f8f9fa] px-4 py-2 text-[15px] rounded-md border border-transparent hover:border hover:border-gray-300'
            >
              Google Search
            </button>
            <button
              type='button'
              onClick={handleLuckySearch}
              className='bg-[#f8f9fa] px-4 py-2 text-[15px] rounded-md border border-transparent hover:border hover:border-gray-300'
            >
              I'm Feeling Lucky
            </button>
          </div>
        </form>

        {/* Language Links */}
        <p className='mt-8 text-[13px] text-center'>
          Google offered in:
          <a href='#' className='text-primary mx-2'>
            Français
          </a>
          <a href='#' className='text-primary mx-2'>
            Kiswahili
          </a>
          <a href='#' className='text-primary mx-2'>
            Ikinyarwanda
          </a>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
