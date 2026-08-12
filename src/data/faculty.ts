export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  qualification: string;
  specialization: string;
  experience: string;
  bio: string;
  imageUrl?: string;
  imagePlaceholderText: string;
}

export const facultyData: FacultyMember[] = [
  {
    id: "fac-1",
    name: "Prof. K. V. Raghava Rao",
    role: "Senior Mathematics & Intelligence Lead",
    qualification: "M.Sc. (Maths), B.Ed.",
    specialization: "Sainik & Navodaya Speed Calculation Shortcuts",
    experience: "14+ Years Experience",
    bio: "Specializes in simplifying complex mathematical concepts for Class 5 students, building speed and accuracy through visual problem-solving techniques.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
    imagePlaceholderText: "K.V. RAO"
  },
  {
    id: "fac-2",
    name: "Mrs. S. Lakshmi Prasanna",
    role: "Mental Ability & Non-Verbal Logic Expert",
    qualification: "M.Sc. (Physics), B.Ed.",
    specialization: "Pattern Recognition & JNVST Specialization",
    experience: "10+ Years Experience",
    bio: "Renowned for non-verbal reasoning techniques, helping students master figure matching, pattern completion, and spatial awareness in record time.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    imagePlaceholderText: "S. LAKSHMI"
  },
  {
    id: "fac-3",
    name: "Capt. D. S. Chauhan (Retd.)",
    role: "GK, Defense Awareness & RMS Interview Coach",
    qualification: "M.A. History, Ex-Defense Mentor",
    specialization: "AISSEE GK, Defense Awareness & Confidence Building",
    experience: "12+ Years Experience",
    bio: "Focuses on interactive memory tricks, visual map study, and defense awareness tailored specifically for Sainik School and RMS entrance exams.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    imagePlaceholderText: "D.S. CHAUHAN"
  }
];
