import { FaRunning, FaEye, FaSun, FaSwimmer } from 'react-icons/fa';

export const exerciseData = [
  {
    title: "Cardio for Eye Health",
    icon: FaRunning,
    tips: [
      "30 minutes of moderate walking daily",
      "Swimming improves blood circulation",
      "Cycling in moderate intensity",
      "Low-impact aerobics"
    ],
    benefits: "Improves blood circulation to the eyes and reduces intraocular pressure"
  },
  {
    title: "Eye Exercises",
    icon: FaEye,
    tips: [
      "20-20-20 rule: Every 20 minutes, look 20 feet away for 20 seconds",
      "Eye rolling exercises",
      "Focus shifting exercises",
      "Palming for eye relaxation"
    ],
    benefits: "Reduces eye strain and improves focus flexibility"
  },
  {
    title: "Yoga for Vision",
    icon: FaSun, // Changed from FaYinYang to FaSun as it's more widely available
    tips: [
      "Trataka (candle gazing)",
      "Bhramari Pranayama",
      "Palming meditation",
      "Neck rotation exercises"
    ],
    benefits: "Enhances eye muscle strength and reduces stress on eyes"
  },
  {
    title: "Sports Activities",
    icon: FaSwimmer,
    tips: [
      "Table tennis for eye-hand coordination",
      "Badminton for depth perception",
      "Swimming for overall fitness",
      "Light ball games"
    ],
    benefits: "Improves eye-hand coordination and visual processing"
  }
];