/// <reference types="vite/client" />

interface RouteObject {
  path: string;
  element: React.ReactNode;
  authRequired?: boolean;
  requiredRoles?: string[];
}

interface SearchResult {
  displayLink: string;
  link: string;
  title: string;
  snippet: string;
  image?: string;
}

interface SearchState {
  query: string;
  searchType?: SearchType;
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
