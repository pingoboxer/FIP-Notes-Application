
import { useState, useEffect } from 'react';

export default function NoteEditor({ note, onSave, onCancel }) {
  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState(note?.tags || []);

  useEffect(() => {
    setTitle(note?.title || '');
    setContent(note?.content || '');
    setTags(note?.tags || []);
  }, [note]);

  function addTag(e) {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const trimmed = tagInput.trim().toLowerCase().replace(/\s+/g, '-');
      if (trimmed && !tags.includes(trimmed)) {
        setTags([...tags, trimmed]);
      }
      setTagInput('');
    }
  }

  function removeTag(tag) {
    setTags(tags.filter(t => t !== tag));
  }

  function handleSave() {
    onSave({ title, content, tags });
  }

  return (
    <div className="fixed inset-0 bg-ink-900/60 backdrop-blur-sm z-50 
                    flex items-center justify-center p-4">
      <div className="bg-cream-50 border-2 border-ink-900 shadow-[6px_6px_0px_#1a1209]
                      w-full max-w-lg">
        {/* Editor Header */}
        <div className="border-b-2 border-ink-900 px-5 py-3 flex items-center justify-between">
          <span className="font-mono text-xs text-ink-500 uppercase tracking-widest">
            {note?.id ? 'Edit Note' : 'New Note'}
          </span>
          <button onClick={onCancel}
            className="text-ink-400 hover:text-ink-900 transition-colors text-xl leading-none">
            ×
          </button>
        </div>

        {/* Fields */}
        <div className="p-5 space-y-4">
          <input
            type="text"
            placeholder="Note title..."
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full bg-transparent border-b-2 border-ink-200 focus:border-ink-900
                       font-display text-xl text-ink-900 pb-2 outline-none
                       placeholder:text-ink-200 transition-colors"
          />

          <textarea
            placeholder="Write your note here..."
            value={content}
            onChange={e => setContent(e.target.value)}
            rows={6}
            className="w-full bg-cream-100 border border-ink-200 focus:border-ink-900
                       p-3 text-sm text-ink-700 outline-none resize-none
                       font-body leading-relaxed placeholder:text-ink-300 transition-colors"
          />

          {/* Tag input */}
          <div>
            <div className="flex flex-wrap gap-1 mb-2">
              {tags.map(tag => (
                <span key={tag}
                  className="inline-flex items-center gap-1 text-xs font-mono
                             px-2 py-0.5 border border-ink-300 bg-cream-100 text-ink-600">
                  #{tag}
                  <button onClick={() => removeTag(tag)}
                    className="text-ink-400 hover:text-red-500 transition-colors">
                    ×
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              placeholder="Add tag, press Enter..."
              value={tagInput}
              onChange={e => setTagInput(e.target.value)}
              onKeyDown={addTag}
              className="w-full bg-transparent border-b border-ink-200 focus:border-ink-700
                         text-sm text-ink-700 pb-1 outline-none font-mono
                         placeholder:text-ink-300 transition-colors"
            />
          </div>
        </div>

        {/* Footer actions */}
        <div className="border-t-2 border-ink-900 px-5 py-3 flex justify-end gap-2">
          <button onClick={onCancel}
            className="px-4 py-2 text-sm border border-ink-300 text-ink-500
                       hover:border-ink-700 hover:text-ink-900 transition-colors">
            Cancel
          </button>
          <button onClick={handleSave}
            className="px-4 py-2 text-sm bg-ink-900 text-cream-50 border-2 border-ink-900
                       shadow-[2px_2px_0px_#6b5b42] hover:shadow-none
                       hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
            Save Note
          </button>
        </div>
      </div>
    </div>
  );
}