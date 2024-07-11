import React from 'react';
import { Button } from './Button';

const Error: React.FC = () => {
  return (
    <div className='h-screen flex items-center justify-center flex-col gap-4'>
      <p className='text-red-600 text-md'>
        An error occurred while searching. Please press the button below to
        retry.
      </p>
      <Button onClick={() => window.location.reload()}>Retry</Button>
    </div>
  );
};

export default Error;
