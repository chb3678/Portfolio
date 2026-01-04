export const siteConfig = {
  avatar: "me.jpg",
  name: "Huanbin Chen",
  title: "Junior Mechanical Engineer",
  description: "Portfolio website of Huanbin Chen",
  accentColor: "#1d4ed8",
  social: {
    email: "chb3678@berkeley.edu",
    linkedin: "https://www.linkedin.com/in/huanbin-chen-85731a28b/",
    github: "https://github.com/chb3678",
  },
  aboutMe:
    "I LOVE ROBOTS, AND EVERYTHING MECHANICAL ENGINEERING!",
  skills: ["Python", "TypeScript", "C++", "FEA", "Manufacturing & Design","More..."
  ],
  projects: [
    {
      name: "Automated Defensive Air Hockey Table",
      description:
        "Designed an autonomous robotic system integrating computer vision, real-time control, and electromechanicalactuation under RTOS constraints",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["CAD", "Computer Vision", "Embedded System"],
    },
    {
      name: "RC Gesture-Controlled Car",
      description:
        "Built an embedded robotic platform integrating accelerometer sensing and DC motor actuation for gesture-based navigation",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["Python", "ESP32", "CAD", "Sensor implementation"],
    },
    {
      name: "Flying Cicada Robot",
      description:
        "Designed a biomimetic flapping-wing robot including custom gear trains and compliant wing structures",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["CAD", "Manufacturing", "System Design"],
    },
  ],
  experience: [
    {
      company: "City College of San Francisco",
      title: "Manufacturing Engineer",
      dateRange: "Aug 2021– May 2023",
      bullets: [
        "Designed a solar-powered boat that is used to compete in the California Solar Regatta",
        "Structural analysis on the body of the boat to maintain balance on water",
        "Helped manufactured the body of the boat at the local community college workshop, used sealants on boat deck forwood finishing as well as epoxy resin coating on exterior layer",
      ],
    },
    {
      company: "Mirada Technologies",
      title: "Mechanical Engineering Intern",
      dateRange: "Nov 2021– Mar 2023",
      bullets: [
        "Designed tolerancing and assembly tools to trim parts defection and assemble optical scanners.",
        "Create Python program to establish electronic communication to fetch data and output graphs to visualizeexperiment results",
      ],
    },
    {
      company: "Space Enterprise at Berkeley",
      title: "Rocket Engineer",
      dateRange: "Aug 2023– Present",
      bullets: [
        "Participated in designing Thrust Vector Control for controlling rocket nozzle during the launching process, as well as involved in material selection for thermal and mechanical stress resistance",
        "CFD simulations for airflow and pressure analysis, and analyzed thrust to weight ratio and propulsive efficiency when air density is low at high altitude",
        "Investigated material fatigue during rapid heating and cooling cycles, delamination (in composites), and vibration-induced cracks",
      ],
    },
  ],
  education: [
    {
      school: "University of California, Berkeley",
      degree: "Bachelor of Science in Mechanical Engineering",
      dateRange: "2023 - 2025",
      achievements: [
        "Winner of Mechanical Design Award in Fall 2025",
        "Rocket Engineer at Space Enterprise At Berkeley",
      ],
    },
    /*{
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },*/
  ],
};
