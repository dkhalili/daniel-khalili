export interface Role {
  title: string;
  type?: string;
  period: string;
  description: string;
  highlights: string[];
  stack?: string[];
}

export interface Experience {
  company: string;
  location: string;
  companyDescription?: string;
  roles: Role[];
}

export const experience: Experience[] = [
  {
    company: "Kargo",
    location: "New York, NY",
    companyDescription:
      "Primary ad demand and supply management platform for a 500–800 person organization. The platform and APIs power campaign management, publisher supply, and new ad tech integrations company-wide, processing thousands of requests daily across multiple repositories, tech stacks, and business domains.",
    roles: [
      {
        title: "Manager, Engineering",
        period: "Jan 2026 — Present",
        description:
          "Promoted into engineering leadership while remaining hands-on technically, balancing high-level planning with active development.",
        highlights: [
          "Primary point of contact between Product, Project Managers, and Engineering leadership across major initiatives, gathering requirements, aligning on business outcomes, and driving implementation under real resource constraints",
          "Lead team execution across planning, delivery, feedback loops, stakeholder alignment, and technical decision-making for a broader engineering group of roughly 10 engineers",
          "Manage 4 direct reports through 1:1s, career growth conversations, structured feedback, and thoughtful task assignment",
          "Assign tasks based on individual strengths and development areas, and provide direct feedback to help engineers grow",
          "Key voice in roadmap planning, proposing and scoping initiatives for cycle and quarterly planning in close collaboration with Product",
          "Run sprint ceremonies including standups and technical deep-dives",
          "Coordinate cross-team dependencies and communicate timelines to leadership and dependent stakeholders",
          "Bring a product mindset to engineering leadership, focused on outcomes and company-wide impact",
        ],
      },
      {
        title: "Senior Software Engineer II",
        type: "Tech Lead",
        period: "Jan 2024 — Jan 2026",
        description:
          "Led full-lifecycle development of the internal Campaign Management platform, owning end-to-end delivery across distributed backend services, low-latency APIs, and greenfield frontend applications.",
        highlights: [
          "Designed, built, and operated core platform services and internal tools supporting campaign management, with a focus on low-latency APIs, permissions, monitoring, logging, alerts, and reliable service boundaries",
          "Operated as the team's technical and delivery lead while being evaluated for formal engineering leadership, owning team coordination, mentoring, execution planning, stakeholder communication, and delivery quality across a broader group of roughly 10 engineers",
          "Built internal engineering automation across GitHub, Jira, release notes, PR metadata, alerts, and team communications, using webhook-driven workflows, clear service contracts, and reliability safeguards to reduce manual coordination and improve delivery visibility",
          "Gathered and translated business and product requirements into technical solutions, managing priorities across concurrent workstreams while navigating constant context switching",
          "Ran code reviews, managed CI/CD deployments, and established engineering best practices across the team",
          "One of the primary mentors on the team, actively supporting engineer growth and knowledge sharing",
          "Early adopter of AI tooling within the team, integrating tools that significantly accelerated delivery without compromising code quality",
        ],
        stack: [
          "PHP (Laravel)",
          "Node.js",
          "React",
          "Angular",
          "Inertia.js",
          "Docker",
          "AWS",
          "Kubernetes",
        ],
      },
      {
        title: "Senior Software Engineer I",
        period: "Dec 2021 — Jan 2024",
        description:
          "Joined Kargo's Workflow team and quickly took ownership of initiatives end-to-end across multiple repositories and tech stacks.",
        highlights: [
          "Built across the full stack including backend services, APIs, and frontend interfaces supporting internal operations and ad-serving workflows",
          "Learned new technologies and business logic continuously to keep pace with an evolving, multi-platform environment",
          "Contributed to code reviews and helped raise overall code quality across the team",
        ],
      },
    ],
  },
  {
    company: "YLift Team",
    location: "New York, NY",
    roles: [
      {
        title: "Senior Software Engineer",
        type: "Tech Lead",
        period: "Sep 2020 — Dec 2021",
        description:
          "Built and led the tech department from the ground up for a medical aesthetics e-commerce company, modernizing the platform to a new generation of technology.",
        highlights: [
          "Led the architecture and development of a live streaming and class platform for healthcare training, evolving it from basic video conferencing into a full-featured communication and learning environment using AWS ChimeSDK and FFmpeg",
          "Hired, managed, mentored, and reviewed a team of 3 engineers while owning product direction, technical architecture, and delivery planning with the CEO",
          "Worked directly with the CEO to set company direction and shape the product roadmap",
          "Set engineering priorities, coordinated execution, and made product and technical tradeoff decisions under fast-moving startup constraints",
        ],
        stack: [
          "Node.js",
          "Vue.js",
          "MySQL",
          "Elasticsearch",
          "Docker",
          "AWS",
        ],
      },
    ],
  },
  {
    company: "SpotLeads",
    location: "Remote",
    roles: [
      {
        title: "Back-End Developer",
        type: "Freelance",
        period: "Mar 2019 — Sep 2020",
        description:
          "Built and managed RESTful APIs for a real estate mobile startup, collaborating directly with iOS developers.",
        highlights: [
          "Designed and built APIs using Node.js, Firebase, and MongoDB on AWS",
        ],
        stack: ["Node.js", "Firebase", "MongoDB", "AWS"],
      },
    ],
  },
  {
    company: "Scimund Inc",
    location: "Brooklyn, NY",
    roles: [
      {
        title: "Co-Founder | Architect | Lead Software Engineer",
        period: "May 2017 — Jun 2019",
        description:
          "Built a technology startup focused on immersive VR and media experiences for capturing and reliving personal memories.",
        highlights: [
          "Co-founded the company and led software/product direction under startup constraints, managing team execution, stakeholder expectations, technical decisions, and rapid delivery across web and immersive platforms",
          "Served as one of two company leads, making product direction and project management decisions alongside day-to-day engineering and operations",
          "Managed the software department including hiring, budgeting, and team oversight, while leading architecture and development across web and VR platforms",
          "Built in-house server infrastructure to connect web applications and led the team into new technology including Unreal Engine, Unity, C++, and Python",
        ],
        stack: ["Node.js", "Python", "React", "Unreal Engine", "Unity", "C++"],
      },
    ],
  },
  {
    company: "Zola Suite",
    location: "Port Washington, NY",
    roles: [
      {
        title: "Front-End Developer",
        period: "Nov 2016 — May 2017",
        description:
          "Built frontend features and RESTful APIs for legal practice management software.",
        highlights: [
          "Developed with JavaScript, C#, Bootstrap, and MongoDB",
        ],
        stack: ["JavaScript", "C#", "Bootstrap", "MongoDB"],
      },
    ],
  },
];
