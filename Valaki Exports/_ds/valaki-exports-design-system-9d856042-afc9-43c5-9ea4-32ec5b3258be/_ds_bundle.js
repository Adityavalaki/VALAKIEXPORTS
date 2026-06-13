/* @ds-bundle: {"format":3,"namespace":"ValakiExportsDesignSystem_9d8560","components":[{"name":"Badge","sourcePath":"components/badges/Badge.jsx"},{"name":"CertChip","sourcePath":"components/badges/CertChip.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"ProductCard","sourcePath":"components/cards/ProductCard.jsx"},{"name":"SectionHeading","sourcePath":"components/cards/SectionHeading.jsx"},{"name":"StatCard","sourcePath":"components/cards/StatCard.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/badges/Badge.jsx":"941d0f177134","components/badges/CertChip.jsx":"c32b6bec5c77","components/buttons/Button.jsx":"4bef05d27573","components/cards/ProductCard.jsx":"1e86e3c12ddc","components/cards/SectionHeading.jsx":"d7c121f69e65","components/cards/StatCard.jsx":"1a44af14643c","components/forms/Input.jsx":"2501adc434c8","components/forms/Select.jsx":"aff873a1aed9","ui_kits/website/WebsiteApp.jsx":"fae28d5b14cd","ui_kits/website/WebsiteContent.jsx":"f736f6170f98","ui_kits/website/WebsiteFooter.jsx":"690ef03e975e","ui_kits/website/WebsiteHero.jsx":"355e18954b45","ui_kits/website/WebsiteParts.jsx":"035b185a456e","ui_kits/website/WebsiteSections.jsx":"99028cbe0ac5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ValakiExportsDesignSystem_9d8560 = window.ValakiExportsDesignSystem_9d8560 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badges/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ve-badge{display:inline-flex;align-items:center;gap:6px;border-radius:var(--radius-pill);
  font-family:var(--font-mono);font-weight:500;text-transform:uppercase;letter-spacing:.08em}
.ve-badge--sm{font-size:10px;padding:3px 10px}
.ve-badge--md{font-size:11px;padding:5px 12px}
.ve-badge--info{background:var(--ocean-50);color:var(--ocean-700);border:1px solid var(--ocean-200)}
.ve-badge--success{background:#EDF8F2;color:#1E7A52;border:1px solid #BFE5D2}
.ve-badge--warning{background:#FDF4E5;color:#9A6217;border:1px solid #F2DCB5}
.ve-badge--danger{background:#FCEEEC;color:#A93527;border:1px solid #F0CCC6}
.ve-badge--neutral{background:var(--surface-sunken);color:var(--neutral-600);border:1px solid var(--border-default)}
.ve-badge--deep{background:var(--surface-deep-card);color:var(--ocean-300);border:1px solid var(--border-on-deep)}
.ve-badge__dot{width:6px;height:6px;border-radius:99px;background:currentColor}
`;
function ensureCss() {
  if (typeof document !== "undefined" && !document.getElementById("ve-badge-css")) {
    const s = document.createElement("style");
    s.id = "ve-badge-css";
    s.textContent = css;
    document.head.appendChild(s);
  }
}
function Badge({
  tone = "info",
  size = "md",
  dot = false,
  children,
  style,
  ...rest
}) {
  ensureCss();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `ve-badge ve-badge--${size} ve-badge--${tone}`,
    style: style
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "ve-badge__dot"
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/Badge.jsx", error: String((e && e.message) || e) }); }

// components/badges/CertChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ve-cert{display:inline-flex;align-items:center;gap:8px;border-radius:var(--radius-pill);
  font-family:var(--font-display);font-weight:600;font-size:13px;padding:8px 16px;
  transition:transform var(--duration-fast) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out)}
.ve-cert--light{background:var(--surface-card);color:var(--text-strong);border:1px solid var(--border-default);box-shadow:var(--shadow-xs)}
.ve-cert--light:hover{transform:var(--hover-lift);box-shadow:var(--shadow-sm)}
.ve-cert--deep{background:var(--glass-bg);color:var(--text-on-dark);border:1px solid var(--border-on-deep);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur)}
.ve-cert--deep:hover{box-shadow:var(--glow-cyan);transform:var(--hover-lift)}
.ve-cert__check{width:18px;height:18px;border-radius:99px;display:inline-flex;align-items:center;justify-content:center;flex:none;
  background:var(--leaf-500);color:#fff}
`;
function ensureCss() {
  if (typeof document !== "undefined" && !document.getElementById("ve-cert-css")) {
    const s = document.createElement("style");
    s.id = "ve-cert-css";
    s.textContent = css;
    document.head.appendChild(s);
  }
}
function CertChip({
  surface = "light",
  children,
  style,
  ...rest
}) {
  ensureCss();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `ve-cert ve-cert--${surface}`,
    style: style
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ve-cert__check"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 12 12",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6.2 4.8 9 10 3.4",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), children);
}
Object.assign(__ds_scope, { CertChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/CertChip.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ve-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:none;cursor:pointer;
  font-family:var(--font-display);font-weight:600;letter-spacing:.01em;border-radius:var(--radius-pill);
  transition:transform var(--duration-fast) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out),background var(--duration-fast) var(--ease-out),border-color var(--duration-fast) var(--ease-out);
  text-decoration:none;white-space:nowrap}
.ve-btn:focus-visible{outline:3px solid var(--focus-ring);outline-offset:2px}
.ve-btn:active:not(:disabled){transform:var(--press-scale)}
.ve-btn:disabled{opacity:.45;cursor:not-allowed}
.ve-btn--sm{height:var(--control-sm);padding:0 18px;font-size:14px}
.ve-btn--md{height:var(--control-md);padding:0 24px;font-size:15px}
.ve-btn--lg{height:var(--control-lg);padding:0 30px;font-size:16px}
.ve-btn--primary{background:var(--action-primary);color:#fff}
.ve-btn--primary:hover:not(:disabled){background:var(--action-primary-hover);transform:var(--hover-lift);box-shadow:var(--shadow-md)}
.ve-btn--accent{background:var(--action-accent);color:var(--deep-900)}
.ve-btn--accent:hover:not(:disabled){background:var(--action-accent-hover);transform:var(--hover-lift);box-shadow:var(--glow-gold)}
.ve-btn--outline{background:transparent;color:var(--action-primary);box-shadow:inset 0 0 0 1.5px var(--ocean-600)}
.ve-btn--outline:hover:not(:disabled){background:var(--surface-brand-tint);transform:var(--hover-lift)}
.ve-btn--ghost{background:transparent;color:var(--action-primary)}
.ve-btn--ghost:hover:not(:disabled){background:var(--surface-brand-tint)}
.ve-btn--glass{background:var(--glass-bg);color:var(--text-on-dark);border:1px solid var(--border-on-deep);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur)}
.ve-btn--glass:hover:not(:disabled){box-shadow:var(--glow-cyan);border-color:var(--ocean-400);transform:var(--hover-lift)}
`;
function ensureCss() {
  if (typeof document !== "undefined" && !document.getElementById("ve-btn-css")) {
    const s = document.createElement("style");
    s.id = "ve-btn-css";
    s.textContent = css;
    document.head.appendChild(s);
  }
}
function Button({
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  href,
  disabled = false,
  fullWidth = false,
  onClick,
  children,
  style,
  ...rest
}) {
  ensureCss();
  const cls = `ve-btn ve-btn--${size} ve-btn--${variant}`;
  const sty = fullWidth ? {
    width: "100%",
    ...style
  } : style;
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href,
      style: sty,
      onClick: onClick
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled,
    style: sty,
    onClick: onClick
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProductCard.jsx
try { (() => {
const css = `
.ve-pcard{display:flex;flex-direction:column;border-radius:var(--radius-lg);overflow:hidden;
  background:var(--surface-card);border:1px solid var(--border-default);
  transition:transform var(--duration-base) var(--ease-out),box-shadow var(--duration-base) var(--ease-out),border-color var(--duration-base) var(--ease-out);
  cursor:pointer;text-decoration:none}
.ve-pcard:hover{transform:var(--hover-lift);box-shadow:var(--shadow-md);border-color:var(--border-strong)}
.ve-pcard__media{height:150px;background:linear-gradient(135deg,var(--ocean-100),var(--ocean-200));
  display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.ve-pcard__media img{width:100%;height:100%;object-fit:cover}
.ve-pcard__ph{font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--ocean-700)}
.ve-pcard__body{padding:18px 20px 20px;display:flex;flex-direction:column;gap:10px}
.ve-pcard__name{font-family:var(--font-display);font-weight:600;font-size:18px;color:var(--text-strong);line-height:1.25}
.ve-pcard__forms{display:flex;flex-wrap:wrap;gap:6px}
.ve-pcard__spec{display:flex;gap:16px;font-family:var(--font-mono);font-size:11px;color:var(--text-muted);border-top:1px solid var(--border-subtle);padding-top:10px;margin-top:2px}
.ve-pcard__spec b{color:var(--text-strong);font-weight:600}
`;
function ensureCss() {
  if (typeof document !== "undefined" && !document.getElementById("ve-pcard-css")) {
    const s = document.createElement("style");
    s.id = "ve-pcard-css";
    s.textContent = css;
    document.head.appendChild(s);
  }
}
function ProductCard({
  name,
  image,
  forms = [],
  hsCode,
  moisture,
  href,
  onClick,
  style
}) {
  ensureCss();
  return /*#__PURE__*/React.createElement("a", {
    className: "ve-pcard",
    href: href || "#",
    onClick: onClick,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "ve-pcard__media"
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name
  }) : /*#__PURE__*/React.createElement("span", {
    className: "ve-pcard__ph"
  }, "Product photo")), /*#__PURE__*/React.createElement("div", {
    className: "ve-pcard__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ve-pcard__name"
  }, name), forms.length > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "ve-pcard__forms"
  }, forms.map(f => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: f,
    tone: "info",
    size: "sm"
  }, f))) : null, hsCode || moisture ? /*#__PURE__*/React.createElement("span", {
    className: "ve-pcard__spec"
  }, hsCode ? /*#__PURE__*/React.createElement("span", null, "HS ", /*#__PURE__*/React.createElement("b", null, hsCode)) : null, moisture ? /*#__PURE__*/React.createElement("span", null, "MOISTURE ", /*#__PURE__*/React.createElement("b", null, moisture)) : null) : null));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/SectionHeading.jsx
