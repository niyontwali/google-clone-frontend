import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// tailwind merge
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

// decode token function
export const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
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
