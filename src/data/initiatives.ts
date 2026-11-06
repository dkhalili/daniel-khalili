export interface Initiative {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  impact?: string;
}

export const initiatives: Initiative[] = [
  {
    "title": "Platform Modernization",
    "description": "Leading the migration of a 12-year-old platform to Ad Manager, consolidating duplicated business logic into a modern Laravel/PHP foundation and shared APIs used across product teams.",
    "tags": [
      "Laravel",
      "Platform",
      "APIs"
    ],
    "icon": "wrench",
    "impact": "Shared platform migration"
  },
  {
    "title": "Ad Manager MCP & AI",
    "description": "Co-created and built an AI-assisted ad operations platform using Model Context Protocol (MCP), with approval controls, targeting validation, and auditable campaign and deal changes. Led AI workflow adoption across engineering and other departments.",
    "tags": [
      "MCP",
      "AI",
      "Ad Operations"
    ],
    "icon": "bot",
    "impact": "Governed AI workflows"
  },
  {
    "title": "Multi-Surface Ad Architecture",
    "description": "Led a unified surface and format model across four applications, supporting connected TV (CTV), in-app, digital out-of-home, and OS-native advertising. Established consistent surface attribution across 35K+ live ad slots.",
    "tags": [
      "Architecture",
      "CTV",
      "In-App"
    ],
    "icon": "layers",
    "impact": "35K+ live ad slots"
  },
  {
    "title": "Observability & Reliability",
    "description": "Centralized metrics and incident alerting using VictoriaMetrics, Grafana, and PagerDuty; added Nightwatch request monitoring and strengthened cache recovery and backlog processing.",
    "tags": [
      "Grafana",
      "Nightwatch",
      "PagerDuty"
    ],
    "icon": "activity",
    "impact": "Monitoring & recovery"
  },
  {
    "title": "Deployment Transformation",
    "description": "Moved the team from large biweekly deployments with recurring incidents to weekly releases with improved stability.",
    "tags": [
      "CI/CD",
      "Releases",
      "Reliability"
    ],
    "icon": "rocket",
    "impact": "Biweekly to weekly releases"
  },
  {
    "title": "CTV Integrations",
    "description": "Served as a CTV subject matter expert across engineering, ad operations, and supply teams. Delivered CTV inventory targeting across campaign tools and downstream ad delivery.",
    "tags": [
      "CTV",
      "Targeting",
      "Integrations"
    ],
    "icon": "tv",
    "impact": "Campaign tools to ad delivery"
  },
  {
    "title": "Business KPI Visibility",
    "description": "Built a platform health dashboard connecting engineering operations to revenue, inventory onboarding, and deal delivery.",
    "tags": [
      "Metrics",
      "Revenue",
      "Product"
    ],
    "icon": "chart",
    "impact": "Business outcome visibility"
  }
];
