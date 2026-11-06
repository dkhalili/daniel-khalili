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
    "company": "Kargo",
    "location": "New York, NY",
    "roles": [
      {
        "title": "Manager, Engineering - Activation Infrastructure",
        "period": "Jan 2026 — Present",
        "description": "Manage 10+ engineers across campaign activation, supply activation, and platform integration; organized three pods and delegated technical and delivery ownership to pod leads.",
        "highlights": [
          "Coached a QA teammate through the transition into software engineering and helped an associate engineer take independent feature ownership and work directly with Product.",
          "Developed a senior engineer into a release manager and technical lead for their domain, including complex architecture; support growth through regular feedback and career planning.",
          "Partner directly with Product and business stakeholders to identify revenue opportunities, translate feedback into technical proposals, and set quarterly roadmap priorities.",
          "Work with Project Management on capacity, delivery metrics, dependencies, and deadlines; make scope and risk tradeoffs and communicate commitments to leadership.",
          "Write production code, guide architecture, and review implementations while owning release coordination and production escalations across six core repositories.",
          "Lead incident reviews and improvements to monitoring, recovery procedures, and runbooks. Coordinate cross-product migrations and targeted data backfills to protect live campaigns.",
          "Establish shared code-ownership and review standards, including CODEOWNERS, Trusted Committer practices, and AI-assisted review guardrails."
        ]
      },
      {
        "title": "Senior Software Engineer II",
        "period": "Jan 2024 — Jan 2026",
        "description": "Led development of the internal Campaign Management platform from design through production, spanning distributed backend services, low-latency APIs, and new frontend applications.",
        "highlights": [
          "Designed, built, and operated core platform services and internal tools, including permissions, monitoring, logging, alerts, and reliable service boundaries.",
          "Served as technical and delivery lead for roughly 10 engineers, coordinating execution, mentoring, stakeholder communication, and delivery quality.",
          "Built internal engineering automation across GitHub, Jira, release notes, PR metadata, alerts, and team communications using webhook-driven workflows, clear service contracts, and reliability safeguards.",
          "Translated business and product requirements into technical solutions and managed priorities across concurrent workstreams.",
          "Ran code reviews and CI/CD deployments, mentored engineers, and introduced AI-assisted development while maintaining code quality."
        ],
        "type": "Tech Lead",
        "stack": [
          "PHP / Laravel",
          "Node.js",
          "React",
          "Angular",
          "Inertia.js",
          "Docker",
          "AWS",
          "Kubernetes"
        ]
      },
      {
        "title": "Senior Software Engineer I",
        "period": "Dec 2021 — Jan 2024",
        "description": "Joined Kargo's Workflow team and took ownership of initiatives across multiple repositories and technology stacks.",
        "highlights": [
          "Built backend services, APIs, and frontend interfaces supporting internal operations, campaign management, and ad-serving workflows.",
          "Owned scoping, technical design, implementation, deployment, and production support.",
          "Contributed code reviews and knowledge sharing to raise code quality across the team."
        ],
        "stack": [
          "PHP / Laravel",
          "Node.js",
          "React",
          "Angular",
          "Docker",
          "AWS",
          "Kubernetes"
        ]
      }
    ],
    "companyDescription": "Lead shared activation infrastructure used by product teams for campaign management, publisher supply, and programmatic integrations within a 500-800 person organization. The platform supports direct and private-marketplace (PMP) channels with $346M+ in reported advertiser gross revenue from November 2025 through October 2026."
  },
  {
    "company": "YLift Team",
    "location": "New York, NY",
    "roles": [
      {
        "title": "Senior Software Engineer",
        "period": "Sep 2020 — Dec 2021",
        "description": "Built the engineering department for a medical aesthetics e-commerce company, hiring, managing, and mentoring three engineers while leading platform modernization.",
        "highlights": [
          "Led architecture and development of a healthcare training and procedure-demonstration platform, evolving basic video conferencing into a communication and learning environment using AWS Chime SDK and FFmpeg.",
          "Developed backend services and frontend applications, and owned AWS infrastructure spanning EC2, ECS, S3, and CodePipeline.",
          "Partnered with the CEO on product direction, architecture, and delivery planning; set priorities and made technical tradeoffs under startup constraints."
        ],
        "type": "Tech Lead",
        "stack": [
          "Node.js",
          "Vue.js",
          "MySQL",
          "Elasticsearch",
          "Docker",
          "AWS",
          "Chime SDK",
          "FFmpeg"
        ]
      }
    ]
  },
  {
    "company": "SpotLeads",
    "location": "Remote",
    "roles": [
      {
        "title": "Back-End Developer",
        "period": "Mar 2019 — Sep 2020",
        "description": "Built and managed RESTful APIs for a real estate mobile startup using Node.js, Firebase, and MongoDB on AWS, collaborating directly with iOS developers on integration and delivery.",
        "highlights": [],
        "type": "Freelance"
      }
    ]
  },
  {
    "company": "Scimund Inc",
    "location": "Brooklyn, NY",
    "roles": [
      {
        "title": "Co-Founder | Architect | Lead Software Engineer",
        "period": "May 2017 — Jun 2019",
        "description": "Co-founded a startup building immersive VR and media experiences for personal memories; served as one of two company leads responsible for product direction and delivery.",
        "highlights": [
          "Led architecture and hands-on development across web and VR applications, balancing technical decisions, stakeholder needs, and startup constraints.",
          "Managed engineering hiring, budgeting, team execution, and day-to-day operations.",
          "Built in-house server infrastructure connecting web applications and led the team's expansion into Unreal Engine, Unity, C++, and Python."
        ],
        "stack": [
          "Node.js",
          "Python",
          "React",
          "Unreal Engine",
          "Unity",
          "C++"
        ]
      }
    ]
  },
  {
    "company": "Zola Suite",
    "location": "Port Washington, NY",
    "roles": [
      {
        "title": "Front-End Developer",
        "period": "Nov 2016 — May 2017",
        "description": "Built frontend features and RESTful APIs for legal practice management software using JavaScript, C#, Bootstrap, and MongoDB.",
        "highlights": []
      }
    ]
  }
];