try { (() => {
const css = `
.ve-sh{display:flex;flex-direction:column;gap:12px;max-width:640px}
.ve-sh--center{align-items:center;text-align:center;margin-left:auto;margin-right:auto}
.ve-sh__eyebrow{font-family:var(--font-mono);font-size:12px;letter-spacing:.16em;text-transform:uppercase;display:inline-flex;align-items:center;gap:10px}
.ve-sh--light .ve-sh__eyebrow{color:var(--ocean-600)}
.ve-sh--deep .ve-sh__eyebrow{color:var(--aurora-b)}
.ve-sh__rule{width:28px;height:2px;border-radius:2px;background:var(--gradient-aurora)}
.ve-sh__title{font-family:var(--font-display);font-weight:700;font-size:36px;line-height:1.08;letter-spacing:-0.02em;margin:0}
.ve-sh--light .ve-sh__title{color:var(--text-strong)}
.ve-sh--deep .ve-sh__title{color:var(--text-on-dark)}
.ve-sh__lede{font-family:var(--font-body);font-size:17px;line-height:1.6;margin:0}
.ve-sh--light .ve-sh__lede{color:var(--text-body)}
.ve-sh--deep .ve-sh__lede{color:var(--text-on-dark-muted)}
`;
function ensureCss() {
  if (typeof document !== "undefined" && !document.getElementById("ve-sh-css")) {
    const s = document.createElement("style");
    s.id = "ve-sh-css";
    s.textContent = css;
    document.head.appendChild(s);
  }
}
function SectionHeading({
  eyebrow,
  title,
  lede,
  surface = "light",
  align = "left",
  style
}) {
  ensureCss();
  return /*#__PURE__*/React.createElement("div", {
    className: `ve-sh ve-sh--${surface}${align === "center" ? " ve-sh--center" : ""}`,
    style: style
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "ve-sh__eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ve-sh__rule"
  }), eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    className: "ve-sh__title"
  }, title), lede ? /*#__PURE__*/React.createElement("p", {
    className: "ve-sh__lede"
  }, lede) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/cards/StatCard.jsx
try { (() => {
const css = `
.ve-stat{display:flex;flex-direction:column;gap:4px;padding:22px 24px;border-radius:var(--radius-lg);min-width:150px}
.ve-stat--light{background:var(--surface-card);border:1px solid var(--border-default);box-shadow:var(--shadow-xs)}
.ve-stat--deep{background:var(--glass-bg);border:1px solid var(--border-on-deep);backdrop-filter:var(--glass-blur);-webkit-backdrop-filter:var(--glass-blur)}
.ve-stat__value{font-family:var(--font-display);font-weight:700;font-size:34px;letter-spacing:-0.02em;line-height:1.05}
.ve-stat--light .ve-stat__value{color:var(--text-strong)}
.ve-stat--deep .ve-stat__value{color:var(--text-on-dark)}
.ve-stat__value em{font-style:normal;background:var(--gradient-aurora);background-size:200% 200%;
  -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;
  animation:ve-aurora-drift var(--duration-ambient) ease-in-out infinite}
.ve-stat__label{font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase}
.ve-stat--light .ve-stat__label{color:var(--text-muted)}
.ve-stat--deep .ve-stat__label{color:var(--text-on-dark-muted)}
@media (prefers-reduced-motion: reduce){.ve-stat__value em{animation:none}}
`;
function ensureCss() {
  if (typeof document !== "undefined" && !document.getElementById("ve-stat-css")) {
    const s = document.createElement("style");
    s.id = "ve-stat-css";
    s.textContent = css;
    document.head.appendChild(s);
  }
}
function StatCard({
  value,
  label,
  surface = "light",
  aurora = false,
  style
}) {
  ensureCss();
  return /*#__PURE__*/React.createElement("div", {
    className: `ve-stat ve-stat--${surface}`,
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "ve-stat__value"
  }, aurora ? /*#__PURE__*/React.createElement("em", null, value) : value), /*#__PURE__*/React.createElement("span", {
    className: "ve-stat__label"
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ve-field{display:flex;flex-direction:column;gap:6px;font-family:var(--font-body)}
.ve-field__label{font-size:13px;font-weight:600;color:var(--text-strong);font-family:var(--font-display)}
.ve-field__hint{font-size:12px;color:var(--text-muted)}
.ve-input{height:var(--control-md);padding:0 16px;border-radius:var(--radius-sm);
  border:1px solid var(--border-default);background:var(--surface-card);color:var(--text-strong);
  font-family:var(--font-body);font-size:15px;transition:border-color var(--duration-fast) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out);width:100%}
.ve-input::placeholder{color:var(--neutral-400)}
.ve-input:hover:not(:disabled){border-color:var(--border-strong)}
.ve-input:focus{outline:none;border-color:var(--ocean-500);box-shadow:0 0 0 3px var(--focus-ring)}
.ve-input:disabled{background:var(--surface-sunken);color:var(--text-muted);cursor:not-allowed}
.ve-input--error{border-color:var(--status-danger)}
.ve-input--error:focus{border-color:var(--status-danger);box-shadow:0 0 0 3px rgba(214,69,51,.25)}
.ve-field__error{font-size:12px;color:var(--status-danger);font-weight:600}
textarea.ve-input{height:auto;min-height:96px;padding:12px 16px;resize:vertical;line-height:1.5}
`;
function ensureCss() {
  if (typeof document !== "undefined" && !document.getElementById("ve-input-css")) {
    const s = document.createElement("style");
    s.id = "ve-input-css";
    s.textContent = css;
    document.head.appendChild(s);
  }
}
function Input({
  label,
  hint,
  error,
  multiline = false,
  style,
  ...rest
}) {
  ensureCss();
  const cls = `ve-input${error ? " ve-input--error" : ""}`;
  return /*#__PURE__*/React.createElement("label", {
    className: "ve-field",
    style: style
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "ve-field__label"
  }, label) : null, multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    className: cls
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    className: cls
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "ve-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "ve-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ve-select{appearance:none;-webkit-appearance:none;height:var(--control-md);padding:0 40px 0 16px;border-radius:var(--radius-sm);
  border:1px solid var(--border-default);background:var(--surface-card);color:var(--text-strong);
  font-family:var(--font-body);font-size:15px;width:100%;cursor:pointer;
  transition:border-color var(--duration-fast) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out)}
.ve-select:hover:not(:disabled){border-color:var(--border-strong)}
.ve-select:focus{outline:none;border-color:var(--ocean-500);box-shadow:0 0 0 3px var(--focus-ring)}
.ve-select-wrap{position:relative;display:flex;flex-direction:column;gap:6px}
.ve-select-wrap__label{font-size:13px;font-weight:600;color:var(--text-strong);font-family:var(--font-display)}
.ve-select-wrap__chev{position:absolute;right:14px;bottom:14px;pointer-events:none;color:var(--neutral-500)}
`;
function ensureCss() {
  if (typeof document !== "undefined" && !document.getElementById("ve-select-css")) {
    const s = document.createElement("style");
    s.id = "ve-select-css";
    s.textContent = css;
    document.head.appendChild(s);
  }
}
function Select({
  label,
  options = [],
  placeholder,
  style,
  ...rest
}) {
  ensureCss();
  return /*#__PURE__*/React.createElement("label", {
    className: "ve-select-wrap",
    style: style
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "ve-select-wrap__label"
  }, label) : null, /*#__PURE__*/React.createElement("select", _extends({
    className: "ve-select",
    defaultValue: rest.value === undefined ? "" : undefined
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    className: "ve-select-wrap__chev"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.5 6l4.5 4.5L12.5 6",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebsiteApp.jsx
try { (() => {
/* Assembly + scroll reveal — Valaki Exports (editorial minimal kit) */
function WebsiteApp() {
  React.useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.12
    });
    document.querySelectorAll(".ve-reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(WebsiteHeader, null), /*#__PURE__*/React.createElement(WebsiteHero, null), /*#__PURE__*/React.createElement(WebsiteStatement, null), /*#__PURE__*/React.createElement(WebsiteHeritage, null), /*#__PURE__*/React.createElement(WebsiteRange, null), /*#__PURE__*/React.createElement(WebsiteForms, null), /*#__PURE__*/React.createElement(WebsiteSpecs, null), /*#__PURE__*/React.createElement(WebsiteMarkets, null), /*#__PURE__*/React.createElement(WebsiteProcess, null), /*#__PURE__*/React.createElement(WebsiteQuality, null), /*#__PURE__*/React.createElement(WebsitePrivateLabel, null), /*#__PURE__*/React.createElement(WebsitePacking, null), /*#__PURE__*/React.createElement(WebsiteFaq, null), /*#__PURE__*/React.createElement(WebsiteContact, null), /*#__PURE__*/React.createElement(WebsiteFooter, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(WebsiteApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebsiteApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebsiteContent.jsx
try { (() => {
/* Informative long-form sections — Valaki Exports (editorial minimal kit) */

/* ---- Opening statement ---- */
function WebsiteStatement() {
  const facts = [["Own farms", "Grown in our Mahuva belt"], ["18 MT / day", "Dehydration capacity"], ["40+ countries", "Shipped worldwide"], ["Since 1987", "A farming family"]];
  return /*#__PURE__*/React.createElement("section", {
    id: "story",
    style: {
      padding: "92px 0 104px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ve-wrap",
    style: {
      padding: "0 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ve-2col ve-reveal",
    style: {
      display: "grid",
      gridTemplateColumns: "0.4fr 1.1fr",
      gap: 56,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 13,
      color: "var(--ve-blue)",
      paddingTop: 10
    }
  }, "Who we are"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--ve-serif)",
      fontWeight: 300,
      fontSize: "clamp(24px, 2.7vw, 36px)",
      lineHeight: 1.32,
      letterSpacing: "-0.012em",
      color: "var(--ve-ink)",
      margin: 0
    }
  }, "Valaki Exports is the dehydration arm of ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic",
      color: "var(--ve-blue)"
    }
  }, "Valaki Brothers"), " \u2014 a farming family in Gujarat's Mahuva belt since 1987. We grow the crop, dry it, mill it and ship it ourselves, so every container is traceable to the field it came from.")), /*#__PURE__*/React.createElement("div", {
    className: "ve-proc",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 28,
      marginTop: 56
    }
  }, facts.map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    className: "ve-reveal",
    style: {
      transitionDelay: `${i * 60}ms`,
      paddingTop: 18,
      borderTop: "1px solid var(--ve-line-strong)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--ve-serif)",
      fontSize: 27,
      color: "var(--ve-ink)",
      letterSpacing: "-0.01em"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 13.5,
      color: "var(--ve-soft)",
      marginTop: 8
    }
  }, l))))));
}

/* ---- Heritage timeline ---- */
const VE_HISTORY = [["1982", "Agro inputs", "Valaki Brothers begins trading seeds, pesticides and fertilisers across Saurashtra."], ["1991", "Commodities", "The family moves into agricultural commodity trading at scale."], ["2004", "Spice export", "Sourcing and exporting spices to international buyers begins."], ["2013", "Dehydration", "Valaki Exports opens its vegetable dehydration and processing plant in Mahuva."], ["2016", "Euro Foods", "Sister brand Euro Foods Industries is established to broaden the range."], ["Today", "18 MT / day", "A modern line processing onion, garlic, vegetables and spices for 40+ markets."]];
function WebsiteHeritage() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 0 104px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ve-wrap",
    style: {
      padding: "0 40px"
    }
  }, /*#__PURE__*/React.createElement(Masthead, {
    kicker: "Heritage",
    title: "Four generations on the land.",
    meta: "From Saurashtra's fields to forty export markets."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, VE_HISTORY.map(([y, t, b], i) => /*#__PURE__*/React.createElement("div", {
    key: y,
    className: "ve-reveal",
    style: {
      transitionDelay: `${i * 50}ms`,
      display: "grid",
      gridTemplateColumns: "160px 1fr",
      gap: 32,
      padding: "26px 0",
      borderBottom: "1px solid var(--ve-line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--ve-serif)",
      fontStyle: "italic",
      fontSize: 30,
      color: i === VE_HISTORY.length - 1 ? "var(--ve-blue)" : "var(--ve-ink)",
      letterSpacing: "-0.01em"
    }
  }, y), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontWeight: 600,
      fontSize: 16,
      color: "var(--ve-ink)"
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 14.5,
      lineHeight: 1.6,
      color: "var(--ve-soft)",
      maxWidth: 560
    }
  }, b)))))));
}

