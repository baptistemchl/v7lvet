export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="relative">
        {/* Logo spinner */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center animate-pulse">
          <span className="text-surface font-bold text-2xl">V7</span>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-accent blur-xl opacity-30 animate-pulse" />
      </div>
    </div>
  )
}
