export interface StudentResult {
  id: string;
  studentName: string;
  exam: string;
  year: string;
  schoolSelected: string;
  rankOrMarks: string;
  rollNoOrPlace?: string;
  imageUrl?: string;
  imagePlaceholderText: string;
  testimonialText?: string;
  badgeText: string;
}

export const resultsData: StudentResult[] = [
  {
    id: "res-1",
    studentName: "K. Aditya Verma",
    exam: "AISSEE 2025 Class 6",
    year: "2025 Batch",
    schoolSelected: "Sainik School Korukonda",
    rankOrMarks: "Score: 282 / 300 (Selected)",
    rollNoOrPlace: "AISSEE Roll No: 31048291",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop&q=80",
    imagePlaceholderText: "ADITYA V.",
    badgeText: "Sainik School Qualified",
    testimonialText: "Regular OMR mock tests and daily math problem-solving helped me score 282 marks with high confidence."
  },
  {
    id: "res-2",
    studentName: "S. Nihal Reddy",
    exam: "AISSEE 2025 Class 6",
    year: "2025 Batch",
    schoolSelected: "Sainik School Kalikiri",
    rankOrMarks: "State Rank: AIR 38",
    rollNoOrPlace: "AISSEE Roll No: 31059102",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&auto=format&fit=crop&q=80",
    imagePlaceholderText: "NIHAL R.",
    badgeText: "Sainik School Selection",
    testimonialText: "The study material and teacher guidance cleared all my concepts in Mathematics and Intelligence."
  },
  {
    id: "res-3",
    studentName: "P. Ananya Sharma",
    exam: "JNVST Navodaya Class 6",
    year: "2025 Batch",
    schoolSelected: "Navodaya Vidyalaya Selected",
    rankOrMarks: "District Rank 1 (100% Score)",
    rollNoOrPlace: "JNVST Roll No: 5820194",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    imagePlaceholderText: "ANANYA S.",
    badgeText: "Navodaya Selected",
    testimonialText: "Mental ability shortcuts taught at Enunciate Academy helped me solve all figure series in under 20 minutes."
  },
  {
    id: "res-4",
    studentName: "R. Rohan Patel",
    exam: "RMS CET Entrance Class 6",
    year: "2025 Batch",
    schoolSelected: "Rashtriya Military School Belgaum",
    rankOrMarks: "Qualified for CET & Interview",
    rollNoOrPlace: "RMS Roll No: 104829",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
    imagePlaceholderText: "ROHAN P.",
    badgeText: "RMS Qualified",
    testimonialText: "The mock interviews and weekly Sunday grand tests made me completely exam-ready and confident."
  }
];

export const resultsNote = "Note: All result details can be verified with roll numbers at our main branch. Enunciate Academy displays verified academic achievements only.";
