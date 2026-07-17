import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import Button from "../components/Button";
import useActiveSection from "../hooks/useActiveSection";
import { navItems, profile } from "../data/navigation";

const sectionIds = navItems.map((item) => item.id);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [underline, setUnderline] = useState({ left: 0, width: 0 });
  const activeId = useActiveSection(sectionIds);

  const listRef = useRef(null);
  const linkRefs = useRef({});

  const closeMenu = () => setIsMenuOpen(false);

  // Solid-once-past-the-hero: transparent over the landing view, frosted after.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > window.innerHeight - 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Slide the underline under the active link. Measured against the list so the
  // value is a plain left/width the CSS transition animates between. useLayoutEffect
  // so the first placement lands before paint rather than flashing at 0.
  useLayoutEffect(() => {
    const link = linkRefs.current[activeId];
    const list = listRef.current;
    if (!link || !list) return;

    const measure = () =>
      setUnderline({ left: link.offsetLeft, width: link.offsetWidth });

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeId]);

  const headerTone = isScrolled
    ? "bg-abyss/85 backdrop-blur-xl border-secondary/10"
    : "bg-transparent border-transparent";

  return (
    <header
      className={`navbar-load fixed inset-x-0 top-0 z-50 border-b transition-all duration-[400ms] ease-out ${headerTone}`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 lg:px-8"
      >
        <a href="#home" className="text-base font-bold tracking-tight text-ink" onClick={closeMenu}>
          Phaula Briol
        </a>

        <ul ref={listRef} className="relative hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                ref={(el) => {
                  linkRefs.current[item.id] = el;
                }}
                href={`#${item.id}`}
                aria-current={activeId === item.id ? "true" : undefined}
                className={`relative block text-sm font-medium transition duration-300 ease-out hover:-translate-y-px hover:text-ink ${
                  activeId === item.id ? "text-secondary" : "text-muted"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}

          {underline.width > 0 && (
            <span
              aria-hidden="true"
              className="nav-underline"
              style={{ left: underline.left, width: underline.width }}
            />
          )}
        </ul>

        <div className="flex items-center gap-3">
          {/* Below sm the CV link lives in the menu instead. */}
          <Button
            as="a"
            href={profile.cvPath}
            download
            className="hidden px-5 py-2.5 text-sm sm:inline-flex"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download CV
          </Button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="rounded-full p-2 text-ink transition duration-300 hover:bg-secondary/10 lg:hidden"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div id="mobile-menu" className="border-t border-secondary/10 bg-abyss/95 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto flex max-w-[1200px] flex-col px-6 py-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  aria-current={activeId === item.id ? "true" : undefined}
                  className={`block py-3 text-base font-medium transition duration-200 hover:text-ink ${
                    activeId === item.id ? "text-secondary" : "text-muted"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3 sm:hidden">
              <Button as="a" href={profile.cvPath} download onClick={closeMenu} className="w-full">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