/* ---- The six forms ---- */
const VE_FORMS = [["Flakes", "Whole dried slices, 10–25 mm. Rehydrate fast; the export standard."], ["Kibbled", "Coarse broken pieces, 3–8 mm. For visible inclusion in blends."], ["Chopped", "Uniform dice, around 3 mm. Soups, sauces and ready meals."], ["Minced", "Fine cut, 1–3 mm. Even dispersion through a batch."], ["Granules", "Free-flowing, 0.3–1 mm. Dry seasonings and premixes."], ["Powder", "Milled fine, 80–100 mesh. Instant flavour, full solubility."]];
function WebsiteForms() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 0 104px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ve-wrap",
    style: {
      padding: "0 40px"
    }
  }, /*#__PURE__*/React.createElement(Masthead, {
    kicker: "Milled to your spec",
    title: "One crop, six forms.",
    meta: "Every product is available across the range; mesh sizes to order."
  }), /*#__PURE__*/React.createElement("div", {
    className: "ve-proc",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "44px 40px",
      marginTop: 48
    }
  }, VE_FORMS.map(([t, b], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "ve-reveal",
    style: {
      transitionDelay: `${i % 3 * 60}ms`,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-serif)",
      fontWeight: 400,
      fontSize: 28,
      color: "var(--ve-ink)",
      letterSpacing: "-0.01em"
    }
  }, String(i + 1).padStart(2, "0"), " \xA0", t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 14.5,
      lineHeight: 1.6,
      color: "var(--ve-soft)"
    }
  }, b))))));
}

