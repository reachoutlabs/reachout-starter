'use client';

import type { ReachoutRestClient } from '@reachoutapp/sdk';
import { usePathname, useSearchParams } from 'next/navigation';
import type { PropsWithChildren } from 'react';
import { createContext, useContext, useEffect } from 'react';

interface ReachoutProviderProps {
  client: ReachoutRestClient;
}

const Context = createContext<ReachoutRestClient | null>(null);

export function ReachoutProvider({
  client,
  children,
}: PropsWithChildren<ReachoutProviderProps>) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    client.page();
  }, [client, pathname, searchParams]);

  return <Context.Provider value={client}>{children}</Context.Provider>;
}

export const useReachoutClient = () => {
  const context = useContext(Context);

  if (context === null) {
    throw new Error(
      'useReachoutClient hook must be used inside the ReachoutProvider',
    );
  }

  return context;
};
