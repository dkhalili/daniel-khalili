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
      "Co-founded the Ad Manager MCP at Kargo, integrating core ad operations workflows into MCP-compatible infrastructure. Accessible by ChatGPT and Claude, enabling ad ops automation across agent environments.",
    tags: ["MCP", "Agentic AI", "Ad Tech"],
    icon: "bot",
    impact: "First MCP integration in ad tech",
  },
  {
    title: "Multi-Surface Ad Architecture",
    description:
      "Led the architectural framework to expand Kargo's ad format hierarchy beyond OpenWeb to support CTV, In-App, DOOH, and OS Native surfaces. Started internally, now a high-priority executive initiative.",
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
      "An early application of AI-driven automation: built a custom system that synchronized Jira tickets to GitHub PRs, applied labels automatically, tracked milestones, and generated release notes based on PR types — removing significant manual overhead from the engineering workflow.",
    tags: ["AI Automation", "DX", "Tooling"],
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
      "Led AI integration within the engineering team and expanded tooling to other departments. Built internal agentic systems using OpenAI and Anthropic APIs, Neuron AI, and the Laravel AI Toolkit.",
    tags: ["AI", "Anthropic API", "OpenAI API"],
    icon: "brain",
    impact: "Cross-department adoption",
  },
];
