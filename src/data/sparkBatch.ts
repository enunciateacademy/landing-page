export interface ScheduleItem {
  time: string;
  activity: string;
  type: 'test' | 'live' | 'session';
  subject: string;
  forClass?: string;
}

export const morningSchedule: ScheduleItem[] = [
  { time: "04:40 AM – 05:00 AM", activity: "Mathematics Test", type: "test", subject: "Mathematics" },
  { time: "05:00 AM – 06:00 AM", activity: "Mathematics Live Explanation", type: "live", subject: "Mathematics" },
  { time: "06:00 AM – 06:20 AM", activity: "Intelligence Test", type: "test", subject: "Intelligence" },
  { time: "06:20 AM – 07:00 AM", activity: "Intelligence Live Explanation", type: "live", subject: "Intelligence" },
  { time: "07:00 AM – 07:20 AM", activity: "Class 9 Extra Test", type: "test", subject: "Class 9 Extra", forClass: "Class 9" },
  { time: "07:20 AM – 08:00 AM", activity: "Class 9 Live Explanation", type: "live", subject: "Class 9 Extra", forClass: "Class 9" }
];

export const eveningSchedule: ScheduleItem[] = [
  { time: "05:00 PM – 05:20 PM", activity: "General Knowledge Test", type: "test", subject: "General Knowledge", forClass: "Class 6" },
  { time: "05:20 PM – 06:00 PM", activity: "General Knowledge Live Explanation", type: "live", subject: "General Knowledge", forClass: "Class 6" },
  { time: "06:00 PM – 06:20 PM", activity: "English Test", type: "test", subject: "English", forClass: "Class 6 & 9" },
  { time: "06:20 PM – 07:00 PM", activity: "English Live Session", type: "live", subject: "English", forClass: "Class 6 & 9" },
  { time: "07:00 PM – 07:20 PM", activity: "General Science Test", type: "test", subject: "General Science", forClass: "Class 9" },
  { time: "07:20 PM – 08:00 PM", activity: "General Science Live Session", type: "live", subject: "General Science", forClass: "Class 9" }
];

export const class6Routine = [
  "Read the Gist in the App",
  "Attempt the scheduled test",
  "Attend explanation session",
  "Attempt Test Code 2",
  "Attempt Mega Grand Test"
];

export const class9Routine = [
  "Study the concept",
  "Attempt scheduled tests",
  "Attend explanation sessions",
  "Prepare 5 MCQs per concept",
  "Write 25 MCQs per day"
];

export const sparkBatchVideo = {
  title: "See How the SPARK Batch Works",
  youtubeUrl: "https://youtu.be/zCKng7Hzu5s",
  youtubeId: "zCKng7Hzu5s"
};
