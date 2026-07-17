import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { LightboxContext } from "./lightboxContext";

/**
 * Holds the single overlay for the whole page. Any image calls open(src, alt) to
 * show it centered above everything; the X, the backdrop, and Escape all close it.
 * Open and close both animate over 300ms (fade + scale), so the node stays mounted
 * through the closing transition before it unmounts.
 */
export function LightboxProvider({ children }) {
  const [image, setImage] = useState(null); // { src, alt } while mounted
  const [visible, setVisible] = useState(false); // drives the transition
  const closeTimer = useRef(null);

  const open = useCallback((src, alt = "") => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setImage({ src, alt });
    // Next frame flips visible so the transition runs from the closed state.
    requestAnimationFrame(() => setVisible(true));
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    closeTimer.current = setTimeout(() => {
      setImage(null);
      closeTimer.current = null;
    }, 300);
  }, []);

  // Lock body scroll and wire Escape only while an image is mounted.
  useEffect(() => {
    if (!image) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [image, close]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}

      {image && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close image"
            className="fixed top-6 right-6 text-white transition-opacity duration-200 hover:opacity-70"
          >
            <X size={32} />
          </button>

          <img
            src={image.src}
            alt={image.alt}
            onClick={(event) => event.stopPropagation()}
            className="transition-transform duration-300 ease-out"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              transform: visible ? "scale(1)" : "scale(0.95)",
            }}
          />
        </div>
      )}
    </LightboxContext.Provider>
  );
}
