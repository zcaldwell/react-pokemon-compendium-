import React from 'react';
import { Button, TextField, Select, MenuItem } from '@mui/material';

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
        <MenuItem value="asc">Ascending</MenuItem>
        <MenuItem value="desc">Descending</MenuItem>
      </Select>
      <Select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <MenuItem value="all">All</MenuItem>
        {types.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
      <Button varient="outlined" onClick={() => setLoading(true)}>
        Search
      </Button>
    </div>
  );
}
