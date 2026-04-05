import NoteCard from './NoteCard';

export default function NotesList({ notes, onEdit, onDelete }) {
  if (notes.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 0' }}>
        <p style={{
          fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: '40px',
          background: 'linear-gradient(135deg, #a78bfa, #38bdf8)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          No notes yet.
        </p>
        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '14px', marginTop: '12px' }}>
          Click <strong style={{ color: 'rgba(255,255,255,0.5)' }}>New Note</strong> to get started.
        </p>
      </div>
    );
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '16px',
      paddingBottom: '60px',
    }}>
      {notes.map(note => (
        <NoteCard key={note.id} note={note} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}