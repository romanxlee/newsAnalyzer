import "./pages/index.css";
import NewsCard from "./js/components/NewsCard.js";
import NewsCardList from "./js/components/NewsCardList.js";
import NewsApi from "./js/modules/NewsApi.js";
import DataStorage from "./js/modules/DataStorage.js";
import SearchInput from "./js/components/SearchInput.js"

import { NEWS_API_URL, NEWS_API_KEY, TODAY_DATE, DAYS_FROM_TODAY } from "./js/constants/constants.js"



const api = new NewsApi(NEWS_API_URL, NEWS_API_KEY);
const dataStorage = new DataStorage();
const form = document.querySelector('.search__form')
const input = new SearchInput(form)


function createCards(data) {
    const card = new NewsCard(data);
    return card.create();
}

const cardsContainer = document.querySelector('.cards');
const loadCards = new NewsCardList(createCards, cardsContainer)
const searchButton = document.querySelector('.search__button')
const searchInput = document.querySelector('.search__input')
const preloader = document.querySelector('.results__preloader')
const nothing = document.querySelector('.results__nothing')
const buttonMore = document.querySelector('.results__button')
const success = document.querySelector('.results__success')


let counter = 0;
const getCards = () => {
    const articles = dataStorage.getArray();
    preloader.setAttribute('style', 'display: none')
    if (articles.length === 0) {
        success.setAttribute('style', 'display: none')
    } else {
        loadCards.render(articles.splice(counter, 3))
        success.setAttribute('style', 'display: flex')}
    if (counter >= articles.length) {
        buttonMore.style.display = 'none';
    } else {
        buttonMore.style.display = 'block';
    }
    counter += 3;
  };

  buttonMore.addEventListener('click', getCards)

function loadNews(event) {
    loadCards.clear();
    localStorage.clear()
    event.preventDefault()
    const searchValue = searchInput.value;
    dataStorage.setRequest(searchValue);
    api.getNews(searchValue, TODAY_DATE, DAYS_FROM_TODAY)
    
    .then(res => {
        if (res.articles.length === 0) {
            nothing.setAttribute('style', 'display: flex')
        } else {
            dataStorage.setArray(res)
            dataStorage.setResults(res)
        }
    })
    .then (preloader.setAttribute('style', 'display: flex'))
    
    .finally(() => getCards())
    .catch(err => console.log(err))
}



function setRequest() {
    const request = dataStorage.getRequest();
    searchInput.value = request;
}

searchButton.addEventListener('click', loadNews)
document.onload = setRequest();
document.onload = getCards()
form.oninput = input.setListeners()