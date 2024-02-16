import { Schema } from '@/types/schema';
import { createReachoutClient } from '@reachoutapp/sdk';

const REACHOUT_URL = process.env.NEXT_PUBLIC_REACHOUT_WORKER_URL ?? '';
const REACHOUT_TOKEN = process.env.NEXT_PUBLIC_REACHOUT_TOKEN ?? '';
const REACHOUT_TOUCHPOINT = process.env.NEXT_PUBLIC_REACHOUT_TOUCHPOINT ?? '';

const client = createReachoutClient<Schema>({
  url: REACHOUT_URL,
  token: REACHOUT_TOKEN,
  websiteId: REACHOUT_TOUCHPOINT,
  trackLink: false,
  trackPageView: false,
});

export default client;
