/* @ds-bundle: {"format":4,"namespace":"CohereDesignSystem_1d137d","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"BlogFilterChip","sourcePath":"components/editorial/BlogFilterChip.jsx"},{"name":"ResearchTable","sourcePath":"components/editorial/ResearchTable.jsx"},{"name":"FooterNewsletter","sourcePath":"components/footer/FooterNewsletter.jsx"},{"name":"ContactFormCard","sourcePath":"components/forms/ContactFormCard.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"CapabilityCard","sourcePath":"components/marketing/CapabilityCard.jsx"},{"name":"DarkFeatureBand","sourcePath":"components/marketing/DarkFeatureBand.jsx"},{"name":"HeroPhotoCard","sourcePath":"components/marketing/HeroPhotoCard.jsx"},{"name":"ProductCard","sourcePath":"components/marketing/ProductCard.jsx"},{"name":"TrustLogoStrip","sourcePath":"components/marketing/TrustLogoStrip.jsx"},{"name":"AnnouncementBar","sourcePath":"components/navigation/AnnouncementBar.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"AgentConsoleCard","sourcePath":"components/product/AgentConsoleCard.jsx"},{"name":"StatusChip","sourcePath":"components/product/StatusChip.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"2a9b09d4bbc7","components/core/Icon.jsx":"8ac866ab0f36","components/editorial/BlogFilterChip.jsx":"984ed4892311","components/editorial/ResearchTable.jsx":"b0fbeae5d288","components/footer/FooterNewsletter.jsx":"c4aa3689d465","components/forms/ContactFormCard.jsx":"694a5fd06665","components/forms/TextField.jsx":"e9d31a37bcc3","components/marketing/CapabilityCard.jsx":"03331a57c682","components/marketing/DarkFeatureBand.jsx":"47e654090bd4","components/marketing/HeroPhotoCard.jsx":"b47fe2375e82","components/marketing/ProductCard.jsx":"fedc12f97149","components/marketing/TrustLogoStrip.jsx":"9deb5f27e56d","components/navigation/AnnouncementBar.jsx":"6cd46b522b1a","components/navigation/NavBar.jsx":"03e0af7f885f","components/product/AgentConsoleCard.jsx":"b1520c5ea3ba","components/product/StatusChip.jsx":"8253ef314ce7","ui_kits/website/Blog.jsx":"b3d9d7b71c3d","ui_kits/website/Contact.jsx":"f206ea75c829","ui_kits/website/Home.jsx":"e12289fa1315","ui_kits/website/ProductPage.jsx":"652e6f8af6a5","ui_kits/website/Research.jsx":"5b6bf6dac4e1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CohereDesignSystem_1d137d = window.CohereDesignSystem_1d137d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
const toPascal = s => s.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
function Icon({
  name,
  size = 20,
  strokeWidth = 1.5,
  color = 'currentColor',
  style
}) {
  const lib = typeof window !== 'undefined' && window.lucide && window.lucide.icons;
  let node = lib ? lib[toPascal(name)] : null;
  if (node && node[0] === 'svg') node = node[2];
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      flex: 'none',
      display: 'inline-block',
      verticalAlign: 'middle',
      ...style
    }
  }, (node || []).map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  fontFamily: 'var(--font-sans)',
  border: 0,
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), opacity var(--duration-fast)'
};
function Button({
  variant = 'primary',
  onDark = false,
  icon,
  children,
  disabled,
  href,
  onClick,
  type = 'button',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const v = {
    primary: {
      background: onDark ? '#fff' : hover ? 'var(--cohere-black)' : 'var(--cohere-primary)',
      color: onDark ? 'var(--cohere-primary)' : '#fff',
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.71,
      padding: '12px 24px',
      borderRadius: 32,
      opacity: onDark && hover ? 0.88 : 1
    },
    secondary: {
      background: 'transparent',
      color: onDark ? '#fff' : 'var(--cohere-ink)',
      fontSize: 16,
      lineHeight: 1.5,
      padding: '8px 0',
      borderRadius: 4,
      textDecoration: 'underline',
      textUnderlineOffset: 4,
      textDecorationThickness: hover ? 2 : 1
    },
    'pill-outline': {
      background: hover ? onDark ? 'rgba(255,255,255,0.08)' : 'rgba(23,23,28,0.04)' : 'transparent',
      color: onDark ? '#fff' : 'var(--cohere-primary)',
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.71,
      padding: '6px 12px',
      borderRadius: 30,
      boxShadow: 'inset 0 0 0 1px ' + (onDark ? 'rgba(255,255,255,0.6)' : 'var(--cohere-primary)')
    }
  }[variant];
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    type: href ? undefined : type,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    "aria-disabled": disabled || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...v,
      ...(disabled ? {
        opacity: 0.4,
        cursor: 'not-allowed'
      } : null),
      ...style
    }
  }, children, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: variant === 'secondary' ? 18 : 16
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/editorial/BlogFilterChip.jsx
try { (() => {
function BlogFilterChip({
  children,
  active = false,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    "aria-pressed": active,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 32,
      lineHeight: 1.2,
      letterSpacing: -0.32,
      fontWeight: 400,
      padding: '8px 14px',
      borderRadius: 8,
      cursor: 'pointer',
      border: '1px solid var(--cohere-coral)',
      background: active ? 'var(--cohere-coral)' : 'rgba(255,119,89,0.06)',
      color: active ? 'var(--cohere-ink)' : 'var(--cohere-coral)',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, children);
}
Object.assign(__ds_scope, { BlogFilterChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/BlogFilterChip.jsx", error: String((e && e.message) || e) }); }

// components/editorial/ResearchTable.jsx
try { (() => {
function ResearchTable({
  rows = [],
  onRowClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-rule)'
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: r.href || '#',
    onClick: e => {
      if (onRowClick) {
        e.preventDefault();
        onRowClick(r);
      }
    },
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,2fr) minmax(0,1fr) 140px',
      gap: 24,
      alignItems: 'center',
      padding: '28px 0',
      borderBottom: '1px solid var(--border-rule)',
      color: 'var(--cohere-ink)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      lineHeight: 1.4,
      textWrap: 'pretty'
    }
  }, r.title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, (r.topics || []).map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontSize: 12,
      lineHeight: 1.4,
      padding: '4px 10px',
      borderRadius: 30,
      border: '1px solid var(--cohere-ink)'
    }
  }, t))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-meta)',
      textAlign: 'right'
    }
  }, r.date))));
}
Object.assign(__ds_scope, { ResearchTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/ResearchTable.jsx", error: String((e && e.message) || e) }); }

// components/footer/FooterNewsletter.jsx
try { (() => {
function FooterNewsletter({
  label = 'AI moves fast',
  headline = 'Stay ahead with our newsletter',
  legal,
  columns = [],
  onSubscribe
}) {
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--cohere-primary)',
      color: '#fff',
      padding: '80px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,2fr)',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--cohere-coral)',
      fontSize: 14
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      lineHeight: 1.2,
      letterSpacing: -0.32,
      textWrap: 'balance'
    }
  }, headline), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (email) {
        setDone(true);
        onSubscribe && onSubscribe(email);
      }
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid rgba(255,255,255,0.32)',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: done ? '' : email,
    onChange: e => setEmail(e.target.value),
    placeholder: done ? 'Thanks — you are subscribed.' : 'Email address',
    type: "email",
    style: {
      flex: 1,
      background: 'transparent',
      border: 0,
      outline: 'none',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      padding: '12px 0'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    "aria-label": "Subscribe",
    style: {
      background: 'none',
      border: 0,
      color: '#fff',
      cursor: 'pointer',
      padding: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 18
  }))), legal && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      lineHeight: 1.4,
      color: 'var(--cohere-muted)'
    }
  }, legal)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + Math.max(columns.length, 1) + ',minmax(0,1fr))',
      gap: 24
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: '#fff',
      marginBottom: 4
    }
  }, c.title), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 12,
      lineHeight: 1.4,
      color: 'var(--cohere-muted)',
      textDecoration: 'none'
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      fontSize: 12,
      color: 'var(--cohere-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      color: '#fff',
      letterSpacing: -0.5
    }
  }, "cohere"), /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Cohere Inc.")));
}
Object.assign(__ds_scope, { FooterNewsletter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/footer/FooterNewsletter.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function TextField({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  multiline = false,
  error,
  required,
  name,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontSize: 14,
      lineHeight: 1.4,
      color: 'var(--cohere-ink)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", null, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-meta)'
    }
  }, " *")), /*#__PURE__*/React.createElement(Tag, {
    name: name,
    type: multiline ? undefined : type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    rows: multiline ? 4 : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      lineHeight: 1.5,
      color: 'var(--cohere-ink)',
      padding: '12px 16px',
      borderRadius: 4,
      background: '#fff',
      outline: 'none',
      resize: 'vertical',
      border: '1px solid ' + (error ? 'var(--cohere-error)' : focus ? 'var(--cohere-form-focus)' : 'var(--border-rule)')
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--cohere-error)'
    }
  }, error));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/forms/ContactFormCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ContactFormCard({
  title = 'Talk to our team',
  fields,
  submitLabel = 'Submit',
  onSubmit,
  legal
}) {
  const f = fields || [[{
    label: 'First name',
    required: true
  }, {
    label: 'Last name',
    required: true
  }], [{
    label: 'Work email',
    type: 'email',
    required: true
  }, {
    label: 'Company',
    required: true
  }], [{
    label: 'How can we help?',
    multiline: true
  }]];
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(e);
    },
    style: {
      background: '#fff',
      borderRadius: 22,
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      color: 'var(--cohere-ink)'
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 24,
      lineHeight: 1.3,
      fontWeight: 400
    }
  }, title), f.map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: 16
    }
  }, row.map(fld => /*#__PURE__*/React.createElement(__ds_scope.TextField, _extends({
    key: fld.label
  }, fld))))), legal && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      lineHeight: 1.4,
      color: 'var(--text-secondary)'
    }
  }, legal), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit"
  }, submitLabel)));
}
Object.assign(__ds_scope, { ContactFormCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ContactFormCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CapabilityCard.jsx
try { (() => {
function CapabilityCard({
  icon,
  title,
  children,
  linkLabel,
  href = '#',
  onDark = false,
  boxed = false
}) {
  const fg = onDark ? '#fff' : 'var(--cohere-ink)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      borderRadius: 4,
      color: fg,
      borderTop: boxed ? 0 : '1px solid ' + (onDark ? 'rgba(255,255,255,0.16)' : 'var(--border-rule)'),
      background: boxed ? onDark ? 'rgba(255,255,255,0.06)' : 'var(--surface-card)' : 'transparent',
      boxShadow: boxed ? 'inset 0 0 0 1px ' + (onDark ? 'rgba(255,255,255,0.16)' : 'var(--border-card)') : 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 32,
    strokeWidth: 1.25
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: icon ? '12px 0 0' : 0,
      fontSize: 24,
      lineHeight: 1.3,
      fontWeight: 400
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.5,
      color: onDark ? 'rgba(255,255,255,0.72)' : 'var(--text-secondary)'
    }
  }, children), linkLabel && /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color: fg,
      fontSize: 16,
      textUnderlineOffset: 4
    }
  }, linkLabel));
}
Object.assign(__ds_scope, { CapabilityCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CapabilityCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/DarkFeatureBand.jsx
try { (() => {
function DarkFeatureBand({
  tone = 'green',
  eyebrow,
  title,
  lead,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: tone === 'navy' ? 'var(--cohere-dark-navy)' : 'var(--cohere-deep-green)',
      color: '#fff',
      borderRadius: 22,
      padding: 80,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      letterSpacing: 0.28,
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.64)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 48,
      lineHeight: 1.2,
      letterSpacing: -0.48,
      fontWeight: 400,
      maxWidth: 820,
      textWrap: 'balance'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      lineHeight: 1.4,
      color: 'rgba(255,255,255,0.72)',
      maxWidth: 640
    }
  }, lead), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, children));
}
Object.assign(__ds_scope, { DarkFeatureBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/DarkFeatureBand.jsx", error: String((e && e.message) || e) }); }

// components/marketing/HeroPhotoCard.jsx
try { (() => {
function HeroPhotoCard({
  src,
  alt = '',
  label = 'Photography',
  tone = 'stone',
  height = 480,
  radius = 22,
  children,
  style
}) {
  const bg = {
    stone: 'var(--cohere-soft-stone)',
    blue: 'var(--cohere-pale-blue)',
    green: 'var(--cohere-deep-green)',
    navy: 'var(--cohere-dark-navy)'
  }[tone];
  const dark = tone === 'green' || tone === 'navy';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      borderRadius: radius,
      overflow: 'hidden',
      background: bg,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 20,
      bottom: 18,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: 0.28,
      textTransform: 'uppercase',
      color: dark ? 'rgba(255,255,255,0.6)' : 'var(--text-tertiary)'
    }
  }, label, " slot"), children && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 24,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-start'
    }
  }, children));
}
Object.assign(__ds_scope, { HeroPhotoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/HeroPhotoCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ProductCard.jsx
try { (() => {
function ProductCard({
  eyebrow,
  name,
  description,
  ctaLabel = 'Learn more',
  onCta,
  features = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cohere-soft-stone)',
      color: 'var(--cohere-ink)',
      borderRadius: 8,
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: 0.28,
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 32,
      lineHeight: 1.2,
      letterSpacing: -0.32,
      fontWeight: 400
    }
  }, name), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.5,
      color: 'var(--text-secondary)'
    }
  }, description), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "pill-outline",
    onClick: onCta
  }, ctaLabel)), features.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-rule)',
      paddingTop: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, features.map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 14,
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    style: {
      marginTop: 1
    }
  }), f))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TrustLogoStrip.jsx
