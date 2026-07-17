import capDashboard from "../assets/images/capstone/why-pii-dashboard.png";
import capFindings from "../assets/images/capstone/why-pii-findings.png";
import capCaptivePortal from "../assets/images/capstone/why-pii-captive-portal.png";
import capAccounts from "../assets/images/capstone/why-pii-accounts.png";

export const capstone = {
  title: "Why-Pii",
  year: "Fourth Year",
  overview:
    "Why-Pii is a web-based security assessment tool developed to help identify vulnerabilities and potential threats in unsecured public Wi-Fi networks. Using a Raspberry Pi as the scanning device, the system collects security-related information and presents the results through an interactive web dashboard, enabling users to better understand the security status of public Wi-Fi access points.",
  features: [
    "Evaluates unsecured public Wi-Fi networks",
    "Detects security vulnerabilities and potential threats",
    "Displays Wi-Fi security scores and scan results",
    "Interactive dashboard for security visualization",
  ],
  software: ["React", "Node.js", "Tailwind CSS", "Chart.js", "Supabase"],
  hardware: ["Raspberry Pi"],
  screenshots: [
    { id: "cap-1", label: "Dashboard", image: capDashboard },
    { id: "cap-2", label: "Findings & Recommendations", image: capFindings },
    { id: "cap-3", label: "Captive Portal", image: capCaptivePortal },
    { id: "cap-4", label: "Accounts Management", image: capAccounts },
  ],
};
