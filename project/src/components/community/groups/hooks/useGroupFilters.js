import { useState, useMemo } from 'react';

export function useGroupFilters(groups) {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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
    filter,
    searchQuery,
    setFilter,
    setSearchQuery,
    filteredGroups
  };
}