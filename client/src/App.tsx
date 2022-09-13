import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpc } from './utils/trpc';
import { Trpc } from './components/Trpc';

export const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: 'http://localhost:3001/trpc',
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div className="flex gap-x-8 min-h-screen text-zinc-200 bg-base-100 p-6">
          <Trpc />
        </div>
      </QueryClientProvider>
    </trpc.Provider>
  );
};
