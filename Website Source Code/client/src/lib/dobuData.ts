/**
 * Style reminder: The Discipline Ledger uses disciplined editorial structure,
 * direct practical content, and restrained vermilion highlights.
 */

export type ScheduleItem = {
  day: string;
  time: string;
  className: string;
  category: "Martial arts" | "Youth" | "Training" | "Private";
  instructor: string;
};

export const programmes = [
  {
    number: "01",
    name: "Jiu-jitsu",
    description:
      "Build positional control, practical escapes and calm decision-making through progressive grappling classes.",
    level: "Beginners to advanced",
  },
  {
    number: "02",
    name: "Karate",
    description:
      "Develop precise striking, footwork and self-discipline through traditional technique and modern conditioning.",
    level: "All abilities",
  },
  {
    number: "03",
    name: "Judo",
    description:
      "Learn safe throws, balance and controlled groundwork in a supportive coaching environment.",
    level: "Beginners to advanced",
  },
  {
    number: "04",
    name: "Muay Thai",
    description:
      "Improve striking combinations, conditioning and confidence through technically guided pad and partner work.",
    level: "Adults and teens",
  },
];

export const memberships = [
  {
    name: "Basic",
    price: "£25",
    period: "per month",
    detail: "One martial art, up to two sessions each week.",
  },
  {
    name: "Intermediate",
    price: "£35",
    period: "per month",
    detail: "One martial art, up to three sessions each week.",
  },
  {
    name: "Advanced",
    price: "£45",
    period: "per month",
    detail: "Any two martial arts, up to five sessions each week.",
  },
  {
    name: "Elite",
    price: "£60",
    period: "per month",
    detail: "Unlimited group classes across the full programme.",
  },
];

export const additionalServices = [
  "Private martial arts tuition — £15 per hour",
  "Junior membership — £25 per month",
  "Six-week beginners’ self-defence course — £180",
  "Fitness room access — £6 per visit",
  "Personal fitness training — £35 per hour",
];

export const schedule: ScheduleItem[] = [
  { day: "Monday", time: "06:00–07:30", className: "Jiu-jitsu", category: "Martial arts", instructor: "Mauricio" },
  { day: "Monday", time: "08:00–10:00", className: "Muay Thai", category: "Martial arts", instructor: "Morris" },
  { day: "Monday", time: "15:00–17:00", className: "Kids jiu-jitsu", category: "Youth", instructor: "Guy" },
  { day: "Monday", time: "17:30–19:00", className: "Karate", category: "Martial arts", instructor: "Sarah" },
  { day: "Monday", time: "19:00–21:00", className: "Jiu-jitsu", category: "Martial arts", instructor: "Guy" },
  { day: "Tuesday", time: "06:00–07:30", className: "Karate", category: "Martial arts", instructor: "Sarah" },
  { day: "Tuesday", time: "15:00–17:00", className: "Kids judo", category: "Youth", instructor: "Mauricio" },
  { day: "Tuesday", time: "17:30–19:00", className: "Muay Thai", category: "Martial arts", instructor: "Morris" },
  { day: "Tuesday", time: "19:00–21:00", className: "Judo", category: "Martial arts", instructor: "Guy" },
  { day: "Wednesday", time: "06:00–07:30", className: "Judo", category: "Martial arts", instructor: "Mauricio" },
  { day: "Wednesday", time: "15:00–17:00", className: "Kids karate", category: "Youth", instructor: "Sarah" },
  { day: "Wednesday", time: "17:30–19:00", className: "Judo", category: "Martial arts", instructor: "Guy" },
  { day: "Wednesday", time: "19:00–21:00", className: "Jiu-jitsu", category: "Martial arts", instructor: "Mauricio" },
  { day: "Thursday", time: "06:00–07:30", className: "Jiu-jitsu", category: "Martial arts", instructor: "Mauricio" },
  { day: "Thursday", time: "15:00–17:00", className: "Kids jiu-jitsu", category: "Youth", instructor: "Guy" },
  { day: "Thursday", time: "17:30–19:00", className: "Jiu-jitsu", category: "Martial arts", instructor: "Guy" },
  { day: "Thursday", time: "19:00–21:00", className: "Karate", category: "Martial arts", instructor: "Sarah" },
  { day: "Friday", time: "06:00–07:30", className: "Muay Thai", category: "Martial arts", instructor: "Morris" },
  { day: "Friday", time: "15:00–17:00", className: "Kids judo", category: "Youth", instructor: "Mauricio" },
  { day: "Friday", time: "17:30–19:00", className: "Muay Thai", category: "Martial arts", instructor: "Morris" },
  { day: "Friday", time: "19:00–21:00", className: "Private tuition", category: "Private", instructor: "By arrangement" },
  { day: "Saturday", time: "10:30–12:00", className: "Judo", category: "Martial arts", instructor: "Mauricio" },
  { day: "Saturday", time: "15:00–17:00", className: "Muay Thai", category: "Youth", instructor: "Morris" },
  { day: "Sunday", time: "10:30–12:00", className: "Karate", category: "Martial arts", instructor: "Sarah" },
  { day: "Sunday", time: "15:00–17:00", className: "Jiu-jitsu", category: "Youth", instructor: "Guy" },
];

export const instructors = [
  {
    name: "Mauricio Gomez",
    role: "Gym owner & head martial arts coach",
    expertise: "4th Dan judo, 3rd Dan jiu-jitsu, 1st Dan karate, accredited Muay Thai coach",
  },
  {
    name: "Sarah Nova",
    role: "Assistant martial arts coach",
    expertise: "5th Dan karate with a focus on precise, confidence-building coaching",
  },
  {
    name: "Guy Victory",
    role: "Assistant martial arts coach",
    expertise: "2nd Dan jiu-jitsu and 1st Dan judo",
  },
  {
    name: "Morris Davis",
    role: "Assistant martial arts coach",
    expertise: "Accredited Muay Thai coach and 3rd Dan karate",
  },
  {
    name: "Traci Santiago",
    role: "Fitness coach",
    expertise: "BSc Sports Science; strength and conditioning for combat athletes",
  },
  {
    name: "Harpreet Kaur",
    role: "Fitness coach",
    expertise: "BSc Physiotherapy and MSc Sports Science",
  },
];