/* ---- Specification table ---- */
const VE_SPEC_ROWS = [["Flakes", "10–25 mm", "≤ 6%", "20 kg poly bag / carton"], ["Minced", "1–3 mm", "≤ 6%", "20 kg poly bag / carton"], ["Granules", "0.3–1 mm", "≤ 6%", "25 kg bag"], ["Powder", "80–100 mesh", "≤ 6%", "25 kg bag"]];
function WebsiteSpecs() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 0 104px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ve-wrap",
    style: {
      padding: "0 40px"
    }
  }, /*#__PURE__*/React.createElement(Masthead, {
    kicker: "Specification",
    title: "Dehydrated onion, in detail.",
    meta: "Representative spec \u2014 red, white & pink to the same tolerances."
  }), /*#__PURE__*/React.createElement("div", {
    className: "ve-reveal",
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr 0.8fr 1.6fr",
      padding: "14px 0",
      borderBottom: "1px solid var(--ve-line-strong)",
      fontFamily: "var(--ve-sans)",
      fontSize: 12,
      color: "var(--ve-muted)",
      letterSpacing: "0.04em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Form"), /*#__PURE__*/React.createElement("span", null, "Particle"), /*#__PURE__*/React.createElement("span", null, "Moisture"), /*#__PURE__*/React.createElement("span", null, "Packing")), VE_SPEC_ROWS.map(r => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr 0.8fr 1.6fr",
      padding: "18px 0",
      borderBottom: "1px solid var(--ve-line)",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-serif)",
      fontSize: 21,
      color: "var(--ve-ink)"
    }
  }, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 14.5,
      color: "var(--ve-soft)"
    }
  }, r[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 14.5,
      color: "var(--ve-soft)"
    }
  }, r[2]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 14.5,
      color: "var(--ve-soft)"
    }
  }, r[3]))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 13.5,
      color: "var(--ve-muted)",
      marginTop: 18
    }
  }, "SO\u2082-free. Custom mesh size, moisture, bulk density and packing to your specification."))));
}

/* ---- Markets (dark band) ---- */
function WebsiteMarkets() {
  const regions = ["Europe", "North America", "Middle East", "Southeast Asia", "East Asia", "Africa", "Oceania"];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#121316",
      color: "#E9E9E6",
      padding: "104px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ve-wrap",
    style: {
      padding: "0 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ve-reveal"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 13,
      color: "var(--ve-blue)"
    }
  }, "Markets"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "16px 0 0",
      fontFamily: "var(--ve-serif)",
      fontWeight: 300,
      fontSize: "clamp(30px, 4vw, 56px)",
      lineHeight: 1.06,
      letterSpacing: "-0.02em",
      maxWidth: 760
    }
  }, "From a single belt in Gujarat to ports on ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic",
      color: "#7FC7E6"
    }
  }, "six continents."))), /*#__PURE__*/React.createElement("div", {
    className: "ve-reveal",
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "14px 0",
      marginTop: 48
    }
  }, regions.map((r, i) => /*#__PURE__*/React.createElement("span", {
    key: r,
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-serif)",
      fontStyle: "italic",
      fontSize: "clamp(20px, 2.2vw, 30px)",
      color: "#E9E9E6",
      padding: "0 26px"
    }
  }, r), i < regions.length - 1 ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: 9,
      background: "var(--ve-blue)"
    }
  }) : null)))));
}

