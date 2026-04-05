
export default function NoteCard({ note, onEdit, onDelete }) {
  return (
    <div className="bg-white border-2 border-ink-900 p-4 shadow-[3px_3px_0px_#1a1209]
                    hover:shadow-[5px_5px_0px_#1a1209] hover:-translate-x-0.5 
                    hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-display font-semibold text-ink-900 text-lg leading-tight">
          {note.title || 'Untitled'}
        </h3>
        <div className="flex gap-1 shrink-0">
          <button
            onClick={() => onEdit(note)}
            className="text-xs px-2 py-1 border border-ink-300 text-ink-500
                       hover:border-ink-900 hover:text-ink-900 transition-colors"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(note.id)}
            className="text-xs px-2 py-1 border border-ink-300 text-ink-500
                       hover:border-red-500 hover:text-red-500 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>

      <p className="text-ink-500 text-sm leading-relaxed mb-3 line-clamp-3">
        {note.content || 'No content yet...'}
      </p>

      {note.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {note.tags.map(tag => (
            <span key={tag}
              className="text-xs font-mono px-2 py-0.5 border border-ink-300 
                         bg-cream-100 text-ink-600">
              #{tag}
            </span>
          ))}
        </div>
      )}

      <p className="text-xs font-mono text-ink-300 mt-2">
        {new Date(note.updatedAt).toLocaleDateString('en-US', {
          month: 'short', day: 'numeric', year: 'numeric'
        })}
      </p>
    </div>
  );
}