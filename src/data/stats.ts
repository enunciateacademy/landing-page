export interface StatItem {
  id: string;
  label: string;
  value: string;
  subtext: string;
  iconName: string;
}

export const statsData: StatItem[] = [
  {
    id: "stat-students",
    label: "Students Trained",
    value: "1,450+",
    subtext: "Class 5 & Class 8 entrance aspirants",
    iconName: "Users"
  },
  {
    id: "stat-tests",
    label: "Mock Tests Conducted",
    value: "350+",
    subtext: "OMR-pattern & topic tests",
    iconName: "FileCheck"
  },
  {
    id: "stat-questions",
    label: "Practice Questions",
    value: "25,000+",
    subtext: "Curated exam question bank",
    iconName: "BookOpen"
  },
  {
    id: "stat-experience",
    label: "Years of Experience",
    value: "8+ Years",
    subtext: "Dedicated competitive entrance coaching",
    iconName: "Award"
  }
];
