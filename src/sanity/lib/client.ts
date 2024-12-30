import { createClient } from '@sanity/client';

const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-31';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // Ensure this is used here
  useCdn: true, // Use CDN for faster response times
});