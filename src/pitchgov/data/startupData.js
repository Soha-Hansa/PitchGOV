export const startupProfile = {
  name: "EcoTech",
  legalName: "EcoTech Systems Pvt Ltd",
  sector: "Environment",
  stage: "MVP",
  founded: "2024",
  location: "Bengaluru, KA",
  technologies: ["AI/ML", "Computer Vision", "IoT Sensors", "Predictive Analytics"],
  avatarInitials: "ET",
  tagline: "Intelligent environmental infrastructure & public sector AI solutions."
};

export const overviewMetrics = [
  {
    id: "matches",
    label: "AI Matches",
    value: 12,
    suffix: "",
    prefix: "",
    trend: "+3 this week",
    description: "Verified government challenges matching capabilities"
  },
  {
    id: "applications",
    label: "Applications",
    value: 5,
    suffix: "",
    prefix: "",
    trend: "2 active reviews",
    description: "Proposals submitted to municipal & state agencies"
  },
  {
    id: "shortlisted",
    label: "Shortlisted",
    value: 2,
    suffix: "",
    prefix: "",
    trend: "1 panel interview scheduled",
    description: "Final stage evaluation with government stakeholders"
  },
  {
    id: "funding",
    label: "Funding Awarded",
    value: 25,
    suffix: "L",
    prefix: "₹",
    trend: "₹15L released",
    description: "Grant & pilot deployment grants secured via Pitchgov"
  }
];

export const recommendedOpportunities = [
  {
    id: "opp-01",
    title: "Smart Waste Management Optimization",
    department: "Municipal Innovation Department",
    category: "ENVIRONMENT",
    tags: ["AI + IoT", "Computer Vision", "Urban Tech"],
    matchScore: 94,
    description: "Build an intelligent waste collection optimization & computer vision bin monitoring system for tier-2 and tier-3 smart cities.",
    funding: "Up to ₹25 Lakhs",
    fundingValue: "₹25,00,000",
    deadline: "24 days left",
    deadlineDate: "October 1, 2026",
    status: "Open for Proposals",
    location: "Karnataka & Maharashtra",
    requirements: [
      "IoT sensor integration for bin fill-level tracking",
      "Camera-based camera stream waste categorization",
      "Route optimization algorithm for municipal fleets",
      "Real-time dashboard for ward officers"
    ],
    grantProvider: "Ministry of Housing & Urban Affairs",
    isApplied: true
  },
  {
    id: "opp-02",
    title: "AI Crop Disease Early Detection Platform",
    department: "Department of Agriculture & Farmers Welfare",
    category: "AGRITECH",
    tags: ["Computer Vision", "Satellite Data", "Mobile AI"],
    matchScore: 89,
    description: "Deploy mobile computer vision algorithms for real-time field crop pathogen diagnosis across rural farming clusters.",
    funding: "Up to ₹30 Lakhs",
    fundingValue: "₹30,00,000",
    deadline: "11 days left",
    deadlineDate: "September 18, 2026",
    status: "Open for Proposals",
    location: "Telangana & Andhra Pradesh",
    requirements: [
      "Offline edge model running on low-cost smartphones",
      "Multi-lingual farmer advisory chatbot",
      "Geospatial disease breakout heatmaps"
    ],
    grantProvider: "Department of Science & Technology",
    isApplied: true
  },
  {
    id: "opp-03",
    title: "Rural Water Quality Monitoring Network",
    department: "Jal Jeevan Mission Innovation Cell",
    category: "WATER & SANITATION",
    tags: ["IoT Sensors", "Water Quality", "Low-Power Mesh"],
    matchScore: 84,
    description: "Automated telemetry and predictive contamination alert mesh network for village drinking water reservoirs.",
    funding: "Up to ₹20 Lakhs",
    fundingValue: "₹20,00,000",
    deadline: "38 days left",
    deadlineDate: "October 15, 2026",
    status: "Open for Proposals",
    location: "Rajasthan & Gujarat",
    requirements: [
      "Solar-powered sensor nodes with LoRaWAN telemetry",
      "pH, turbidity, and heavy metal detection alert systems",
      "Integration with National Water Portal API"
    ],
    grantProvider: "Ministry of Jal Shakti",
    isApplied: false
  },
  {
    id: "opp-04",
    title: "Healthcare Resource Optimization System",
    department: "National Health Authority",
    category: "HEALTHCARE GOV",
    tags: ["Resource Allocation", "Predictive Analytics"],
    matchScore: 81,
    description: "AI-driven bed allocation and ICU demand forecasting framework for district government hospitals.",
    funding: "Up to ₹40 Lakhs",
    fundingValue: "₹40,00,000",
    deadline: "45 days left",
    deadlineDate: "October 22, 2026",
    status: "Open for Proposals",
    location: "National Rollout",
    requirements: [
      "Integration with ABDM (Ayushman Bharat Digital Mission)",
      "Predictive surge modeling algorithm",
      "HIPAA/NDHM compliant data handling"
    ],
    grantProvider: "National Health Authority",
    isApplied: false
  }
];

