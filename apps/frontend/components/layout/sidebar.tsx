"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Video,
  ShieldAlert,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/components/ui/utils";

const navigationItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Live Monitoring", href: "/monitoring", icon: Video },
  { name: "Incidents", href: "/incidents", icon: ShieldAlert },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-border bg-card flex flex-col shrink-0 min-h-screen">
      <div className="h-16 flex items-center gap-3 px-6 border-b border-border">
        <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <ShieldCheck className="h-5 w-5 text-primary" />
        </div>
        <div>
          <span className="font-semibold text-foreground text-sm tracking-tight block">
            SafeSight AI
          </span>
          <span className="text-xs text-muted-foreground block">
            PPE Safety Monitoring
          </span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="rounded-md bg-muted/50 p-3 text-xs text-muted-foreground">
          <p className="font-medium text-foreground">Scaffold Phase</p>
          <p className="mt-1">
            Core UI skeleton. Camera and detection pipelines pending subsequent phases.
          </p>
        </div>
      </div>
    </aside>
  );
}
