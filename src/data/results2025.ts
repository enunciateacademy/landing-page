export interface ScoreResult2025 {
  name: string;
  score: number;
  schoolCategory?: string;
  selected?: boolean;
}

export const results2025Stats = {
  totalTrained: 22,
  totalSecuredSeats: 11,
  govtSchoolSeats: 8,
  privateSchoolSeats: 3
};

export const results2025Data: ScoreResult2025[] = [
  { name: "Pola Gnanadeep", score: 268, selected: true },
  { name: "Bugatha Uday Kumar", score: 264, schoolCategory: "Govt School", selected: true },
  { name: "Saini Vikas", score: 260, schoolCategory: "Govt School Kalikiri", selected: true },
  { name: "Vandana Maneesh Narsimha", score: 257, schoolCategory: "Govt School Tamilnadu", selected: true },
  { name: "Gopathoti Sunny Babu", score: 257, schoolCategory: "Govt School Korukonda", selected: true },
  { name: "Sariki Sujan Sriram Teja", score: 256, schoolCategory: "Private School", selected: true },
  { name: "Peddinti Ruthvik", score: 254, schoolCategory: "Private School", selected: true },
  { name: "Gudla Vedaswaroop", score: 246, schoolCategory: "Govt School", selected: true },
  { name: "Yalla Charan Surya", score: 240, schoolCategory: "Private School", selected: true },
  { name: "Mudavath Akira", score: 232, schoolCategory: "Govt School Purilla, West Bengal", selected: true },
  { name: "Sadhu Hanish", score: 224 },
  { name: "Purushottam Lohith", score: 217, schoolCategory: "Govt School BBSR", selected: true },
  { name: "Yenugutala Karthik", score: 216 },
  { name: "Repana Ganga Bhavani", score: 213 },
  { name: "B Ruthvik Srikar Sai", score: 212 },
  { name: "Gorili Varun", score: 211 },
  { name: "Chippala Harideep Varma", score: 209 },
  { name: "Bonanth Ruthvika", score: 0, schoolCategory: "Govt School Sambalpur", selected: true } // Qualified Seat allotment
];
