export interface RecordedCategory {
  title: string;
  subject: string;
  url: string;
  description: string;
  iconName: string;
}

export const recordedCategories: RecordedCategory[] = [
  {
    title: "Mathematics Recorded Sessions",
    subject: "Mathematics & Number System",
    url: "https://blog.enunciateacademy.com/free-video-classes/number-system",
    description: "Concepts, shortcuts, and step-by-step problem explanations for Number System, LCM, HCF, Fractions, and Decimals.",
    iconName: "Calculator"
  },
  {
    title: "Intelligence Recorded Sessions",
    subject: "Intelligence & Logical Reasoning",
    url: "https://blog.enunciateacademy.com/free-video-classes/intelligence-recorded-sessions",
    description: "Analogies, classification, series completion, non-verbal visual reasoning, and spatial arrangement techniques.",
    iconName: "Brain"
  },
  {
    title: "English Recorded Sessions",
    subject: "English Language & Grammar",
    url: "https://blog.enunciateacademy.com/free-video-classes/english-recorded-sessions",
    description: "Comprehension passages, grammar rules, vocabulary building, antonyms, synonyms, and idiom practices.",
    iconName: "BookOpen"
  },
  {
    title: "General Knowledge Recorded Sessions",
    subject: "General Knowledge & Defense Awareness",
    url: "https://blog.enunciateacademy.com/free-video-classes/general-knowledge-recorded-sessions",
    description: "Indian history, geography, science basics, defense establishments, sports, and static GK for AISSEE & RMS.",
    iconName: "Globe"
  }
];
