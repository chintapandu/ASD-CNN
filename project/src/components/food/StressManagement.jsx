import { stressData } from './data/stressData';
import HealthCard from './common/HealthCard';

function StressManagement() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Stress Management for Better Eye Health</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {stressData.map((item, index) => (
          <HealthCard
            key={index}
            icon={item.icon}
            title={item.title}
            items={item.techniques}
            benefitText={item.benefits}
            color="purple"
            itemKey="techniques"
          />
        ))}
      </div>
    </section>
  );
}

export default StressManagement;