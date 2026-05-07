"use client";

import { useEffect, useRef } from "react";

interface FlowNode {
  icon: string;
  label: string;
  tip: string;
  cx: number;
  cy: number;
  tipSide: "left" | "right" | "top" | "bottom";
}

interface WorkflowDef {
  name: string;
  color: string;
  nodes: FlowNode[];
  paths: { from: number; to: number; dir: "up" | "down" }[];
}

const workflowDefs: WorkflowDef[] = [
  // Reception: Symmetric fan-out, converge at end
  {
    name: "Reception",
    color: "#EF4444",
    nodes: [
      { icon: "phone", label: "Incoming Call", tip: "24/7 AI Voice Receptionist", cx: 0, cy: 0.42, tipSide: "bottom" },
      { icon: "psychology", label: "AI Speech-to-Text", tip: "Transcribing...", cx: 1.5, cy: 0.12, tipSide: "bottom" },
      { icon: "account_tree", label: "Intent Detection", tip: "Identifying needs", cx: 2, cy: 0.28, tipSide: "top" },
      { icon: "auto_fix_high", label: "Personalize", tip: "Drafting reply", cx: 2, cy: 0.62, tipSide: "bottom" },
      { icon: "folder_open", label: "Knowledge Base", tip: "Fetch answer", cx: 1.5, cy: 0.82, tipSide: "top" },
      { icon: "hub", label: "Update CRM", tip: "Syncing data", cx: 4.5, cy: 0.18, tipSide: "top" },
      { icon: "mail", label: "Send Email", tip: "Confirmation sent", cx: 4.5, cy: 0.72, tipSide: "bottom" },
      { icon: "forum", label: "Slack Alert", tip: "", cx: 7.5, cy: 0.42, tipSide: "left" },
    ],
    paths: [
      { from: 0, to: 1, dir: "up" },
      { from: 0, to: 2, dir: "up" },
      { from: 0, to: 3, dir: "down" },
      { from: 0, to: 4, dir: "down" },
      { from: 1, to: 5, dir: "up" },
      { from: 3, to: 6, dir: "down" },
      { from: 5, to: 7, dir: "up" },
      { from: 6, to: 7, dir: "up" },
    ],
  },
  // Speed: Cascade down then up, with cross-connections
  {
    name: "Speed",
    color: "#EF4444",
    nodes: [
      { icon: "description", label: "New Lead", tip: "Form received", cx: 0, cy: 0.42, tipSide: "bottom" },
      { icon: "filter_alt", label: "Lead Scoring", tip: "Hot lead!", cx: 1.5, cy: 0.14, tipSide: "bottom" },
      { icon: "search", label: "Social Scan", tip: "LinkedIn found", cx: 2.5, cy: 0.30, tipSide: "top" },
      { icon: "contacts", label: "Contact Info", tip: "Phone & email", cx: 1.5, cy: 0.60, tipSide: "bottom" },
      { icon: "psychology", label: "AI Enrichment", tip: "Score: 95/100", cx: 2.5, cy: 0.78, tipSide: "top" },
      { icon: "mail", label: "Custom Email", tip: "Personalized", cx: 5, cy: 0.22, tipSide: "top" },
      { icon: "notification_important", label: "Alert SMS", tip: "Instant", cx: 5, cy: 0.68, tipSide: "bottom" },
      { icon: "task_alt", label: "Lead Engaged", tip: "Reply!", cx: 7.5, cy: 0.42, tipSide: "left" },
    ],
    paths: [
      { from: 0, to: 1, dir: "up" },
      { from: 0, to: 3, dir: "down" },
      { from: 1, to: 2, dir: "down" },
      { from: 3, to: 2, dir: "up" },
      { from: 3, to: 4, dir: "down" },
      { from: 2, to: 5, dir: "up" },
      { from: 4, to: 6, dir: "down" },
      { from: 1, to: 5, dir: "up" },
      { from: 5, to: 7, dir: "up" },
      { from: 6, to: 7, dir: "up" },
    ],
  },
  // Marketing: Diamond with extra cross
  {
    name: "Marketing",
    color: "#EF4444",
    nodes: [
      { icon: "article", label: "New Blog Post", tip: "Content created", cx: 0, cy: 0.42, tipSide: "bottom" },
      { icon: "psychology", label: "AI Repurpose", tip: "Adapting...", cx: 2, cy: 0.10, tipSide: "bottom" },
      { icon: "auto_awesome", label: "Generate Hooks", tip: "Headlines", cx: 3, cy: 0.25, tipSide: "top" },
      { icon: "work", label: "LinkedIn Post", tip: "Professional", cx: 2, cy: 0.58, tipSide: "bottom" },
      { icon: "photo_camera", label: "Instagram", tip: "Visual created", cx: 3, cy: 0.75, tipSide: "top" },
      { icon: "campaign", label: "Newsletter", tip: "Batch send", cx: 5, cy: 0.15, tipSide: "top" },
      { icon: "schedule", label: "Auto Schedule", tip: "Optimal timing", cx: 5, cy: 0.70, tipSide: "bottom" },
      { icon: "analytics", label: "Traffic Surge", tip: "+500%", cx: 7.5, cy: 0.42, tipSide: "left" },
    ],
    paths: [
      { from: 0, to: 1, dir: "up" },
      { from: 0, to: 3, dir: "down" },
      { from: 1, to: 2, dir: "up" },
      { from: 1, to: 4, dir: "down" },
      { from: 3, to: 2, dir: "up" },
      { from: 3, to: 4, dir: "down" },
      { from: 2, to: 5, dir: "up" },
      { from: 4, to: 6, dir: "down" },
      { from: 5, to: 7, dir: "up" },
      { from: 6, to: 7, dir: "up" },
    ],
  },
  // Growth: Asymmetric, heavier on top
  {
    name: "Growth",
    color: "#EF4444",
    nodes: [
      { icon: "location_on", label: "5-Star Review", tip: "Customer love", cx: 0, cy: 0.42, tipSide: "bottom" },
      { icon: "psychology", label: "Sentiment", tip: "Positive!", cx: 1.5, cy: 0.12, tipSide: "bottom" },
      { icon: "auto_fix_high", label: "AI Reply", tip: "Drafting...", cx: 2.5, cy: 0.22, tipSide: "top" },
      { icon: "code", label: "Testimonials", tip: "Website", cx: 1.5, cy: 0.65, tipSide: "bottom" },
      { icon: "share", label: "Social Share", tip: "Viral", cx: 3, cy: 0.80, tipSide: "top" },
      { icon: "groups", label: "Facebook", tip: "Spread", cx: 5, cy: 0.18, tipSide: "top" },
      { icon: "trending_up", label: "SEO Boost", tip: "Rank up", cx: 5, cy: 0.65, tipSide: "bottom" },
      { icon: "emoji_events", label: "Rank #1", tip: "Dominated", cx: 7.5, cy: 0.42, tipSide: "left" },
    ],
    paths: [
      { from: 0, to: 1, dir: "up" },
      { from: 0, to: 3, dir: "down" },
      { from: 1, to: 2, dir: "up" },
      { from: 1, to: 5, dir: "up" },
      { from: 2, to: 5, dir: "up" },
      { from: 3, to: 4, dir: "down" },
      { from: 3, to: 6, dir: "down" },
      { from: 4, to: 6, dir: "down" },
      { from: 5, to: 7, dir: "up" },
      { from: 6, to: 7, dir: "up" },
    ],
  },
  // Sales: Spiral-like routing
  {
    name: "Sales",
    color: "#EF4444",
    nodes: [
      { icon: "person_search", label: "Prospect Found", tip: "ICP match", cx: 0, cy: 0.42, tipSide: "bottom" },
      { icon: "psychology", label: "AI Personalize", tip: "Analyzing...", cx: 1.5, cy: 0.18, tipSide: "bottom" },
      { icon: "insights", label: "Company Data", tip: "Revenue", cx: 2.5, cy: 0.32, tipSide: "top" },
      { icon: "connect_without_contact", label: "LinkedIn", tip: "InMail sent", cx: 2, cy: 0.58, tipSide: "bottom" },
      { icon: "mark_email_unread", label: "Cold Email", tip: "Personalized", cx: 2, cy: 0.82, tipSide: "top" },
      { icon: "storage", label: "Sync CRM", tip: "HubSpot", cx: 5, cy: 0.20, tipSide: "top" },
      { icon: "gps_fixed", label: "Meeting Booked", tip: "Calendar", cx: 4.5, cy: 0.62, tipSide: "bottom" },
      { icon: "person_add", label: "Connection", tip: "Deal!", cx: 7.5, cy: 0.42, tipSide: "left" },
    ],
    paths: [
      { from: 0, to: 1, dir: "up" },
      { from: 0, to: 3, dir: "down" },
      { from: 1, to: 2, dir: "up" },
      { from: 2, to: 5, dir: "up" },
      { from: 3, to: 2, dir: "up" },
      { from: 3, to: 4, dir: "down" },
      { from: 4, to: 6, dir: "down" },
      { from: 5, to: 7, dir: "up" },
      { from: 6, to: 5, dir: "up" },
      { from: 6, to: 7, dir: "up" },
    ],
  },
];

