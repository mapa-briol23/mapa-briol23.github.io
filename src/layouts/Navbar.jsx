import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import Button from "../components/Button";
import useActiveSection from "../hooks/useActiveSection";
import { navItems, profile } from "../data/navigation";

const sectionIds = navItems.map((item) => item.id);

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur-xl">
      <nav
        aria-label="Main"
        className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 lg:px-8"
      >
        <a href="#home" className="text-base font-bold tracking-tight text-ink" onClick={closeMenu}>
          Phaula Briol
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={activeId === item.id ? "true" : undefined}
                className={`relative text-sm font-medium transition duration-300 hover:text-primary ${
                  activeId === item.id ? "text-primary" : "text-muted"
                }`}
              >
                {item.label}
                {activeId === item.id && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button as="a" href={profile.cvPath} download className="hidden px-5 py-2.5 text-sm sm:inline-flex">
            <Download className="h-4 w-4" aria-hidden="true" />
            Download CV
          </Button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="rounded-full p-2 text-ink transition duration-300 hover:bg-haze lg:hidden"
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
        <div id="mobile-menu" className="border-t border-white/60 bg-white/90 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto flex max-w-[1200px] flex-col px-6 py-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  aria-current={activeId === item.id ? "true" : undefined}
                  className={`block py-3 text-base font-medium transition duration-200 hover:text-primary ${
                    activeId === item.id ? "text-primary" : "text-muted"
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
