import React from 'react';

export default function Controls({
  query,
  setQuery,
  setLoading,
  types,
  selectedType,
  setSelectedType,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemon"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <option value="all">All</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <button onClick={() => setLoading(true)}>Search</button>
    </div>
  );
}
