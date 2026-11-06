export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Leadership",
    icon: "users",
    skills: [
      "Engineering Management",
      "Technical Leadership",
      "Roadmap Planning",
      "1:1s & Career Development",
      "Cross-functional Collaboration",
      "Cross-team Delivery",
      "Incident Management",
      "Service Ownership",
    ],
  },
  {
    name: "Languages",
    icon: "code",
    skills: [
      "TypeScript",
      "JavaScript",
      "PHP",
      "Python",
      "Ruby",
      "C#",
      "C++",
      "HTML/CSS",
    ],
  },
  {
    name: "Frameworks & Runtimes",
    icon: "blocks",
    skills: [
      "Laravel",
      "Node.js",
      "React",
      "Next.js",
      "Angular",
      "Vue.js",
      "Inertia.js",
      "Express.js",
    ],
  },
  {
    name: "AI & Agentic Tools",
    icon: "brain",
    skills: [
      "Claude / Anthropic API",
      "OpenAI API",
      "Cursor",
      "GitHub Copilot",
      "OpenAI Codex",
      "CodeRabbit",
      "Neuron AI",
      "Laravel AI Toolkit",
      "MCP Protocol",
      "Agentic Workflow Design",
    ],
  },
  {
    name: "Cloud & Infrastructure",
    icon: "cloud",
    skills: [
      "AWS (EC2, ECS, S3, CloudWatch)",
      "Docker",
      "Kubernetes",
      "CI/CD Pipelines",
      "Webhook Automation",
      "SCM Integrations",
      "Service Contracts",
      "Kafka / Protobuf Integrations",
      "Elasticsearch",
      "Redis",
      "Laravel Nightwatch",
      "VictoriaMetrics",
      "Grafana",
      "PagerDuty",
    ],
  },
  {
    name: "Databases",
    icon: "database",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "Firebase",
    ],
  },
];

export const stats = [
  { value: 10, suffix: "+", label: "Years in Software Engineering" },
  { value: 10, suffix: "+", label: "Engineers Managed" },
  { value: 3, suffix: "", label: "Activation Infrastructure Pods" },
  { value: 35, suffix: "K+", label: "Ad Slots in Shared Model" },
];
