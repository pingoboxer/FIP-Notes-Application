
export default function TagFilter({ allTags, selectedTags, onToggleTag, onClearFilter }) {
  if (allTags.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 py-4 border-b border-ink-100">
      <span className="font-mono text-xs text-ink-400 uppercase tracking-widest mr-1">
        Filter:
      </span>
      {allTags.map(tag => (
        <button
          key={tag}
          onClick={() => onToggleTag(tag)}
          className={`text-xs font-mono px-2 py-1 border transition-all duration-150
            ${selectedTags.includes(tag)
              ? 'bg-ink-900 text-cream-50 border-ink-900'
              : 'bg-transparent text-ink-600 border-ink-300 hover:border-ink-700'
            }`}
        >
          #{tag}
        </button>
      ))}
      {selectedTags.length > 0 && (
        <button
          onClick={onClearFilter}
          className="text-xs text-ink-400 hover:text-ink-900 underline ml-1 transition-colors"
        >
          Clear
        </button>
      )}
    </div>
  );
}