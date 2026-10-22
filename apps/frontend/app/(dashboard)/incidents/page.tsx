export default function IncidentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          Safety Incidents
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Historical log of hard hat and high-visibility vest safety violations.
        </p>
      </div>

      <div className="border border-border rounded-lg p-6 bg-card">
        <h3 className="font-semibold text-foreground text-sm">
          Scaffold Placeholder
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          Incident persistence and query services are not yet implemented.
          Per architecture requirements, no simulated incident records or mock data are displayed.
        </p>
        <div className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
          PostgreSQL incident storage and Alembic models will be integrated in subsequent phases.
        </div>
      </div>
    </div>
  );
}
