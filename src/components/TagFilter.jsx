export default function TagFilter({ allTags, selectedTags, onToggleTag, onClearFilter }) {
  if (allTags.length === 0) return null;

  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: '8px',
      padding: '20px 0',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      marginBottom: '24px',
      alignItems: 'center',
    }}>
      <span style={{
        fontSize: '11px', color: 'rgba(255,255,255,0.3)',
        fontWeight: 700, textTransform: 'uppercase',
        letterSpacing: '0.1em', marginRight: '4px',
      }}>
        Filter
      </span>

      {allTags.map(tag => {
        const active = selectedTags.includes(tag);
        return (
          <button
            key={tag}
            onClick={() => onToggleTag(tag)}
            style={{
              padding: '6px 16px', borderRadius: '50px',
              fontSize: '12px', fontWeight: 600,
              cursor: 'pointer', fontFamily: 'inherit',
              transition: 'all 0.2s',
              background: active
                ? 'linear-gradient(135deg, #7c3aed, #2563eb)'
                : 'rgba(255,255,255,0.07)',
              border: active
                ? '1px solid transparent'
                : '1px solid rgba(255,255,255,0.12)',
              color: active ? '#fff' : 'rgba(255,255,255,0.5)',
              boxShadow: active ? '0 4px 12px rgba(124,58,237,0.3)' : 'none',
            }}
          >
            #{tag}
          </button>
        );
      })}

      {selectedTags.length > 0 && (
        <button
          onClick={onClearFilter}
          style={{
            background: 'none', border: 'none',
            color: 'rgba(255,255,255,0.3)', fontSize: '12px',
            cursor: 'pointer', textDecoration: 'underline', fontFamily: 'inherit',
          }}
        >
          Clear
        </button>
      )}
    </div>
  );
}