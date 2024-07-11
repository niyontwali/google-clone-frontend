import { Button } from '@/components/Button';
import { FrownIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className='flex h-screen flex-col items-center justify-center bg-gray-100'>
      <div className='mx-auto flex max-w-fit flex-col items-center justify-center text-center'>
        <FrownIcon className='mb-4 h-16 w-16 text-red-500' />
        <h1 className='text-4xl font-bold text-gray-800 font-sofia-bold'>
          Page Not Found
        </h1>
        <p className='mt-2 mb-6 text-lg text-gray-600 font-sofia-regular'>
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button onClick={() => navigate(-1)} className='font-sofia-regular'>
          Go Back
        </Button>
      </div>
    </div>
  );
}
