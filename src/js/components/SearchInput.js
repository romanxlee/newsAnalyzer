export default class SearchInput {
    constructor(form) {
        this.form = form;
        this.button = this.form.querySelector('.search__button');
    }

    checkInputValidity() {
        const input = this.form.querySelector('.search__input')
        if (input.validity.tooShort || input.validity.tooLong) {
            return false;
        } else if (input.validity.valueMissing) {
            return false;
        } else {
            return true
        }
    }

    setButtonState() {
        if (this.checkInputValidity() == true) {
            this.button.removeAttribute('disabled')
        } else {
            this.button.setAttribute('disabled')
        }
    }

    setListeners() {
        this.form.oninput = this.checkInputValidity.bind(this);
        this.form.oninput = this.setButtonState.bind(this);
    }
}