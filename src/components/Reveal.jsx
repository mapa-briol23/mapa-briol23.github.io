import { useEffect, useRef, useState } from "react";

/**
 * Fades and lifts its children into view once, the first time they are scrolled to.
 * The transition itself lives in CSS (.reveal); this only flips the class.
 */
function Reveal({ as: Component = "div", delay = 0, className = "", children, ...props }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={elementRef}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Reveal;
