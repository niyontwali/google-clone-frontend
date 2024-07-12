import React, { ChangeEvent, useEffect, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';

import { RootState } from '@/redux/store';
import { setQuery } from '@/redux/reducers/searchSlice';
import { logo, profile } from '@/assets';
import SettingsSvg from './SettingsSvg';
import LabsSvg from './LabsSvg';
import MoreSvg from './MoreSvg';
import MicrophoneSvg from './MicrophoneSvg';
import CameraSvg from './CameraSvg';
import BlueSearchSvg from './BlueSearchSvg';

const SearchResultHeader: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { query } = useSelector((state: RootState) => state.search);

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const currentQuery = searchParams.get('q') || '';
    dispatch(setQuery(currentQuery));
  }, [location.search, dispatch]);

  return (
    <header className='bg-white shadow-sm fixed w-full top-0 z-50'>
      {/* Mobile Header */}
      <div className='md:hidden flex items-center p-4 border-b'>
        <button onClick={() => setIsMobileMenuOpen(true)} className='mr-4'>
          <Menu size={24} />
        </button>
        <Link to='/' className='mr-4'>
          <img src={logo} alt='Google' className='h-6' />
        </Link>
        <div className='flex-grow'>
          <form onSubmit={handleSearch}>
            <div className='flex items-center bg-gray-100 rounded-full px-4 py-2'>
              <input
                type='text'
                className='flex-grow bg-transparent focus:outline-none text-sm'
                value={query}
                onChange={handleQueryChange}
                placeholder='Search Google'
              />
              <button type='submit' className='ml-2'>
                <Search size={20} />
              </button>
            </div>
          </form>
        </div>
        <div className='relative w-[30px] h-[30px]'>
          <div className='absolute inset-0 bg-gradient-to-r from-blue-500 via-red-500 to-green-500 rounded-full'></div>
          <div className='absolute inset-0.5 bg-white rounded-full'></div>
          <div className='absolute inset-1'>
            <img
              src={profile}
              alt='profile picture'
              className='w-full h-full object-cover p-[0.5px] rounded-full'
            />
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className='hidden md:flex items-center py-8 px-[24px]'>
        <Link to='/' className='mr-[40px]'>
          <img src={logo} alt='Google' className='w-[92px]' />
        </Link>
        <div className='flex-grow max-w-[692px]'>
          <form onSubmit={handleSearch}>
            <div className='flex items-center border rounded-full py-[10px] px-[14px] shadow-sm hover:shadow-md'>
              <input
                type='text'
                className='flex-grow focus:outline-none text-[16px]'
                value={query}
                onChange={handleQueryChange}
              />
              <button type='button' className='ml-[15px]'>
                <MicrophoneSvg />
              </button>
              <button type='button' className='ml-[15px]'>
                <CameraSvg />
              </button>
              <button type='submit' className='ml-[15px]'>
                <BlueSearchSvg />
              </button>
            </div>
          </form>
        </div>
        <div className='flex items-center ml-auto space-x-[15px]'>
          <button className='p-2 hover:bg-gray-100 rounded-full'>
            <SettingsSvg />
          </button>
          <button className='p-2 hover:bg-gray-100 rounded-full'>
            <LabsSvg />
          </button>
          <button className='p-2 hover:bg-gray-100 rounded-full'>
            <MoreSvg />
          </button>
          <div className='relative w-[40px] h-[40px]'>
            <div className='absolute inset-0 bg-gradient-to-r from-blue-500 via-red-500 to-green-500 rounded-full'></div>
            <div className='absolute inset-0.5 bg-white rounded-full'></div>
            <div className='absolute inset-1'>
              <img
                src={profile}
                alt='profile picture'
                className='w-full h-full object-cover p-[0.5px] rounded-full'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className='flex overflow-x-auto md:px-[180px] text-[13px] md:text-[15px] text-[#5f6368] border-b px-8'>
        <button className='mr-4 md:mr-[18px] py-3 md:py-[16px] border-b-[3px] border-blue-500 text-blue-500 whitespace-nowrap'>
          All
        </button>

        <button className='mr-4 md:mr-[18px] py-3 md:py-[16px] whitespace-nowrap'>
          Images
        </button>

        <button className='mr-4 md:mr-[18px] py-3 md:py-[16px] whitespace-nowrap'>
          Videos
        </button>
        <button className='mr-4 md:mr-[18px] py-3 md:py-[16px] whitespace-nowrap'>
          News
        </button>

        <button className='mr-4 md:mr-[18px] py-3 md:py-[16px] whitespace-nowrap'>
          Maps
        </button>
        <button className='mr-4 md:mr-[18px] py-3 md:py-[16px] whitespace-nowrap'>
          More
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-50 p-4 transition-transform transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-between items-center mb-4'>
          <img src={logo} alt='Google' className='h-6' />
          <button onClick={() => setIsMobileMenuOpen(false)} className='p-2'>
            <X size={24} />
          </button>
        </div>
        <nav className='flex flex-col space-y-4'>
          <Link to='/settings' className='py-2 text-lg'>
            Settings
          </Link>
          <Link to='/data' className='py-2 text-lg'>
            Your data in Search
          </Link>
          <Link to='/history' className='py-2 text-lg'>
            Search history
          </Link>
          <Link to='/help' className='py-2 text-lg'>
            Search help
          </Link>
          <button
            onClick={() => {
              /* Handle feedback */
            }}
            className='py-2 text-lg text-left'
          >
            Send feedback
          </button>
        </nav>
      </div>
    </header>
  );
};

export default SearchResultHeader;
