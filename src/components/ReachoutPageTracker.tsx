'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import { useReachoutClient } from './ReachoutProvider';

function Tracker() {
  const client = useReachoutClient();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    client.page();
  }, [client, pathname, searchParams]);

  return null;
}

export function ReachoutPageTracker() {
  return (
    <Suspense>
      <Tracker />
    </Suspense>
  );
}
