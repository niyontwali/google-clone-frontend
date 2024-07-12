/// <reference types="vite/client" />

export interface RouteObject {
  path: string;
  element: React.ReactNode;
  authRequired?: boolean;
  requiredRoles?: string[];
}

interface LoginFormData {
  email: string;
  password: string;
}

export const LoginPage: React.FC;

type SearchType = 'all' | 'images' | 'videos' | 'news';

interface SearchResult {
  displayLink: string;
  link: string;
  title: string;
  snippet: string;
  image?: string;
}

interface SearchState {
  query: string;
  searchType: SearchType;
}

interface ErrorItem {
  id?: string;
  searchQuery: string;
}

interface ErrorData {
  message: string;
  status: number;
  data?: ErrorResponseData;
}

interface ErrorResponseData {
  message?: string;
  data?: { searchQuery: string }[];
}

interface FetchBaseQueryErrorWithData extends FetchBaseQueryError {
  data: ErrorResponseData;
  status: number;
}
