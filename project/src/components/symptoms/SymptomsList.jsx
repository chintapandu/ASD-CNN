import SymptomCheckbox from './SymptomCheckbox';

function SymptomsList({ symptoms, onSymptomChange }) {
  const commonSymptoms = [
    { key: 'blurredVision', label: 'Blurred vision' },
    { key: 'floaters', label: 'Floaters or spots in vision' },
    { key: 'nightVision', label: 'Difficulty seeing at night' }
  ];

  const additionalSymptoms = [
    { key: 'eyePain', label: 'Eye pain or redness' },
    { key: 'suddenChanges', label: 'Sudden vision changes' },
    { key: 'darkAreas', label: 'Dark or empty areas in vision' }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Common Symptoms</h2>
        <ul className="space-y-3">
          {commonSymptoms.map(({ key, label }) => (
            <SymptomCheckbox
              key={key}
              label={label}
              checked={symptoms[key]}
              onChange={(e) => onSymptomChange(key, e.target.checked)}
            />
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Additional Symptoms</h2>
        <ul className="space-y-3">
          {additionalSymptoms.map(({ key, label }) => (
            <SymptomCheckbox
              key={key}
              label={label}
              checked={symptoms[key]}
              onChange={(e) => onSymptomChange(key, e.target.checked)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SymptomsList;