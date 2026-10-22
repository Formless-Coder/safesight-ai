export default function MonitoringPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          Live PPE Monitoring
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Camera video stream and real-time detection interface.
        </p>
      </div>

      <div className="border border-border rounded-lg p-6 bg-card">
        <h3 className="font-semibold text-foreground text-sm">
          Scaffold Placeholder
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          Browser webcam capture via <code className="text-xs bg-muted px-1.5 py-0.5 rounded">getUserMedia</code> and WebSocket transport to the FastAPI inference engine are not yet implemented.
        </p>
        <div className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
          Video transport and ML inference pipeline will be introduced in subsequent phases.
        </div>
      </div>
    </div>
  );
}
