import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons/BrandIcons";
import SectionContainer from "../layouts/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
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
    value: "Placeholder LinkedIn Profile",
    href: profile.linkedin,
    Icon: LinkedinIcon,
    external: true,
  },
];

function Contact() {
  return (
    <SectionContainer id="contact">
      <SectionHeader
        label="Contact"
        title="Get in Touch"
        intro="Open to internship and entry-level software development opportunities."
      />

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contactMethods.map(({ id, label, value, href, Icon, external }) => (
          <li key={id}>
            <Card
              as="a"
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="flex h-full items-center gap-4"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-ink">{label}</span>
                <span className="block truncate text-sm text-muted">{value}</span>
              </span>
            </Card>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}

export default Contact;
