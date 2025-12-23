export default function TwoPanel() {
  return (
    <div className="min-h-screen grid grid-cols-2 gap-8 p-8">
      {/* LEFT PANEL - No background, just content on gray */}
      <nav aria-label="Main navigation" className="p-8">
        Left Panel Content
      </nav>

      {/* RIGHT PANEL - Glass effect */}
      <main id="main-content" className="bg-white/30 backdrop-blur-xl rounded-3xl p-8 border border-white/50">
        Right Panel Content
      </main>
    </div>
  );
}