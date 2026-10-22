"use client";

import { usePathname } from "next/navigation";
import { Activity } from "lucide-react";

export function TopNav() {
  const pathname = usePathname();

  const getPageTitle = (path: string) => {
    if (path.startsWith("/dashboard")) return "Dashboard";
    if (path.startsWith("/monitoring")) return "Live Monitoring";
    if (path.startsWith("/incidents")) return "Safety Incidents";
    if (path.startsWith("/settings")) return "Settings";
    return "SafeSight AI";
  };

  return (
    <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-semibold text-foreground">
          {getPageTitle(pathname)}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
          <Activity className="h-3.5 w-3.5 text-muted-foreground" />
          <span>Scaffold Mode</span>
        </div>
      </div>
    </header>
  );
}
