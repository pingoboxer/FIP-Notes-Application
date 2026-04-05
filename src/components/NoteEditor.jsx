import { useState, useEffect } from 'react';

export default function NoteEditor({ note, onSave, onCancel }) {
  const [title, setTitle]       = useState(note?.title   || '');
  const [content, setContent]   = useState(note?.content || '');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags]         = useState(note?.tags    || []);

  useEffect(() => {
    setTitle(note?.title || '');
    setContent(note?.content || '');
    setTags(note?.tags || []);
  }, [note]);

  function addTag(e) {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const t = tagInput.trim().toLowerCase().replace(/\s+/g, '-');
      if (t && !tags.includes(t)) setTags([...tags, t]);
      setTagInput('');
    }
  }

  const field = {
    width: '100%',
    background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '12px',
    color: '#fff',
    padding: '11px 15px',
    fontSize: '14px',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 50,
      background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px',
    }}>
      <div style={{
        background: 'linear-gradient(160deg, #1a1030, #0f1f2e)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '24px', width: '100%', maxWidth: '500px',
        overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
      }}>
        {/* Header */}
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '16px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {note?.id ? 'Edit Note' : 'New Note'}
          </span>
          <button onClick={onCancel} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontSize: '24px', cursor: 'pointer', lineHeight: 1, padding: 0 }}>×</button>
        </div>

        {/* Fields */}
        <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <input
            type="text" placeholder="Note title..." value={title}
            onChange={e => setTitle(e.target.value)}
            style={{ ...field, fontSize: '20px', fontWeight: 700 }}
            onFocus={e => e.target.style.borderColor = 'rgba(167,139,250,0.6)'}
            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
          />
          <textarea
            placeholder="Write your note here..." value={content}
            onChange={e => setContent(e.target.value)} rows={6}
            style={{ ...field, resize: 'none', lineHeight: 1.7 }}
            onFocus={e => e.target.style.borderColor = 'rgba(167,139,250,0.6)'}
            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
          />

          {/* Tags */}
          <div>
            {tags.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '10px' }}>
                {tags.map(tag => (
                  <span key={tag} style={{
                    background: 'rgba(124,58,237,0.3)', color: '#c4b5fd',
                    fontSize: '12px', fontWeight: 600, padding: '4px 11px',
                    borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '6px',
                  }}>
                    #{tag}
                    <button
                      onClick={() => setTags(tags.filter(t => t !== tag))}
                      style={{ background: 'none', border: 'none', color: '#c4b5fd', cursor: 'pointer', fontSize: '15px', lineHeight: 1, padding: 0 }}
                    >×</button>
                  </span>
                ))}
              </div>
            )}
            <input
              type="text" placeholder="Add a tag, press Enter..." value={tagInput}
              onChange={e => setTagInput(e.target.value)} onKeyDown={addTag}
              style={{ ...field, fontSize: '13px' }}
              onFocus={e => e.target.style.borderColor = 'rgba(167,139,250,0.6)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
            />
          </div>
        </div>

        {/* Footer */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '16px 22px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button onClick={onCancel} style={{
            padding: '10px 20px', borderRadius: '50px', fontSize: '13px', fontWeight: 600,
            border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)',
            color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontFamily: 'inherit',
          }}>
            Cancel
          </button>
          <button onClick={() => onSave({ title, content, tags })} style={{
            padding: '10px 24px', borderRadius: '50px', fontSize: '13px', fontWeight: 600,
            background: 'linear-gradient(135deg, #7c3aed, #2563eb)', color: '#fff',
            border: 'none', cursor: 'pointer', fontFamily: 'inherit',
            boxShadow: '0 4px 15px rgba(124,58,237,0.4)',
          }}>
            Save Note
          </button>
        </div>
      </div>
    </div>
  );
}