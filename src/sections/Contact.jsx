import { Mail, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons/BrandIcons";
import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import FloatingNote from "../components/FloatingNote";
import { profile } from "../data/navigation";

const contactMethods = [
  {
    id: "email",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
    external: false,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/mapa-briol23",
    href: profile.github,
    Icon: GithubIcon,
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/phaula-briol",
    href: profile.linkedin,
    Icon: LinkedinIcon,
    external: true,
  },
  {
    id: "credly",
    label: "Credly",
    value: "credly.com/users/ma-anne-phaula-briol",
    href: profile.credly,
    Icon: ExternalLink,
    external: true,
  },
];

function Contact() {
  return (
    <SectionContainer id="contact" tone="light">
      {/* A last pool of light under the closing section. */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -z-10 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-radial from-secondary/18 via-secondary/6 to-transparent blur-3xl"
      />

      <div className="relative">
        <SectionHeader label="Contact" title="Get in Touch" align="center" className="mb-16" />

        {/* Points down at the contact cards. */}
        <FloatingNote
          text="Let's connect"
          direction="down-right"
          className="top-0 left-0 xl:left-8"
        />
      </div>

      <ul className="flex flex-col divide-y divide-secondary/10 sm:flex-row sm:divide-x sm:divide-y-0">
        {contactMethods.map(({ id, label, value, href, Icon, external }, index) => (
          <Reveal key={id} as="li" delay={index * 100} className="flex-1">
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="group flex flex-col items-center gap-3 px-6 py-8 text-center"
            >
              <Icon
                className="h-8 w-8 text-secondary transition-transform duration-300 ease-out group-hover:scale-110"
                aria-hidden="true"
              />
              <span className="block text-sm font-semibold text-ink">{label}</span>
              <span className="block max-w-full truncate text-sm text-muted">{value}</span>
            </a>
          </Reveal>
        ))}
      </ul>
    </SectionContainer>
  );
}

export default Contact;
