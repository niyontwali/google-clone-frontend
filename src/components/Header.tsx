import { profile } from '@/assets';
import LabsSvg from './LabsSvg';
import MoreSvg from './MoreSvg';

const Header = () => {
  return (
    <header className='flex justify-end items-center py-3 px-4 space-x-[13px] text-[13px]'>
      <a href='#' className='hidden sm:inline'>
        Gmail
      </a>
      <a href='#' className='hidden sm:inline'>
        Images
      </a>
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
    </header>
  );
};

export default Header;
