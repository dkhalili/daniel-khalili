export interface Initiative {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  impact?: string;
}

export const initiatives: Initiative[] = [
  {
    title: "Ad Manager MCP",
    description:
      "Co-founded the Ad Manager MCP at Kargo, integrating core ad operations workflows into MCP-compatible infrastructure. Extended the system into developer workflows for code-context-aware testing, analysis, monitoring, and fix generation across real ad operations workflows.",
    tags: ["MCP", "Cursor", "Ad Tech"],
    icon: "bot",
    impact: "First MCP integration in ad tech",
  },
  {
    title: "Multi-Surface Ad Architecture",
    description:
      "Led and presented the architectural framework to expand Kargo's ad format hierarchy beyond OpenWeb to support CTV, In-App, DOOH, and OS Native surfaces. Started internally, adopted by a dedicated surfaces team, now a high-priority executive initiative.",
    tags: ["Architecture", "CTV", "DOOH", "In-App"],
    icon: "layers",
    impact: "Adopted as executive priority",
  },
  {
    title: "Deployment Transformation",
    description:
      "As Tech Lead, drove the shift from large bi-weekly deployments with recurring incidents to weekly releases with minimal failure rates across a broader team of roughly 10 engineers. Improved speed without sacrificing stability.",
    tags: ["DevOps", "CI/CD", "Reliability"],
    icon: "rocket",
    impact: "Minimal failure rate",
  },
  {
    title: "Jira & GitHub Automation",
    description:
      "Built a webhook-driven workflow layer connecting GitHub, Jira, release metadata, PR labels, alerts, and engineering comms. The system synchronized tickets to PRs, generated release notes, surfaced workflow state, and helped engineers move from code context to operational action without leaving the development loop.",
    tags: ["Webhooks", "GitHub", "DX"],
    icon: "zap",
    impact: "AI-driven automation",
  },
  {
    title: "Bidding Strategy & Curation",
    description:
      "Led the integration of bidding strategy and curation capabilities into the platform and coordinated rollout across the company.",
    tags: ["Ad Tech", "Product", "Strategy"],
    icon: "target",
    impact: "Company-wide rollout",
  },
  {
    title: "AI Adoption & Agentic Systems",
    description:
      "Led AI integration within the engineering team and expanded tooling and workflows to other departments. Built internal agentic systems using Cursor, OpenAI API, Anthropic API, Neuron AI, and Laravel AI Toolkit to improve developer velocity, automate engineering operations, and support production workflows.",
    tags: ["Agentic AI", "Cursor", "OpenAI"],
    icon: "brain",
    impact: "Cross-department adoption",
  },
];
