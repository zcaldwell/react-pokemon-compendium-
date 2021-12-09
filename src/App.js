import './App.css';
import { useState, useEffect } from 'react';
import { getPokemon, getTypes } from './services/pokemon';
import PokeList from './Components/Pokelist/Pokelist';
import Controls from './Components/Controls/controls';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, selectedType);
      setPokemon(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query, selectedType]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTypes();
      setTypes(data);
    };
    fetchData();
  }, []);

  if (loading) return <h1>LOADING</h1>;

  return (
    <div className="App">
      <h1>Pokedex</h1>
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <Controls
            query={query}
            setQuery={setQuery}
            setLoading={setLoading}
            settypes={setTypes}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            types={types}
          />
          <PokeList pokemon={pokemon} loading={loading} setLoading={setLoading} />
        </>
      )}
    </div>
  );
}

export default App;
