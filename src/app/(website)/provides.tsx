'use client';

import { ReachoutProvider } from '@/components/ReachoutProvider';
import reachoutClient from '@/lib/reachout';
import type { ReactNode } from 'react';
import { useState } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  const [client] = useState(() => reachoutClient);

  return <ReachoutProvider client={client}>{children}</ReachoutProvider>;
}