/* ---- Private label & contract manufacturing ---- */
const VE_SERVICES = [["Bulk supply", "Export cartons and bulk bags — your specification, your shipping schedule, lot-traceable."], ["Private label", "Your brand on food-safe retail and food-service packs, printed and filled in-house."], ["Contract manufacturing", "Custom blends and seasonings developed to your recipe, tolerances and target cost."]];
function WebsitePrivateLabel() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "104px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ve-wrap",
    style: {
      padding: "0 40px"
    }
  }, /*#__PURE__*/React.createElement(Masthead, {
    kicker: "Beyond bulk",
    title: "Private label & contract manufacturing.",
    meta: "We supply your shelf as readily as your factory."
  }), /*#__PURE__*/React.createElement("div", {
    className: "ve-proc",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 40,
      marginTop: 48
    }
  }, VE_SERVICES.map(([t, b], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "ve-reveal",
    style: {
      transitionDelay: `${i * 70}ms`,
      paddingTop: 20,
      borderTop: "1px solid var(--ve-line-strong)",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-serif)",
      fontWeight: 400,
      fontSize: 25,
      color: "var(--ve-ink)",
      letterSpacing: "-0.01em"
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 14.5,
      lineHeight: 1.6,
      color: "var(--ve-soft)"
    }
  }, b))))));
}

/* ---- Packing & logistics ---- */
const VE_LOGI = [["Packing", "20 kg poly bag in corrugated carton as standard; 25 kg bags, bulk bags and printed retail pouches on request."], ["Ports", "FOB Mundra & Nhava Sheva; CIF and other Incoterms by arrangement."], ["Documents", "COA, phytosanitary certificate, certificate of origin, plus APEDA & Spice Board paperwork."], ["Loadability", "Up to roughly 18–20 MT per 20′ container, product and packing dependent."]];
function WebsitePacking() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 0 104px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ve-wrap",
    style: {
      padding: "0 40px"
    }
  }, /*#__PURE__*/React.createElement(Masthead, {
    kicker: "Packing & logistics",
    title: "Packed for the long haul."
  }), /*#__PURE__*/React.createElement("div", {
    className: "ve-2col",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "0 64px",
      marginTop: 40
    }
  }, VE_LOGI.map(([t, b], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "ve-reveal",
    style: {
      transitionDelay: `${i * 60}ms`,
      display: "grid",
      gridTemplateColumns: "130px 1fr",
      gap: 24,
      padding: "22px 0",
      borderTop: "1px solid var(--ve-line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 13,
      color: "var(--ve-blue)"
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 14.5,
      lineHeight: 1.6,
      color: "var(--ve-soft)"
    }
  }, b))))));
}

