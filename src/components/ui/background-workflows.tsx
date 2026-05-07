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
  tipSide1: "left" | "right";
  tipSide2: "left" | "right";
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
  { p1: { cx: 1, cy: 0.6 }, p2: { cx: 4, cy: 0.55 }, app1: 0, app2: 1, tip1: tooltips[0], tip2: tooltips[1], color: "#b8aae8", tipSide1: "right", tipSide2: "left" },
  { p1: { cx: 1, cy: 0.25 }, p2: { cx: 4, cy: 0.78 }, app1: 2, app2: 3, tip1: tooltips[2], tip2: tooltips[3], color: "#8abce8", tipSide1: "right", tipSide2: "left" },
  { p1: { cx: 0, cy: 0.5 }, p2: { cx: 5, cy: 0.35 }, app1: 4, app2: 5, tip1: tooltips[4], tip2: tooltips[5], color: "#9ed4b4", tipSide1: "right", tipSide2: "left" },
  { p1: { cx: 4, cy: 0.22 }, p2: { cx: 1, cy: 0.75 }, app1: 6, app2: 7, tip1: tooltips[6], tip2: tooltips[7], color: "#e8c49a", tipSide1: "left", tipSide2: "right" },
];

const DRAW_DUR = 1800;
const HOLD_DUR = 2200;
const FADE_DUR = 700;
const PAUSE_DUR = 350;

function colToX(cx: number, width: number): number {
  const positions = [
    width * (1 / 12),
    width * (2 / 12),
    width * (4 / 12),
    width * (6 / 12),
    width * (8 / 12),
    width * (10 / 12),
  ];

  return positions[cx];
}

