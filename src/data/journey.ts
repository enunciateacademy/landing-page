export interface JourneyStep {
  stepNumber: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export const studentJourneyData: JourneyStep[] = [
  {
    stepNumber: "01",
    phase: "DAY 1",
    title: "Diagnostic Assessment & Goal Setting",
    description: "Initial diagnostic test to evaluate student's baseline strength in Mathematics, Mental Ability, and Language. We map target cut-off marks for Sainik/Navodaya.",
    deliverables: ["Baseline Scorecard", "Individual Weakness Map", "Customized Study Calendar"],
    iconName: "Target"
  },
  {
    stepNumber: "02",
    phase: "WEEK 1 - 2",
    title: "Foundation & Fundamental Concepts",
    description: "Building rock-solid conceptual clarity in fundamental arithmetic, grammar rules, and logical reasoning patterns without rushing into trick shortcuts.",
    deliverables: ["Concept Worksheets", "Daily Practice Problems (DPPs)", "Teacher 1-on-1 Guidance"],
    iconName: "BookOpen"
  },
  {
    stepNumber: "03",
    phase: "WEEK 3 - 6",
    title: "Speed Techniques & OMR Practice",
    description: "Introducing time-saving calculation shortcuts, mental ability pattern decoding, and mandatory OMR sheet bubble-filling practice.",
    deliverables: ["Shortcut Trick Booklet", "Weekly OMR Chapter Tests", "Speed & Accuracy Audits"],
    iconName: "Zap"
  },
  {
    stepNumber: "04",
    phase: "WEEK 7 - 12",
    title: "Intensive Chapter Practice & Doubt Resolution",
    description: "Thorough coverage of all previous 10-year AISSEE & JNVST question types with dedicated daily doubt resolution slots.",
    deliverables: ["10-Year Question Bank", "Daily Doubt Removal Sessions", "Parent Progress Review"],
    iconName: "HelpCircle"
  },
  {
    stepNumber: "05",
    phase: "FINAL PHASE",
    title: "Full-Length Grand Mocks & Revision",
    description: "Simulated exam-hall conditions with strict timer and OMR evaluation. Detailed mistake analysis and revision workshops right before the actual exam day.",
    deliverables: ["15 Grand Mock Exams", "Rank Prediction & Error Analysis", "Exam Day Confidence Orientation"],
    iconName: "Trophy"
  }
];
