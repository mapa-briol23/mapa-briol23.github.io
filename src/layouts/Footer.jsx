import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons/BrandIcons";
import { navItems, profile } from "../data/navigation";

const socialLinks = [
  { id: "email", label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
  { id: "github", label: "GitHub", href: profile.github, Icon: GithubIcon },
  { id: "linkedin", label: "LinkedIn", href: profile.linkedin, Icon: LinkedinIcon },
];

function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-card text-ink">{profile.fullName}</p>
            <p className="mt-1 text-sm text-muted">
              {profile.degree} · {profile.school}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-muted transition duration-200 hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">© 2026 Ma. Anne Phaula A. Briol</p>

          <ul className="flex items-center gap-4">
            {socialLinks.map(({ id, label, href, Icon }) => (
              <li key={id}>
                <a
                  href={href}
                  aria-label={label}
                  target={id === "email" ? undefined : "_blank"}
                  rel={id === "email" ? undefined : "noreferrer"}
                  className="inline-flex rounded-lg p-2 text-muted transition duration-200 hover:bg-surface hover:text-primary"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
