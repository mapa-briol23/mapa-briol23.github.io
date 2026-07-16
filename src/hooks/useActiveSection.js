import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently in view so the navbar can highlight it.
 */
function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      // Ignore the strip under the fixed navbar and the lower half of the viewport.
      { rootMargin: "-80px 0px -55% 0px", threshold: [0.1, 0.5, 1] },
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element) => element !== null);

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}

export default useActiveSection;
