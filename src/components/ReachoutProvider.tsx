'use client';

import type { ReachoutRestClient } from '@reachoutapp/sdk';
import type { PropsWithChildren } from 'react';
import { createContext, useContext } from 'react';

interface ReachoutProviderProps {
  client: ReachoutRestClient;
}

const Context = createContext<ReachoutRestClient | null>(null);

export function ReachoutProvider({
  client,
  children,
}: PropsWithChildren<ReachoutProviderProps>) {
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
