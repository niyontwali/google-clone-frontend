/// <reference types="vite/client" />

export interface RouteObject {
  path: string;
  element: React.ReactNode;
  authRequired?: boolean;
  requiredRoles?: string[];
}

export interface LoginFormData {
  email: string;
  password: string;
}

export const LoginPage: React.FC;

export type SearchType = 'all' | 'images' | 'videos' | 'news';

interface SearchResult {
  displayLink: string;
  link: string;
  title: string;
  snippet: string;
  image?: string;
}

export interface SearchState {
  query: string;
  searchType: SearchType;
}
