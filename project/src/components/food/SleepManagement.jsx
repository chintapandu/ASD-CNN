import { sleepData } from './data/sleepData';
import HealthCard from './common/HealthCard';

function SleepManagement() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Sleep Management for Eye Health</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {sleepData.map((tip, index) => (
          <HealthCard
            key={index}
            icon={tip.icon}
            title={tip.title}
            items={tip.tips}
            benefitText={tip.importance}
            color="blue"
          />
        ))}
      </div>
    </section>
  );
}

export default SleepManagement;