try { (() => {
function TrustLogoStrip({
  caption,
  logos = [],
  onDark = false
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 40px',
      textAlign: 'center',
      color: onDark ? '#fff' : 'var(--cohere-ink)'
    }
  }, caption && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 40px',
      fontSize: 14,
      lineHeight: 1.4
    }
  }, caption), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '32px 64px'
    }
  }, logos.map((l, i) => typeof l === 'string' ? /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: 22,
      letterSpacing: -0.2,
      color: onDark ? '#fff' : '#000',
      opacity: 0.9
    }
  }, l) : /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex'
    }
  }, l))));
}
Object.assign(__ds_scope, { TrustLogoStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TrustLogoStrip.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AnnouncementBar.jsx
try { (() => {
function AnnouncementBar({
  children,
  linkLabel = 'Learn more',
  href = '#',
  onClose
}) {
  const [open, setOpen] = React.useState(true);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 36,
      background: 'var(--cohere-black)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontSize: 12,
      lineHeight: 1.4,
      padding: '0 48px'
    }
  }, /*#__PURE__*/React.createElement("span", null, children), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color: '#fff',
      textDecoration: 'underline',
      textUnderlineOffset: 3
    }
  }, linkLabel), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close",
    onClick: () => {
      setOpen(false);
      onClose && onClose();
    },
    style: {
      position: 'absolute',
      right: 16,
      top: 0,
      height: 36,
      background: 'none',
      border: 0,
      color: '#fff',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { AnnouncementBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AnnouncementBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  links = ['Products', 'Solutions', 'Research', 'Resources', 'Company'],
  active,
  onNavigate,
  onDark = false,
  ctaLabel = 'Request a demo',
  onCta
}) {
  const fg = onDark ? '#fff' : 'var(--cohere-ink)';
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      height: 64,
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      padding: '0 40px',
      color: fg,
      background: onDark ? 'transparent' : 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('home');
    },
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      letterSpacing: -0.5,
      color: onDark ? '#fff' : '#000',
      textDecoration: 'none',
      justifySelf: 'start'
    }
  }, "cohere"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(l);
    },
    style: {
      fontSize: 14,
      color: fg,
      textDecoration: active === l ? 'underline' : 'none',
      textUnderlineOffset: 6
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      justifySelf: 'end'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14,
      color: fg,
      textDecoration: 'none'
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    onDark: onDark,
    onClick: onCta
  }, ctaLabel)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/product/StatusChip.jsx