const DRAW_DUR = 3000;
const HOLD_DUR = 500;
const FADE_DUR = 800;
const PAUSE_DUR = 200;
const NODE_POOL_SIZE = 8;

const COL_POSITIONS = [0.07, 0.20, 0.34, 0.48, 0.60, 0.72, 0.84, 0.94];

function colToX(cx: number, width: number): number {
  const idx = Math.min(Math.max(Math.round(cx), 0), COL_POSITIONS.length - 1);
  return width * COL_POSITIONS[idx];
}

function fracToY(cy: number, height: number): number {
  return height * cy;
}

function bezierPoint(
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

export function BackgroundWorkflows() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const state = {
      wfIdx: 0,
      progress: 0,
      lastTime: 0,
      animId: 0,
      phase: "draw" as "draw" | "hold" | "fade" | "pause",
      holdTimer: 0,
      nodesVisible: false,
    };

    const nodeEls: HTMLElement[] = [];
    const tipEls: HTMLElement[] = [];

    for (let i = 0; i < NODE_POOL_SIZE; i++) {
      const nodeEl = document.getElementById(`bw-n${i}`) as HTMLElement | null;
      const tipEl = document.getElementById(`bw-t${i}`) as HTMLElement | null;
      if (nodeEl) nodeEls.push(nodeEl);
      if (tipEl) tipEls.push(tipEl);
    }

    function getSize() {
      return { width: container!.offsetWidth, height: container!.offsetHeight };
    }

    function setWorkflow(index: number) {
      const wf = workflowDefs[index];
      const { width, height } = getSize();

      for (let i = 0; i < NODE_POOL_SIZE; i++) {
        const nodeEl = nodeEls[i];
        const tipEl = tipEls[i];
        if (!nodeEl || !tipEl) continue;

        if (i < wf.nodes.length) {
          const node = wf.nodes[i];
          const x = colToX(node.cx, width);
          const y = fracToY(node.cy, height);

          nodeEl.style.display = "";
          nodeEl.style.opacity = "0";
          nodeEl.style.left = `${x - 22}px`;
          nodeEl.style.top = `${y - 22}px`;

          const iconInner = nodeEl.querySelector(".bw-icon-inner") as HTMLElement | null;
          if (iconInner) {
            iconInner.textContent = node.icon;
            iconInner.style.color = wf.color;
          }
          const labelEl = nodeEl.querySelector(".bw-label") as HTMLElement | null;
          if (labelEl) labelEl.textContent = node.label;

          // Tooltip
          tipEl.textContent = node.tip;
          tipEl.style.display = node.tip ? "" : "none";
          tipEl.style.opacity = "0";
          tipEl.style.borderColor = `${wf.color}40`;

          const tipW = 150;
          const tipH = 36;
          if (node.tipSide === "top") {
            tipEl.style.left = `${x - tipW / 2}px`;
            tipEl.style.top = `${y - 56}px`;
          } else if (node.tipSide === "bottom") {
            tipEl.style.left = `${x - tipW / 2}px`;
            tipEl.style.top = `${y + 48}px`;
          } else if (node.tipSide === "left") {
            tipEl.style.left = `${x - tipW - 28}px`;
            tipEl.style.top = `${y - tipH / 2}px`;
          } else {
            tipEl.style.left = `${x + 28}px`;
            tipEl.style.top = `${y - tipH / 2}px`;
          }
          tipEl.style.width = `${tipW}px`;
        } else {
          nodeEl.style.display = "none";
          tipEl.style.display = "none";
        }
      }

      state.wfIdx = index;
      state.progress = 0;
      state.phase = "draw";
      state.holdTimer = 0;
      state.nodesVisible = false;
    }

    function drawFlowCurve(
      fromNode: FlowNode,
      toNode: FlowNode,
      width: number,
      height: number,
      color: string,
      alpha: number,
      progress: number,
    ) {
      if (!ctx) return;
      const c = ctx;

      const x1 = colToX(fromNode.cx, width);
      const y1 = fracToY(fromNode.cy, height);
      const x2 = colToX(toNode.cx, width);
      const y2 = fracToY(toNode.cy, height);

      const dx = x2 - x1;

      // Dead zone: heading area (35%-65% height)
      const deadZoneTop = height * 0.35;
      const deadZoneBottom = height * 0.65;

      // Determine curve direction to avoid dead zone
      const fromAbove = y1 < deadZoneTop;
      const fromBelow = y1 > deadZoneBottom;
      const toAbove = y2 < deadZoneTop;
      const toBelow = y2 > deadZoneBottom;
      const fromMid = !fromAbove && !fromBelow;

      let cp1x: number, cp1y: number, cp2x: number, cp2y: number;
      const curveStrength = Math.abs(dx) * 0.15 + 20;

      if (fromAbove || (fromMid && toAbove)) {
        // Route ABOVE - gentle curve above dead zone
        cp1x = x1 + dx * 0.4;
        cp1y = Math.min(y1, deadZoneTop) - curveStrength * 0.5;
        cp2x = x2 - dx * 0.4;
        cp2y = Math.min(y2, deadZoneTop) - curveStrength * 0.5;
      } else if (fromBelow || (fromMid && toBelow)) {
        // Route BELOW - gentle curve below dead zone
        cp1x = x1 + dx * 0.4;
        cp1y = Math.max(y1, deadZoneBottom) + curveStrength * 0.5;
        cp2x = x2 - dx * 0.4;
        cp2y = Math.max(y2, deadZoneBottom) + curveStrength * 0.5;
      } else if (toAbove) {
        // Route around ABOVE
        cp1x = x1 + dx * 0.4;
        cp1y = y1 - curveStrength * 0.6;
        cp2x = x2 - dx * 0.4;
        cp2y = y2 - curveStrength * 0.6;
      } else if (toBelow) {
        // Route around BELOW
        cp1x = x1 + dx * 0.4;
        cp1y = y1 + curveStrength * 0.6;
        cp2x = x2 - dx * 0.4;
        cp2y = y2 + curveStrength * 0.6;
      } else {
        // Default slight curve
        const dir = y1 < height * 0.5 ? -1 : 1;
        cp1x = x1 + dx * 0.4;
        cp1y = y1 + curveStrength * dir * 0.3;
        cp2x = x2 - dx * 0.4;
        cp2y = y2 + curveStrength * dir * 0.3;
      }

      c.save();
      c.globalAlpha = alpha;
      c.strokeStyle = color;
      c.lineWidth = 2;
      c.lineCap = "round";
      c.lineJoin = "round";

      const steps = 60;
      const drawSteps = Math.max(0, Math.floor(progress * steps));

      c.beginPath();
      for (let i = 0; i <= drawSteps; i++) {
        const t = i / steps;
        const point = bezierPoint(x1, y1, cp1x, cp1y, cp2x, cp2y, x2, y2, t);
        if (i === 0) c.moveTo(point.x, point.y);
        else c.lineTo(point.x, point.y);
      }
      c.stroke();

      // Draw animated dot at the tip of the line
      if (progress > 0 && progress < 1) {
        const tipPoint = bezierPoint(x1, y1, cp1x, cp1y, cp2x, cp2y, x2, y2, Math.min(progress, 1));
        c.beginPath();
        c.arc(tipPoint.x, tipPoint.y, 4, 0, Math.PI * 2);
        c.fillStyle = color;
        c.globalAlpha = alpha;
        c.fill();

        // Glow effect
        c.beginPath();
        c.arc(tipPoint.x, tipPoint.y, 8, 0, Math.PI * 2);
        c.fillStyle = color;
        c.globalAlpha = alpha * 0.3;
        c.fill();
      }

      c.restore();
    }

    function drawNodeDot(x: number, y: number, color: string, alpha: number) {
      if (!ctx) return;
      const c = ctx;
      c.save();
      c.globalAlpha = alpha;
      c.beginPath();
      c.arc(x, y, 6, 0, Math.PI * 2);
      c.fillStyle = color;
      c.fill();
      c.strokeStyle = "white";
      c.lineWidth = 2;
      c.stroke();
      c.restore();
    }

    function tick(timestamp: number) {
      const elapsed = state.lastTime ? Math.min(timestamp - state.lastTime, 50) : 16;
      state.lastTime = timestamp;

      const wf = workflowDefs[state.wfIdx];
      const { width, height } = getSize();

      if (canvas!.width !== width || canvas!.height !== height) {
        canvas!.width = width;
        canvas!.height = height;
        setWorkflow(state.wfIdx);
      }

      ctx!.clearRect(0, 0, width, height);

      if (state.phase === "draw") {
        state.progress += elapsed / DRAW_DUR;

        if (state.progress >= 1) {
          state.progress = 1;
          state.phase = "hold";
          state.holdTimer = 0;

          // Show all nodes
          state.nodesVisible = true;
          for (let i = 0; i < wf.nodes.length; i++) {
            const el = nodeEls[i];
            if (el) el.style.opacity = "1";
            if (wf.nodes[i].tip && tipEls[i]) {
              tipEls[i].style.opacity = "1";
            }
          }
        }

        // Progressive node reveal
        const revealAt = [0.05, 0.25, 0.40, 0.55, 0.70, 0.85, 0.95];
        for (let i = 0; i < wf.nodes.length; i++) {
          if (state.progress >= revealAt[i]) {
            if (nodeEls[i]) nodeEls[i].style.opacity = "1";
            if (wf.nodes[i].tip && tipEls[i]) {
              tipEls[i].style.opacity = "1";
            }
          }
        }

        // Draw curves progressively
        const pathsPerStage = Math.ceil(wf.paths.length / 3);
        for (let p = 0; p < wf.paths.length; p++) {
          const pathStart = p / wf.paths.length;
          const pathEnd = (p + 1) / wf.paths.length;
          const pathProgress = Math.max(0, Math.min(1, (state.progress - pathStart) / (pathEnd - pathStart)));

          if (pathProgress > 0) {
            const pathDef = wf.paths[p];
            drawFlowCurve(
              wf.nodes[pathDef.from],
              wf.nodes[pathDef.to],
              width, height,
              wf.color,
              0.8,
              pathProgress,
            );
          }
        }

      } else if (state.phase === "hold") {
        state.holdTimer += elapsed;

        // Draw all curves fully
        for (const pathDef of wf.paths) {
          drawFlowCurve(
            wf.nodes[pathDef.from],
            wf.nodes[pathDef.to],
            width, height,
            wf.color,
            0.8,
            1,
          );
        }

        if (state.holdTimer >= HOLD_DUR) {
          state.phase = "fade";
          state.holdTimer = 0;
        }

      } else if (state.phase === "fade") {
        state.holdTimer += elapsed;
        const alpha = Math.max(0, 1 - state.holdTimer / FADE_DUR);

        // Fade curves
        for (const pathDef of wf.paths) {
          drawFlowCurve(
            wf.nodes[pathDef.from],
            wf.nodes[pathDef.to],
            width, height,
            wf.color,
            0.8 * alpha,
            1,
          );
        }

        // Fade nodes and tips
        for (let i = 0; i < NODE_POOL_SIZE; i++) {
          if (nodeEls[i]) nodeEls[i].style.opacity = String(alpha);
          if (tipEls[i]) tipEls[i].style.opacity = String(alpha);
        }

        if (state.holdTimer >= FADE_DUR) {
          state.phase = "pause";
          state.holdTimer = 0;
        }

      } else if (state.phase === "pause") {
        state.holdTimer += elapsed;

        if (state.holdTimer >= PAUSE_DUR) {
          state.wfIdx = (state.wfIdx + 1) % workflowDefs.length;
          setWorkflow(state.wfIdx);
        }
      }

      state.animId = requestAnimationFrame(tick);
    }

    setWorkflow(0);
    state.animId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(state.animId);
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
      <div
        ref={containerRef}
        className="relative mx-auto h-full w-full max-w-7xl px-6 md:px-12"
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
        />

        {Array.from({ length: NODE_POOL_SIZE }, (_, i) => (
          <div
            key={`node-${i}`}
            id={`bw-n${i}`}
            className="absolute flex flex-col items-center transition-opacity duration-300"
            style={{ opacity: 0 }}
          >
            <div
              className="bw-icon flex items-center justify-center rounded-full border-2 border-white bg-white shadow-lg"
              style={{ width: 44, height: 44 }}
            >
              <span
                className="bw-icon-inner material-symbols-outlined"
                style={{ fontSize: 22, lineHeight: 1 }}
              />
            </div>
            <span
              className="bw-label mt-1.5 whitespace-nowrap text-center text-[10px] font-semibold text-[#555]"
              style={{ maxWidth: 100 }}
            />
          </div>
        ))}

        {Array.from({ length: NODE_POOL_SIZE }, (_, i) => (
          <div
            key={`tip-${i}`}
            id={`bw-t${i}`}
            className="bw-tip absolute rounded-lg border border-black/5 bg-white/95 px-3 py-1.5 text-center text-[11px] font-medium text-[#333] opacity-0 shadow-lg transition-opacity duration-300 backdrop-blur-sm"
            style={{ display: "none", pointerEvents: "none" }}
          />
        ))}
      </div>
    </div>
  );
}
