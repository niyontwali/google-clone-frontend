import React from 'react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

interface ErrorProps {
  errorData?: ErrorData;
}

const Error: React.FC<ErrorProps> = ({ errorData }) => {
  const navigate = useNavigate();

  const uniqueItems = errorData?.data?.data
    ? Array.from(new Set(errorData.data.data.map(item => item.searchQuery)))
    : [];

  const handleCardClick = (query: string) => {
    navigate(`/search?q=${query}`);
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center p-4 bg-gray-100'>
      {errorData && (
        <p className='text-red-600 text-md mb-6 max-w-5xl text-center pt-6'>
          {errorData.data?.message}
        </p>
      )}
      {errorData?.status === 429 ? (
        <div className='w-full max-w-4xl grid grid-cols-1 gap-4 sm:grid-cols-3'>
          {uniqueItems.map((item, index) => (
            <div
              key={index}
              className='bg-white p-4 shadow-md rounded-lg flex items-center justify-between cursor-pointer hover:shadow-lg transition-shadow'
              onClick={() => handleCardClick(item)}
            >
              <p className='truncate flex-1 mr-2'>{item}</p>
              <Search className='text-gray-500' size={18} />
            </div>
          ))}
        </div>
      ) : (
        <Button
          className='bg-primary text-white mt-4'
          onClick={() => window.location.reload()}
        >
          Retry
        </Button>
      )}
    </div>
  );
};

export default Error;
