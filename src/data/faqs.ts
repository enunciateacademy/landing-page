export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Which classes do you provide coaching for?",
    answer: "We specialize in coaching for students currently studying in Class 5 (preparing for Class 6 entrance) and students in Class 8 (preparing for Class 9 entrance examinations) for Sainik School, Navodaya, and RMS.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "What exams does Enunciate Academy prepare students for?",
    answer: "We prepare students specifically for: 1) AISSEE (All India Sainik Schools Entrance Exam for Class 6 & Class 9), 2) JNVST (Jawahar Navodaya Vidyalaya Selection Test for Class 6), and 3) RMS CET (Rashtriya Military Schools Common Entrance Test).",
    category: "Exams"
  },
  {
    id: "faq-3",
    question: "Is study material included in the course?",
    answer: "Yes, comprehensive subject-wise study material, formula handbooks, topic practice workbooks, mental ability visual guides, and past year question banks are included with our full preparation packages.",
    category: "Study Material"
  },
  {
    id: "faq-4",
    question: "Are regular tests conducted?",
    answer: "Yes! We conduct weekly chapter tests, bi-weekly OMR-based speed tests, and full-length grand mock examinations designed strictly on the actual Sainik School and Navodaya exam pattern.",
    category: "Tests"
  },
  {
    id: "faq-5",
    question: "Are online classes available?",
    answer: "We offer both classroom batches and structured online interactive programs so students from any city can prepare under expert guidance with recorded lecture backups.",
    category: "Classes"
  },
  {
    id: "faq-6",
    question: "How can parents track student performance?",
    answer: "Parents receive weekly test scorecards, OMR performance breakdowns highlighting strengths and weak chapters, attendance alerts, and periodic parent-teacher consultation meetings.",
    category: "Parents"
  },
  {
    id: "faq-7",
    question: "How can I join the course?",
    answer: "You can click 'Join Now' on our website, fill in the child's details, or directly call or WhatsApp our academic team at 9492444498 for quick batch registration guidance.",
    category: "Admission"
  },
  {
    id: "faq-8",
    question: "What is the course fee?",
    answer: "Course fees range from ₹14,500 to ₹22,000 for full-year comprehensive programs depending on the target exam (Sainik, Navodaya, or RMS) and class level. This includes all printed study modules, 50+ OMR test series, and 1-on-1 doubt support. Installment options are available. Contact 9492444498 for current batch registration details.",
    category: "Fees"
  },
  {
    id: "faq-9",
    question: "How can I contact the academy?",
    answer: "You can call us directly at 9492444498, message us on WhatsApp at 9492444498, or email enunciateacademy@gmail.com.",
    category: "Contact"
  },
  {
    id: "faq-10",
    question: "Is there a demo or orientation session?",
    answer: "Yes, we arrange free academic guidance and orientation sessions for parents and students to understand the exam pattern, syllabus, and our teaching methodology before enrollment.",
    category: "Orientation"
  }
];
