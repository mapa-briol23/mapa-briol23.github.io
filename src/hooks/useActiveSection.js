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
      // Collapse the root to a line across the viewport's middle: the active
      // section is whichever one that line is inside. This is what keeps the
      // highlight on the section actually centred on screen — the earlier
      // bottom-weighted margin flagged the *next* section too early.
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
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