/* ---- Buyer FAQ (accordion) ---- */
const VE_FAQ = [["What is your minimum order quantity?", "Typically one pallet (around 500 kg) for stock items, and full-container loads for private label. Tell us your target volume and we'll advise the most economical packing."], ["Can I get samples before ordering?", "Yes. Representative samples ship by courier against freight, and pre-shipment samples are sent for every confirmed order so you approve before it sails."], ["Do you offer private label and custom blends?", "We do. We print and fill food-safe retail and food-service packs, and develop seasonings and blends to your recipe, tolerances and target cost."], ["Which certifications do you hold?", "USFDA, ISO 22000, HALAL, KOSHER and FSSAI, with APEDA, Spice Board, MSME and GST registrations. Lot certificates accompany every shipment."], ["How is the product tested?", "At intake and pre-dispatch in-house, by NABL-accredited labs, and on request by SGS, Geochem or Eurofins to your market's standard."], ["What about shelf life and packing?", "Standard 20 kg poly bag in carton, SO₂-free, with a 24-month shelf life stored cool and dry. Custom packing and private label on request."]];
function WebsiteFaq() {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 0 104px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ve-wrap",
    style: {
      padding: "0 40px"
    }
  }, /*#__PURE__*/React.createElement(Masthead, {
    kicker: "For buyers",
    title: "Questions, answered."
  }), /*#__PURE__*/React.createElement("div", {
    className: "ve-reveal",
    style: {
      marginTop: 16
    }
  }, VE_FAQ.map(([q, a], i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: "1px solid var(--ve-line)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        padding: "24px 0",
        background: "none",
        border: "none",
        cursor: "pointer",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--ve-serif)",
        fontWeight: 400,
        fontSize: "clamp(19px, 2vw, 25px)",
        color: isOpen ? "var(--ve-blue)" : "var(--ve-ink)",
        letterSpacing: "-0.01em",
        transition: "color .25s var(--ease-out)"
      }
    }, q), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--ve-sans)",
        fontSize: 24,
        color: "var(--ve-muted)",
        flexShrink: 0,
        transform: isOpen ? "rotate(45deg)" : "none",
        transition: "transform .3s var(--ease-out)",
        lineHeight: 1
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden",
        maxHeight: isOpen ? 240 : 0,
        transition: "max-height .45s var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--ve-sans)",
        fontSize: 15.5,
        lineHeight: 1.65,
        color: "var(--ve-soft)",
        margin: "0 0 26px",
        maxWidth: 640
      }
    }, a)));
  }))));
}
Object.assign(window, {
  WebsiteStatement,
  WebsiteHeritage,
  WebsiteForms,
  WebsiteSpecs,
  WebsiteMarkets,
  WebsitePrivateLabel,
  WebsitePacking,
  WebsiteFaq
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebsiteContent.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebsiteFooter.jsx
try { (() => {
/* Contact / RFQ + Footer — Valaki Exports (editorial minimal) */

function Field({
  label,
  type = "text",
  placeholder,
  multiline,
  required
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "ve-field",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 12.5,
      color: "var(--ve-soft)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ve-blue)"
    }
  }, " *") : null), multiline ? /*#__PURE__*/React.createElement("textarea", {
    rows: "2",
    placeholder: placeholder
  }) : /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    required: required
  }));
}
function WebsiteContact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      padding: "0 0 104px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ve-wrap",
    style: {
      padding: "0 40px"
    }
  }, /*#__PURE__*/React.createElement(Masthead, {
    kicker: "Get in touch",
    title: "Request a quote.",
    meta: "Pricing, lead time and samples within 24 hours."
  }), /*#__PURE__*/React.createElement("div", {
    className: "ve-2col",
    style: {
      display: "grid",
      gridTemplateColumns: "0.85fr 1.15fr",
      gap: 64,
      marginTop: 44,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ve-reveal",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 16,
      lineHeight: 1.65,
      color: "var(--ve-soft)",
      margin: 0,
      maxWidth: 340
    }
  }, "Tell us the form, mesh size, quantity and destination port. Our export desk replies with pricing, lead time and sample availability."), /*#__PURE__*/React.createElement("div", null, [["Email", "ramesh@valakiexports.com"], ["Phone", "+91 79426 23821"], ["Plant", "Mahuva, Bhavnagar, Gujarat"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      gap: 18,
      padding: "13px 0",
      borderTop: "1px solid var(--ve-line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 54,
      fontFamily: "var(--ve-sans)",
      fontSize: 12.5,
      color: "var(--ve-muted)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 14.5,
      color: "var(--ve-ink)"
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    className: "ve-reveal",
    style: {
      transitionDelay: "100ms"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--ve-line-strong)",
      paddingTop: 40,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-serif)",
      fontWeight: 400,
      fontSize: 34,
      color: "var(--ve-ink)"
    }
  }, "Enquiry received."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--ve-soft)",
      maxWidth: 420
    }
  }, "Our export desk replies within 24 hours with pricing and samples. Reference ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: "var(--ve-blue)",
      fontStyle: "normal"
    }
  }, "VE-2606-RFQ"), ".")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "26px 32px"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    placeholder: "Your name",
    required: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Company email",
    type: "email",
    placeholder: "you@company.com",
    required: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Product",
    placeholder: "e.g. Dehydrated White Onion"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Form & mesh",
    placeholder: "e.g. Powder, 80 mesh"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Quantity",
    placeholder: "e.g. 5 MT"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Destination port",
    placeholder: "e.g. Rotterdam"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Notes",
    multiline: true,
    placeholder: "Packing, private label, timelines\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1",
      display: "flex",
      justifyContent: "flex-end",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "ve-ul",
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 16,
      color: "var(--ve-blue)",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0
    }
  }, "Send enquiry\xA0\u2192")))))));
}
function WebsiteFooter() {
  const cols = [{
    h: "Products",
    links: ["Dehydrated Onion", "Dehydrated Garlic", "Vegetables & Fruits", "Spices & Seasonings"]
  }, {
    h: "Company",
    links: ["Valaki Brothers", "Certifications", "Private Labelling", "Contact"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "#121316",
      color: "#E9E9E6"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ve-wrap",
    style: {
      padding: "76px 40px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ve-foot",
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: 48,
      paddingBottom: 56,
      borderBottom: "1px solid rgba(255,255,255,0.13)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-serif)",
      fontWeight: 400,
      fontSize: 38,
      letterSpacing: "-0.01em"
    }
  }, "Valaki Exports\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "#9C9E9F"
    }
  }, "Co.")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 14,
      lineHeight: 1.65,
      color: "#9C9E9F"
    }
  }, "A Valaki Brothers group company. Farming the Mahuva belt since 1987; dehydrating and exporting since 2013.")), cols.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.h,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 12.5,
      color: "#76787A"
    }
  }, col.h), col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#top",
    className: "ve-ul",
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 15,
      color: "#E9E9E6",
      textDecoration: "none",
      width: "fit-content"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 22,
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12,
      fontFamily: "var(--ve-sans)",
      fontSize: 12.5,
      color: "#76787A"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Valaki Exports Co. \u2014 Mahuva, Bhavnagar, Gujarat, India"), /*#__PURE__*/React.createElement("span", null, "APEDA \xB7 Spice Board \xB7 MSME \xB7 GST registered"))));
}
Object.assign(window, {
  WebsiteContact,
  WebsiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebsiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebsiteHero.jsx
try { (() => {
/* Header + Hero + running strip — Valaki Exports (editorial minimal kit) */

function WebsiteHeader() {
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const link = {
    fontFamily: "var(--ve-sans)",
    fontSize: 14,
    color: "var(--ve-soft)",
    textDecoration: "none"
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 60,
      background: "var(--ve-paper)",
      borderBottom: `1px solid ${solid ? "var(--ve-line)" : "transparent"}`,
      transition: "border-color .3s var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ve-wrap",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 40px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.png",
    alt: "Valaki Exports",
    style: {
      height: 34
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-serif)",
      fontSize: 20,
      color: "var(--ve-ink)",
      letterSpacing: "-0.01em",
      whiteSpace: "nowrap"
    }
  }, "Valaki Exports ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ve-muted)",
      fontStyle: "italic",
      fontSize: 17
    }
  }, "Co."))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#story",
    style: link,
    className: "ve-ul"
  }, "Story"), /*#__PURE__*/React.createElement("a", {
    href: "#range",
    style: link,
    className: "ve-ul"
  }, "Range"), /*#__PURE__*/React.createElement("a", {
    href: "#quality",
    style: link,
    className: "ve-ul"
  }, "Quality"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "ve-ul",
    style: {
      ...link,
      color: "var(--ve-blue)"
    }
  }, "Request a quote\xA0\u2192"))));
}
function WebsiteHero() {
  const flagship = VE_PRODUCTS.find(p => p.id === "fried-onion");
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      background: "var(--ve-paper)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ve-wrap",
    style: {
      padding: "56px 40px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 46,
      animation: "ve-up .7s var(--ease-out) both"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 13,
      color: "var(--ve-soft)"
    }
  }, "B2B manufacturer & exporter \u2014 since 1987"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 13,
      color: "var(--ve-muted)"
    }
  }, "Mahuva \xB7 Bhavnagar \xB7 Gujarat, India")), /*#__PURE__*/React.createElement("div", {
    className: "ve-2col",
    style: {
      display: "grid",
      gridTemplateColumns: "1.18fr 0.82fr",
      gap: 60,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 34
    }
  }, /*#__PURE__*/React.createElement(MaskLines, {
    lines: ["We dehydrate onion, garlic", "and vegetables — then ship", /*#__PURE__*/React.createElement(React.Fragment, {
      key: "l3"
    }, "them, ", /*#__PURE__*/React.createElement("em", {
      style: {
        fontStyle: "italic",
        color: "var(--ve-blue)"
      }
    }, "milled to your spec,"), " worldwide.")],
    style: {
      fontFamily: "var(--ve-serif)",
      fontWeight: 400,
      fontSize: "clamp(34px, 4.6vw, 70px)",
      lineHeight: 1.04,
      letterSpacing: "-0.018em",
      color: "var(--ve-ink)",
      maxWidth: 760
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 17,
      lineHeight: 1.65,
      color: "var(--ve-soft)",
      margin: 0,
      maxWidth: 430,
      animation: "ve-up .7s var(--ease-out) .55s both"
    }
  }, "Grown, dehydrated and milled in the Mahuva belt \u2014 flakes to powder, tested to the certification your market requires."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 30,
      alignItems: "center",
      animation: "ve-up .7s var(--ease-out) .7s both"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#range",
    className: "ve-ul",
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 16,
      color: "var(--ve-ink)",
      textDecoration: "none"
    }
  }, "View the range\xA0\u2192"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    className: "ve-ul",
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 16,
      color: "var(--ve-blue)",
      textDecoration: "none"
    }
  }, "Request a quote\xA0\u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontFamily: "var(--ve-sans)",
      fontSize: 12.5,
      letterSpacing: "0.04em",
      color: "var(--ve-muted)",
      animation: "ve-up .7s var(--ease-out) .85s both"
    }
  }, "USFDA \xA0\xB7\xA0 ISO 22000 \xA0\xB7\xA0 HALAL \xA0\xB7\xA0 KOSHER \xA0\xB7\xA0 FSSAI")), /*#__PURE__*/React.createElement("div", {
    style: {
      animation: "ve-up .9s var(--ease-out) .35s both"
    }
  }, /*#__PURE__*/React.createElement(Frame, {
    p: flagship,
    fig: "01",
    ratio: "4 / 5",
    big: true
  })))), /*#__PURE__*/React.createElement("div", {
    className: "ve-wrap",
    style: {
      padding: "0 40px 8px"
    }
  }, /*#__PURE__*/React.createElement(RunningStrip, {
    items: ["White Onion", "Red Onion", "Pink Onion", "Dehydrated Garlic", "Fried Onion", "Vegetables", "Chilli", "Spices", "Corn Starch"]
  })));
}
Object.assign(window, {
  WebsiteHeader,
  WebsiteHero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebsiteHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebsiteParts.jsx
try { (() => {
/* Shared parts — Valaki Exports (editorial minimal kit)
   product data · Frame (photo placeholder) · MaskLines · RunningStrip */

const VE_PRODUCTS = [{
  id: "white-onion",
  name: "White Onion",
  kind: "Onion",
  forms: ["Flakes", "Minced", "Powder"],
  hs: "0712.20.00",
  moisture: "≤ 6%",
  note: "Dehydrated, mild and bright.",
  tint: "#EDF0F2"
}, {
  id: "red-onion",
  name: "Red Onion",
  kind: "Onion",
  forms: ["Flakes", "Chopped", "Granules"],
  hs: "0712.20.00",
  moisture: "≤ 6%",
  note: "Deep colour, full pungency.",
  tint: "#F3ECEC"
}, {
  id: "pink-onion",
  name: "Pink Onion",
  kind: "Onion",
  forms: ["Flakes", "Kibbled"],
  hs: "0712.20.00",
  moisture: "≤ 6%",
  note: "Sweet, the Mahuva speciality.",
  tint: "#F1ECEE"
}, {
  id: "fried-onion",
  name: "Fried Onion",
  kind: "Onion",
  forms: ["Crispy", "Golden"],
  hs: "2003.90.10",
  moisture: "≤ 3%",
  note: "Sunflower-fried, ready to top.",
  tint: "#F2EDE4"
}, {
  id: "garlic",
  name: "Dehydrated Garlic",
  kind: "Garlic",
  forms: ["Cloves", "Granules", "Powder"],
  hs: "0712.90.40",
  moisture: "≤ 6%",
  note: "Single-clove, low ash.",
  tint: "#F0EFE9"
}, {
  id: "fried-garlic",
  name: "Fried Garlic",
  kind: "Garlic",
  forms: ["Flakes", "Granules"],
  hs: "2005.59.00",
  moisture: "≤ 3%",
  note: "Crisp, aromatic, even fry.",
  tint: "#F1ECE4"
}, {
  id: "vegetables",
  name: "Dehydrated Vegetables",
  kind: "Vegetables",
  forms: ["Potato", "Carrot", "Cabbage"],
  hs: "0712.90.90",
  moisture: "≤ 7%",
  note: "Diced and graded to size.",
  tint: "#ECF1ED"
}, {
  id: "leafy",
  name: "Leafy Vegetables",
  kind: "Vegetables",
  forms: ["Spinach", "Fenugreek", "Mint"],
  hs: "0712.90.90",
  moisture: "≤ 7%",
  note: "Colour-retentive air-drying.",
  tint: "#E9F0EA"
}, {
  id: "chilli",
  name: "Chilli Products",
  kind: "Spice",
  forms: ["Whole", "Crushed", "Powder"],
  hs: "0904.22.11",
  moisture: "≤ 10%",
  note: "Teja & Byadgi, ASTA graded.",
  tint: "#F3ECE8"
}, {
  id: "spices",
  name: "Spices & Herbs",
  kind: "Spice",
  forms: ["Cumin", "Coriander", "Ajwain"],
  hs: "0909",
  moisture: "≤ 9%",
  note: "Whole and ground, sortexed.",
  tint: "#F1EDE6"
}, {
  id: "seasonings",
  name: "Blended Seasonings",
  kind: "Spice",
  forms: ["Custom Blends"],
  hs: "2103.90.40",
  moisture: "≤ 8%",
  note: "Developed to your recipe.",
  tint: "#F0EEE8"
}, {
  id: "maize",
  name: "Corn Starch / Maize",
  kind: "Other",
  forms: ["Starch", "Grits"],
  hs: "1108.12.00",
  moisture: "≤ 13%",
  note: "Food-grade native starch.",
  tint: "#F2EFE5"
}];

/* Editorial photo placeholder — a framed plate captioned like a catalogue figure.
   Stands in for real product photography; clean and quiet, never a gradient tile. */
function Frame({
  p,
  fig,
  ratio = "4 / 5",
  big = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: ratio,
      background: p ? p.tint : "var(--ve-frame)",
      border: "1px solid var(--ve-line)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: big ? 28 : 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-serif)",
      fontStyle: "italic",
      fontSize: big ? 17 : 14,
      color: "var(--ve-soft)"
    }
  }, "Fig. ", fig), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 11,
      letterSpacing: "0.04em",
      color: "var(--ve-muted)"
    }
  }, p ? p.kind : "")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: big ? 10 : 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-serif)",
      fontWeight: 400,
      fontSize: big ? 46 : 30,
      lineHeight: 1.02,
      letterSpacing: "-0.01em",
      color: "var(--ve-ink)"
    }
  }, p ? p.name : ""), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: big ? 14 : 12.5,
      color: "var(--ve-soft)"
    }
  }, p ? p.note : ""), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 6,
      fontFamily: "var(--ve-sans)",
      fontSize: 11,
      letterSpacing: "0.06em",
      color: "var(--ve-muted)",
      textTransform: "uppercase"
    }
  }, "Product photograph"))));
}

