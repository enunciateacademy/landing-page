export interface Testimonial {
  id: string;
  parentName: string;
  relation: string;
  studentName: string;
  examPrepared: string;
  rating: number;
  quoteText: string;
  location?: string;
  date?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    parentName: "Srinivas Rao",
    relation: "Father of K. Aditya",
    studentName: "K. Aditya (Sainik School Qualified)",
    examPrepared: "AISSEE Sainik School Class 6",
    rating: 5,
    quoteText: "Enunciate Academy provided the disciplined daily study schedule and regular Sunday OMR tests my son needed. Their math shortcut tricks and daily practice sheets made a huge difference in his speed and confidence!",
    location: "Hyderabad, Telangana",
    date: "2025 Batch"
  },
  {
    id: "test-2",
    parentName: "Meenakshi Sundaram",
    relation: "Mother of P. Ananya",
    studentName: "P. Ananya (Navodaya Selection)",
    examPrepared: "JNVST Navodaya Vidyalaya",
    rating: 5,
    quoteText: "The teachers at Enunciate Academy give individual personal attention to Mental Ability and Arithmetic. The weekly WhatsApp scorecards kept us updated on her progress throughout the year.",
    location: "Vijayawada, AP",
    date: "2025 Batch"
  },
  {
    id: "test-3",
    parentName: "Col. Rajesh Sharma (Retd.)",
    relation: "Father of R. Rohan",
    studentName: "R. Rohan (RMS Selected)",
    examPrepared: "RMS Class 6 CET Entrance",
    rating: 5,
    quoteText: "As a defense background parent, I wanted disciplined coaching for Rashtriya Military School. Enunciate Academy's test series, study modules, and interview preparation are top-class.",
    location: "Bengaluru, Karnataka",
    date: "2025 Batch"
  }
];
