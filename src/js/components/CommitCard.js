export default class CommitCard {
    constructor (data) {
        this.data = data;
    }

    create() {
        const card = document.createElement('div');
        card.classList.add('github__item');
        card.classList.add('swiper-slide');

        const date = document.createElement('p');
        card.appendChild(date);
        date.classList.add('github__date');
        date.textContent = this.data.commit.committer.date;

        const info = document.createElement('div');
        card.appendChild(info);
        info.classList.add('github__info');

        const avatar = document.createElement('div');
        info.appendChild(avatar);
        avatar.classList.add('github__avatar');
        if (this.data.author === null) {
            avatar.style.backgroundImage = 'url(' + 'https://avatars0.githubusercontent.com/u/54356726?v=4' + ')'
        } else avatar.style.backgroundImage = 'url(' + this.data.author.avatar_url + ')';

        const name = document.createElement('p');
        info.appendChild(name);
        name.classList.add('github__name');
        name.textContent = this.data.commit.committer.name;

        const mail = document.createElement('p');
        info.appendChild(mail);
        mail.classList.add('github__mail');
        mail.textContent = this.data.commit.committer.email;

        const text = document.createElement('p');
        card.appendChild(text);
        text.classList.add('github__text');
        text.textContent = this.data.commit.message;

        return card;
    }
}

