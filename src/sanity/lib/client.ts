import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'


export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // e.g., '2023-01-01'
  useCdn: true,
});