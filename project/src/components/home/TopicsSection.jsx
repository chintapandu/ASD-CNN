import TopicCard from './TopicCard';
import eye1 from '../../assets/eye1.jpg';
import eye2 from '../../assets/eye2.jpg';
import eye3 from '../../assets/eye3.jpg';
import diabetesVideo from '../../assets/dia.mp4';

const topics = [
  {
    title: "DIABETIC RETINOPATHY?",
    description: "Diabetic retinopathy is an eye condition caused by high blood sugar levels damaging the retina's blood vessels. This damage can lead to vision issues such as blurred vision and dark spots, potentially resulting in blindness if not managed properly. It is a common complication of diabetes that tends to worsen over time, especially in those with poorly controlled blood sugar levels.",
    imageSrc: eye1,
    imageAlt: "Diabetic Retinopathy Illustration"
  },
  {
    title: "EYE ANATOMY",
    description: "Diabetic Retinopathy (DR) is a severe complication of diabetes that can lead to blindness, affecting 30-40% of diabetics, with increasing cases expected by 2045. Traditional manual detection from retinal fundus images is slow and prone to errors. Automated methods using machine learning (ML) and deep learning (DL), particularly Vision Transformers (ViTs), have shown improved performance over Convolutional Neural Networks (CNNs).",
    imageSrc: eye2,
    imageAlt: "Eye Anatomy Diagram"
  },
  {
    title: "Retinal Health",
    description: "Understanding retinal health is crucial for early detection and management of diabetic retinopathy. The retina undergoes various changes as the condition progresses, from minor vessel damage to severe complications. Regular monitoring and timely intervention can help preserve vision and prevent further deterioration.",
    imageSrc: eye3,
    imageAlt: "Retinal Health Visualization"
  },
  {
    title: "A Growing Concern",
    description: "With 70 million people with diabetes, India has a growing problem with diabetic retinopathy. The disease creates lesions in the back of the retina that can lead to total blindness, and 18 per cent of diabetic Indians already have the ailment. With 415 million diabetics at risk for blindness worldwide (the United States, China and India have the most cases), the disease is a global concern.\n\nBut the good news is that permanent vision loss is not inevitable. For those who are diagnosed early enough, medications, therapies, exercise and a healthy diet are highly effective treatments for preventing further damage.",
    video: diabetesVideo,
    isVideoCard: true
  }
];

function TopicsSection() {
  return (
    <div className="space-y-8">
      {topics.map((topic, index) => (
        <TopicCard
          key={index}
          title={topic.title}
          description={topic.description}
          imageSrc={topic.imageSrc}
          imageAlt={topic.imageAlt}
          video={topic.video}
          isVideoCard={topic.isVideoCard}
        />
      ))}
    </div>
  );
}

export default TopicsSection;