import React from 'react';
import { Button, TextField, Select } from '@mui/material';

export default function Controls({
  query,
  setQuery,
  setLoading,
  types,
  selectedType,
  setSelectedType,
  order,
  setOrder,
}) {
  return (
    <div>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        type="text"
        placeholder="Search Pokemon"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <Select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </Select>
      <Select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <option value="all">All</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </Select>
      <Button varient="outlined" onClick={() => setLoading(true)}>
        Search
      </Button>
    </div>
  );
}
