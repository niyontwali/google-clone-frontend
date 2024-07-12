const Footer = () => {
  return (
    <footer className='bg-floor '>
      <p className='px-[30px] py-[14px] border-b border-gray-300 text-[15px]'>
        Rwanda
      </p>
      <div className='px-10 pt-[10px] pb-[7px] flex flex-col sm:flex-row justify-between space-y-7 sm:space-y-0'>
        <div className='flex flex-wrap justify-center sm:justify-start'>
          <a href='#' className='mr-6 mb-2'>
            About
          </a>
          <a href='#' className='mr-6 mb-2'>
            Advertising
          </a>
          <a href='#' className='mr-6 mb-2'>
            Business
          </a>
          <a href='#' className='mb-2'>
            How Search works
          </a>
        </div>
        <div className='flex justify-center sm:justify-end space-x-6'>
          <a href='#'>Privacy</a>
          <a href='#'>Terms</a>
          <a href='#'>Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