export const aiMatchBreakdown = {
  opportunityId: "opp-01",
  opportunityTitle: "Smart Waste Management",
  overallScore: 94,
  matchRating: "EXCELLENT MATCH",
  fitMetrics: [
    { label: "Problem Fit", score: 96, description: "Direct alignment with waste collection optimization domain." },
    { label: "Technology Fit", score: 92, description: "Native support for Computer Vision and IoT edge sensors." },
    { label: "Startup Stage", score: 100, description: "MVP readiness perfectly fits the pilot prototyping mandate." },
    { label: "Experience", score: 85, description: "Proven track record in urban environmental data pipelines." }
  ],
  whyYouMatch: [
    "Computer Vision capability verified via prior prototype demo",
    "Existing functional MVP deployment ready for lab integration",
    "Relevant industry experience in urban civic tech analytics",
    "Required technology stack (Python, PyTorch, LoRaWAN) fully available"
  ],
  potentialGap: {
    title: "Large-scale deployment experience",
    description: "Your startup already satisfies most of the technical and operational requirements. A large-scale multi-city deployment reference is the main gap identified by the evaluator engine."
  },
  visualizationNodes: {
    govtChallenge: "Municipal Innovation Dept — Smart Waste Challenge",
    requirements: ["IoT Fill Sensors", "Computer Vision Stream", "Fleet Dispatch AI", "Ward Officer App"],
    matchEngine: "Pitchgov AI Engine v4.2",
    startupCapabilities: ["EcoTech Computer Vision Model", "Edge Sensor Telemetry", "MVP Fleet Routing Engine"]
  }
};

export const applicationsList = [
  {
    id: "app-101",
    opportunityTitle: "SMART WASTE MANAGEMENT",
    department: "Municipal Innovation Department",
    submittedDate: "September 2, 2026",
    lastUpdate: "September 6, 2026",
    currentStageIndex: 2, // 0: Submitted, 1: AI Screening, 2: Government Review, 3: Shortlisted, 4: Selected, 5: Funded
    stages: [
      { name: "Submitted", date: "Sep 02", status: "completed" },
      { name: "AI Screening", date: "Sep 04", status: "completed" },
      { name: "Government Review", date: "Sep 06", status: "active" },
      { name: "Shortlisted", date: "Pending", status: "upcoming" },
      { name: "Selected", date: "Pending", status: "upcoming" },
      { name: "Funded", date: "Pending", status: "upcoming" }
    ],
    nextStep: "Government evaluation panel meeting scheduled for Sep 12",
    grantAmount: "₹25 Lakhs",
    statusBadge: "Government Review",
    badgeType: "in-progress"
  },
  {
    id: "app-102",
    opportunityTitle: "AI CROP DISEASE DETECTION",
    department: "Dept of Agriculture & Farmers Welfare",
    submittedDate: "August 18, 2026",
    lastUpdate: "September 4, 2026",
    currentStageIndex: 3,
    stages: [
      { name: "Submitted", date: "Aug 18", status: "completed" },
      { name: "AI Screening", date: "Aug 22", status: "completed" },
      { name: "Government Review", date: "Aug 29", status: "completed" },
      { name: "Shortlisted", date: "Sep 04", status: "active" },
      { name: "Selected", date: "Pending", status: "upcoming" },
      { name: "Funded", date: "Pending", status: "upcoming" }
    ],
    nextStep: "Presentation to Departmental Committee on Sep 15",
    grantAmount: "₹30 Lakhs",
    statusBadge: "Shortlisted",
    badgeType: "success"
  }
];

export const activeProject = {
  title: "AI Waste Management System",
  govtPartner: "Municipal Innovation Department",
  sector: "Smart Cities & Environment",
  grantTotal: "₹25,00,000",
  releasedAmount: "₹15,00,000",
  overallProgress: 68,
  currentMilestone: "Milestone 2 of 3",
  nextMilestone: "Pilot deployment across 40 Ward Collection Bins",
  dueDays: 18,
  dueDate: "September 25, 2026",
  roadmap: [
    { label: "Prototype", status: "completed", detail: "Lab validation & algorithm training completed" },
    { label: "Pilot", status: "active", detail: "Ward deployment & live sensor testing in progress" },
    { label: "Deployment", status: "upcoming", detail: "Full city-wide municipal handover & scaling" }
  ],
  impactKPIs: [
    { label: "Route efficiency", value: 24, prefix: "+", suffix: "%", detail: "Reduction in collection vehicle travel distance" },
    { label: "Fuel consumption", value: 18, prefix: "−", suffix: "%", detail: "Saved per municipal diesel vehicle daily" },
    { label: "Pilot users", value: 1240, prefix: "", suffix: "", detail: "Citizens & ward sanitation workers onboarded" }
  ]
};

export const quickActions = [
  {
    id: "action-1",
    title: "EXPLORE OPPORTUNITIES",
    subtitle: "Find your next government challenge.",
    icon: "Search",
    badge: "12 matches"
  },
  {
    id: "action-2",
    title: "COMPLETE YOUR PROFILE",
    subtitle: "Improve your AI matching accuracy.",
    icon: "CheckCircle2",
    badge: "92% complete"
  },
  {
    id: "action-3",
    title: "SUBMIT AN APPLICATION",
    subtitle: "Turn a match into an opportunity.",
    icon: "FileText",
    badge: "Draft ready"
  }
];

export const notificationsList = [
  {
    id: "notif-1",
    title: "Application Status Updated",
    message: "Municipal Innovation Dept moved your Smart Waste application to Government Review.",
    time: "2 hours ago",
    read: false,
    type: "status"
  },
  {
    id: "notif-2",
    title: "New 94% Match Found",
    message: "Smart Waste Management Optimization challenge published by Karnataka Urban Cell.",
    time: "1 day ago",
    read: false,
    type: "match"
  },
  {
    id: "notif-3",
    title: "Milestone 1 Payout Processed",
    message: "₹15,00,000 has been transferred to EcoTech escrow account.",
    time: "3 days ago",
    read: true,
    type: "funding"
  }
];
