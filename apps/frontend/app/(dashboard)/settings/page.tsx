export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          Application Settings
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Detection confidence thresholds, alert rules, and camera configurations.
        </p>
      </div>

      <div className="border border-border rounded-lg p-6 bg-card">
        <h3 className="font-semibold text-foreground text-sm">
          Scaffold Placeholder
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          System configuration interfaces and rule parameter controls are not yet implemented.
        </p>
        <div className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
          Configuration persistence will be connected in subsequent phases.
        </div>
      </div>
    </div>
  );
}
