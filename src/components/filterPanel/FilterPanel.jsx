import { useState } from 'react';

function FilterPanel({ categories, onCategorySelect, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
     console.log('🕵️‍♀️ Buscando:', value); // <--- agregá esto
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <aside style={{ padding: '1rem', borderRight: '1px solid #ccc', minWidth: '200px' }}>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={handleSearchChange}
          style={{width: '100%', padding: '0.5rem', marginBottom: '1rem', fontSize: '1rem' }}
      />

      <h3>Categorías</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li
          style={{
            cursor: 'pointer',
            fontWeight: selectedCategory === 'All' ? 'bold' : 'normal',
            marginBottom: '0.5rem',
          }}
          onClick={() => handleCategoryClick('All')}
        >
          Todas
        </li>
        {categories.map((category) => (
          <li
            key={category}
            style={{
              cursor: 'pointer',
              fontWeight: selectedCategory === category ? 'bold' : 'normal',
              marginBottom: '0.5rem',
              textTransform: 'capitalize',
            }}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default FilterPanel;