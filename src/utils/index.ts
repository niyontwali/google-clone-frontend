import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// tailwind merge
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

// truncate string texts
export const truncateString = (word: string, sliceNo: number) => {
  if (word.length > sliceNo) {
    return word.slice(0, sliceNo) + ' ...';
  }
  return word;
};

// get network status
export const getNetworkStatus = () => {
  return window.navigator.onLine;
};

export const getDisplayLink = (link: string) => {
  if (!link.startsWith('http://') && !link.startsWith('https://')) {
    return `http://${link}`;
  }
  return link;
};
