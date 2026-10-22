import { typeStyles, fontFamilies } from '../tokens/typography.js';

const scale = [
  'caption01','label01','helperText01','legal01',
  'bodyCompact01','bodyCompact02','body01','body02',
  'heading01','heading02','heading03','heading04','heading05','heading06','heading07',
  'display01','display02','display03','display04'
];

export const TypeScale = () => (
  <div style={{ fontFamily: fontFamilies.sans }}>
    {scale.map(name => {
      const s = typeStyles[name];
      if (!s) return null;
      return (
        <div key={name} style={{ borderBottom: '1px solid #e0e0e0', padding: '0.75rem 0' }}>
          <div style={{ fontSize: 11, fontFamily: fontFamilies.mono, color: '#6f6f6f' }}>
            {name} — {s.fontSize} / {s.lineHeight} / {s.fontWeight}
          </div>
          <div style={{ ...s }}>The quick brown fox jumps over the lazy dog</div>
        </div>
      );
    })}
  </div>
);

export const Families = () => (
  <div>
    {Object.entries(fontFamilies).map(([k, v]) => (
      <div key={k} style={{ padding: '0.75rem 0', borderBottom: '1px solid #e0e0e0' }}>
        <div style={{ fontSize: 11, fontFamily: fontFamilies.mono, color: '#6f6f6f' }}>{k}</div>
        <div style={{ fontFamily: v, fontSize: 24 }}>IBM Plex — 0123456789</div>
      </div>
    ))}
  </div>
);
