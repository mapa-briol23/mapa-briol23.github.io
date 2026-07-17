import googleCloudFoundations from "../assets/images/certificates/google-cloud-foundations.png";
import comptiaTechPlus from "../assets/images/certificates/comptia-tech-plus.png";
import ciscoEthicalHacker from "../assets/images/certificates/cisco-ethical-hacker.png";
import ciscoCcnaIntro from "../assets/images/certificates/cisco-ccna-intro.png";

export const certificates = [
  {
    id: "cert-1",
    title: "Google Cloud Computing Foundations Certificate",
    organization: "Google",
    date: "February 2026",
    imageLabel: "Google Cloud Computing Foundations Certificate",
    image: googleCloudFoundations,
  },
  {
    id: "cert-2",
    title: "CompTIA Tech+ Certification",
    organization: "CompTIA",
    date: "December 2025",
    imageLabel: "CompTIA Tech+ Certification",
    image: comptiaTechPlus,
  },
  {
    id: "cert-3",
    title: "Ethical Hacker",
    organization: "Cisco Networking Academy",
    date: "September 2025",
    imageLabel: "Cisco Ethical Hacker Certificate",
    image: ciscoEthicalHacker,
  },
  // Temporarily hidden — TOEIC certificate.
  // {
  //   id: "cert-4",
  //   title: "TOEIC Score: 935 / 990",
  //   organization: "Princeton Assessments and Training Inc.",
  //   date: "June 2025",
  //   imageLabel: "TOEIC Score Report",
  // },
  {
    id: "cert-5",
    title: "CCNA: Introduction to Networks",
    organization: "Cisco Networking Academy",
    date: "April 2025",
    imageLabel: "Cisco CCNA Introduction to Networks Certificate",
    image: ciscoCcnaIntro,
  },
];
