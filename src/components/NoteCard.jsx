const CARD_THEMES = [
  { bg: 'linear-gradient(135deg, rgba(124,58,237,0.35), rgba(37,99,235,0.25))',  border: '1px solid rgba(167,139,250,0.3)', dot: '#a78bfa' },
  { bg: 'linear-gradient(135deg, rgba(13,148,136,0.35), rgba(6,182,212,0.25))',  border: '1px solid rgba(52,211,153,0.3)',  dot: '#34d399' },
  { bg: 'linear-gradient(135deg, rgba(217,119,6,0.4),   rgba(251,146,60,0.25))', border: '1px solid rgba(251,191,36,0.3)',  dot: '#fbbf24' },
  { bg: 'linear-gradient(135deg, rgba(219,39,119,0.35), rgba(239,68,68,0.25))',  border: '1px solid rgba(251,113,133,0.3)', dot: '#f472b6' },
  { bg: 'linear-gradient(135deg, rgba(37,99,235,0.35),  rgba(99,102,241,0.25))', border: '1px solid rgba(147,197,253,0.3)', dot: '#60a5fa' },
  { bg: 'linear-gradient(135deg, rgba(22,163,74,0.35),  rgba(16,185,129,0.25))', border: '1px solid rgba(74,222,128,0.3)',  dot: '#4ade80' },
];

const TAG_COLORS = [
  { bg: 'rgba(167,139,250,0.25)', color: '#c4b5fd' },
  { bg: 'rgba(52,211,153,0.2)',   color: '#6ee7b7' },
  { bg: 'rgba(251,191,36,0.2)',   color: '#fcd34d' },
  { bg: 'rgba(251,113,133,0.2)',  color: '#fda4af' },
  { bg: 'rgba(96,165,250,0.2)',   color: '#93c5fd'  },
  { bg: 'rgba(74,222,128,0.2)',   color: '#86efac'  },
];

function hashIndex(str, len) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % len;
  return h;
}

export default function NoteCard({ note, onEdit, onDelete }) {
  const theme = CARD_THEMES[hashIndex(note.id, CARD_THEMES.length)];
  const date = new Date(note.updatedAt).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric',
  });

  return (
    <div
      className="card-animate"
      style={{
        background: theme.bg,
        border: theme.border,
        borderRadius: '18px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        backdropFilter: 'blur(12px)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Glow dot */}
      <div style={{
        width: 9, height: 9, borderRadius: '50%',
        background: theme.dot, boxShadow: `0 0 8px ${theme.dot}`,
      }} />

      {/* Title */}
      <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '15px', lineHeight: 1.35, margin: 0 }}>
        {note.title || 'Untitled'}
      </h3>

      {/* Content preview */}
      <p style={{
        color: 'rgba(255,255,255,0.55)', fontSize: '13px',
        lineHeight: 1.7, margin: 0, flex: 1,
        display: '-webkit-box', WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical', overflow: 'hidden',
      }}>
        {note.content || 'No content yet...'}
      </p>

      {/* Tags */}
      {note.tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {note.tags.map(tag => {
            const tc = TAG_COLORS[hashIndex(tag, TAG_COLORS.length)];
            return (
              <span key={tag} style={{
                background: tc.bg, color: tc.color,
                fontSize: '11px', fontWeight: 600,
                padding: '3px 10px', borderRadius: '50px',
              }}>
                #{tag}
              </span>
            );
          })}
        </div>
      )}

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', fontWeight: 500 }}>
          {date}
        </span>
        <div style={{ display: 'flex', gap: '6px' }}>
          {[['Edit', () => onEdit(note)], ['Delete', () => onDelete(note.id)]].map(([label, handler]) => (
            <button
              key={label}
              onClick={handler}
              style={{
                fontSize: '11px', padding: '5px 12px', borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.55)',
                cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s',
              }}
              onMouseEnter={e => { e.target.style.background = 'rgba(255,255,255,0.18)'; e.target.style.color = '#fff'; }}
              onMouseLeave={e => { e.target.style.background = 'rgba(255,255,255,0.08)'; e.target.style.color = 'rgba(255,255,255,0.55)'; }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}