/* Headline that reveals line-by-line under a mask. Lines = array of React nodes. */
function MaskLines({
  lines,
  style,
  lineStyle,
  baseDelay = 120,
  step = 130
}) {
  return /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      ...style
    }
  }, lines.map((ln, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "block",
      overflow: "hidden",
      paddingBottom: "0.04em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      animation: `ve-mask-up .9s var(--ease-out) ${baseDelay + i * step}ms both`,
      ...lineStyle
    }
  }, ln))));
}

/* Quiet, slow running strip — a restrained nod to motion, not a marquee. */
function RunningStrip({
  items,
  duration = 56
}) {
  const group = /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "0 26px",
      fontFamily: "var(--ve-serif)",
      fontStyle: "italic",
      fontSize: 18,
      color: "var(--ve-soft)"
    }
  }, it), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: 9,
      background: "var(--ve-blue)"
    }
  }))));
  return /*#__PURE__*/React.createElement("div", {
    className: "ve-strip",
    style: {
      overflow: "hidden",
      borderTop: "1px solid var(--ve-line)",
      borderBottom: "1px solid var(--ve-line)",
      padding: "16px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ve-strip__t",
    style: {
      display: "inline-flex",
      animation: `ve-strip ${duration}s linear infinite`,
      willChange: "transform"
    }
  }, group, group));
}
Object.assign(window, {
  VE_PRODUCTS,
  Frame,
  MaskLines,
  RunningStrip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebsiteParts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebsiteSections.jsx
try { (() => {
/* Range (hover-preview index) + Process + Quality — Valaki Exports (editorial minimal) */

function Masthead({
  kicker,
  title,
  meta
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ve-reveal"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 13,
      color: "var(--ve-blue)",
      letterSpacing: "0.02em"
    }
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--ve-serif)",
      fontWeight: 400,
      fontSize: "clamp(30px, 3.6vw, 50px)",
      lineHeight: 1.02,
      letterSpacing: "-0.02em",
      color: "var(--ve-ink)"
    }
  }, title)), meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 13,
      color: "var(--ve-muted)",
      maxWidth: 260,
      textAlign: "right",
      lineHeight: 1.5,
      paddingBottom: 6
    }
  }, meta) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--ve-line-strong)",
      marginTop: 22
    }
  }));
}

