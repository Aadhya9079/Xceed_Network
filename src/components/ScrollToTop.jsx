import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  const [vw, setVw] = useState(window.innerWidth);
  const [vh, setVh] = useState(window.innerHeight);

  // Show button after tiny scroll
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track viewport size for responsive sizing/position
  useEffect(() => {
    const onResize = () => {
      setVw(window.innerWidth);
      setVh(window.innerHeight);
    };
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  // Responsive sizing + offsets
  const { size, offsetX, offsetY } = useMemo(() => {
    // Button size scales with viewport width: clamp(44px, 8vw, 64px)
    const btnSize = Math.max(44, Math.min(64, Math.round(vw * 0.08)));

    // Edge offsets: smaller on phones, larger on desktop
    const baseOffset = vw < 420 ? 12 : vw < 1024 ? 16 : 22;

    // iOS safe-area (fallback 0 if unsupported)
    const safeBottom = parseInt(
      getComputedStyle(document.documentElement)
        .getPropertyValue("env(safe-area-inset-bottom)")
        .replace("px", "") || 0,
      10
    ) || 0;

    return {
      size: btnSize,
      offsetX: baseOffset,
      offsetY: baseOffset + safeBottom,
    };
  }, [vw, vh]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const style = {
    position: "fixed",
    right: `${offsetX}px`,
    bottom: `calc(${offsetY}px)`,
    width: `${size}px`,
    height: `${size}px`,
    border: "none",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #f1f2f7, #1159bf)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 8px 18px rgba(0,0,0,0.25)",
    zIndex: 2147483647,
    transition: "opacity .4s ease, transform .4s ease, background .3s ease",
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0) scale(1)" : "translateY(10px) scale(0.95)",
    pointerEvents: show ? "auto" : "none",
    // Prevent overlap with very small viewports:
    maxWidth: "20vw",
    maxHeight: "20vw",
  };

  const iconSize = Math.round(size * 0.5); // SVG scales with button

  const btn = (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      style={style}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#111")}
      onMouseLeave={(e) =>
        (e.currentTarget.style.background =
          "linear-gradient(135deg, #f1f2f7, #1159bf)")
      }
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );

  return createPortal(btn, document.body);
}
