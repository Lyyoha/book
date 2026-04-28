const form = document.querySelector('.js-search-form');
const input = document.querySelector('.js-search-input');
const wrapper = document.querySelector('.js-weather-wrapper');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = input.value.trim();
  if (!query) return;

  fetch(`https://openlibrary.org/search.json?q=${query}&limit=10`)
    .then(response => response.json())
    .then(data => {
      wrapper.innerHTML = '';

      data.docs.forEach(book => {
        const cover = book.cover_i
          ? `<img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="cover">`
          : '<p>Немає обкладинки</p>';

        const card = `
          <div class="book-card">
            ${cover}
            <h3>${book.title}</h3>
            <p>Автор: ${book.author_name ? book.author_name[0] : 'Невідомо'}</p>
            <p>Рік: ${book.first_publish_year ?? 'Невідомо'}</p>
          </div>
        `;

        wrapper.innerHTML += card;
      });
    });
});
