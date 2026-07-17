import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons/BrandIcons";
import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
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
];

function Contact() {
  return (
    <SectionContainer id="contact" tone="clear">
      {/* A last pool of light under the closing section. */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -z-10 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-radial from-accent/25 via-secondary/8 to-transparent blur-3xl"
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

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contactMethods.map(({ id, label, value, href, Icon, external }, index) => (
          <Reveal key={id} as="li" delay={index * 100}>
            <Card
              as="a"
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="group flex h-full items-center gap-4"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-haze to-mist text-primary ring-1 ring-white/70 transition duration-300 group-hover:from-accent/30 group-hover:to-secondary/20">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-ink">{label}</span>
                <span className="block truncate text-sm text-muted">{value}</span>
              </span>
            </Card>
          </Reveal>
        ))}
      </ul>
    </SectionContainer>
  );
}

export default Contact;
