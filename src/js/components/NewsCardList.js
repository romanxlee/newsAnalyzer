export default class NewsCardList {
    constructor (card, container) {
        this.card = card;
        this.container = container
    }


    

    addCard(dataElement) {
        const card = this.card(dataElement, this.container);
        this.container.append(card);
    }

    render(array) {
        array.splice(0, 3).forEach(item => {
            this.addCard(item);
        });
    }

    clear() {
        this.container.textContent = '';
    }

}