try { (() => {
function StatusChip({
  children,
  tone = 'neutral',
  dot = true
}) {
  const c = {
    neutral: 'rgba(255,255,255,0.72)',
    live: '#7be38f',
    warm: 'var(--cohere-coral)',
    info: '#8fb3ff'
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 8px',
      borderRadius: 9999,
      background: 'rgba(255,255,255,0.08)',
      color: 'rgba(255,255,255,0.88)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 0.28,
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 9999,
      background: c
    }
  }), children);
}
Object.assign(__ds_scope, { StatusChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/StatusChip.jsx", error: String((e && e.message) || e) }); }

// components/product/AgentConsoleCard.jsx
try { (() => {
function AgentConsoleCard({
  agent = 'Agent',
  status = 'Running',
  integrations = [],
  prompt,
  responses = [],
  width = 380,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--cohere-primary)',
      color: '#fff',
      borderRadius: 8,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, agent), /*#__PURE__*/React.createElement(__ds_scope.StatusChip, {
    tone: "live"
  }, status)), integrations.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, integrations.map(i => /*#__PURE__*/React.createElement(__ds_scope.StatusChip, {
    key: i,
    dot: false
  }, i))), prompt && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      border: '1px solid rgba(255,255,255,0.16)',
      borderRadius: 8,
      padding: '10px 12px',
      fontSize: 14,
      color: 'rgba(255,255,255,0.72)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, prompt), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up",
    size: 16
  })), responses.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'rgba(255,255,255,0.06)',
      borderRadius: 8,
      padding: 14,
      fontSize: 14,
      lineHeight: 1.4
    }
  }, r.title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 0.28,
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.56)',
      marginBottom: 6
    }
  }, r.title), r.body)));
}
Object.assign(__ds_scope, { AgentConsoleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/AgentConsoleCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Blog.jsx
try { (() => {
function BlogScreen() {
  const {
    BlogFilterChip,
    HeroPhotoCard,
    Button
  } = window.CohereDesignSystem_1d137d;
  const cats = ['All', 'Product', 'Research', 'Company', 'Customers'];
  const [cat, setCat] = React.useState('All');
  const posts = [{
    c: 'Product',
    t: 'Article title placeholder for a product announcement',
    d: 'Sep 18, 2026',
    tone: 'blue'
  }, {
    c: 'Research',
    t: 'Article title placeholder for a research write-up',
    d: 'Sep 10, 2026',
    tone: 'stone'
  }, {
    c: 'Company',
    t: 'Article title placeholder for company news',
    d: 'Aug 30, 2026',
    tone: 'navy'
  }, {
    c: 'Customers',
    t: 'Article title placeholder for a customer story',
    d: 'Aug 21, 2026',
    tone: 'stone'
  }, {
    c: 'Product',
    t: 'Another product article title placeholder',
    d: 'Aug 12, 2026',
    tone: 'green'
  }, {
    c: 'Research',
    t: 'Another research article title placeholder',
    d: 'Aug 02, 2026',
    tone: 'blue'
  }].filter(p => cat === 'All' || p.c === cat);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: '96px 40px 80px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 40px',
      fontFamily: 'var(--font-display)',
      fontSize: 72,
      lineHeight: 1,
      letterSpacing: -1.44,
      fontWeight: 400
    }
  }, "Blog"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginBottom: 64
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(BlogFilterChip, {
    key: c,
    active: cat === c,
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: '48px 24px'
    }
  }, posts.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      textDecoration: 'none',
      color: 'var(--cohere-ink)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(HeroPhotoCard, {
    tone: p.tone,
    label: "Article image",
    height: 240,
    radius: 8
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--cohere-coral)',
      border: '1px solid var(--cohere-coral-soft)',
      borderRadius: 8,
      padding: '2px 8px'
    }
  }, p.c), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-meta)'
    }
  }, p.d)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      lineHeight: 1.3
    }
  }, p.t)))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 96,
      background: 'var(--cohere-pale-blue)',
      borderRadius: 22,
      padding: 56,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 48,
      lineHeight: 1.2,
      letterSpacing: -0.48,
      fontWeight: 400
    }
  }, "Build with our models"), /*#__PURE__*/React.createElement(Button, null, "Try the Playground")), /*#__PURE__*/React.createElement(HeroPhotoCard, {
    tone: "blue",
    label: "3D abstract",
    height: 280,
    style: {
      background: 'rgba(255,255,255,0.5)'
    }
  })));
}
window.BlogScreen = BlogScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Blog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
function ContactScreen() {
  const {
    ContactFormCard
  } = window.CohereDesignSystem_1d137d;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: 'var(--cohere-deep-green)',
      color: '#fff',
      padding: '96px 40px 120px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 60,
      lineHeight: 1,
      letterSpacing: -1.2,
      fontWeight: 400
    }
  }, "Talk to our team"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      lineHeight: 1.4,
      color: 'rgba(255,255,255,0.72)',
      maxWidth: 440
    }
  }, "Tell us about your use case and we'll connect you with the right specialist.")), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      color: 'var(--cohere-ink)',
      borderRadius: 22,
      padding: 32,
      fontSize: 24,
      lineHeight: 1.3
    }
  }, "Thanks. A member of our team will be in touch.") : /*#__PURE__*/React.createElement(ContactFormCard, {
    title: null,
    onSubmit: () => setSent(true),
    legal: "By submitting this form, you agree to our privacy policy."
  }));
}
window.ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function HomeScreen({
  go
}) {
  const {
    Button,
    HeroPhotoCard,
    AgentConsoleCard,
    TrustLogoStrip,
    CapabilityCard
  } = window.CohereDesignSystem_1d137d;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '120px 40px 64px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 96,
      lineHeight: 1,
      letterSpacing: -1.92,
      fontWeight: 400,
      color: '#000',
      maxWidth: 1100,
      textWrap: 'balance'
    }
  }, "The all-in-one platform for private and secure AI"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      lineHeight: 1.4,
      maxWidth: 560,
      color: 'var(--text-secondary)'
    }
  }, "Models, search and agents built for the enterprise, deployed where your data lives."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('Contact')
  }, "Request a demo"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "arrow-right",
    onClick: () => go('Products')
  }, "Explore products"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 40px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,2fr) minmax(0,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(HeroPhotoCard, {
    tone: "blue",
    label: "Product media",
    height: 560
  }, /*#__PURE__*/React.createElement(AgentConsoleCard, {
    agent: "Research agent",
    status: "Running",
    integrations: ['Drive', 'Salesforce', 'Slack'],
    prompt: "Summarize this quarter's contract renewals",
    responses: [{
      title: 'Response',
      body: 'Generated response placeholder.'
    }]
  })), /*#__PURE__*/React.createElement(HeroPhotoCard, {
    label: "Photography",
    height: 560
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 80
    }
  }), /*#__PURE__*/React.createElement(TrustLogoStrip, {
    caption: "Trusted by industry leaders and developers worldwide",
    logos: ['Logo', 'Logo', 'Logo', 'Logo', 'Logo', 'Logo']
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 48,
      lineHeight: 1.2,
      letterSpacing: -0.48,
      fontWeight: 400,
      maxWidth: 760
    }
  }, "AI that fits the way your business already works"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(CapabilityCard, {
    icon: "shield-check",
    title: "Private by default",
    linkLabel: "Security",
    href: "#"
  }, "Deploy in your VPC, on-premises or in air-gapped environments."), /*#__PURE__*/React.createElement(CapabilityCard, {
    icon: "database",
    title: "Grounded in your data",
    linkLabel: "Search",
    href: "#"
  }, "Retrieval with citations across the systems your teams use."), /*#__PURE__*/React.createElement(CapabilityCard, {
    icon: "globe",
    title: "Multilingual",
    linkLabel: "Models",
    href: "#"
  }, "Models built to serve global businesses in their own languages."))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductPage.jsx
