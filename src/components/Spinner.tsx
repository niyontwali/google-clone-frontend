import { LoaderCircle } from 'lucide-react';

import { cn } from '@/utils';

interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = 30,
  className = 'animate-spin',
  color = 'currentColor',
  ...restProps
}) => {
  return (
    <div className={cn('h-screen', className)}>
      <LoaderCircle
        className='animate-spin'
        size={size}
        stroke={color}
        {...restProps}
      />
      <span>Searching ...</span>
    </div>
  );
};

export default Spinner;
