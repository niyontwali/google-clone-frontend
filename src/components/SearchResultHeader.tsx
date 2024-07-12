import { ChangeEvent, useEffect, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { RootState } from '@/redux/store';
import { setQuery } from '@/redux/reducers/searchSlice';
import { logo, profile } from '@/assets';
import MicrophoneSvg from './MicrophoneSvg';
import CameraSvg from './CameraSvg';
import BlueSearchSvg from './BlueSearchSvg';
import LabsSvg from './LabsSvg';
import MoreSvg from './MoreSvg';
import SettingsSvg from './SettingsSvg';

const SearchResultHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { query } = useSelector((state: RootState) => state.search);

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const currentQuery = searchParams.get('q') || '';
    if (currentQuery !== query) {
      navigate(`/search?q=${encodeURIComponent(query)}`, { replace: true });
    }
  }, [query, navigate, location.search]);

  return (
    <header className='bg-white shadow-sm'>
      <div className='flex items-center py-8 px-[24px]'>
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
      <nav className='flex px-[180px] text-[13px] text-[#5f6368] border-b'>
        <a
          href='#'
          className='mr-[18px] py-[16px] border-b-[3px] border-blue-500 text-blue-500'
        >
          All
        </a>
        <a href='#' className='mr-[18px] py-[16px]'>
          Images
        </a>
        <a href='#' className='mr-[18px] py-[16px]'>
          Videos
        </a>
        <a href='#' className='mr-[18px] py-[16px]'>
          News
        </a>
        <a href='#' className='mr-[18px] py-[16px]'>
          Shopping
        </a>
        <a href='#' className='mr-[18px] py-[16px]'>
          Maps
        </a>
        <a href='#' className='mr-[18px] py-[16px]'>
          More
        </a>
      </nav>
    </header>
  );
};

export default SearchResultHeader;
