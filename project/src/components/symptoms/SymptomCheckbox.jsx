function SymptomCheckbox({ label, checked, onChange }) {
  return (
    <li className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="rounded text-green-600"
        checked={checked}
        onChange={onChange}
      />
      <span>{label}</span>
    </li>
  );
}

export default SymptomCheckbox;