try { (() => {
function ProductScreen({
  go
}) {
  const {
    Button,
    NavBar,
    DarkFeatureBand,
    CapabilityCard,
    ProductCard,
    TrustLogoStrip,
    HeroPhotoCard
  } = window.CohereDesignSystem_1d137d;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cohere-deep-green)',
      color: '#fff',
      padding: '120px 40px 80px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 32,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      letterSpacing: 0.28,
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.64)'
    }
  }, "North"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 72,
      lineHeight: 1,
      letterSpacing: -1.44,
      fontWeight: 400,
      maxWidth: 960,
      textWrap: 'balance'
    }
  }, "The AI workspace for getting work done"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onDark: true,
    onClick: () => go('Contact')
  }, "Request a demo"), /*#__PURE__*/React.createElement(Button, {
    onDark: true,
    variant: "secondary"
  }, "Watch the video")), /*#__PURE__*/React.createElement(HeroPhotoCard, {
    tone: "navy",
    label: "Product video",
    height: 520,
    style: {
      width: '100%',
      maxWidth: 1200,
      marginTop: 40
    }
  })), /*#__PURE__*/React.createElement(TrustLogoStrip, {
    caption: "Built for the world's most regulated industries",
    logos: ['Logo', 'Logo', 'Logo', 'Logo', 'Logo']
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cohere-pale-green)',
      padding: '80px 40px'
    }
  }, /*#__PURE__*/React.createElement(DarkFeatureBand, {
    eyebrow: "Capabilities",
    title: "Agents, search and chat in one secure workspace",
    lead: "Connect your tools and let teams automate routine work with the controls IT requires."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(CapabilityCard, {
    onDark: true,
    boxed: true,
    icon: "message-square",
    title: "Chat"
  }, "Ask questions across your company's knowledge."), /*#__PURE__*/React.createElement(CapabilityCard, {
    onDark: true,
    boxed: true,
    icon: "search",
    title: "Search"
  }, "Find answers with verifiable citations."), /*#__PURE__*/React.createElement(CapabilityCard, {
    onDark: true,
    boxed: true,
    icon: "cpu",
    title: "Agents"
  }, "Automate multi-step work across systems.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 48,
      lineHeight: 1.2,
      letterSpacing: -0.48,
      fontWeight: 400
    }
  }, "Powered by our models"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ProductCard, {
    eyebrow: "Generative",
    name: "Command",
    description: "Models for agentic, enterprise workloads.",
    features: ['Tool use', 'Long context', 'Multilingual']
  }), /*#__PURE__*/React.createElement(ProductCard, {
    eyebrow: "Retrieval",
    name: "Embed",
    description: "Represent text and images for search.",
    features: ['Multimodal', 'Compressed vectors', '100+ languages']
  }), /*#__PURE__*/React.createElement(ProductCard, {
    eyebrow: "Retrieval",
    name: "Rerank",
    description: "Improve search relevance in one call.",
    features: ['Semi-structured data', 'Low latency', 'Drop-in']
  }))));
}
window.ProductScreen = ProductScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Research.jsx
try { (() => {
function ResearchScreen() {
  const {
    Button,
    ResearchTable
  } = window.CohereDesignSystem_1d137d;
  const topics = ['All', 'Safety', 'Multilingual', 'Retrieval', 'Evaluation', 'Efficiency', 'Open science'];
  const [t, setT] = React.useState('All');
  const [q, setQ] = React.useState('');
  const rows = [{
    title: 'Publication title placeholder on model safety',
    topics: ['Safety'],
    date: 'Sep 12, 2026'
  }, {
    title: 'Publication title placeholder on multilingual evaluation',
    topics: ['Multilingual', 'Evaluation'],
    date: 'Aug 28, 2026'
  }, {
    title: 'Publication title placeholder on retrieval quality',
    topics: ['Retrieval'],
    date: 'Aug 04, 2026'
  }, {
    title: 'Publication title placeholder on efficient inference',
    topics: ['Efficiency'],
    date: 'Jul 19, 2026'
  }, {
    title: 'Publication title placeholder from open science',
    topics: ['Open science', 'Multilingual'],
    date: 'Jun 30, 2026'
  }].filter(r => (t === 'All' || r.topics.includes(t)) && r.title.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: '96px 40px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      letterSpacing: 0.28,
      textTransform: 'uppercase',
      color: 'var(--text-meta)',
      marginBottom: 16
    }
  }, "Research"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 56px',
      fontFamily: 'var(--font-display)',
      fontSize: 72,
      lineHeight: 1,
      letterSpacing: -1.44,
      fontWeight: 400,
      maxWidth: 900
    }
  }, "Publications"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 24,
      alignItems: 'center',
      flexWrap: 'wrap',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, topics.map(x => /*#__PURE__*/React.createElement(Button, {
    key: x,
    variant: "pill-outline",
    onClick: () => setT(x),
    style: t === x ? {
      background: 'var(--cohere-primary)',
      color: '#fff'
    } : null
  }, x))), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search publications",
    style: {
      width: 280,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      padding: '10px 14px',
      border: '1px solid var(--border-rule)',
      borderRadius: 4,
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement(ResearchTable, {
    rows: rows
  }), rows.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-meta)',
      padding: '28px 0'
    }
  }, "No publications match."));
}
window.ResearchScreen = ResearchScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Research.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.BlogFilterChip = __ds_scope.BlogFilterChip;

__ds_ns.ResearchTable = __ds_scope.ResearchTable;

__ds_ns.FooterNewsletter = __ds_scope.FooterNewsletter;

__ds_ns.ContactFormCard = __ds_scope.ContactFormCard;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.CapabilityCard = __ds_scope.CapabilityCard;

__ds_ns.DarkFeatureBand = __ds_scope.DarkFeatureBand;

__ds_ns.HeroPhotoCard = __ds_scope.HeroPhotoCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.TrustLogoStrip = __ds_scope.TrustLogoStrip;

__ds_ns.AnnouncementBar = __ds_scope.AnnouncementBar;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.AgentConsoleCard = __ds_scope.AgentConsoleCard;

__ds_ns.StatusChip = __ds_scope.StatusChip;

})();
