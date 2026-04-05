
import NoteCard from './NoteCard';

export default function NotesList({ notes, onEdit, onDelete }) {
  if (notes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="font-display text-4xl text-ink-200 italic mb-3">No notes yet.</p>
        <p className="text-sm text-ink-300 font-body">
          Click <strong>+ New Note</strong> to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
      {notes.map(note => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}