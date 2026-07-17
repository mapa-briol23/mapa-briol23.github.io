import { Mail } from "lucide-react";
import AmbientVideo from "../components/AmbientVideo";
import { GithubIcon, LinkedinIcon } from "../components/icons/BrandIcons";
import { navItems, profile } from "../data/navigation";

const socialLinks = [
  { id: "email", label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
  { id: "github", label: "GitHub", href: profile.github, Icon: GithubIcon },
  { id: "linkedin", label: "LinkedIn", href: profile.linkedin, Icon: LinkedinIcon },
];

function Footer() {
  return (
    <footer className="relative z-1 overflow-hidden border-t border-white/10 bg-ink">
      {/* The wave video breaking over the bottom edge of the page, under a scrim deep
          enough to carry white type across the loop's brightest frames. The fallback
          stands in for the footage below 768px, where the video never loads. */}
      <AmbientVideo
        src="/videos/footer-wave.mp4"
        overlay="linear-gradient(to bottom, rgba(15,23,42,0.42), rgba(23,37,84,0.5))"
        fallback="linear-gradient(to bottom right, #0f172a, #172554 60%, #1e3a8a)"
      />
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-card text-white">{profile.fullName}</p>
            <p className="mt-2 text-sm text-white/70">
              {profile.degree} · {profile.school}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-white/70 transition duration-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/70">© {new Date().getFullYear()} {profile.fullName}</p>

          <ul className="flex items-center gap-2 sm:justify-end">
            {socialLinks.map(({ id, label, href, Icon }) => (
              <li key={id}>
                <a
                  href={href}
                  aria-label={label}
                  target={id === "email" ? undefined : "_blank"}
                  rel={id === "email" ? undefined : "noreferrer"}
                  className="inline-flex rounded-full p-2.5 text-white transition duration-300 hover:bg-white/15"
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
