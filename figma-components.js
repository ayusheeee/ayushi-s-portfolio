const ie = () => Promise.resolve().then(() => ae), v = globalThis.__GLOBALS__.ReactJSXRuntime, { Fragment: le, jsx: e, jsxs: t } = v;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
globalThis.__GLOBALS__.React.Children;
globalThis.__GLOBALS__.React.cloneElement;
({
  ...globalThis.__GLOBALS__.React
});
const { Component: se, createContext: ce, createElement: c, createFactory: de, createRef: me, forwardRef: h, Fragment: he, isValidElement: ue, lazy: xe, memo: pe, Profiler: ge, PureComponent: be, startTransition: fe, StrictMode: Ne, Suspense: ye, use: ve, useCallback: ke, useContext: we, useDebugValue: _e, useDeferredValue: Ce, useEffect: Ae, useId: Se, useImperativeHandle: Le, useInsertionEffect: Me, useLayoutEffect: Te, useMemo: Pe, useReducer: Ie, useRef: De, useState: k, useSyncExternalStore: Ee, useTransition: Re, version: Be, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: je } = globalThis.__GLOBALS__.React;
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w = (o) => o.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), _ = (o) => o.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (r, n, i) => i ? i.toUpperCase() : n.toLowerCase()
), m = (o) => {
  const r = _(o);
  return r.charAt(0).toUpperCase() + r.slice(1);
}, u = (...o) => o.filter((r, n, i) => !!r && r.trim() !== "" && i.indexOf(r) === n).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var C = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A = h(
  ({
    color: o = "currentColor",
    size: r = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: i,
    className: l = "",
    children: s,
    iconNode: g,
    ...b
  }, f) => c(
    "svg",
    {
      ref: f,
      ...C,
      width: r,
      height: r,
      stroke: o,
      strokeWidth: i ? Number(n) * 24 / Number(r) : n,
      className: u("lucide", l),
      ...b
    },
    [
      ...g.map(([N, y]) => c(N, y)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a = (o, r) => {
  const n = h(
    ({ className: i, ...l }, s) => c(A, {
      ref: s,
      iconNode: r,
      className: u(
        `lucide-${w(m(o))}`,
        `lucide-${o}`,
        i
      ),
      ...l
    })
  );
  return n.displayName = m(o), n;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S = [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
], L = a("cloud", S);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M = [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
], d = a("code-xml", M);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T = [
  ["rect", { width: "16", height: "16", x: "4", y: "4", rx: "2", key: "14l7u7" }],
  ["rect", { width: "6", height: "6", x: "9", y: "9", rx: "1", key: "5aljv4" }],
  ["path", { d: "M15 2v2", key: "13l42r" }],
  ["path", { d: "M15 20v2", key: "15mkzm" }],
  ["path", { d: "M2 15h2", key: "1gxd5l" }],
  ["path", { d: "M2 9h2", key: "1bbxkp" }],
  ["path", { d: "M20 15h2", key: "19e6y8" }],
  ["path", { d: "M20 9h2", key: "19tzq7" }],
  ["path", { d: "M9 2v2", key: "165o2o" }],
  ["path", { d: "M9 20v2", key: "i2bqo8" }]
], P = a("cpu", T);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
], D = a("database", I);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], R = a("external-link", E);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
], x = a("github", B);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
], F = a("linkedin", j);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
], p = a("mail", O);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], $ = a("map-pin", U);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z = [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
], H = a("menu", z);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G = [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
], q = a("phone", G);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V = [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }]
], W = a("terminal", V);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Z = a("x", X);
function J() {
  const [o, r] = k(!1), n = (i) => {
    const l = document.getElementById(i);
    l && (l.scrollIntoView({ behavior: "smooth" }), r(!1));
  };
  return /* @__PURE__ */ e("nav", { className: "fixed top-0 w-full bg-card/95 backdrop-blur-sm shadow-md z-50 border-b border-border", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ t("div", { className: "flex justify-between items-center h-16", children: [
      /* @__PURE__ */ t(
        "button",
        {
          onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
          className: "text-xl font-bold text-primary flex items-center gap-2 font-mono",
          children: [
            /* @__PURE__ */ e(d, { className: "w-5 h-5" }),
            "<AT />"
          ]
        }
      ),
      /* @__PURE__ */ t("div", { className: "hidden md:flex gap-8", children: [
        /* @__PURE__ */ e("button", { onClick: () => n("about"), className: "text-muted-foreground hover:text-primary transition-colors font-mono", children: ".about()" }),
        /* @__PURE__ */ e("button", { onClick: () => n("skills"), className: "text-muted-foreground hover:text-primary transition-colors font-mono", children: ".skills()" }),
        /* @__PURE__ */ e("button", { onClick: () => n("projects"), className: "text-muted-foreground hover:text-primary transition-colors font-mono", children: ".projects()" }),
        /* @__PURE__ */ e("button", { onClick: () => n("contact"), className: "text-muted-foreground hover:text-primary transition-colors font-mono", children: ".contact()" })
      ] }),
      /* @__PURE__ */ e(
        "button",
        {
          className: "md:hidden text-foreground",
          onClick: () => r(!o),
          children: o ? /* @__PURE__ */ e(Z, { className: "w-6 h-6" }) : /* @__PURE__ */ e(H, { className: "w-6 h-6" })
        }
      )
    ] }),
    o && /* @__PURE__ */ e("div", { className: "md:hidden pb-4", children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ e("button", { onClick: () => n("about"), className: "text-muted-foreground hover:text-primary transition-colors text-left font-mono", children: ".about()" }),
      /* @__PURE__ */ e("button", { onClick: () => n("skills"), className: "text-muted-foreground hover:text-primary transition-colors text-left font-mono", children: ".skills()" }),
      /* @__PURE__ */ e("button", { onClick: () => n("projects"), className: "text-muted-foreground hover:text-primary transition-colors text-left font-mono", children: ".projects()" }),
      /* @__PURE__ */ e("button", { onClick: () => n("contact"), className: "text-muted-foreground hover:text-primary transition-colors text-left font-mono", children: ".contact()" })
    ] }) })
  ] }) });
}
function K() {
  return /* @__PURE__ */ t("section", { className: "min-h-screen flex items-center justify-center px-4 relative overflow-hidden", children: [
    /* @__PURE__ */ t("div", { className: "absolute inset-0 opacity-5", children: [
      /* @__PURE__ */ e("div", { className: "absolute top-10 left-10 text-primary/30 font-mono text-sm", children: "<portfolio>" }),
      /* @__PURE__ */ e("div", { className: "absolute top-20 right-20 text-primary/30 font-mono text-sm", children: "const code = true;" }),
      /* @__PURE__ */ e("div", { className: "absolute bottom-20 left-20 text-primary/30 font-mono text-sm", children: "</developer>" }),
      /* @__PURE__ */ e("div", { className: "absolute bottom-40 right-40 text-primary/30 font-mono text-sm", children: "function build()" })
    ] }),
    /* @__PURE__ */ t("div", { className: "max-w-4xl mx-auto text-center relative z-10", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center justify-center gap-3 mb-4", children: [
        /* @__PURE__ */ e(W, { className: "w-8 h-8 text-primary" }),
        /* @__PURE__ */ e(d, { className: "w-8 h-8 text-accent" })
      ] }),
      /* @__PURE__ */ e("div", { className: "font-mono text-sm text-muted-foreground mb-2", children: "~/portfolio/welcome" }),
      /* @__PURE__ */ e("h1", { className: "text-5xl md:text-7xl font-bold mb-4 text-foreground", children: "Ayushi Tripathi" }),
      /* @__PURE__ */ e("p", { className: "text-xl md:text-2xl text-muted-foreground mb-8 font-mono", children: "<CS Student /> | { AI/ML Enthusiast } | Problem Solver" }),
      /* @__PURE__ */ e("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto mb-12", children: "Computer science undergraduate specializing in artificial intelligence and machine learning. Building end-to-end solutions with Python, Flutter, and NLP. NCC Colonel rank holder and student leader." }),
      /* @__PURE__ */ t("div", { className: "flex gap-6 justify-center", children: [
        /* @__PURE__ */ e(
          "a",
          {
            href: "https://github.com/ayusheeee",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "p-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",
            children: /* @__PURE__ */ e(x, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ e(
          "a",
          {
            href: "https://www.linkedin.com/in/ayushi-tripathi-424536277/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "p-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors",
            children: /* @__PURE__ */ e(F, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ e(
          "a",
          {
            href: "mailto:ayushi2005tripathi@gmail.com",
            className: "p-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors",
            children: /* @__PURE__ */ e(p, { className: "w-6 h-6" })
          }
        )
      ] })
    ] })
  ] });
}
function Y() {
  return /* @__PURE__ */ e("section", { id: "about", className: "py-20 px-4 bg-muted/30", children: /* @__PURE__ */ t("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ e("div", { className: "font-mono text-sm text-muted-foreground mb-2", children: "// About section" }),
    /* @__PURE__ */ e("h2", { className: "text-4xl font-bold mb-8 text-foreground", children: "About Me" }),
    /* @__PURE__ */ t("div", { className: "bg-card rounded-lg shadow-lg p-8 border border-border", children: [
      /* @__PURE__ */ e("div", { className: "font-mono text-xs text-muted-foreground mb-4", children: "/* Personal Info */" }),
      /* @__PURE__ */ e("p", { className: "text-lg text-foreground mb-6", children: "Computer science undergraduate at Amity University specializing in artificial intelligence and machine learning with hands-on experience in Python, Flutter, and NLP projects. Proven ability to develop end-to-end solutions, including AI-based biodiversity detection pipelines and cross-platform voting applications." }),
      /* @__PURE__ */ e("p", { className: "text-lg text-foreground mb-6", children: "Selected for the Internal Round of Smart India Hackathon (SIH) 2025. Awarded Honorary Colonel Rank in NCC for outstanding leadership and performance. Former House Captain and Student Council Member with experience in internships spanning digital communication, website management, and content creation." }),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-8", children: [
        /* @__PURE__ */ t("div", { className: "p-4 bg-muted/50 rounded-lg border border-border", children: [
          /* @__PURE__ */ e("div", { className: "font-mono text-xs text-muted-foreground mb-2", children: "const education = {" }),
          /* @__PURE__ */ e("h3", { className: "text-xl font-semibold mb-3 text-foreground ml-4", children: "Education" }),
          /* @__PURE__ */ e("p", { className: "text-foreground ml-4", children: "B.Tech: Computer Science" }),
          /* @__PURE__ */ e("p", { className: "text-muted-foreground ml-4", children: "Amity University, Noida | 2027" }),
          /* @__PURE__ */ e("p", { className: "text-muted-foreground ml-4 text-sm", children: "CGPA: 7.85" }),
          /* @__PURE__ */ e("div", { className: "font-mono text-xs text-muted-foreground mt-2", children: "}" })
        ] }),
        /* @__PURE__ */ t("div", { className: "p-4 bg-muted/50 rounded-lg border border-border", children: [
          /* @__PURE__ */ e("div", { className: "font-mono text-xs text-muted-foreground mb-2", children: "const interests = [" }),
          /* @__PURE__ */ e("h3", { className: "text-xl font-semibold mb-3 text-foreground ml-4", children: "Interests" }),
          /* @__PURE__ */ e("p", { className: "text-foreground ml-4", children: "AI/ML, Cybersecurity, Flutter Dev" }),
          /* @__PURE__ */ e("p", { className: "text-muted-foreground ml-4", children: "Creative Writing, Public Speaking" }),
          /* @__PURE__ */ e("p", { className: "text-muted-foreground ml-4", children: "Graphic Design, Content Creation" }),
          /* @__PURE__ */ e("div", { className: "font-mono text-xs text-muted-foreground mt-2", children: "]" })
        ] })
      ] })
    ] })
  ] }) });
}
const Q = [
  {
    icon: d,
    title: "Programming & Development",
    skills: ["Python", "Flutter", "JavaScript", "HTML/CSS", "Flask"]
  },
  {
    icon: P,
    title: "AI & Machine Learning",
    skills: ["NLP", "TensorFlow", "DNABERT", "HDBSCAN", "ML Models"]
  },
  {
    icon: D,
    title: "Tools & Technologies",
    skills: ["Git", "CMS", "Nmap", "SEO", "Web Development"]
  },
  {
    icon: L,
    title: "Other Skills",
    skills: ["Cybersecurity", "Graphic Design", "Mobile App Dev", "Technical Writing", "Content Creation"]
  }
];
function ee() {
  return /* @__PURE__ */ e("section", { id: "skills", className: "py-20 px-4 bg-background", children: /* @__PURE__ */ t("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ e("div", { className: "font-mono text-sm text-muted-foreground mb-2", children: "// Skills array" }),
    /* @__PURE__ */ e("h2", { className: "text-4xl font-bold mb-12 text-foreground", children: "Skills" }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: Q.map((o) => {
      const r = o.icon;
      return /* @__PURE__ */ t("div", { className: "bg-card rounded-lg shadow-lg p-6 border border-border hover:border-primary/50 transition-colors", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ e(r, { className: "w-8 h-8 text-primary" }),
          /* @__PURE__ */ e("h3", { className: "text-xl font-semibold text-foreground", children: o.title })
        ] }),
        /* @__PURE__ */ e("div", { className: "font-mono text-xs text-muted-foreground mb-2", children: "[" }),
        /* @__PURE__ */ e("ul", { className: "space-y-2 ml-4", children: o.skills.map((n) => /* @__PURE__ */ t("li", { className: "text-foreground font-mono text-sm", children: [
          /* @__PURE__ */ e("span", { className: "text-accent", children: '"' }),
          n,
          /* @__PURE__ */ e("span", { className: "text-accent", children: '",' })
        ] }, n)) }),
        /* @__PURE__ */ e("div", { className: "font-mono text-xs text-muted-foreground mt-2", children: "]" })
      ] }, o.title);
    }) })
  ] }) });
}
const te = [
  {
    title: "SecProbe: Web Security Auditing Tool",
    description: "Python-Flask tool to audit domains across network, web, and SSL/TLS security layers. Uses Nmap for port scanning, automated checks for HTTP headers, and a risk scoring engine (A-F grade).",
    technologies: ["Python", "Flask", "Nmap", "SSL/TLS", "Security"],
    githubUrl: "https://github.com/ayusheeee",
    liveUrl: null
  },
  {
    title: "De Novo Discovery Engine (SIH 2025)",
    description: "AI-driven pipeline to detect known and novel deep-sea organisms from environmental DNA datasets. Features DNABERT embeddings, HDBSCAN clustering, and a Novelty Persistence Score for reliability.",
    technologies: ["Python", "DNABERT", "HDBSCAN", "AI/ML", "Biodiversity"],
    githubUrl: "https://github.com/ayusheeee",
    liveUrl: null
  },
  {
    title: "eBallot: Digital Democracy Platform",
    description: "Cross-platform voting application built in Flutter with modular architecture. Features voter ID validation, facial verification, anonymous vote submission, and prioritized security.",
    technologies: ["Flutter", "API Backend", "Security", "Mobile Dev"],
    githubUrl: "https://github.com/ayusheeee",
    liveUrl: null
  },
  {
    title: "Resume Analyzer: AI Evaluation Tool",
    description: "ML-based tool to evaluate resumes against job descriptions. Applies NLP to extract skills and keywords, with scoring mechanism to flag missing skills and improve ATS compatibility.",
    technologies: ["Python", "NLP", "Machine Learning", "ATS"],
    githubUrl: "https://github.com/ayusheeee",
    liveUrl: null
  }
];
function oe() {
  return /* @__PURE__ */ e("section", { id: "projects", className: "py-20 px-4 bg-muted/30", children: /* @__PURE__ */ t("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ e("div", { className: "font-mono text-sm text-muted-foreground mb-2", children: "// Projects showcase" }),
    /* @__PURE__ */ e("h2", { className: "text-4xl font-bold mb-12 text-foreground", children: "Projects" }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: te.map((o) => /* @__PURE__ */ t("div", { className: "bg-card rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-border hover:border-primary/50", children: [
      /* @__PURE__ */ e("div", { className: "font-mono text-xs text-muted-foreground mb-2", children: "class Project {" }),
      /* @__PURE__ */ e("h3", { className: "text-2xl font-semibold mb-3 text-foreground ml-4", children: o.title }),
      /* @__PURE__ */ e("p", { className: "text-muted-foreground mb-4 ml-4", children: o.description }),
      /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2 mb-4 ml-4", children: o.technologies.map((r) => /* @__PURE__ */ e(
        "span",
        {
          className: "px-3 py-1 bg-accent/20 text-accent-foreground rounded-md text-sm font-mono border border-accent/30",
          children: r
        },
        r
      )) }),
      /* @__PURE__ */ t("div", { className: "flex gap-4 ml-4", children: [
        /* @__PURE__ */ t(
          "a",
          {
            href: o.githubUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono text-sm",
            children: [
              /* @__PURE__ */ e(x, { className: "w-5 h-5" }),
              /* @__PURE__ */ e("span", { children: "Code" })
            ]
          }
        ),
        o.liveUrl && /* @__PURE__ */ t(
          "a",
          {
            href: o.liveUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-mono text-sm",
            children: [
              /* @__PURE__ */ e(R, { className: "w-5 h-5" }),
              /* @__PURE__ */ e("span", { children: "Live Demo" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { className: "font-mono text-xs text-muted-foreground mt-4", children: "}" })
    ] }, o.title)) })
  ] }) });
}
function re() {
  return /* @__PURE__ */ e("section", { id: "contact", className: "py-20 px-4 bg-background", children: /* @__PURE__ */ t("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ e("div", { className: "font-mono text-sm text-muted-foreground mb-2", children: "// Contact information" }),
    /* @__PURE__ */ e("h2", { className: "text-4xl font-bold mb-12 text-foreground", children: "Get In Touch" }),
    /* @__PURE__ */ t("div", { className: "bg-card rounded-lg shadow-lg p-8 border border-border", children: [
      /* @__PURE__ */ e("div", { className: "font-mono text-xs text-muted-foreground mb-4", children: "/* Feel free to reach out */" }),
      /* @__PURE__ */ e("p", { className: "text-lg text-muted-foreground text-center mb-8", children: "I'm always open to discussing new projects, internship opportunities, or collaborations in AI/ML and software development." }),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ t("div", { className: "flex flex-col items-center text-center p-4 bg-muted/30 rounded-lg border border-border", children: [
          /* @__PURE__ */ e("div", { className: "p-4 bg-primary/10 rounded-full mb-4 border border-primary/20", children: /* @__PURE__ */ e(p, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ e("h3", { className: "font-semibold mb-2 font-mono text-foreground", children: "Email" }),
          /* @__PURE__ */ e("a", { href: "mailto:ayushi2005tripathi@gmail.com", className: "text-primary hover:underline font-mono text-sm", children: "ayushi2005tripathi@gmail.com" })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex flex-col items-center text-center p-4 bg-muted/30 rounded-lg border border-border", children: [
          /* @__PURE__ */ e("div", { className: "p-4 bg-accent/10 rounded-full mb-4 border border-accent/20", children: /* @__PURE__ */ e(q, { className: "w-6 h-6 text-accent" }) }),
          /* @__PURE__ */ e("h3", { className: "font-semibold mb-2 font-mono text-foreground", children: "Phone" }),
          /* @__PURE__ */ e("a", { href: "tel:+919958890347", className: "text-muted-foreground font-mono text-sm", children: "+91 99588 90347" })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex flex-col items-center text-center p-4 bg-muted/30 rounded-lg border border-border", children: [
          /* @__PURE__ */ e("div", { className: "p-4 bg-secondary/10 rounded-full mb-4 border border-secondary/20", children: /* @__PURE__ */ e($, { className: "w-6 h-6 text-secondary-foreground" }) }),
          /* @__PURE__ */ e("h3", { className: "font-semibold mb-2 font-mono text-foreground", children: "Location" }),
          /* @__PURE__ */ e("p", { className: "text-muted-foreground font-mono text-sm", children: "New Delhi, India" })
        ] })
      ] })
    ] })
  ] }) });
}
function ne() {
  return /* @__PURE__ */ t("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ e(J, {}),
    /* @__PURE__ */ e(K, {}),
    /* @__PURE__ */ e(Y, {}),
    /* @__PURE__ */ e(ee, {}),
    /* @__PURE__ */ e(oe, {}),
    /* @__PURE__ */ e(re, {}),
    /* @__PURE__ */ e("footer", { className: "bg-primary text-primary-foreground py-8 text-center border-t border-border", children: /* @__PURE__ */ e("p", { className: "font-mono text-sm", children: "© 2026 Ayushi Tripathi. All rights reserved." }) })
  ] });
}
const ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ne
}, Symbol.toStringTag, { value: "Module" }));
export {
  ie as Code0_8
};
