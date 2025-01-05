import { motion } from 'framer-motion';
import ASD1 from '../../assets/ASD1.png';

function HistorySection() {
  const timelineData = [
    {
      year: "1900s",
      content: "Before the turn of the century, autism and neurodiversity didn't exist – in fact they were seen as, what we would call nowadays, mental health issues. The first major move away from classifying autism and intellectual disabilities as 'spiritual acts' of rejecting the norm was in the 1920s."
    },
    {
      year: "1920s",
      content: "The first major breakthrough was in Russia in the 1920s, and although the paper published by Grunya Sukhareva didn't make it to the western world, her impact on psychiatry did. Sukhareva identified many key attributes of autism based on her work with over 1000 children."
    },
    {
      year: "1940s",
      content: "The well-known Hans Asperger conducted 'research' on several young boys with, what was seen as, low-need, high intelligence autism. Based on inhumane treatment of autistic children, Asperger's Syndrome was created."
    },
    {
      year: "1960s",
      content: "Neurodiverse traits were seen as medical problems, things that needed to be fixed or removed from society. Much of the research conducted in this decade was based on life experiences, viewing autistic people as traumatised individuals."
    },
    {
      year: "1980s & 1990s",
      content: "The DSM-5 adapted their definition of autism, adding diagnostic criteria based on new scientific information. Federal governments started to identify and provide special services for children with autism in school."
    },
    {
      year: "Early 2000s",
      content: "Barack Obama removed the term 'r*tardation' from all federal records in line with \"Rosa's Law\". In 2014, the diagnostic manual evolved, blending different branches of autism into one ASD umbrella diagnosis."
    },
    {
      year: "Present",
      content: "The first Self-Assessment of Autistic Traits, by and for autistic adults, was released in 2022. Social media has played a vital role in autism awareness and acceptance, particularly for people raised female. The autism spectrum has been reimagined with a more nuanced understanding."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center text-purple-700 mb-12"
        >
          The History of Autism Understanding
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Timeline */}
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-purple-600 mb-2">{item.year}</h3>
                <p className="text-gray-700">{item.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Images and Slogan */}
          <div className="space-y-8 sticky top-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={ASD1}
                alt="Autism Spectrum Visualization 1"
                className="w-full rounded-lg"
              />
            </motion.div>

            {/* Slogan Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 rounded-lg shadow-md text-center"
            >
              <h3 className="text-2xl font-bold text-white italic">
                "See the Ability, Not the Disability."
              </h3>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistorySection;