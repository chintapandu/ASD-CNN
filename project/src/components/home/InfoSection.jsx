import { motion } from 'framer-motion';
import ASD4 from '../../assets/ASD4.jpg';

function InfoSection() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row gap-12 items-center"
      >
        {/* Large Image on Left */}
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src={ASD4}
              alt="Autism Spectrum Disorder Visualization"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Content on Right */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-purple-700 mb-6">
            What is Autism Spectrum Disorder?
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Autism Spectrum Disorder (ASD) is a complex developmental condition that affects how a person perceives and socializes with others, causing problems in social interaction and communication. The disorder also includes limited and repetitive patterns of behavior.
            </p>
            <p>
              The term "spectrum" in autism spectrum disorder refers to the wide range of symptoms and severity. Some people with ASD are highly skilled while others are severely challenged and may require significant support in their daily lives.
            </p>
            <p>
              Key characteristics include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Difficulty with social interaction and communication</li>
              <li>Restricted or repetitive behaviors and interests</li>
              <li>Symptoms that begin in early childhood</li>
              <li>Symptoms that affect daily functioning</li>
              <li>Unique strengths and differences in processing sensory information</li>
            </ul>
            <p>
              Early diagnosis and intervention can make a significant difference in the development of a child with ASD. Each person with autism has unique strengths and challenges, and with appropriate support, people with autism can live fulfilling and meaningful lives.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default InfoSection;