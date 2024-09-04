const API_KEY = 'd4204d98aee44af0abc7cecdf8c5dfd5';
const newsContainer = document.getElementById('newsContainer');
const searchInput = document.getElementById('searchInput');
let currentCategory = 'general';

async function fetchNews(category = 'general', query = '') {
    let url = `https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=${API_KEY}`;
    if (query) {
        url = `https://newsapi.org/v2/everything?q=${query}&language=id&apiKey=${API_KEY}`;
    }
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayNews(data.articles);
    } catch (error) {
        console.error('Error:', error);
        newsContainer.innerHTML = '<p>Terjadi kesalahan saat memuat berita.</p>';
    }
}

function displayNews(articles) {
    newsContainer.innerHTML = '';
    articles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.classList.add('news-item');
        articleElement.innerHTML = `
            <img src="${article.urlToImage || 'placeholder.jpg'}" alt="${article.title}">
            <h2>${article.title}</h2>
            <p>${article.description || 'Tidak ada deskripsi tersedia.'}</p>
            <a href="${article.url}" target="_blank" class="read-more">Baca Selengkapnya</a>
        `;
        newsContainer.appendChild(articleElement);
    });
}

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        currentCategory = e.target.dataset.category;
        fetchNews(currentCategory);
    });
});

searchInput.addEventListener('input', debounce(() => {
    const query = searchInput.value.trim();
    if (query) {
        fetchNews('', query);
    } else {
        fetchNews(currentCategory);
    }
}, 300));

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Muat berita saat halaman dimuat
fetchNews();