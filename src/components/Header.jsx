
export default function Header() {
  return (
    <header className="border-b-2 border-ink-900 bg-cream-50 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink-900 italic">
          Notable
        </h1>
      </div>
    </header>
  );
}

export default function Header({ onCreateNote }) {
  return (
    <header className="border-b-2 border-ink-900 bg-cream-50 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink-900 italic">
          Notable
        </h1>
        <button
          onClick={onCreateNote}
          className="bg-ink-900 text-cream-50 px-4 py-2 text-sm font-medium
                     border-2 border-ink-900 hover:opacity-90 transition-opacity"
        >
          + New Note
        </button>
      </div>
    </header>
  );
}

export default function Header({ onCreateNote, noteCount }) {
  return (
    <header className="border-b-2 border-ink-900 bg-cream-50 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-baseline gap-3">
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink-900 italic">
            Notable
          </h1>
          <span className="font-mono text-xs text-ink-300 hidden sm:block">
            {noteCount} {noteCount === 1 ? 'note' : 'notes'}
          </span>
        </div>
        <button
          onClick={onCreateNote}
          className="bg-ink-900 text-cream-50 px-4 py-2 text-sm font-medium
                     border-2 border-ink-900 hover:opacity-90 transition-opacity"
        >
          + New Note
        </button>
      </div>
    </header>
  );
}