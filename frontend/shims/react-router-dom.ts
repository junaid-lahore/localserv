// Minimal client-side shim for react-router-dom to keep components working under Next.js
import React, { useCallback } from 'react';
import LinkNext from 'next/link';
import { useRouter } from 'next/router';

export const Link: React.FC<React.ComponentProps<typeof LinkNext>> = (props) => {
  // Forward to Next.js Link; ensure no scroll by default behavior differences
  return <LinkNext {...props} />;
};

export function useNavigate() {
  const router = useRouter();
  return useCallback((url: string) => {
    router.push(url);
  }, [router]);
}

export function useLocation() {
  const router = useRouter();
  return {
    pathname: router.pathname,
    search: typeof window !== 'undefined' ? window.location.search : '',
    hash: typeof window !== 'undefined' ? window.location.hash : '',
    state: undefined as unknown,
  };
}

export function useParams() {
  const router = useRouter();
  // Extract params from Next router query
  return router.query as Record<string, string | string[]>;
}

export const BrowserRouter = ({ children }: { children: React.ReactNode }) => {
  // No-op wrapper for compatibility
  return <>{children}</>;
};

export const RouterProvider = ({ children }: { children: React.ReactNode }) => {
  // No-op wrapper for compatibility
  return <>{children}</>;
};