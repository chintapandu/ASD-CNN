import { useState } from 'react';

export function useGroupActions(initialGroups) {
  const [groups, setGroups] = useState(initialGroups.map(group => ({
    ...group,
    isJoined: false,
    isWatched: false
  })));

  const handleJoinGroup = (groupId) => {
    setGroups(groups.map(group =>
      group.id === groupId ? { ...group, isJoined: !group.isJoined } : group
    ));
  };

  const handleWatchGroup = (groupId) => {
    setGroups(groups.map(group =>
      group.id === groupId ? { ...group, isWatched: !group.isWatched } : group
    ));
  };

  return {
    groups,
    handleJoinGroup,
    handleWatchGroup
  };
}