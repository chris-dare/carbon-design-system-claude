import colors from '../tokens/colors.js';
import { themes } from '../tokens/themes.js';

const families = ['blue', 'gray', 'red', 'magenta', 'purple', 'cyan', 'teal', 'green', 'coolGray', 'warmGray', 'orange', 'yellow'];
const steps = ['10','20','30','40','50','60','70','80','90','100'];

// The raw Carbon swatch palette — the source every theme token resolves to.
export const Palette = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
    {families.map(f => (
      <div key={f}>
        <div style={{ fontSize: 12, marginBottom: 4, fontFamily: 'IBM Plex Sans' }}>{f}</div>
        <div style={{ display: 'flex' }}>
          {steps.map(s => {
            const hex = colors[f + s];
            if (!hex) return null;
            return (
              <div key={s} style={{ background: hex, width: 56, height: 48, color: Number(s) >= 60 ? '#fff' : '#161616', fontSize: 10, padding: 4, fontFamily: 'IBM Plex Mono' }}>
                {s}<br />{hex}
              </div>
            );
          })}
        </div>
      </div>
    ))}
  </div>
);

// Semantic background/text/border tokens, resolved per theme.
const semantic = ['background', 'layer01', 'layer02', 'field01', 'textPrimary', 'textSecondary', 'textHelper', 'borderSubtle01', 'borderStrong01', 'linkPrimary', 'supportError', 'supportSuccess', 'supportWarning', 'supportInfo'];

export const SemanticTokens = () => (
  <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', fontFamily: 'IBM Plex Sans' }}>
    {['white', 'g10', 'g90', 'g100'].map(name => (
      <div key={name}>
        <div style={{ fontSize: 12, marginBottom: 8, fontWeight: 600 }}>{name}</div>
        {semantic.map(t => (
          <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
            <span style={{ background: themes[name][t], width: 24, height: 24, border: '1px solid #8d8d8d', display: 'inline-block' }} />
            <span style={{ fontSize: 11, fontFamily: 'IBM Plex Mono' }}>{t}</span>
          </div>
        ))}
      </div>
    ))}
  </div>
);
