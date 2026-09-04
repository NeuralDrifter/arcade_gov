(() => {
  function bt(h, t = 0) {
    try {
      let s = window.localStorage.getItem(h);
      if (s === null) return t;
      let S = Number(s);
      return Number.isFinite(S) ? S : t;
    } catch {
      return t;
    }
  }
  function Ct(h, t) {
    try {
      return (window.localStorage.setItem(h, String(t)), !0);
    } catch {
      return !1;
    }
  }
  function Pt(h) {
    let t = `wh-games.${h}.best`,
      s = bt(t, 0);
    return {
      key: t,
      value() {
        return s;
      },
      submit(S) {
        return !Number.isFinite(S) || S <= s ? !1 : ((s = S), Ct(t, s), !0);
      },
    };
  }
  function vt() {
    let h = null,
      t = null,
      s = null,
      S = 0,
      m = !1;
    return {
      start(a) {
        return h !== null
          ? !1
          : ((h = a.id),
            (s = { x: a.x, y: a.y }),
            (t = { x: a.x, y: a.y }),
            (S = a.at),
            (m = !1),
            !0);
      },
      tracking(a) {
        return h !== null && a === h;
      },
      move(a, n) {
        if (h === null || a.id !== h || !(n > 0)) return [];
        Math.hypot(a.x - s.x, a.y - s.y) > 10 && (m = !0);
        let w = [],
          c = Math.trunc((a.x - t.x) / n);
        if (c !== 0) {
          for (let p = 0; p < Math.abs(c); p++) w.push(c > 0 ? "right" : "left");
          t.x += c * n;
        }
        let M = Math.trunc((a.y - t.y) / n);
        if (M !== 0) {
          for (let p = 0; p < M; p++) w.push("soft");
          t.y += M * n;
        }
        return w;
      },
      end(a, n) {
        if (h === null || a.id !== h) return null;
        h = null;
        let w = a.at - S,
          c = a.x - s.x,
          M = a.y - s.y;
        return m
          ? w < 250 && M > 2.5 * n && M > Math.abs(c)
            ? { action: "slam", x: a.x, y: a.y }
            : null
          : w < 250
            ? { action: "tap", x: a.x, y: a.y }
            : null;
      },
      cancel(a) {
        h !== null && a === h && (h = null);
      },
    };
  }
  function Mt(h, t, s, S) {
    return s === "title" || s === "gameover"
      ? "start"
      : s === "paused"
        ? "resume"
        : s !== "playing"
          ? "none"
          : t < S.hudHeight
            ? h > S.width - S.muteWidth
              ? "mute"
              : "pause"
            : "rotate";
  }
  document.fonts.load('56px "Press Start 2P"');
  document.fonts.load('16px "VT323"');
  (function () {
    "use strict";
    let h = document.getElementById("game"),
      t = h.getContext("2d"),
      s = h.width,
      S = h.height,
      m = 10,
      a = 18,
      n = 28,
      w = 80,
      c = S - 60,
      p = c - a * n,
      te = w + m * n,
      Bt = {
        I: "#06ffa5",
        O: "#ffbe0b",
        T: "#ff006e",
        L: "#fb5607",
        J: "#8338ec",
        S: "#3a86ff",
        Z: "#ff4444",
      },
      et = {
        I: [[1, 1, 1, 1]],
        O: [
          [1, 1],
          [1, 1],
        ],
        T: [
          [0, 1, 0],
          [1, 1, 1],
        ],
        L: [
          [0, 0, 1],
          [1, 1, 1],
        ],
        J: [
          [1, 0, 0],
          [1, 1, 1],
        ],
        S: [
          [0, 1, 1],
          [1, 1, 0],
        ],
        Z: [
          [1, 1, 0],
          [0, 1, 1],
        ],
      },
      lt = Object.keys(et),
      g = "title",
      L,
      u,
      B,
      T,
      W,
      C,
      _,
      Z,
      I,
      N,
      z,
      V,
      A,
      P,
      b,
      D,
      U,
      E = !1,
      K =
        typeof window.matchMedia == "function" &&
        window.matchMedia("(hover: none) and (pointer: coarse)").matches,
      G = Pt("build-the-wall");
    function ot() {
      ((L = Array.from({ length: a }, () => Array(m).fill(null))),
        (T = 0),
        (W = 3),
        (C = 1),
        (_ = 0),
        (Z = 850),
        (I = []),
        (N = 4e3),
        (z = 4500),
        (V = 0),
        (A = []),
        (P = 0),
        (b = 0),
        (D = 0),
        (U = 0),
        (u = Y()),
        (B = Y()));
    }
    function Y() {
      let e = lt[Math.floor(Math.random() * lt.length)],
        l = et[e].map((o) => [...o]);
      return { type: e, shape: l, color: Bt[e], x: Math.floor((m - l[0].length) / 2), y: 0 };
    }
    function At(e) {
      let l = e.length,
        o = e[0].length,
        r = Array.from({ length: o }, () => Array(l).fill(0));
      for (let i = 0; i < l; i++) for (let f = 0; f < o; f++) r[f][l - 1 - i] = e[i][f];
      return r;
    }
    function k(e, l, o, r) {
      r = r || e.shape;
      for (let i = 0; i < r.length; i++)
        for (let f = 0; f < r[i].length; f++) {
          if (!r[i][f]) continue;
          let d = e.x + f + l,
            v = e.y + i + o;
          if (d < 0 || d >= m || v >= a || (v >= 0 && L[v][d])) return !0;
        }
      return !1;
    }
    function rt(e) {
      let l = a;
      for (let o = 0; o < e.shape.length; o++)
        for (let r = 0; r < e.shape[o].length; r++) {
          if (!e.shape[o][r]) continue;
          let i = e.x + r,
            f = e.y + o;
          f >= 0 &&
            f < a &&
            i >= 0 &&
            i < m &&
            ((L[f][i] = e.color), Dt(w + i * n + n / 2, p + f * n + n / 2), f < l && (l = f));
        }
      ((T += 10), F(2.5, 90), R(140, 0.08, "square", 0.07), (u = B), (B = Y()), k(u, 0, 0) && nt());
    }
    function it() {
      let e = 0;
      for (; !k(u, 0, 1);) (u.y++, e++);
      ((T += e * 2), R(90, 0.12, "sawtooth", 0.09), rt(u));
    }
    function ft() {
      let e = At(u.shape),
        l = [0, -1, 1, -2, 2];
      for (let o of l)
        if (!k(u, o, 0, e)) {
          ((u.shape = e), (u.x += o), R(420, 0.04, "square", 0.05));
          return;
        }
    }
    function Et(e) {
      for (let l = 0; l < a; l++) if (L[l][e]) return a - l;
      return 0;
    }
    let q = [
      { name: "crawler", strength: 1, speed: 0.055, weight: 50, color: "#06ffa5" },
      { name: "walker", strength: 2, speed: 0.075, weight: 35, color: "#a8ff06" },
      { name: "lurcher", strength: 4, speed: 0.045, weight: 15, color: "#ff9c06" },
    ];
    function kt() {
      let e = q.reduce((o, r) => o + r.weight, 0),
        l = Math.random() * e;
      for (let o of q) if (((l -= o.weight), l <= 0)) return o;
      return q[0];
    }
    function Ot() {
      let e = kt();
      I.push({
        type: e,
        x: s + 30 + Math.random() * 60,
        y: c + 2,
        vx: -e.speed * (1 + C * 0.06),
        state: "walking",
        anim: Math.random() * 1e3,
        lastCheckedCol: m,
        strengthCheck: e.strength,
        deathTime: 0,
        shamble: Math.random() * Math.PI * 2,
      });
    }
    function Lt(e) {
      for (let l of I)
        if (l.state === "walking") {
          ((l.x += l.vx * e), (l.anim += e), (l.shamble += e * 0.008));
          let o = Math.floor((l.x - w) / n);
          o < l.lastCheckedCol &&
            (o < 0
              ? ((l.state = "breached"), (l.lastCheckedCol = -1), It())
              : o < m &&
                (Et(o) >= l.strengthCheck &&
                  ((l.state = "dead"),
                  (l.deathTime = 0),
                  (l.x = w + (o + 1) * n),
                  (T += 50 * l.strengthCheck),
                  Gt(l.x, l.y - 14, l.type.color),
                  F(3.5, 120),
                  R(280, 0.12, "sawtooth", 0.09),
                  R(140, 0.18, "sawtooth", 0.07),
                  (U = 600)),
                (l.lastCheckedCol = o)));
        } else l.state === "dead" && (l.deathTime += e);
      I = I.filter((l) => !(l.state === "breached" || (l.state === "dead" && l.deathTime > 700)));
    }
    function nt() {
      ((g = "gameover"),
        G.submit(T),
        F(10, 600),
        R(120, 0.4, "sawtooth", 0.12),
        R(80, 0.6, "sawtooth", 0.1));
    }
    function It() {
      (W--, F(10, 500), (D = 400), R(70, 0.5, "sawtooth", 0.14), W <= 0 && nt());
    }
    function Dt(e, l) {
      for (let o = 0; o < 5; o++)
        A.push({
          x: e,
          y: l,
          vx: (Math.random() - 0.5) * 0.15,
          vy: -Math.random() * 0.1 - 0.02,
          life: 400 + Math.random() * 200,
          maxLife: 600,
          color: "#d4a574",
          size: 2 + Math.random() * 2,
          gravity: 3e-4,
        });
    }
    function Gt(e, l, o) {
      for (let r = 0; r < 14; r++)
        A.push({
          x: e,
          y: l,
          vx: (Math.random() - 0.5) * 0.5,
          vy: -Math.random() * 0.35 - 0.1,
          life: 600 + Math.random() * 500,
          maxLife: 1100,
          color: r % 3 === 0 ? "#ff006e" : o,
          size: 2 + Math.random() * 3,
          gravity: 0.001,
        });
    }
    function at(e) {
      for (let l of A)
        ((l.x += l.vx * e), (l.y += l.vy * e), l.gravity && (l.vy += l.gravity * e), (l.life -= e));
      A = A.filter((l) => l.life > 0);
    }
    function F(e, l) {
      ((P = Math.max(P, e)), (b = Math.max(b, l)));
    }
    let x = null;
    function Ht() {
      if (!x)
        try {
          x = new (window.AudioContext || window.webkitAudioContext)();
        } catch {}
    }
    function R(e, l, o = "square", r = 0.08) {
      if (!(E || !x))
        try {
          let i = x.createOscillator(),
            f = x.createGain();
          ((i.type = o),
            (i.frequency.value = e),
            (f.gain.value = r),
            f.gain.exponentialRampToValueAtTime(1e-4, x.currentTime + l),
            i.connect(f),
            f.connect(x.destination),
            i.start(),
            i.stop(x.currentTime + l + 0.02));
        } catch {}
    }
    let Kt = Array.from({ length: 70 }, () => ({
        x: Math.random() * s,
        y: Math.random() * (c - 100),
        brightness: Math.random(),
        speed: 0.3 + Math.random() * 0.8,
        size: Math.random() < 0.15 ? 2 : 1,
      })),
      st = [];
    {
      let e = 0;
      for (; e < s + 20;) {
        let l = 80 + Math.random() * 120,
          o = 30 + Math.random() * 60;
        (st.push({ x: e, w: l, h: o }), (e += l * 0.6));
      }
    }
    function ct(e) {
      let l = t.createLinearGradient(0, 0, 0, c);
      (l.addColorStop(0, "#070218"),
        l.addColorStop(0.35, "#240744"),
        l.addColorStop(0.65, "#6b0a5e"),
        l.addColorStop(0.88, "#ff2a6d"),
        l.addColorStop(1, "#ffae42"),
        (t.fillStyle = l),
        t.fillRect(0, 0, s, c));
      for (let y of Kt) {
        let O = 0.5 + 0.5 * Math.sin(e * 0.003 * y.speed + y.brightness * 10);
        ((t.fillStyle = `rgba(255, 240, 255, ${0.25 + O * 0.7})`),
          t.fillRect(y.x, y.y, y.size, y.size));
      }
      let o = s * 0.74,
        r = c - 90,
        i = 85,
        f = t.createRadialGradient(o, r, 0, o, r, i * 2.3);
      (f.addColorStop(0, "rgba(255, 130, 0, 0.5)"),
        f.addColorStop(0.35, "rgba(255, 0, 110, 0.22)"),
        f.addColorStop(1, "rgba(255, 0, 110, 0)"),
        (t.fillStyle = f),
        t.fillRect(o - i * 2.3, r - i * 2.3, i * 4.6, i * 4.6),
        t.save(),
        t.beginPath(),
        t.arc(o, r, i, 0, Math.PI * 2),
        t.clip());
      let d = t.createLinearGradient(o, r - i, o, r + i);
      (d.addColorStop(0, "#ffd60a"),
        d.addColorStop(0.45, "#fb5607"),
        d.addColorStop(1, "#ff006e"),
        (t.fillStyle = d),
        t.fillRect(o - i, r - i, i * 2, i * 2),
        (t.fillStyle = "rgba(10, 4, 32, 0.85)"));
      let v = [42, 56, 71, 87, 105, 125];
      for (let y of v) t.fillRect(o - i, r - i + y, i * 2, 3);
      (t.restore(), (t.fillStyle = "#1a0628"), t.beginPath(), t.moveTo(0, c));
      for (let y of st)
        (t.lineTo(y.x, c - y.h),
          t.lineTo(y.x + y.w * 0.5, c - y.h * 1.4),
          t.lineTo(y.x + y.w, c - y.h * 0.7));
      (t.lineTo(s, c),
        t.closePath(),
        t.fill(),
        (t.fillStyle = "#0a0218"),
        t.beginPath(),
        t.moveTo(0, c),
        t.lineTo(0, c - 22),
        t.bezierCurveTo(200, c - 38, 380, c - 18, 560, c - 32),
        t.bezierCurveTo(700, c - 42, 820, c - 20, s, c - 30),
        t.lineTo(s, c),
        t.closePath(),
        t.fill(),
        J(440, c - 4, 1),
        J(630, c - 6, 1.4),
        J(800, c - 2, 0.85));
      let tt = t.createLinearGradient(0, c, 0, S);
      (tt.addColorStop(0, "#3a0a4a"),
        tt.addColorStop(1, "#06000f"),
        (t.fillStyle = tt),
        t.fillRect(0, c, s, S - c),
        (t.strokeStyle = "rgba(255, 0, 110, 0.6)"),
        (t.lineWidth = 1.2));
      let xt = c,
        jt = S - c,
        Qt = (e * 0.04) % 14;
      for (let y = 0; y < 8; y++) {
        let O = (y * 14 + Qt) / 112,
          Tt = xt + jt * (O * O);
        ((t.globalAlpha = 1 - O * 0.4),
          t.beginPath(),
          t.moveTo(0, Tt),
          t.lineTo(s, Tt),
          t.stroke());
      }
      t.globalAlpha = 1;
      let Rt = s * 0.55;
      t.strokeStyle = "rgba(255, 0, 110, 0.45)";
      for (let y = -10; y <= 10; y++) {
        let O = Rt + y * 90;
        (t.beginPath(), t.moveTo(Rt, xt), t.lineTo(O, S), t.stroke());
      }
    }
    function J(e, l, o) {
      let r = o || 1;
      t.fillStyle = "#08151a";
      let i = 8 * r,
        f = 50 * r;
      (t.fillRect(e - i / 2, l - f, i, f),
        t.fillRect(e - 14 * r, l - 35 * r, 8 * r, 5 * r),
        t.fillRect(e - 14 * r, l - 42 * r, 5 * r, 12 * r),
        t.fillRect(e + 6 * r, l - 40 * r, 10 * r, 5 * r),
        t.fillRect(e + 11 * r, l - 48 * r, 5 * r, 13 * r),
        (t.fillStyle = "rgba(255, 0, 110, 0.25)"),
        t.fillRect(e - i / 2 - 1, l - f, 1, f));
    }
    function $(e, l, o, r) {
      ((t.fillStyle = o),
        t.fillRect(e, l, n, n),
        (t.fillStyle = "rgba(255, 255, 255, 0.35)"),
        t.fillRect(e + 1, l + 1, n - 2, 2),
        t.fillRect(e + 1, l + 1, 2, n - 2),
        (t.fillStyle = "rgba(0, 0, 0, 0.45)"),
        t.fillRect(e + 1, l + n - 3, n - 2, 2),
        t.fillRect(e + n - 3, l + 1, 2, n - 2),
        (t.fillStyle = "rgba(0, 0, 0, 0.55)"),
        t.fillRect(e, l, n, 1),
        t.fillRect(e, l, 1, n),
        t.fillRect(e, l + n - 1, n, 1),
        t.fillRect(e + n - 1, l, 1, n),
        r && ((t.fillStyle = "rgba(0, 0, 0, 0.4)"), t.fillRect(e, l + Math.floor(n / 2), n, 1)));
    }
    function Wt() {
      ((t.fillStyle = "rgba(0, 0, 0, 0.35)"),
        t.fillRect(w, p, m * n, a * n),
        (t.strokeStyle = "rgba(255, 255, 255, 0.04)"),
        (t.lineWidth = 1));
      for (let e = 1; e < m; e++)
        (t.beginPath(),
          t.moveTo(w + e * n + 0.5, p),
          t.lineTo(w + e * n + 0.5, p + a * n),
          t.stroke());
      for (let e = 1; e < a; e++)
        (t.beginPath(),
          t.moveTo(w, p + e * n + 0.5),
          t.lineTo(w + m * n, p + e * n + 0.5),
          t.stroke());
    }
    function _t() {
      ((t.strokeStyle = "#ff006e"),
        (t.lineWidth = 2),
        (t.shadowColor = "#ff006e"),
        (t.shadowBlur = 12),
        t.strokeRect(w - 1, p - 1, m * n + 2, a * n + 2),
        (t.shadowBlur = 0));
    }
    function Nt() {
      for (let e = 0; e < a; e++)
        for (let l = 0; l < m; l++) L[e][l] && $(w + l * n, p + e * n, L[e][l], !0);
    }
    function Ut() {
      let e = 0;
      for (; !k(u, 0, e + 1);) e++;
      t.lineWidth = 1.5;
      for (let l = 0; l < u.shape.length; l++)
        for (let o = 0; o < u.shape[l].length; o++) {
          if (!u.shape[l][o]) continue;
          let r = w + (u.x + o) * n,
            i = p + (u.y + l + e) * n;
          ((t.strokeStyle = u.color),
            (t.globalAlpha = 0.35),
            t.strokeRect(r + 2, i + 2, n - 4, n - 4));
        }
      t.globalAlpha = 1;
    }
    function qt() {
      ((t.shadowColor = u.color), (t.shadowBlur = 8));
      for (let e = 0; e < u.shape.length; e++)
        for (let l = 0; l < u.shape[e].length; l++) {
          if (!u.shape[e][l]) continue;
          let o = w + (u.x + l) * n,
            r = p + (u.y + e) * n;
          r >= p - n && $(o, r, u.color, !1);
        }
      t.shadowBlur = 0;
    }
    function dt(e, l) {
      let o = e.x,
        r = e.y,
        i = e.type,
        f = e.state === "walking" ? Math.sin(e.shamble) : 0,
        d = e.state === "walking" ? Math.sin(e.shamble * 0.7) * 1.5 : 0;
      if ((t.save(), e.state === "dead")) {
        let v = Math.min(1, e.deathTime / 700);
        ((t.globalAlpha = Math.max(0, 1 - v)),
          t.translate(o, r),
          t.rotate(v * 0.9),
          t.translate(-o, -r));
      }
      ((t.shadowColor = i.color),
        (t.shadowBlur = 14),
        i.name === "crawler"
          ? ((t.fillStyle = i.color),
            t.fillRect(o - 13, r - 16 + d, 26, 12),
            t.fillRect(o - 9, r - 22 + d, 18, 7),
            t.fillRect(o - 18, r - 12 + f * 1.5, 6, 4),
            t.fillRect(o + 12, r - 12 - f * 1.5, 6, 4),
            (t.fillStyle = "#2a1a1a"),
            t.fillRect(o - 10, r - 4, 5, 4),
            t.fillRect(o + 5, r - 4, 5, 4),
            (t.shadowBlur = 0),
            (t.fillStyle = "#ff006e"),
            t.fillRect(o - 6, r - 19 + d, 3, 3),
            t.fillRect(o + 3, r - 19 + d, 3, 3),
            (t.fillStyle = "rgba(0, 0, 0, 0.5)"),
            t.fillRect(o - 4, r - 13 + d, 2, 5),
            t.fillRect(o + 6, r - 13 + d, 2, 5))
          : i.name === "walker"
            ? ((t.fillStyle = "#1f1015"),
              t.fillRect(o - 8, r - 12, 6, 12),
              t.fillRect(o + 2, r - 12 - f * 2, 6, 12 + f * 2),
              (t.fillStyle = "#4a2030"),
              t.fillRect(o - 8, r - 22, 6, 10),
              t.fillRect(o + 2, r - 22, 6, 10),
              (t.fillStyle = i.color),
              t.fillRect(o - 11, r - 36 + d, 22, 16),
              (t.fillStyle = "rgba(0, 0, 0, 0.4)"),
              t.fillRect(o - 4, r - 30 + d, 8, 8),
              (t.fillStyle = i.color),
              t.fillRect(o - 20, r - 34 + d + f, 10, 5),
              t.fillRect(o + 10, r - 34 + d - f, 10, 5),
              (t.fillStyle = "#7aaa3a"),
              t.fillRect(o - 24, r - 36 + d + f, 5, 8),
              t.fillRect(o + 19, r - 36 + d - f, 5, 8),
              (t.fillStyle = i.color),
              t.fillRect(o - 8, r - 48 + d, 16, 12),
              (t.fillStyle = "#1a0a14"),
              t.fillRect(o - 4, r - 39 + d, 8, 3),
              (t.shadowBlur = 0),
              (t.fillStyle = "#ff006e"),
              t.fillRect(o - 5, r - 44 + d, 3, 3),
              t.fillRect(o + 2, r - 44 + d, 3, 3))
            : i.name === "lurcher" &&
              ((t.fillStyle = "#1f1015"),
              t.fillRect(o - 11, r - 14, 8, 14),
              t.fillRect(o + 3, r - 14 - f * 2, 8, 14 + f * 2),
              (t.fillStyle = i.color),
              t.fillRect(o - 16, r - 46 + d, 32, 32),
              (t.fillStyle = "rgba(0, 0, 0, 0.5)"),
              t.fillRect(o - 5, r - 38 + d, 10, 16),
              t.fillRect(o - 14, r - 42 + d, 4, 6),
              (t.fillStyle = i.color),
              t.fillRect(o - 28, r - 42 + d + f, 12, 7),
              t.fillRect(o + 16, r - 42 + d - f, 12, 7),
              (t.fillStyle = "#a86010"),
              t.fillRect(o - 32, r - 44 + d + f, 6, 11),
              t.fillRect(o + 26, r - 44 + d - f, 6, 11),
              (t.fillStyle = i.color),
              t.fillRect(o - 11, r - 60 + d, 22, 14),
              (t.fillStyle = "#fff5d0"),
              t.fillRect(o - 5, r - 48 + d, 2, 5),
              t.fillRect(o + 3, r - 48 + d, 2, 5),
              (t.shadowBlur = 0),
              (t.fillStyle = "#ff006e"),
              t.fillRect(o - 7, r - 56 + d, 4, 4),
              t.fillRect(o + 3, r - 56 + d, 4, 4)),
        t.restore(),
        (t.shadowBlur = 0));
    }
    function Ft() {
      for (let e of A) {
        let l = e.life / e.maxLife;
        ((t.globalAlpha = l),
          (t.fillStyle = e.color),
          t.fillRect(e.x - e.size / 2, e.y - e.size / 2, e.size, e.size));
      }
      t.globalAlpha = 1;
    }
    function ut() {
      let l = c - 50;
      ((t.fillStyle = "#1a0a05"),
        t.fillRect(718, l, 4, 50),
        (t.fillStyle = "#1a0420"),
        t.fillRect(658, l - 42, 124, 36),
        (t.fillStyle = "#ffbe0b"),
        t.fillRect(660, l - 40, 120, 32),
        (t.strokeStyle = "#5a2a00"),
        (t.lineWidth = 1.5),
        t.strokeRect(660, l - 40, 120, 32),
        (t.font = '8px "Press Start 2P"'),
        (t.fillStyle = "#5a2a00"),
        (t.textAlign = "center"),
        t.fillText("SOUTHERN", 720, l - 26),
        t.fillText("BORDER \u2190", 720, l - 12),
        (t.textAlign = "left"),
        (t.shadowColor = "#ffbe0b"),
        (t.shadowBlur = 18),
        (t.strokeStyle = "rgba(255, 190, 11, 0.3)"),
        (t.lineWidth = 1),
        t.strokeRect(660, l - 40, 120, 32),
        (t.shadowBlur = 0));
    }
    function Xt() {
      ((t.fillStyle = "rgba(0, 0, 0, 0.7)"),
        t.fillRect(0, 0, s, 52),
        (t.shadowColor = "#ff006e"),
        (t.shadowBlur = 8),
        (t.strokeStyle = "#ff006e"),
        (t.lineWidth = 1.5),
        t.beginPath(),
        t.moveTo(0, 52),
        t.lineTo(s, 52),
        t.stroke(),
        (t.shadowBlur = 0),
        (t.font = '12px "Press Start 2P"'),
        (t.fillStyle = "#ff006e"),
        (t.shadowColor = "#ff006e"),
        (t.shadowBlur = 10),
        t.fillText("BUILD THE WALL", 20, 32),
        (t.font = '9px "Press Start 2P"'),
        (t.fillStyle = "#ffbe0b"),
        (t.shadowColor = "#ffbe0b"),
        (t.shadowBlur = 6),
        t.fillText("SCORE", 250, 18),
        (t.fillStyle = "#fff"),
        (t.shadowBlur = 4),
        t.fillText(String(T).padStart(6, "0"), 250, 36),
        (t.fillStyle = "#06ffa5"),
        (t.shadowColor = "#06ffa5"),
        (t.shadowBlur = 6),
        t.fillText("HI", 380, 18),
        (t.fillStyle = "#fff"),
        (t.shadowBlur = 4),
        t.fillText(String(Math.max(G.value(), T)).padStart(6, "0"), 380, 36),
        (t.fillStyle = "#8338ec"),
        (t.shadowColor = "#8338ec"),
        (t.shadowBlur = 6),
        t.fillText("LV", 510, 18),
        (t.fillStyle = "#fff"),
        (t.shadowBlur = 4),
        t.fillText(String(C).padStart(2, "0"), 510, 36),
        (t.fillStyle = "#ff006e"),
        (t.shadowColor = "#ff006e"),
        (t.shadowBlur = 6),
        t.fillText("LIVES", 580, 18),
        (t.shadowBlur = 0));
      for (let r = 0; r < 3; r++) {
        t.fillStyle = r < W ? "#ff006e" : "rgba(255, 0, 110, 0.18)";
        let i = 580 + r * 18;
        (t.fillRect(i, 28, 12, 4),
          t.fillRect(i + 2, 26, 8, 2),
          t.fillRect(i + 1, 32, 10, 6),
          t.fillRect(i + 3, 38, 6, 2));
      }
      ((t.fillStyle = "#06ffa5"),
        (t.shadowColor = "#06ffa5"),
        (t.shadowBlur = 6),
        t.fillText("NEXT", 710, 18),
        (t.shadowBlur = 0));
      let e = 780,
        l = 14,
        o = 11;
      for (let r = 0; r < B.shape.length; r++)
        for (let i = 0; i < B.shape[r].length; i++)
          B.shape[r][i] &&
            ((t.fillStyle = B.color),
            t.fillRect(e + i * o, l + r * o, o - 1, o - 1),
            (t.fillStyle = "rgba(255, 255, 255, 0.3)"),
            t.fillRect(e + i * o, l + r * o, o - 1, 1));
      ((t.font = '8px "Press Start 2P"'),
        (t.fillStyle = E ? "#ff006e" : "rgba(255, 255, 255, 0.4)"),
        t.fillText(E ? "[M]UTED" : "[M]", 870, 12));
    }
    function Zt(e) {
      (ct(e), ut());
      let l = [
        [0, a - 1],
        [1, a - 1],
        [2, a - 1],
        [3, a - 1],
        [5, a - 1],
        [6, a - 1],
        [0, a - 2],
        [1, a - 2],
        [5, a - 2],
        [6, a - 2],
        [5, a - 3],
      ];
      for (let [i, f] of l) $(w + i * n, p + f * n, "#ffbe0b", !0);
      dt(
        {
          x: 540,
          y: c + 2,
          type: q[1],
          state: "walking",
          shamble: e * 0.005,
          anim: e,
          deathTime: 0,
        },
        e,
      );
      let o = s / 2,
        r = Math.sin(e * 0.0025) * 4;
      ((t.textAlign = "center"),
        (t.font = '56px "Press Start 2P"'),
        (t.shadowColor = "#ff006e"),
        (t.shadowBlur = 35),
        (t.fillStyle = "#ff006e"),
        t.fillText("BUILD", o - 3, 175 + r),
        (t.shadowColor = "#06ffa5"),
        (t.fillStyle = "#06ffa5"),
        t.fillText("THE WALL", o + 3, 250 + r),
        (t.shadowBlur = 12),
        (t.font = '14px "Press Start 2P"'),
        (t.fillStyle = "#ffbe0b"),
        (t.shadowColor = "#ffbe0b"),
        t.fillText("\u2605 ZOMBIE BORDER SIEGE \u2605", o, 305),
        (t.font = '10px "Press Start 2P"'),
        (t.fillStyle = "#ffffff"),
        (t.shadowColor = "#ffffff"),
        (t.shadowBlur = 8),
        t.fillText("STACK BRICKS. HOLD THE LINE.", o, 345),
        Math.floor(e / 450) % 2 === 0 &&
          ((t.font = '16px "Press Start 2P"'),
          (t.fillStyle = "#fff"),
          (t.shadowColor = "#06ffa5"),
          (t.shadowBlur = 16),
          t.fillText(K ? "TAP TO START" : "PRESS SPACE TO START", o, 410)),
        (t.font = '8px "Press Start 2P"'),
        (t.fillStyle = "#8338ec"),
        (t.shadowColor = "#8338ec"),
        (t.shadowBlur = 6),
        t.fillText(
          K
            ? "DRAG MOVE   TAP ROTATE   FLICK DOWN SLAM"
            : "\u2190 \u2192 MOVE   \u2191 ROTATE   \u2193 DROP   SPACE SLAM",
          o,
          455,
        ),
        G.value() > 0 &&
          ((t.fillStyle = "#ff006e"),
          (t.shadowColor = "#ff006e"),
          t.fillText("HI-SCORE  " + String(G.value()).padStart(6, "0"), o, 490)),
        (t.font = '8px "Press Start 2P"'),
        (t.fillStyle = "rgba(255, 255, 255, 0.5)"),
        (t.shadowBlur = 0),
        t.fillText("\xA9 198X  ARCADE EDITION", o, 540),
        (t.shadowBlur = 0),
        (t.textAlign = "left"));
    }
    function zt(e) {
      ((t.fillStyle = "rgba(8, 0, 18, 0.78)"), t.fillRect(0, 0, s, S));
      let l = s / 2;
      ((t.textAlign = "center"),
        (t.font = '52px "Press Start 2P"'),
        (t.shadowColor = "#ff006e"),
        (t.shadowBlur = 35),
        (t.fillStyle = "#ff006e"),
        t.fillText("BORDER", l - 3, 215),
        t.fillText("BREACHED", l + 3, 285),
        (t.font = '14px "Press Start 2P"'),
        (t.shadowBlur = 12),
        (t.fillStyle = "#ffbe0b"),
        (t.shadowColor = "#ffbe0b"),
        t.fillText("SCORE   " + String(T).padStart(6, "0"), l, 350),
        (t.fillStyle = "#06ffa5"),
        (t.shadowColor = "#06ffa5"),
        t.fillText("LEVEL   " + String(C).padStart(2, "0"), l, 380),
        T >= G.value() &&
          G.value() > 0 &&
          ((t.font = '12px "Press Start 2P"'),
          (t.fillStyle = "#ff006e"),
          (t.shadowColor = "#ff006e"),
          (t.shadowBlur = 16),
          Math.floor(e / 200) % 2 === 0 && t.fillText("\u2605 NEW HI-SCORE \u2605", l, 420)),
        Math.floor(e / 500) % 2 === 0 &&
          ((t.font = '12px "Press Start 2P"'),
          (t.fillStyle = "#fff"),
          (t.shadowColor = "#06ffa5"),
          (t.shadowBlur = 12),
          t.fillText(K ? "TAP TO RETRY" : "PRESS SPACE TO RETRY", l, 475)),
        (t.shadowBlur = 0),
        (t.textAlign = "left"));
    }
    function Vt() {
      ((t.fillStyle = "rgba(0, 0, 0, 0.7)"),
        t.fillRect(0, 0, s, S),
        (t.textAlign = "center"),
        (t.font = '44px "Press Start 2P"'),
        (t.fillStyle = "#ffbe0b"),
        (t.shadowColor = "#ffbe0b"),
        (t.shadowBlur = 22),
        t.fillText("PAUSED", s / 2, S / 2 - 10),
        (t.font = '11px "Press Start 2P"'),
        (t.fillStyle = "#fff"),
        (t.shadowColor = "#fff"),
        (t.shadowBlur = 8),
        t.fillText(K ? "TAP TO RESUME" : "PRESS P TO RESUME", s / 2, S / 2 + 40),
        (t.shadowBlur = 0),
        (t.textAlign = "left"));
    }
    function ht() {
      (Ht(), x && x.state === "suspended" && x.resume());
    }
    function X(e) {
      g === "playing" && (k(u, e, 0) || ((u.x += e), R(220, 0.025, "square", 0.04)));
    }
    function St() {
      g === "playing" && (k(u, 0, 1) || (u.y++, (T += 1)));
    }
    function yt() {
      (ot(), (g = "playing"));
    }
    function j() {
      g === "playing" ? (g = "paused") : g === "paused" && (g = "playing");
    }
    document.addEventListener("keydown", (e) => {
      if ((ht(), e.code === "KeyM")) {
        ((E = !E), e.preventDefault());
        return;
      }
      if (g === "title" || g === "gameover") {
        e.code === "Space" && (yt(), e.preventDefault());
        return;
      }
      if (g === "paused") {
        e.code === "KeyP" && j();
        return;
      }
      if (g === "playing") {
        if (e.code === "KeyP") {
          j();
          return;
        }
        e.code === "ArrowLeft" || e.code === "KeyA"
          ? (X(-1), e.preventDefault())
          : e.code === "ArrowRight" || e.code === "KeyD"
            ? (X(1), e.preventDefault())
            : e.code === "ArrowUp" || e.code === "KeyW"
              ? (ft(), e.preventDefault())
              : e.code === "ArrowDown" || e.code === "KeyS"
                ? (St(), e.preventDefault())
                : e.code === "Space" && (it(), e.preventDefault());
      }
    });
    let H = vt(),
      Yt = 52,
      Jt = 90;
    function Q() {
      return h.getBoundingClientRect();
    }
    function gt(e) {
      return e.width > 0 ? (e.width / s) * n : n;
    }
    function wt(e) {
      e === "left"
        ? X(-1)
        : e === "right"
          ? X(1)
          : e === "soft"
            ? St()
            : e === "slam" && g === "playing" && it();
    }
    function $t(e, l) {
      let o = Q(),
        r = o.width > 0 ? ((e - o.left) / o.width) * s : 0,
        i = o.height > 0 ? ((l - o.top) / o.height) * S : S,
        f = Mt(r, i, g, { width: s, hudHeight: Yt, muteWidth: Jt });
      f === "start"
        ? yt()
        : f === "pause" || f === "resume"
          ? j()
          : f === "mute"
            ? (E = !E)
            : f === "rotate" && ft();
    }
    (h.addEventListener(
      "touchstart",
      (e) => {
        (ht(), (K = !0), e.preventDefault());
        let l = e.changedTouches[0];
        H.start({ id: l.identifier, x: l.clientX, y: l.clientY, at: performance.now() });
      },
      { passive: !1 },
    ),
      h.addEventListener(
        "touchmove",
        (e) => {
          let l = Q();
          for (let o = 0; o < e.changedTouches.length; o++) {
            let r = e.changedTouches[o];
            if (!H.tracking(r.identifier)) continue;
            e.preventDefault();
            let i = H.move({ id: r.identifier, x: r.clientX, y: r.clientY }, gt(l));
            for (let f of i) wt(f);
          }
        },
        { passive: !1 },
      ),
      h.addEventListener(
        "touchend",
        (e) => {
          let l = Q();
          for (let o = 0; o < e.changedTouches.length; o++) {
            let r = e.changedTouches[o];
            if (!H.tracking(r.identifier)) continue;
            e.preventDefault();
            let i = H.end(
              { id: r.identifier, x: r.clientX, y: r.clientY, at: performance.now() },
              gt(l),
            );
            i && (i.action === "tap" ? $t(i.x, i.y) : wt(i.action));
          }
        },
        { passive: !1 },
      ),
      h.addEventListener(
        "touchcancel",
        (e) => {
          for (let l = 0; l < e.changedTouches.length; l++)
            H.cancel(e.changedTouches[l].identifier);
        },
        { passive: !1 },
      ));
    let pt = 0;
    function mt(e) {
      let l = Math.min(50, e - pt);
      if (((pt = e), g === "playing")) {
        V += l;
        let o = Math.floor(V / 22e3) + 1;
        (o > C &&
          ((C = o),
          (Z = Math.max(140, 850 - C * 65)),
          (z = Math.max(1100, 4500 - C * 320)),
          R(660, 0.08, "square", 0.07),
          R(880, 0.12, "square", 0.06)),
          (_ += l),
          _ >= Z && ((_ = 0), k(u, 0, 1) ? rt(u) : u.y++),
          (N -= l),
          N <= 0 && (Ot(), (N = z * (0.65 + Math.random() * 0.7))),
          Lt(l),
          at(l),
          b > 0 && ((b -= l), b <= 0 && (P = 0)),
          D > 0 && (D -= l),
          U > 0 && (U -= l));
      } else g === "gameover" && (at(l), b > 0 && ((b -= l), b <= 0 && (P = 0)));
      if ((t.save(), P > 0 && b > 0)) {
        let o = (Math.random() - 0.5) * P,
          r = (Math.random() - 0.5) * P;
        t.translate(o, r);
      }
      if (g === "title") Zt(e);
      else {
        (ct(e), ut(), Wt());
        let o = [...I].sort((r, i) => r.x - i.x);
        for (let r of o) dt(r, e);
        (Nt(),
          _t(),
          (g === "playing" || g === "paused") && (Ut(), qt()),
          Ft(),
          Xt(),
          D > 0 &&
            ((t.fillStyle = `rgba(255, 20, 60, ${(D / 400) * 0.45})`), t.fillRect(0, 0, s, S)),
          g === "paused" && Vt(),
          g === "gameover" && zt(e));
      }
      (t.restore(), requestAnimationFrame(mt));
    }
    (ot(), (g = "title"), requestAnimationFrame(mt));
  })();
})();
//# sourceURL=raw-html-custom-scripts-js-after