function bezierPt(
  x1: number,
  y1: number,
  cp1x: number,
  cp1y: number,
  cp2x: number,
  cp2y: number,
  x2: number,
  y2: number,
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
  const stateRef = useRef({
    currentWorkflow: 0,
    phase: "draw" as "draw" | "hold" | "fade" | "pause",
    progress: 0,
    holdTimer: 0,
    firstPointShown: false,
    secondPointShown: false,
    lastTime: 0,
    animationId: 0,
  });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const state = stateRef.current;

    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const tooltipOne = container.querySelector<HTMLElement>("#bg-t1");
    const tooltipTwo = container.querySelector<HTMLElement>("#bg-t2");
    const nodeOne = container.querySelector<HTMLElement>("#bg-n1");
    const nodeTwo = container.querySelector<HTMLElement>("#bg-n2");
    const iconOne = container.querySelector<HTMLElement>("#bg-i1");
    const labelOne = container.querySelector<HTMLElement>("#bg-l1");
    const iconTwo = container.querySelector<HTMLElement>("#bg-i2");
    const labelTwo = container.querySelector<HTMLElement>("#bg-l2");

    function getSize() {
      return { width: container.offsetWidth, height: container.offsetHeight };
    }

    function setWorkflow(index: number) {
      const workflow = workflowDefs[index];
      const { width, height } = getSize();
      const x1 = colToX(workflow.p1.cx, width);
      const y1 = height * workflow.p1.cy;
      const x2 = colToX(workflow.p2.cx, width);
      const y2 = height * workflow.p2.cy;

      if (iconOne) iconOne.innerHTML = appData[workflow.app1].svg;
      if (labelOne) labelOne.textContent = appData[workflow.app1].name;
      if (iconTwo) iconTwo.innerHTML = appData[workflow.app2].svg;
      if (labelTwo) labelTwo.textContent = appData[workflow.app2].name;

      if (tooltipOne) {
        tooltipOne.textContent = workflow.tip1;
        tooltipOne.style.opacity = "0";
        tooltipOne.style.left = `${workflow.tipSide1 === "right" ? x1 + 8 : x1 - 128}px`;
        tooltipOne.style.top = `${y1 - 52}px`;
      }

      if (tooltipTwo) {
        tooltipTwo.textContent = workflow.tip2;
        tooltipTwo.style.opacity = "0";
        tooltipTwo.style.left = `${workflow.tipSide2 === "right" ? x2 + 8 : x2 - 128}px`;
        tooltipTwo.style.top = `${y2 - 52}px`;
      }

      if (nodeOne) {
        nodeOne.style.opacity = "0";
        nodeOne.style.left = `${x1 - 17}px`;
        nodeOne.style.top = `${y1 + 6}px`;
      }

      if (nodeTwo) {
        nodeTwo.style.opacity = "0";
        nodeTwo.style.left = `${x2 - 17}px`;
        nodeTwo.style.top = `${y2 + 6}px`;
      }
    }

    function drawCurve(workflow: WorkflowDef, progress: number, alpha: number) {
      const { width, height } = getSize();
      const x1 = colToX(workflow.p1.cx, width);
      const y1 = height * workflow.p1.cy;
      const x2 = colToX(workflow.p2.cx, width);
      const y2 = height * workflow.p2.cy;

      const cp1x = x1 + (x2 - x1) * 0.15;
      const cp1y = y1 + (y2 - y1) * 0.7;
      const cp2x = x2 - (x2 - x1) * 0.15;
      const cp2y = y2 - (y2 - y1) * 0.7;

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = workflow.color;
      ctx.lineWidth = 1.2;

      const steps = 80;
      const drawSteps = Math.floor(progress * steps);

      ctx.beginPath();

      for (let i = 0; i <= drawSteps; i += 1) {
        const stepProgress = i / steps;
        const point = bezierPt(
          x1,
          y1,
          cp1x,
          cp1y,
          cp2x,
          cp2y,
          x2,
          y2,
          stepProgress
        );

        if (i === 0) ctx.moveTo(point.x, point.y);
        else ctx.lineTo(point.x, point.y);
      }

      ctx.stroke();

      if (progress > 0.02) {
        ctx.beginPath();
        ctx.arc(x1, y1, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = workflow.color;
        ctx.fill();
      }

      if (progress >= 1) {
        ctx.beginPath();
        ctx.arc(x2, y2, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = workflow.color;
        ctx.fill();
      }

      ctx.restore();
    }

    function tick(timestamp: number) {
      const { width, height } = getSize();
      const elapsed = state.lastTime ? Math.min(timestamp - state.lastTime, 50) : 16;
      const workflow = workflowDefs[state.currentWorkflow];

      state.lastTime = timestamp;

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        setWorkflow(state.currentWorkflow);
      }

      ctx.clearRect(0, 0, width, height);

      if (state.phase === "draw") {
        state.progress += elapsed / DRAW_DUR;

        if (state.progress >= 1) {
          state.progress = 1;
          state.phase = "hold";
          state.holdTimer = 0;
        }

        if (state.progress > 0.25 && !state.firstPointShown) {
          if (tooltipOne) tooltipOne.style.opacity = "1";
          if (nodeOne) nodeOne.style.opacity = "1";
          state.firstPointShown = true;
        }

        if (state.progress >= 1 && !state.secondPointShown) {
          if (tooltipTwo) tooltipTwo.style.opacity = "1";
          if (nodeTwo) nodeTwo.style.opacity = "1";
          state.secondPointShown = true;
        }

        drawCurve(workflow, state.progress, 0.9);
      } else if (state.phase === "hold") {
        state.holdTimer += elapsed;
        drawCurve(workflow, 1, 0.9);

        if (state.holdTimer >= HOLD_DUR) {
          state.phase = "fade";
          state.holdTimer = 0;
        }
      } else if (state.phase === "fade") {
        state.holdTimer += elapsed;
        const alpha = Math.max(0, 1 - state.holdTimer / FADE_DUR);

        drawCurve(workflow, 1, 0.9 * alpha);

        if (tooltipOne) tooltipOne.style.opacity = String(alpha);
        if (tooltipTwo) tooltipTwo.style.opacity = String(alpha);
        if (nodeOne) nodeOne.style.opacity = String(alpha);
        if (nodeTwo) nodeTwo.style.opacity = String(alpha);

        if (state.holdTimer >= FADE_DUR) {
          state.phase = "pause";
          state.holdTimer = 0;
        }
      } else if (state.phase === "pause") {
        state.holdTimer += elapsed;

        if (state.holdTimer >= PAUSE_DUR) {
          state.currentWorkflow = (state.currentWorkflow + 1) % workflowDefs.length;
          state.phase = "draw";
          state.progress = 0;
          state.holdTimer = 0;
          state.firstPointShown = false;
          state.secondPointShown = false;
          setWorkflow(state.currentWorkflow);
        }
      }

      state.animationId = requestAnimationFrame(tick);
    }

    setWorkflow(0);
    state.animationId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(state.animationId);
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0">
      <div
        ref={containerRef}
        className="relative mx-auto h-full w-full max-w-7xl px-6 md:px-12"
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full opacity-90"
        />

        <div
          id="bg-t1"
          className="absolute max-w-[120px] rounded-[8px] border border-black/10 bg-white/90 px-[9px] py-[5px] text-center text-[10px] leading-[1.4] text-[#222] opacity-0 transition-opacity duration-500 backdrop-blur-[2px]"
        />
        <div
          id="bg-t2"
          className="absolute max-w-[120px] rounded-[8px] border border-black/10 bg-white/90 px-[9px] py-[5px] text-center text-[10px] leading-[1.4] text-[#222] opacity-0 transition-opacity duration-500 backdrop-blur-[2px]"
        />

        <div
          id="bg-n1"
          className="absolute flex flex-col items-center gap-1 opacity-0 transition-opacity duration-500"
        >
          <div
            id="bg-i1"
            className="h-[34px] w-[34px] overflow-hidden rounded-full border border-black/10 bg-white"
          />
          <div id="bg-l1" className="text-[9px] text-[#555]" />
        </div>
        <div
          id="bg-n2"
          className="absolute flex flex-col items-center gap-1 opacity-0 transition-opacity duration-500"
        >
          <div
            id="bg-i2"
            className="h-[34px] w-[34px] overflow-hidden rounded-full border border-black/10 bg-white"
          />
          <div id="bg-l2" className="text-[9px] text-[#555]" />
        </div>
      </div>
    </div>
  );
}
