import { useState, useMemo } from 'react';

export function useGroups(initialGroups) {
  const [groups, setGroups] = useState(
    initialGroups.map(group => ({ 
      ...group, 
      isJoined: false,
      isWatched: false,
      adminMembers: [
        { id: 1, name: "Dr. Sarah Johnson" },
        { id: 2, name: "Dr. Michael Chen" }
      ],
      recentMessages: [
        {
          id: 1,
          author: "Dr. Sarah Johnson",
          content: "Welcome to our support group! Feel free to share your experiences and ask questions.",
          time: "2 hours ago"
        },
        {
          id: 2,
          author: "John Davis",
          content: "Thank you for creating this space. I've found the discussions very helpful.",
          time: "1 hour ago"
        }
      ]
    }))
  );
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredGroups = useMemo(() => {
    return groups.filter(group => {
      const matchesSearch = group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           group.description.toLowerCase().includes(searchQuery.toLowerCase());
      if (filter === 'joined') return group.isJoined && matchesSearch;
      if (filter === 'available') return !group.isJoined && matchesSearch;
      return matchesSearch;
    });
  }, [groups, filter, searchQuery]);

  return {
    groups: filteredGroups,
    selectedGroup,
    filter,
    searchQuery,
    setSelectedGroup,
    setFilter,
    setSearchQuery,
    handleJoinGroup,
    handleWatchGroup
  };
}

export default useGroups;