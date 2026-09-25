import React from 'react';
const toPascal=(s)=>s.split('-').map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join('');
export function Icon({ name, size = 20, strokeWidth = 1.5, color = 'currentColor', style }) {
  const lib = typeof window !== 'undefined' && window.lucide && window.lucide.icons;
  let node = lib ? lib[toPascal(name)] : null;
  if (node && node[0] === 'svg') node = node[2];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: 'none', display: 'inline-block', verticalAlign: 'middle', ...style }}>
      {(node || []).map(([tag, attrs], i) => React.createElement(tag, { key: i, ...attrs }))}
    </svg>
  );
}
