// Minimal server-side shim for react-router-dom/server
export const StaticRouter = ({ children }: { children: React.ReactNode }) => {
  // Next.js handles routing on the server; this is a compatibility no-op for prerender script
  return <>{children}</>;
};