export const projectGroups = [
  {
    id: "first-year",
    year: "First Year",
    projects: [
      {
        id: "y1-p1",
        name: "R-EaseCite",
        category: "Mobile Application",
        description:
          "A mobile application designed to simplify classroom recitations by managing student participation, quizzes, and subject records.",
        features: [
          "Student and subject management",
          "Random recitation with timer",
          "Quiz and participation tracking",
        ],
        screenshotLabel: "R-EaseCite main screen",
        software: ["Xamarin", "C#", "Visual Studio"],
      },
      {
        id: "y1-p2",
        name: "Console-Based Cryptography Program",
        category: "Console Application",
        description:
          "A C# console application that demonstrates classical encryption and decryption techniques through an interactive command-line interface.",
        features: [
          "Multiple classical cipher algorithms",
          "Encrypts and decrypts messages",
          "Input validation",
        ],
        screenshotLabel: "Cryptography program interface",
        software: ["C#", "Visual Studio"],
      },
    ],
  },
  {
    id: "second-year",
    year: "Second Year",
    projects: [
      {
        id: "y2-p1",
        name: "CareBy: Mental Health Counseling Appointment System",
        category: "Web Application",
        description:
          "A web-based appointment system that allows users to schedule counseling sessions while helping administrators manage appointments efficiently.",
        features: [
          "User registration and login",
          "Appointment scheduling",
          "Secure account management",
        ],
        screenshotLabel: "CareBy appointment dashboard",
        software: ["ASP.NET Web Forms", "C#", "SQL Server", "Visual Studio"],
      },
      {
        id: "y2-p2",
        name: "CCIS Department Event Enlistment Mobile Application",
        category: "Mobile Application",
        description:
          "An Android application developed to display departmental event schedules and provide students with organized event information.",
        features: ["Multi-day event schedules", "Student profile page", "Easy navigation"],
        screenshotLabel: "Event enlistment app",
        software: ["Xamarin", "C#", "Visual Studio"],
      },
    ],
  },
  {
    id: "third-year",
    year: "Third Year",
    projects: [
      {
        id: "y3-p1",
        name: "Kawayan Villas Website Prototype",
        category: "UI/UX Prototype",
        description:
          "A high-fidelity website prototype designed to streamline resort reservations through online booking, scheduling, and management dashboards.",
        features: [
          "Online booking interface",
          "Booking management dashboard",
          "Data visualization",
        ],
        screenshotLabel: "Kawayan Villas booking prototype",
        software: ["Figma"],
      },
    ],
  },
  {
    id: "fourth-year",
    year: "Fourth Year",
    projects: [
      {
        id: "y4-p1",
        name: "Why-Pii",
        category: "Capstone Project",
        description:
          "A web-based security assessment tool that evaluates unsecured public Wi-Fi networks by identifying vulnerabilities and presenting security findings through an interactive dashboard.",
        features: [
          "Assesses public Wi-Fi security",
          "Displays vulnerabilities and detected threats",
          "Visualizes security scores and scan results",
        ],
        screenshotLabel: "Why-Pii dashboard",
        software: ["React", "Node.js", "Tailwind CSS", "Chart.js", "Supabase"],
        hardware: ["Raspberry Pi"],
      },
    ],
  },
];
