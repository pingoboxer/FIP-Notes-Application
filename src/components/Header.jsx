export default function Header({ onCreateNote, noteCount }) {
  return (
    <header style={{
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      background: 'rgba(15,15,26,0.8)',
      backdropFilter: 'blur(20px)',
      position: 'sticky',
      top: 0,
      zIndex: 10,
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
          <h1 style={{
            fontFamily: '"Syne", sans-serif',
            fontWeight: 800,
            fontSize: '24px',
            background: 'linear-gradient(135deg, #a78bfa, #38bdf8, #34d399)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0,
          }}>
            Notable
          </h1>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px', fontWeight: 500 }}>
            {noteCount} {noteCount === 1 ? 'note' : 'notes'}
          </span>
        </div>

        <button
          onClick={onCreateNote}
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
            color: '#fff',
            border: 'none',
            padding: '10px 22px',
            borderRadius: '50px',
            fontSize: '13px',
            fontWeight: 700,
            cursor: 'pointer',
            fontFamily: 'inherit',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 20px rgba(124,58,237,0.35)',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          New Note
        </button>
      </div>
    </header>
  );
}