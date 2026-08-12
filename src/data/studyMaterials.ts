export interface StudyMaterialItem {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  pages?: string;
  badge: string;
}

export const studyMaterialsData: StudyMaterialItem[] = [
  {
    id: "mat-maths",
    title: "Sainik & Navodaya Mathematics Mastery",
    category: "Mathematics",
    description: "Step-by-step concept explanations, shortcut calculation tricks, and 1,500+ solved practice problems covering Number System, LCM/HCF, Fractions, Decimals, Geometry & Mensuration.",
    highlights: ["Shortcut tricks for speed", "Topic-wise formula booklet", "Solved previous 10-year questions"],
    badge: "Core Subject"
  },
  {
    id: "mat-intelligence",
    title: "General Intelligence & Mental Ability Guide",
    category: "Mental Ability",
    description: "Visual logic diagrams, series completion, figure matching, analogy, paper cutting/folding, and non-verbal reasoning modules designed for high speed and 100% accuracy.",
    highlights: ["2,000+ non-verbal reasoning problems", "Pattern recognition techniques", "Timer-assisted exercise sheets"],
    badge: "High Scoring"
  },
  {
    id: "mat-gk",
    title: "General Knowledge & Science Companion",
    category: "GK & Science",
    description: "Curated facts on Indian History, Geography, Defense Forces, General Science, Sports, Monuments, National Parks, and monthly current affairs summaries.",
    highlights: ["Visual memory charts & maps", "Sainik exam specific GK focus", "Quick revision flashcards"],
    badge: "Updated 2026"
  },
  {
    id: "mat-english",
    title: "English Language & Grammar Workbook",
    category: "Language",
    description: "Grammar rules (Nouns, Verbs, Prepositions, Tenses), Vocabulary builder (Synonyms, Antonyms, Idioms, One-word substitutes), and unseen passage practice.",
    highlights: ["500+ high-frequency vocabulary list", "Passage comprehension strategies", "Common error correction exercises"],
    badge: "Essential"
  },
  {
    id: "mat-tests",
    title: "OMR Mock Test Series & Answer Sheets",
    category: "Test Practice",
    description: "Realistic OMR sheets matching the actual AISSEE and JNVST exam size, layout, and paper weight to eliminate exam-hall bubble filling mistakes.",
    highlights: ["Official exam format OMR sheets", "Detailed step-by-step answer key", "Negative marking avoidance guide"],
    badge: "Exam Replica"
  }
];
