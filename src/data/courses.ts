export interface Course {
  id: string;
  title: string;
  exam: string;
  targetClass: string;
  eligibility: string;
  badge?: string;
  popular?: boolean;
  price: string;
  duration: string;
  description: string;
  subjects: string[];
  features: string[];
  includes: {
    classes: string;
    tests: string;
    materials: string;
    support: string;
  };
}

export const coursesData: Course[] = [
  {
    id: "sainik-class-6",
    title: "Sainik School Class 6 Preparation",
    exam: "AISSEE (All India Sainik Schools Entrance Exam)",
    targetClass: "Class 6 Entrance",
    eligibility: "Students currently studying in Class 5 (Age 10-12)",
    badge: "Most Enrolled",
    popular: true,
    price: "₹18,500 / Year",
    duration: "Full Academic Year / Crash Course Options",
    description: "Comprehensive structured coaching covering Mathematics, General Intelligence, Language (English/Hindi), and General Knowledge for AISSEE Class 6.",
    subjects: [
      "Mathematics (Concept Building & Speed Techniques)",
      "Intelligence / Mental Ability (Non-Verbal & Logical Reasoning)",
      "Language & Reading Comprehension (Grammar & Vocabulary)",
      "General Knowledge (Science, Social Studies & Current Affairs)"
    ],
    features: [
      "Daily Live & Interactive Practice Classes",
      "Chapter-wise Printed/Digital Study Modules",
      "Weekly Timed Mock Tests with OMR Sheets",
      "Personalized Mistake Analysis & Doubt Support",
      "Parent Progress Reports & Consultation"
    ],
    includes: {
      classes: "Live/Offline Daily Batches",
      tests: "50+ Chapter Tests + 15 Grand OMR Mocks",
      materials: "4 Core Subject Books + Practice Kits",
      support: "1-on-1 Doubt Clarification Sessions"
    }
  },
  {
    id: "sainik-class-9",
    title: "Sainik School Class 9 Preparation",
    exam: "AISSEE Class 9 Entrance",
    targetClass: "Class 9 Entrance",
    eligibility: "Students currently studying in Class 8 (Age 13-15)",
    badge: "Advanced Level",
    popular: false,
    price: "₹22,000 / Year",
    duration: "Full Academic Year",
    description: "In-depth conceptual mastery for higher-level Mathematics, Science, English, Social Science, and Intelligence suited for rigorous Class 9 AISSEE competition.",
    subjects: [
      "Advanced Mathematics & Algebra",
      "General Science (Physics, Chemistry, Biology)",
      "English Language & Advanced Grammar",
      "Social Science (History, Civics, Geography)",
      "Intelligence & Logical Reasoning"
    ],
    features: [
      "Advanced Problem-Solving Worksheets",
      "Rigorous Time-Management Strategy Workshops",
      "Full-Length AISSEE Pattern Grand Tests",
      "Previous 10 Years Question Paper Solutions",
      "Dedicated Faculty Mentorship"
    ],
    includes: {
      classes: "Concept & Problem Solving Sessions",
      tests: "40+ Subject Tests + 12 Full Mock Exams",
      materials: "Comprehensive Subject Question Bank",
      support: "Personal Academic Progress Advisor"
    }
  },
  {
    id: "navodaya-class-6",
    title: "Navodaya Vidyalaya Class 6 (JNVST)",
    exam: "JNVST (Jawahar Navodaya Vidyalaya Selection Test)",
    targetClass: "Class 6 Entrance",
    eligibility: "Students currently studying in Class 5 in government/recognized schools",
    badge: "High Success Rate",
    popular: false,
    price: "₹14,500 / Year",
    duration: "6 Months / 1 Year Program",
    description: "Specialized focus on Mental Ability, Arithmetic, and Language Test designed specifically for the JNVST entrance pattern with high accuracy focus.",
    subjects: [
      "Mental Ability Test (Figure Series, Pattern Completion, Odd One Out)",
      "Arithmetic Test (Number System, Fractions, Decimals, Percentages)",
      "Language Test (Passages & Comprehension Skills)"
    ],
    features: [
      "Special Visual Pattern Recognition Techniques",
      "Shortcut Math Tricks for Fast Calculation",
      "OMR Sheet Practice from Day 1",
      "Weekly Speed & Accuracy Audits",
      "Rural & Urban Quota Exam Strategy"
    ],
    includes: {
      classes: "Focused JNVST Syllabus Modules",
      tests: "30+ Mental Ability Mocks + 10 Full JNVST Tests",
      materials: "Mental Ability & Arithmetic Workbooks",
      support: "Weekly Doubt Resolution"
    }
  },
  {
    id: "rms-entrance",
    title: "RMS Entrance Preparation (Rashtriya Military Schools)",
    exam: "CET (Common Entrance Test for RMS Chail, Ajmer, Belgaum, Bangalore, Dholpur)",
    targetClass: "Class 6 & Class 9 RMS Entrance",
    eligibility: "Students aiming for entrance into 5 Rashtriya Military Schools across India",
    badge: "Specialized Training",
    popular: false,
    price: "₹19,500 / Year",
    duration: "Full Academic Year / Intensive Batch",
    description: "Dedicated curriculum tailored for Rashtriya Military Schools entrance test syllabus along with guidance for interview and medical test awareness.",
    subjects: [
      "Mathematics & Quantitative Aptitude",
      "General Knowledge & Current Affairs",
      "English Grammar & Composition",
      "Intelligence Test & Logic",
      "Interview & Confidence Building Orientation"
    ],
    features: [
      "Strict Academic Discipline & Daily Practice",
      "Mock Tests in Strict Exam Hall Setting",
      "Current Affairs Monthly Digest",
      "Doubt Removal & Performance Review",
      "Interview Guidance & Personality Assessment"
    ],
    includes: {
      classes: "Comprehensive Classroom / Online Sessions",
      tests: "20+ RMS Pattern Grand Mock Tests",
      materials: "RMS Entrance Special Practice Modules",
      support: "Interview Orientation & Parent Updates"
    }
  }
];
