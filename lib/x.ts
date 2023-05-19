export const X = function(r) {
  const l = "I work with ";
  const o = ["Front-End", "Rust", "JavaScript", "Node.js", "React", "Love"].map(function(r) {
  return r + "."
});
  const a = 2;
  const g = 1;
  const s = 5;
  const d = 75;
  const b = ["rgb(110,64,170)", "rgb(150,61,179)", "rgb(191,60,175)", "rgb(228,65,157)", "rgb(254,75,131)", "rgb(255,94,99)", "rgb(255,120,71)", "rgb(251,150,51)", "rgb(226,183,47)", "rgb(198,214,60)", "rgb(175,240,91)", "rgb(127,246,88)", "rgb(82,246,103)", "rgb(48,239,130)", "rgb(29,223,163)", "rgb(26,199,194)", "rgb(35,171,216)", "rgb(54,140,225)", "rgb(76,110,219)", "rgb(96,84,200)"];
  const c = {
  text: "",
  prefixP: -s,
  skillI: 0,
  skillP: 0,
  direction: "forward",
  delay: a,
  step: g
};

  function t() {
    return b[Math.floor(Math.random() * b.length)]
  }
  function e() {
    return String.fromCharCode(94 * Math.random() + 33)
  }
  function n(r) {
    const n = document.createDocumentFragment();
    let i = 0;
    for (; r > i; i++) {
      const l = document.createElement("span");
      l.textContent = e(),
        l.style.color = t(),
        n.appendChild(l)
    }
    return n
  }
  function i() {
    const t = o[c.skillI];
    c.step ? c.step-- : (c.step = g,
      c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]),
        c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP],
        c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward",
        c.delay = a) : c.skillP > 0 ? (c.text = c.text.slice(0, -1),
        c.skillP--) : (c.skillI = (c.skillI + 1) % o.length,
        c.direction = "forward")),
      r.textContent = c.text,
      r.appendChild(n(c.prefixP < l.length ? Math.min(s, s + c.prefixP) : Math.min(s, t.length - c.skillP))),
      setTimeout(i, d)
  }
  i()
};
