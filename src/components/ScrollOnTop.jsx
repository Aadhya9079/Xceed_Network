import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./scrollontop.css";

/**
 * Props:
 * - threshold: px before showing (default 40)
 * - scrollTargetSelector: optional CSS selector for a custom scroll container
 *   e.g. "#app-scroll", ".page-wrapper". If omitted, auto-detects.
 */
export default function ScrollOnTop({ threshold = 40, scrollTargetSelector }){
  const [show, setShow] = useState(false);
  const rafRef = useRef(null);
  const targetRef = useRef(null);

  // Resolve the scroll container (once on mount)
  useEffect(() => {
    let target = null;
    if (scrollTargetSelector) {
      target = document.querySelector(scrollTargetSelector);
    }
    if (!target) {
      // Auto: prefer the browser's scrolling element; fallback to documentElement
      target = document.scrollingElement || document.documentElement;
    }
    targetRef.current = target;

    const getY = () => targetRef.current ? targetRef.current.scrollTop : window.scrollY || 0;
    const canScroll = () => {
      const el = targetRef.current;
      if (!el) return false;
      return (el.scrollHeight - el.clientHeight) > 4;
    };
    const update = () => setShow(canScroll() && getY() > threshold);

    // Attach listeners to both target and window (resize/orientation)
    const opts = { passive: true };
    target.addEventListener("scroll", update, opts);
    window.addEventListener("resize", update, opts);
    window.addEventListener("orientationchange", update, opts);

    update(); // run once

    return () => {
      target.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, [threshold, scrollTargetSelector]);

  const smoothScrollTargetToTop = () => {
    const el = targetRef.current;
    if (!el) return;

    // If element supports smooth behavior natively
    try {
      el.scrollTo({ top: 0, behavior: "smooth" });
      return;
    } catch (_) {
      // some elements don't implement scrollTo with options — fall through
    }

    // Manual smooth fallback
    cancelAnimationFrame(rafRef.current);
    const step = () => {
      const y = el.scrollTop;
      if (y > 0) {
        // decelerate
        el.scrollTop = Math.max(0, y - Math.max(12, y / 10));
        rafRef.current = requestAnimationFrame(step);
      }
    };
    rafRef.current = requestAnimationFrame(step);
  };

  const btn = (
    <button
      type="button"
      className={`sot-btn ${show ? "show" : ""}`}
      onClick={smoothScrollTargetToTop}
      aria-label="Back to top"
    >
      <svg
        width="28" height="28" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2.6"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );

  // Portal so no parent overflow/transform can clip it
  return typeof document !== "undefined" ? createPortal(btn, document.body) : null;
}
