const STORAGE_KEY = 'notable_notes_v1';

export function loadNotes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveNotes(notes) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (e) {
    console.error('Failed to save notes:', e);
  }
}

export function generateId() {
  return `note_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
}