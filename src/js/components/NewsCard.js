export default class NewsCard {
    constructor (data) {
        this.data = data;
        this.date = new Date(data.publishedAt).toLocaleString('ru', {year: 'numeric', month: 'long', day: 'numeric'})
    }

    create() {
        const card = document.createElement('a');
        card.classList.add('cards__item');
        card.setAttribute('href', this.data.url);
        card.setAttribute('target', '_blank');

        const cardImage = document.createElement('div');
        card.appendChild(cardImage);
        cardImage.classList.add('cards__image');
        cardImage.style.backgroundImage = 'url(' + this.data.urlToImage + ')';

        const cardDate = document.createElement('p');
        card.appendChild(cardDate);
        cardDate.classList.add('cards__date');
        cardDate.textContent = this.date;

        const cardTitle = document.createElement('h3');
        card.appendChild(cardTitle);
        cardTitle.classList.add('cards__title');
        cardTitle.textContent = this.data.title;

        const cardText = document.createElement('p');
        card.appendChild(cardText);
        cardText.classList.add('cards__text');
        cardText.textContent = this.data.description;

        const cardSource = document.createElement('p');
        card.appendChild(cardSource);
        cardSource.classList.add('cards__source');
        cardSource.textContent = this.data.source.name;

        return card;
    }
}