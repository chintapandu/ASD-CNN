import { getRandomIndianFace } from '../utils/imageUtils';

// Helper function to format dates consistently
const formatDate = (date) => date.toISOString().split('T')[0];

export const patientStories = [
  // Early Diagnosis Stories (Under 5 years)
  {
    id: 1,
    name: "Arjun Kumar",
    age: 4,
    image: getRandomIndianFace('male'),
    preview: "Early intervention changed our lives...",
    fullStory: "When Arjun was 2, we noticed he wasn't responding to his name and had limited eye contact. Early diagnosis and intervention programs helped him develop communication skills. Today, he's in regular preschool with support and making wonderful progress. Early intervention made all the difference.",
    date: formatDate(new Date('2024-02-15')),
    location: "Bangalore, Karnataka"
  },
  {
    id: 2,
    name: "Zara Patel",
    age: 3,
    image: getRandomIndianFace('female'),
    preview: "Finding the right support system...",
    fullStory: "Zara was diagnosed at 18 months. The journey was overwhelming at first, but with occupational therapy and speech therapy, she's blossoming. Her sensory integration therapy has helped tremendously with daily activities. We've learned to celebrate every small victory.",
    date: formatDate(new Date('2024-02-10')),
    location: "Mumbai, Maharashtra"
  },
  // School-Age Stories (5-12 years)
  {
    id: 3,
    name: "Vikram Singh",
    age: 8,
    image: getRandomIndianFace('male'),
    preview: "Thriving in an inclusive classroom...",
    fullStory: "Vikram's journey in mainstream school has been remarkable. With support from understanding teachers and a modified curriculum, he's excelling in math and science. His special interest in planets has become a bridge to connect with classmates. It shows that with the right support, inclusion works.",
    date: formatDate(new Date('2024-02-05')),
    location: "Delhi, NCR"
  },
  {
    id: 4,
    name: "Priya Mehta",
    age: 10,
    image: getRandomIndianFace('female'),
    preview: "Finding her voice through art...",
    fullStory: "Art therapy has been transformative for Priya. Though she struggles with verbal communication, her artwork speaks volumes. Her paintings are now displayed in school, boosting her confidence. It's beautiful to see her express herself and connect with others through art.",
    date: formatDate(new Date('2024-02-01')),
    location: "Pune, Maharashtra"
  },
  // Teenage Success Stories (13-19 years)
  {
    id: 5,
    name: "Rahul Sharma",
    age: 15,
    image: getRandomIndianFace('male'),
    preview: "Breaking barriers in technology...",
    fullStory: "Rahul's exceptional memory and focus have made him a computer programming whiz. What some see as repetitive behavior, we've channeled into coding skills. He's now developing apps and mentoring younger kids on the spectrum. His story shows that autism can be a unique strength.",
    date: formatDate(new Date('2024-01-25')),
    location: "Hyderabad, Telangana"
  },
  {
    id: 6,
    name: "Ananya Reddy",
    age: 17,
    image: getRandomIndianFace('female'),
    preview: "Finding strength in special interests...",
    fullStory: "Ananya's passion for classical dance has been her pathway to social connection. Despite sensory challenges, she's found ways to adapt and excel. Her dance guru's understanding approach has helped her participate in group performances. She's proving that autism doesn't limit artistic expression.",
    date: formatDate(new Date('2024-01-20')),
    location: "Chennai, Tamil Nadu"
  },
  // Adult Success Stories (20+ years)
  {
    id: 7,
    name: "Karthik Iyer",
    age: 25,
    image: getRandomIndianFace('male'),
    preview: "Succeeding in the workplace...",
    fullStory: "As an adult with autism, finding the right job was challenging. But my attention to detail and systematic thinking made me perfect for quality assurance work. My company's neurodiversity program and understanding colleagues have helped me thrive. I want other adults on the spectrum to know that meaningful employment is possible.",
    date: formatDate(new Date('2024-01-15')),
    location: "Kolkata, West Bengal"
  },
  {
    id: 8,
    name: "Meera Nair",
    age: 28,
    image: getRandomIndianFace('female'),
    preview: "Living independently with autism...",
    fullStory: "With support from my family and life skills training, I've achieved independence. I manage my own apartment, work part-time, and am pursuing online studies. Yes, I have challenges, but I've learned strategies to cope. My message to others: autism is part of who you are, not a limitation.",
    date: formatDate(new Date('2024-01-10')),
    location: "Kochi, Kerala"
  }
];