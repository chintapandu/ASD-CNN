import { useState } from 'react';

export function useGroupSelection() {
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleGroupSelect = (groupId) => {
    setSelectedGroup(selectedGroup === groupId ? null : groupId);
  };

  return {
    selectedGroup,
    handleGroupSelect
  };
}