
const searchInput = document.getElementById('search-input');

searchInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const searchTerm = searchInput.value;
    // Perform search using searchTerm (e.g., filter news articles)
    console.log('Search term:', searchTerm); 
  }
});
