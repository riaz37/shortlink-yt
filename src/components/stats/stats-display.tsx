import { Suspense } from "react";
import { Loader2 } from "lucide-react";

interface StatsProps {
  totalUrls: number;
  totalUsers: number;
  totalClicks: number;
}

function StatsLoader() {
  return (
    <div className="flex items-center justify-center py-8">
      <Loader2 className="size-8 animate-spin text-primary" />
    </div>
  );
}

function StatsContent({ totalUrls, totalUsers, totalClicks }: StatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div className="p-6 rounded-lg bg-card border">
        <div className="text-4xl font-bold text-primary mb-2">
          {totalUrls.toLocaleString()}+
        </div>
        <div className="text-muted-foreground">Links Created</div>
      </div>
      <div className="p-6 rounded-lg bg-card border">
        <div className="text-4xl font-bold text-primary mb-2">
          {totalUsers.toLocaleString()}+
        </div>
        <div className="text-muted-foreground">Active Users</div>
      </div>
      <div className="p-6 rounded-lg bg-card border">
        <div className="text-4xl font-bold text-primary mb-2">
          {totalClicks.toLocaleString()}+
        </div>
        <div className="text-muted-foreground">Total Clicks</div>
      </div>
    </div>
  );
}

export function StatsDisplay({ stats }: { stats: StatsProps }) {
  return (
    <Suspense fallback={<StatsLoader />}>
      <StatsContent {...stats} />
    </Suspense>
  );
}