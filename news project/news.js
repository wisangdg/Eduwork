const apiKey = 'd4204d98aee44af0abc7cecdf8c5dfd5';
const newsGrid = document.getElementById('news-grid');
let timeoutId;

// Fungsi untuk mengambil berita dari News API
async function fetchNews(query = '') {
    try {
        const apiKey = 'd4204d98aee44af0abc7cecdf8c5dfd5';
        const url = `https://newsapi.org/v2/top-headlines?country=us&q=${query}&apiKey=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        console.log('Response dari API:', data); // Tambahkan log ini

        if (data.status === 'ok') {
            if (data.articles && data.articles.length > 0) {
                displayNews(data.articles);
            } else {
                newsGrid.innerHTML = '<p>Tidak ada berita yang ditemukan.</p>';
            }
        } else {
            throw new Error(data.message || 'Terjadi kesalahan saat mengambil berita');
        }
    } catch (error) {
        console.error('Error mengambil berita:', error);
        newsGrid.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Fungsi untuk menampilkan berita
function displayNews(articles) {
    newsGrid.innerHTML = '';

    articles.forEach(article => {
        const { title, description, urlToImage, url } = article;
        const articleEl = document.createElement('article');
        articleEl.classList.add('news-item');
        articleEl.innerHTML = `
            <p>${title || `tidak ada judul`}</p>
            <h3><a href="${url}" target="_blank">read more...</a></h3>
        `;
        newsGrid.appendChild(articleEl);
    });
}

// f pencarian langsung
function liveSearch() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        const query = document.getElementById('search-input').value;
        fetchNews(query);
    }, 400); // Tunggu 400ms setelah pengguna berhenti mengetik
}

// Event listener untuk input pencarian
document.getElementById('search-input').addEventListener('input', liveSearch);

// untuk tampilin berita
document.addEventListener('DOMContentLoaded', () => {
    if (newsGrid) {
        fetchNews();
    } else {
        console.error('Elemen dengan ID "news-grid" tidak ditemukan');
    }
});