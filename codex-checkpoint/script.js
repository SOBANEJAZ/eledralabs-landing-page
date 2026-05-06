const body = document.body;
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#primary-navigation");
const counterNodes = document.querySelectorAll("[data-count]");
const revealNodes = document.querySelectorAll("[data-reveal]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

const closeNavigation = () => {
  body.classList.remove("nav-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "Open navigation");
};

navToggle?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeNavigation();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNavigation();
  }
});

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

const formatCounter = (value, decimals, prefix, suffix) => {
  const rounded = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
  if (prefix === "x") {
    return `${rounded}x`;
  }
  return `${prefix || ""}${rounded}${suffix || ""}`;
};

const animateCounter = (node) => {
  const target = Number(node.dataset.count);
  const suffix = node.dataset.suffix || "";
  const prefix = node.dataset.prefix || "";
  const decimals = String(node.dataset.count).includes(".") ? 1 : 0;
  const duration = prefersReducedMotion ? 0 : 1100;
  const start = performance.now();

  const tick = (now) => {
    const elapsed = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - elapsed, 3);
    node.textContent = formatCounter(target * eased, decimals, prefix, suffix);
    if (elapsed < 1) {
      requestAnimationFrame(tick);
    }
  };

  if (duration === 0) {
    node.textContent = formatCounter(target, decimals, prefix, suffix);
    return;
  }

  requestAnimationFrame(tick);
};

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealNodes.forEach((node) => revealObserver.observe(node));

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.55 }
  );

  counterNodes.forEach((node) => counterObserver.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
  counterNodes.forEach(animateCounter);
}

document.querySelector(".demo-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector("button");

  if (button) {
    button.textContent = "Demo requested";
    button.disabled = true;
  }
});
