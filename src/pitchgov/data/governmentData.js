export const govtProfile = {
  department: "Ministry of Urban Development",
  ministry: "Government of India",
  officerName: "Dr. Rajesh Kumar",
  role: "Director of Smart City Innovation",
  avatarInitials: "MU",
  activePortal: "Government Command Center"
};

export const govtOverviewMetrics = [
  {
    id: "active-challenges",
    label: "Active Challenges",
    value: 8,
    suffix: "",
    prefix: "",
    trend: "+2 published this month",
    description: "Real-world civic problem statements open to startup solvers"
  },
  {
    id: "applications",
    label: "Startup Applications",
    value: 43,
    suffix: "",
    prefix: "",
    trend: "14 under active evaluation",
    description: "Proposals submitted across all open municipal challenges"
  },
  {
    id: "ai-matches",
    label: "AI Matches Identified",
    value: 126,
    suffix: "",
    prefix: "",
    trend: "94% top match accuracy",
    description: "High-capability startups paired with government challenges"
  },
  {
    id: "funded-projects",
    label: "Funded Projects",
    value: 12,
    suffix: "",
    prefix: "",
    trend: "3 pilot deployments live",
    description: "Active projects receiving government innovation grants"
  },
  {
    id: "total-funding",
    label: "Total Funding Allocated",
    value: 4.8,
    suffix: " Cr",
    prefix: "₹",
    trend: "₹2.8 Cr released",
    description: "Capital deployed to pilot solutions across smart cities"
  }
];

export const activeGovtChallenges = [
  {
    id: "gov-ch-01",
    title: "SMART WASTE MANAGEMENT OPTIMIZATION",
    department: "Municipal Innovation Department",
    sector: "Environment",
    techTags: ["AI + IoT", "Computer Vision", "Urban Fleet"],
    matchedStartupsCount: 18,
    applicationsCount: 7,
    budget: "₹25 Lakhs",
    status: "Evaluation in Progress",
    badgeType: "in-progress",
    deadlineDays: 14,
    description: "Automated fill-level telemetry & camera stream waste categorization for tier-2 smart city collection fleets."
  },
  {
    id: "gov-ch-02",
    title: "RURAL WATER QUALITY MONITORING NETWORK",
    department: "Jal Jeevan Mission Cell",
    sector: "Rural Development",
    techTags: ["IoT Sensors", "Data Analytics", "Telemetry"],
    matchedStartupsCount: 24,
    applicationsCount: 12,
    budget: "₹30 Lakhs",
    status: "Applications Open",
    badgeType: "open",
    deadlineDays: 28,
    description: "Low-power mesh sensor grid for real-time pH, turbidity, and chemical contamination alerting in village water sources."
  },
  {
    id: "gov-ch-03",
    title: "AI CROP DISEASE EARLY DETECTION PLATFORM",
    department: "Dept of Agriculture & Farmers Welfare",
    sector: "Agriculture",
    techTags: ["AI", "Computer Vision", "Mobile Edge"],
    matchedStartupsCount: 31,
    applicationsCount: 16,
    budget: "₹40 Lakhs",
    status: "Shortlisting Stage",
    badgeType: "warning",
    deadlineDays: 8,
    description: "Offline edge-model smartphone app enabling smallholder farmers to diagnose crop pathogens instantly."
  },
  {
    id: "gov-ch-04",
    title: "HEALTHCARE RESOURCE OPTIMIZATION SYSTEM",
    department: "National Health Authority",
    sector: "Healthcare Gov",
    techTags: ["Predictive AI", "Resource Allocation"],
    matchedStartupsCount: 22,
    applicationsCount: 8,
    budget: "₹50 Lakhs",
    status: "Evaluation in Progress",
    badgeType: "in-progress",
    deadlineDays: 21,
    description: "ABDM-compliant bed availability and ICU surge forecasting framework for district hospital networks."
  }
];

