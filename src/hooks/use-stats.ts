'use client';

import { useState, useEffect } from 'react';
import { revalidateStats } from '@/lib/stats';

export function useStatsRefresh(intervalMs = 60000) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const interval = setInterval(async () => {
      setIsRefreshing(true);
      await revalidateStats();
      setIsRefreshing(false);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs]);

  return isRefreshing;
}