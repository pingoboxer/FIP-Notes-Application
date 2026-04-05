import { useState, useEffect } from 'react';
import Header from './components/Header';
import NotesList from './components/NotesList';
import NoteEditor from './components/NoteEditor';
import TagFilter from './components/TagFilter';
import { loadNotes, saveNotes, generateId } from './utils/storage';

export default function App() {
  const [notes, setNotes] = useState(() => loadNotes());
  const [editingNote, setEditingNote] = useState(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  // Collect all unique tags
  const allTags = [...new Set(notes.flatMap(n => n.tags))];

  // Filter notes by selected tags
  const filteredNotes = selectedTags.length === 0
    ? notes
    : notes.filter(n => selectedTags.every(t => n.tags.includes(t)));

  function handleCreateNote() {
    setEditingNote(null);
    setIsEditorOpen(true);
  }

  function handleEditNote(note) {
    setEditingNote(note);
    setIsEditorOpen(true);
  }

  function handleSaveNote({ title, content, tags }) {
    const now = new Date().toISOString();
    if (editingNote?.id) {
      setNotes(prev => prev.map(n =>
        n.id === editingNote.id
          ? { ...n, title, content, tags, updatedAt: now }
          : n
      ));
    } else {
      const newNote = {
        id: generateId(),
        title,
        content,
        tags,
        createdAt: now,
        updatedAt: now,
      };
      setNotes(prev => [newNote, ...prev]);
    }
    setIsEditorOpen(false);
    setEditingNote(null);
  }

  function handleDeleteNote(id) {
    if (window.confirm('Delete this note?')) {
      setNotes(prev => prev.filter(n => n.id !== id));
    }
  }

  function handleToggleTag(tag) {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  }

  return (
    <div className="min-h-screen">
      <Header onCreateNote={handleCreateNote} noteCount={notes.length} />

      <main className="max-w-5xl mx-auto px-4 sm:px-6">
        <TagFilter
          allTags={allTags}
          selectedTags={selectedTags}
          onToggleTag={handleToggleTag}
          onClearFilter={() => setSelectedTags([])}
        />
        <NotesList
          notes={filteredNotes}
          onEdit={handleEditNote}
          onDelete={handleDeleteNote}
        />
      </main>

      {isEditorOpen && (
        <NoteEditor
          note={editingNote}
          onSave={handleSaveNote}
          onCancel={() => { setIsEditorOpen(false); setEditingNote(null); }}
        />
      )}
    </div>
  );
}