export const aiShowcaseData = {
  challengeTitle: "SMART WASTE MANAGEMENT OPTIMIZATION",
  sector: "Environment & Urban Infrastructure",
  analyzedStartupsCount: 18,
  strongMatchesCount: 3,
  selectedCandidate: {
    name: "EcoTech Solutions",
    legalName: "EcoTech Systems Pvt Ltd",
    matchScore: 94,
    matchRating: "EXCELLENT MATCH",
    stage: "MVP Ready",
    location: "Bengaluru, KA",
    requestedGrant: "₹25,00,000",
    technologies: ["AI/ML", "Computer Vision", "IoT Telemetry"],
    fitMetrics: [
      { label: "Problem Fit", score: 96, desc: "Direct alignment with municipal waste fleet routing needs" },
      { label: "Technology Fit", score: 92, desc: "Native support for LoRaWAN sensors & camera streams" },
      { label: "Stage Fit", score: 100, desc: "MVP maturity fits the pilot deployment timeframe perfectly" },
      { label: "Experience Fit", score: 85, desc: "Proven civic technology analytics deployments" }
    ],
    whyThisMatches: [
      "Verified Computer Vision model for bin fill & classification",
      "Native LoRaWAN IoT telemetry pipeline ready for sensor mounting",
      "Functional MVP ready for immediate municipal pilot integration",
      "Relevant urban civic tech deployment experience"
    ],
    potentialGap: "Limited large-scale multi-city deployment reference (recommended for pilot phase before state-wide scaling)."
  },
  otherCandidates: [
    { name: "GreenGrid Technologies", matchScore: 89, stage: "Prototype", tech: "IoT + Data Analytics" },
    { name: "UrbanAI Systems", matchScore: 87, stage: "Pilot Ready", tech: "Computer Vision" },
    { name: "WasteX Analytics", matchScore: 82, stage: "MVP", tech: "Route Optimization" },
    { name: "CleanFlow Edge", matchScore: 79, stage: "Lab Prototype", tech: "Telemetry Sensors" }
  ]
};

export const govtApplicationsList = [
  {
    id: "gov-app-01",
    startupName: "EcoTech Solutions",
    challengeTitle: "SMART WASTE MANAGEMENT OPTIMIZATION",
    matchScore: 94,
    requestedGrant: "₹25 Lakhs",
    stage: "MVP Ready",
    submittedDate: "Sep 02, 2026",
    statusBadge: "Government Review",
    badgeType: "in-progress",
    evaluationNotes: "High technical match score. Passed initial AI screening. Panel interview scheduled for Sep 12."
  },
  {
    id: "gov-app-02",
    startupName: "GreenGrid Technologies",
    challengeTitle: "SMART WASTE MANAGEMENT OPTIMIZATION",
    matchScore: 89,
    requestedGrant: "₹22 Lakhs",
    stage: "Prototype",
    submittedDate: "Sep 01, 2026",
    statusBadge: "Government Review",
    badgeType: "in-progress",
    evaluationNotes: "Solid IoT telemetry capabilities. Pending municipal fleet integration review."
  },
  {
    id: "gov-app-03",
    startupName: "AgroVision AI",
    challengeTitle: "AI CROP DISEASE EARLY DETECTION PLATFORM",
    matchScore: 87,
    requestedGrant: "₹35 Lakhs",
    stage: "Pilot Ready",
    submittedDate: "Aug 28, 2026",
    statusBadge: "Shortlisted",
    badgeType: "success",
    evaluationNotes: "Approved for Departmental Committee presentation on Sep 15."
  }
];

export const govtFundedProject = {
  title: "AI Waste Management System",
  startupName: "EcoTech Solutions",
  department: "Municipal Innovation Department",
  totalGrant: "₹25,00,000",
  releasedAmount: "₹15,00,000",
  overallProgress: 68,
  currentMilestone: "Milestone 2 of 3",
  nextMilestone: "District Pilot Deployment across 40 Municipal Wards",
  dueDays: 18,
  roadmap: [
    { label: "Prototype", status: "completed", date: "Aug 10", detail: "Lab validation & algorithm training completed" },
    { label: "Pilot", status: "completed", date: "Aug 28", detail: "Sensor mounting & field telemetry test completed" },
    { label: "District Deployment", status: "active", date: "Sep 25", detail: "Ward collection fleet scaling in progress" }
  ]
};

export const govtImpactMetrics = [
  {
    label: "Total Funding Allocated",
    value: 4.8,
    prefix: "₹",
    suffix: " Cr",
    detail: "Capital deployed to high-capability GovTech startups"
  },
  {
    label: "Projects Funded",
    value: 12,
    prefix: "",
    suffix: "",
    detail: "Active municipal & state innovation grants"
  },
  {
    label: "Citizens Impacted",
    value: 2.4,
    prefix: "",
    suffix: "M",
    detail: "Beneficiaries across smart cities & rural clusters"
  },
  {
    label: "Projects Meeting KPIs",
    value: 87,
    prefix: "",
    suffix: "%",
    detail: "High performance & milestone compliance rate"
  }
];

export const govtSecondaryImpact = [
  { label: "Funding Utilization", value: "91%", desc: "Grant capital spent directly on R&D and deployment" },
  { label: "Successful Pilots", value: "76%", desc: "Transition from pilot grant to municipal contract" },
  { label: "Avg Evaluation Time", value: "14 Days", desc: "Drastic reduction from traditional procurement" }
];
