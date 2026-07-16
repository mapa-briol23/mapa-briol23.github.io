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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/80 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8">
        <a href="#home" className="text-base font-bold text-ink" onClick={closeMenu}>
          Phaula Briol
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={activeId === item.id ? "true" : undefined}
                className={`text-sm font-medium transition duration-200 hover:text-primary ${
                  activeId === item.id ? "text-primary" : "text-muted"
                }`}
              >
                {item.label}
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
            className="rounded-lg p-2 text-ink transition duration-200 hover:bg-surface lg:hidden"
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
        <div id="mobile-menu" className="border-t border-line bg-white lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-4">
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
