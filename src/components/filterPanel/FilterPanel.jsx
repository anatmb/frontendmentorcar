function FilterPanel({ categories, selectedCategory, searchTerm, onCategorySelect, onSearch }) {
  const handleCategoryClick = (category) => {
    // onCategorySelect(category.toLowerCase());
    onCategorySelect(category.toLowerCase());
  onSearch(''); // ← 🔥 esto borra la búsqueda al cambiar de categoría
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    console.log('🕵️‍♀️ Buscando:', value);
    onSearch(value);


  // 💡 Si el usuario está escribiendo algo, mostrar todos los productos sin filtro por categoría
  if (value.trim() !== '') {
    onCategorySelect('all');
  }
  };
    
  return (
    <aside style={{ padding: '1rem', minWidth: '200px' }}>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          width: '100%',
          padding: '0.5rem',
          marginBottom: '1rem',
          fontSize: '1rem',
        }}
      />

      <h3>Categorías</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
   <li
  style={{
    cursor: 'pointer',
    fontWeight: selectedCategory === 'all' ? 'bold' : 'normal', // ✅ AHORA SÍ
    marginBottom: '0.5rem',
  }}
  onClick={() => handleCategoryClick('all')}
>
  Todas
</li>
      {categories.map((category) => (
  <li
    key={category}
    style={{
      cursor: 'pointer',
      fontWeight: selectedCategory === category.toLowerCase() ? 'bold' : 'normal',
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