/* ---- The range: editorial index with sticky hover photo ---- */
function WebsiteRange() {
  const [active, setActive] = React.useState(0);
  const ap = VE_PRODUCTS[active];
  return /*#__PURE__*/React.createElement("section", {
    id: "range",
    style: {
      padding: "104px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ve-wrap",
    style: {
      padding: "0 40px"
    }
  }, /*#__PURE__*/React.createElement(Masthead, {
    kicker: "Selected range",
    title: "Twelve families. Six milled forms.",
    meta: "Flakes \xB7 kibbled \xB7 chopped \xB7 minced \xB7 granules \xB7 powder"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ve-2col",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 0.62fr",
      gap: 64,
      marginTop: 8,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ve-reveal"
  }, VE_PRODUCTS.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: p.id,
    href: "#contact",
    className: "ve-row",
    onMouseEnter: () => setActive(i),
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 20,
      padding: "21px 0",
      borderBottom: "1px solid var(--ve-line)",
      textDecoration: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 13,
      color: "var(--ve-muted)",
      width: 26,
      flexShrink: 0
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    className: "ve-row__name",
    style: {
      fontFamily: "var(--ve-serif)",
      fontWeight: 400,
      fontSize: "clamp(22px, 2.4vw, 31px)",
      color: "var(--ve-ink)",
      letterSpacing: "-0.01em",
      transition: "color .3s var(--ease-out)"
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 13,
      color: "var(--ve-soft)",
      textAlign: "right",
      flexShrink: 0
    },
    className: "ve-row__forms"
  }, p.forms.join(" · ")), /*#__PURE__*/React.createElement("span", {
    className: "ve-row__arr",
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 17,
      color: "var(--ve-blue)",
      opacity: 0,
      transform: "translateX(-8px)",
      transition: "opacity .3s var(--ease-out), transform .3s var(--ease-out)",
      flexShrink: 0
    }
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "ve-range-frame",
    style: {
      position: "sticky",
      top: 104
    }
  }, /*#__PURE__*/React.createElement("div", {
    key: active,
    style: {
      animation: "ve-soft .45s var(--ease-out) both"
    }
  }, /*#__PURE__*/React.createElement(Frame, {
    p: ap,
    fig: String(active + 1).padStart(2, "0"),
    ratio: "4 / 5",
    big: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--ve-sans)",
      fontSize: 12.5,
      color: "var(--ve-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "HS ", ap.hs), /*#__PURE__*/React.createElement("span", null, "Moisture ", ap.moisture))))));
}

/* ---- Process ---- */
const VE_STEPS = [{
  t: "Farm sourcing",
  b: "Onion and garlic from our own Mahuva growing belt, graded at intake."
}, {
  t: "Clean & peel",
  b: "Washed, peeled and sliced in a food-safe line within hours."
}, {
  t: "Dehydrate",
  b: "Continuous hot-air drying down to specification, lot by lot."
}, {
  t: "Mill & grade",
  b: "Milled to flakes, granules or powder; graded to your mesh."
}, {
  t: "Test & pack",
  b: "In-house and NABL/SGS testing, then 20 kg bags in cartons."
}];
function WebsiteProcess() {
  return /*#__PURE__*/React.createElement("section", {
    id: "process",
    style: {
      padding: "0 0 104px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ve-wrap",
    style: {
      padding: "0 40px"
    }
  }, /*#__PURE__*/React.createElement(Masthead, {
    kicker: "How it's made",
    title: "From soil to shipment.",
    meta: "No middlemen between the field and your container."
  }), /*#__PURE__*/React.createElement("div", {
    className: "ve-proc",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 28,
      marginTop: 44
    }
  }, VE_STEPS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.t,
    className: "ve-reveal",
    style: {
      transitionDelay: `${i * 70}ms`,
      paddingTop: 18,
      borderTop: "1px solid var(--ve-line-strong)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--ve-serif)",
      fontStyle: "italic",
      fontSize: 34,
      color: "var(--ve-muted)",
      marginBottom: 16
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontWeight: 600,
      fontSize: 16,
      color: "var(--ve-ink)",
      marginBottom: 10
    }
  }, s.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 13.5,
      lineHeight: 1.55,
      color: "var(--ve-soft)"
    }
  }, s.b))))));
}

/* ---- Quality ---- */
function VeCounter({
  to,
  suffix = "",
  duration = 1500
}) {
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf,
      started = false;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        started = true;
        const t0 = performance.now();
        const tick = t => {
          const p = Math.min(1, (t - t0) / duration);
          setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      }
    }, {
      threshold: 0.5
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, val, suffix);
}
const VE_CERTS = [["USFDA", "US Food & Drug Administration"], ["ISO 22000", "Food safety management"], ["HALAL & KOSHER", "Faith-based certification"], ["FSSAI", "Food Safety & Standards, India"], ["APEDA · Spice Board", "Export registrations"]];
function WebsiteQuality() {
  return /*#__PURE__*/React.createElement("section", {
    id: "quality",
    style: {
      padding: "0 0 104px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ve-wrap",
    style: {
      padding: "0 40px"
    }
  }, /*#__PURE__*/React.createElement(Masthead, {
    kicker: "Quality",
    title: "Tested before it travels."
  }), /*#__PURE__*/React.createElement("div", {
    className: "ve-2col",
    style: {
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: 64,
      marginTop: 44,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ve-reveal",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--ve-serif)",
      fontWeight: 300,
      fontSize: "clamp(22px, 2.2vw, 28px)",
      lineHeight: 1.32,
      color: "var(--ve-ink)",
      margin: 0,
      letterSpacing: "-0.01em"
    }
  }, "Every lot is verified in-house, by NABL-accredited labs, and on request by SGS, Geochem or Eurofins \u2014 to the standard your market requires."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 48
    }
  }, [["100%", "of lots lab-tested"], ["40+", "export countries"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--ve-serif)",
      fontSize: 52,
      color: "var(--ve-blue)",
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement(VeCounter, {
    to: parseInt(n),
    suffix: n.replace(/[0-9]/g, "")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 13,
      color: "var(--ve-soft)",
      marginTop: 8
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    className: "ve-reveal",
    style: {
      transitionDelay: "100ms"
    }
  }, VE_CERTS.map(([c, d], i) => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 20,
      padding: "18px 0",
      borderTop: i === 0 ? "1px solid var(--ve-line-strong)" : "1px solid var(--ve-line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-serif)",
      fontSize: 22,
      color: "var(--ve-ink)"
    }
  }, c), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ve-sans)",
      fontSize: 13,
      color: "var(--ve-muted)",
      textAlign: "right"
    }
  }, d)))))));
}
Object.assign(window, {
  Masthead,
  WebsiteRange,
  WebsiteProcess,
  WebsiteQuality
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebsiteSections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.CertChip = __ds_scope.CertChip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
