export default class CommitCardList {
    constructor (card, container) {
        this.card = card;
        this.container = container;
    }

    addCard(dataElement) {
        const card = this.card(dataElement, this.container);
        this.container.append(card);
    }

    render(array) {
        array.forEach(item => {
            this.addCard(item);
        })
    }
}