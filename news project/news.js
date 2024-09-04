const apiKey = 'd4204d98aee44af0abc7cecdf8c5dfd5';
const newsGrid = document.getElementById('news-grid');
let timeoutId;


async function fetchNews(query = '') {
    try {
        const apiKey = 'd4204d98aee44af0abc7cecdf8c5dfd5';
        const url = `https://newsapi.org/v2/top-headlines?country=us&q=${query}&apiKey=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();


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


function liveSearch() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        const query = document.getElementById('search-input').value;
        fetchNews(query);
    }, 400); // Tunggu 400ms setelah pengguna berhenti mengetik
}


document.getElementById('search-input').addEventListener('input', liveSearch);


document.addEventListener('DOMContentLoaded', () => {
    if (newsGrid) {
        fetchNews();
    } else {
        console.error('Elemen dengan ID "news-grid" tidak ditemukan');
    }
});