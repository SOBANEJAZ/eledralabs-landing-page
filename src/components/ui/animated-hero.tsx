"use client";

import { useEffect, useRef } from "react";

interface AppData {
  name: string;
  svg: string;
}

interface WorkflowDef {
  p1: { cx: number; cy: number };
  p2: { cx: number; cy: number };
  app1: number;
  app2: number;
  tip1: string;
  tip2: string;
  color: string;
  tipSide1: string;
  tipSide2: string;
}

const appData: AppData[] = [
  { name: "Salesforce", svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#0070D2"/><ellipse cx="16" cy="15" rx="8" ry="6" fill="white"/><ellipse cx="16" cy="15" rx="5" ry="3.5" fill="#0070D2"/></svg>` },
  { name: "ClickUp", svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#7B68EE"/><path d="M8 20l4-5 4 4 4-4 4 5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>` },
  { name: "Google Calendar", svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="6" fill="white"/><rect width="32" height="10" rx="2" fill="#4285F4"/><rect y="7" width="32" height="4" fill="#4285F4"/><text x="16" y="25" text-anchor="middle" font-size="9" font-weight="700" fill="#333" font-family="sans-serif">31</text></svg>` },
  { name: "Dropbox", svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#0061FF"/><path d="M16 9l-6 4 6 4 6-4-6-4zM10 17l6 4 6-4-6-4-6 4z" fill="white"/></svg>` },
  { name: "Notion", svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="6" fill="#111"/><text x="16" y="22" text-anchor="middle" font-size="16" font-weight="800" fill="white" font-family="serif">N</text></svg>` },
  { name: "Slack", svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#4A154B"/><circle cx="12" cy="12" r="2.5" fill="#E01E5A"/><circle cx="20" cy="12" r="2.5" fill="#36C5F0"/><circle cx="12" cy="20" r="2.5" fill="#2EB67D"/><circle cx="20" cy="20" r="2.5" fill="#ECB22E"/></svg>` },
  { name: "GitHub", svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#24292E"/><path d="M16 7a9 9 0 00-2.85 17.53c.45.08.6-.2.6-.43v-1.5c-2.5.54-3.03-1.2-3.03-1.2-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.37 2.1.97 2.6.74.08-.58.31-.97.57-1.19-2-.23-4.1-1-4.1-4.43 0-.98.35-1.78.93-2.4-.09-.23-.4-1.14.09-2.37 0 0 .75-.24 2.48.93a8.6 8.6 0 014.5 0c1.72-1.17 2.47-.93 2.47-.93.5 1.23.19 2.14.09 2.37.58.62.93 1.42.93 2.4 0 3.44-2.1 4.2-4.1 4.42.32.28.61.82.61 1.66v2.46c0 .24.16.52.62.43A9 9 0 0016 7z" fill="white"/></svg>` },
  { name: "Jira", svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#0052CC"/><path d="M16 8l5 8-5 8-5-8z" fill="white" opacity="0.6"/><path d="M16 12l3 4-3 4-3-4z" fill="white"/></svg>` },
];

const tooltips = [
  "Check sales pipeline status",
  "Discover team reporting structures",
  "Retrieve product specs quickly",
  "Schedule team standup meeting",
  "Find latest design documentation",
  "Review open pull requests",
  "Sync tasks with project board",
  "Check deployment status",
];

const workflowDefs: WorkflowDef[] = [
  { p1: { cx: 1, cy: 0.60 }, p2: { cx: 4, cy: 0.55 }, app1: 0, app2: 1, tip1: tooltips[0], tip2: tooltips[1], color: "#b8aae8", tipSide1: "right", tipSide2: "left" },
  { p1: { cx: 1, cy: 0.25 }, p2: { cx: 4, cy: 0.78 }, app1: 2, app2: 3, tip1: tooltips[2], tip2: tooltips[3], color: "#8abce8", tipSide1: "right", tipSide2: "left" },
  { p1: { cx: 0, cy: 0.50 }, p2: { cx: 5, cy: 0.35 }, app1: 4, app2: 5, tip1: tooltips[4], tip2: tooltips[5], color: "#9ed4b4", tipSide1: "right", tipSide2: "left" },
  { p1: { cx: 4, cy: 0.22 }, p2: { cx: 1, cy: 0.75 }, app1: 6, app2: 7, tip1: tooltips[6], tip2: tooltips[7], color: "#e8c49a", tipSide1: "left", tipSide2: "right" },
];

const DRAW_DUR = 1800;
const HOLD_DUR = 2200;
const FADE_DUR = 700;
const PAUSE_DUR = 350;

function colToX(cx: number, W: number): number {
  const positions = [W * (1 / 12), W * (2 / 12), W * (4 / 12), W * (6 / 12), W * (8 / 12), W * (10 / 12)];
  return positions[cx];
}

function bezierPt(
  x1: number, y1: number,
  cp1x: number, cp1y: number,
  cp2x: number, cp2y: number,
  x2: number, y2: number,
  t: number
) {
  const u = 1 - t;
  return {
    x: u * u * u * x1 + 3 * u * u * t * cp1x + 3 * u * t * t * cp2x + t * t * t * x2,
    y: u * u * u * y1 + 3 * u * u * t * cp1y + 3 * u * t * t * cp2y + t * t * t * y2,
  };
}

export function AnimatedHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    cWF: 0,
    phase: "draw" as "draw" | "hold" | "fade" | "pause",
    progress: 0,
    holdTimer: 0,
    tip1Shown: false,
    nodesShown: false,
    lastTime: 0,
    animId: 0,
  });

  useEffect(() => {
    const hero = containerRef.current;
    const canvas = canvasRef.current;
    if (!hero || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const t1El = hero.querySelector<HTMLElement>("#t1");
    const t2El = hero.querySelector<HTMLElement>("#t2");
    const n1El = hero.querySelector<HTMLElement>("#n1");
    const n2El = hero.querySelector<HTMLElement>("#n2");
    const i1El = hero.querySelector<HTMLElement>("#i1");
    const l1El = hero.querySelector<HTMLElement>("#l1");
    const i2El = hero.querySelector<HTMLElement>("#i2");
    const l2El = hero.querySelector<HTMLElement>("#l2");

    function getSize() {
      return { W: hero!.offsetWidth, H: hero!.offsetHeight };
    }

    function setWF(idx: number) {
      const wf = workflowDefs[idx];
      const { W, H } = getSize();

      if (i1El) i1El.innerHTML = appData[wf.app1].svg;
      if (l1El) l1El.textContent = appData[wf.app1].name;
      if (i2El) i2El.innerHTML = appData[wf.app2].svg;
      if (l2El) l2El.textContent = appData[wf.app2].name;

      if (t1El) {
        t1El.textContent = wf.tip1;
        t1El.style.opacity = "0";
      }
      if (t2El) {
        t2El.textContent = wf.tip2;
        t2El.style.opacity = "0";
      }
      if (n1El) n1El.style.opacity = "0";
      if (n2El) n2El.style.opacity = "0";

      const x1 = colToX(wf.p1.cx, W);
      const y1 = H * wf.p1.cy;
      const x2 = colToX(wf.p2.cx, W);
      const y2 = H * wf.p2.cy;

      if (n1El) {
        n1El.style.left = `${x1 - 17}px`;
        n1El.style.top = `${y1 + 6}px`;
      }
      if (n2El) {
        n2El.style.left = `${x2 - 17}px`;
        n2El.style.top = `${y2 + 6}px`;
      }

      if (t1El) {
        const t1w = 120;
        t1El.style.left = `${wf.tipSide1 === "right" ? x1 + 8 : x1 - t1w - 8}px`;
        t1El.style.top = `${y1 - 52}px`;
      }
      if (t2El) {
        const t2w = 120;
        t2El.style.left = `${wf.tipSide2 === "right" ? x2 + 8 : x2 - t2w - 8}px`;
        t2El.style.top = `${y2 - 52}px`;
      }
    }

    function drawCurve(wf: WorkflowDef, t: number, alpha: number) {
      const { W, H } = getSize();
      const x1 = colToX(wf.p1.cx, W);
      const y1 = H * wf.p1.cy;
      const x2 = colToX(wf.p2.cx, W);
      const y2 = H * wf.p2.cy;

      const cp1x = x1 + (x2 - x1) * 0.15;
      const cp1y = y1 + (y2 - y1) * 0.7;
      const cp2x = x2 - (x2 - x1) * 0.15;
      const cp2y = y2 - (y2 - y1) * 0.7;

      ctx!.save();
      ctx!.globalAlpha = alpha;
      ctx!.strokeStyle = wf.color;
      ctx!.lineWidth = 1.2;
      ctx!.setLineDash([]);

      const steps = 80;
      const drawSteps = Math.floor(t * steps);
      ctx!.beginPath();
      for (let i = 0; i <= drawSteps; i++) {
        const tt = i / steps;
        const pt = bezierPt(x1, y1, cp1x, cp1y, cp2x, cp2y, x2, y2, tt);
        if (i === 0) ctx!.moveTo(pt.x, pt.y);
        else ctx!.lineTo(pt.x, pt.y);
      }
      ctx!.stroke();

      if (t > 0.02) {
        ctx!.beginPath();
        ctx!.arc(x1, y1, 3.5, 0, Math.PI * 2);
        ctx!.fillStyle = wf.color;
        ctx!.fill();
      }
      if (t >= 1) {
        ctx!.beginPath();
        ctx!.arc(x2, y2, 3.5, 0, Math.PI * 2);
        ctx!.fillStyle = wf.color;
        ctx!.fill();
      }

      ctx!.restore();
    }

    function tick(ts: number) {
      const s = stateRef.current;
      const dt = s.lastTime ? Math.min(ts - s.lastTime, 50) : 16;
      s.lastTime = ts;

      const { W, H } = getSize();
      if (canvas!.width !== W || canvas!.height !== H) {
        canvas!.width = W;
        canvas!.height = H;
        setWF(s.cWF);
      }

      ctx!.clearRect(0, 0, W, H);
      const wf = workflowDefs[s.cWF];

      if (s.phase === "draw") {
        s.progress += dt / DRAW_DUR;
        if (s.progress >= 1) {
          s.progress = 1;
          s.phase = "hold";
          s.holdTimer = 0;
        }
        if (s.progress > 0.25 && !s.tip1Shown) {
          if (t1El) t1El.style.opacity = "1";
          if (n1El) n1El.style.opacity = "1";
          s.tip1Shown = true;
        }
        if (s.progress >= 1 && !s.nodesShown) {
          if (t2El) t2El.style.opacity = "1";
          if (n2El) n2El.style.opacity = "1";
          s.nodesShown = true;
        }
        drawCurve(wf, s.progress, 1);
      } else if (s.phase === "hold") {
        s.holdTimer += dt;
        drawCurve(wf, 1, 1);
        if (s.holdTimer >= HOLD_DUR) {
          s.phase = "fade";
          s.holdTimer = 0;
        }
      } else if (s.phase === "fade") {
        s.holdTimer += dt;
        const a = Math.max(0, 1 - s.holdTimer / FADE_DUR);
        drawCurve(wf, 1, a);
        if (t1El) t1El.style.opacity = String(a);
        if (t2El) t2El.style.opacity = String(a);
        if (n1El) n1El.style.opacity = String(a);
        if (n2El) n2El.style.opacity = String(a);
        if (s.holdTimer >= FADE_DUR) {
          s.phase = "pause";
          s.holdTimer = 0;
        }
      } else if (s.phase === "pause") {
        s.holdTimer += dt;
        if (s.holdTimer >= PAUSE_DUR) {
          s.cWF = (s.cWF + 1) % workflowDefs.length;
          s.phase = "draw";
          s.progress = 0;
          s.holdTimer = 0;
          s.tip1Shown = false;
          s.nodesShown = false;
          setWF(s.cWF);
        }
      }

      s.animId = requestAnimationFrame(tick);
    }

    // Build grid lines
    const gridContainer = hero.querySelector<HTMLElement>("#gridLines");
    if (gridContainer && gridContainer.children.length === 0) {
      for (let i = 1; i <= 11; i++) {
        const el = document.createElement("div");
        el.style.cssText = `
          position: absolute; top: 0; bottom: 0; width: 1px;
          background: rgba(0,0,0,0.07); left: ${(i / 12) * 100}%;
        `;
        gridContainer.appendChild(el);
      }
    }

    setWF(0);
    stateRef.current.animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(stateRef.current.animId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-2xl"
      style={{ aspectRatio: "16 / 9", background: "#eeece8" }}
    >
      {/* Grid Lines */}
      <div
        id="gridLines"
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 2 }}
      />

      {/* Center Text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none whitespace-nowrap"
        style={{ zIndex: 15 }}
      >
        <div
          className="font-bold text-[#111] leading-none mb-2"
          style={{
            fontSize: "clamp(40px, 8vw, 80px)",
            letterSpacing: "-2px",
          }}
        >
          Eledralabs
        </div>
        <div
          className="uppercase mb-4"
          style={{
            fontSize: "clamp(8px, 1.1vw, 11px)",
            letterSpacing: "0.12em",
            color: "#666",
          }}
        >
          Precision automation for your stack
        </div>
        <div
          className="inline-flex items-center gap-1.5 bg-[#111] text-white rounded-full cursor-pointer"
          style={{ fontSize: "12px", fontWeight: 500, padding: "9px 20px" }}
        >
          Get started for free ›
        </div>
      </div>

      {/* Bottom Badges */}
      <div
        className="absolute bottom-3 left-0 right-0 flex justify-center gap-9 pointer-events-none"
        style={{ zIndex: 20 }}
      >
        {[
          { icon: "②", title: "SOC 2", sub: "Type II" },
          { icon: "G", title: "GDPR", sub: "compliant" },
          { icon: "⊠", title: "ISO 27001", sub: "ISO 27701" },
          { icon: "✦", title: "E2E encryption", sub: "in transit and rest" },
        ].map((b) => (
          <div key={b.title} className="flex items-center gap-1.5" style={{ fontSize: "10px", color: "#666" }}>
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: "18px",
                height: "18px",
                border: "0.5px solid #aaa",
                fontSize: "8px",
                color: "#555",
              }}
            >
              {b.icon}
            </div>
            <div>
              <div style={{ fontWeight: 500, color: "#333" }}>{b.title}</div>
              <div>{b.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Tooltips */}
      <div
        id="t1"
        className="absolute pointer-events-none opacity-0 transition-opacity duration-500"
        style={{
          zIndex: 16,
          background: "white",
          border: "0.5px solid rgba(0,0,0,0.13)",
          borderRadius: "8px",
          padding: "5px 9px",
          fontSize: "10px",
          color: "#222",
          lineHeight: 1.4,
          textAlign: "center",
          maxWidth: "120px",
        }}
      />
      <div
        id="t2"
        className="absolute pointer-events-none opacity-0 transition-opacity duration-500"
        style={{
          zIndex: 16,
          background: "white",
          border: "0.5px solid rgba(0,0,0,0.13)",
          borderRadius: "8px",
          padding: "5px 9px",
          fontSize: "10px",
          color: "#222",
          lineHeight: 1.4,
          textAlign: "center",
          maxWidth: "120px",
        }}
      />

      {/* App Nodes */}
      <div
        id="n1"
        className="absolute flex flex-col items-center gap-1 pointer-events-none opacity-0 transition-opacity duration-500"
        style={{ zIndex: 16 }}
      >
        <div
          id="i1"
          className="overflow-hidden"
          style={{
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            border: "0.5px solid rgba(0,0,0,0.1)",
            background: "white",
          }}
        />
        <div id="l1" style={{ fontSize: "9px", color: "#555" }} />
      </div>
      <div
        id="n2"
        className="absolute flex flex-col items-center gap-1 pointer-events-none opacity-0 transition-opacity duration-500"
        style={{ zIndex: 16 }}
      >
        <div
          id="i2"
          className="overflow-hidden"
          style={{
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            border: "0.5px solid rgba(0,0,0,0.1)",
            background: "white",
          }}
        />
        <div id="l2" style={{ fontSize: "9px", color: "#555" }} />
      </div>
    </div>
  );
}
