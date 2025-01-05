import { exerciseData } from './data/exerciseData';
import HealthCard from './common/HealthCard';

function ExerciseTips() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Exercise Tips for Eye Health</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {exerciseData.map((exercise, index) => (
          <HealthCard
            key={index}
            icon={exercise.icon}
            title={exercise.title}
            items={exercise.tips}
            benefitText={exercise.benefits}
            color="green"
          />
        ))}
      </div>
    </section>
  );
}

export default ExerciseTips;