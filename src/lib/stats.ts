import { unstable_cache } from 'next/cache';
import { db } from "@/server/db";
import { urls, users } from "@/server/db/schema";
import { count, sql } from "drizzle-orm";

export const getStats = unstable_cache(
  async () => {
    try {
      const [urlCount] = await db
        .select({ value: count() })
        .from(urls);

      const [userCount] = await db
        .select({ value: count() })
        .from(users);

      const [clicksResult] = await db
        .select({ total: sql<number>`sum(${urls.clicks})` })
        .from(urls);

      return {
        totalUrls: urlCount?.value || 0,
        totalUsers: userCount?.value || 0,
        totalClicks: clicksResult?.total || 0,
      };
    } catch (error) {
      console.error('Error fetching stats:', error);
      return {
        totalUrls: 0,
        totalUsers: 0,
        totalClicks: 0,
      };
    }
  },
  ['site-stats'],
  {
    revalidate: 300, // Cache for 5 minutes
    tags: ['stats'],
  }
);

// Function to revalidate stats cache
export async function revalidateStats() {
  await fetch('/api/revalidate?tag=stats');
}