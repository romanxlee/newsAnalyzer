import '../pages/about.css';
import { GITHUB_URL } from '../js/constants/constants.js';
import CommitCard from '../js/components/CommitCard.js';
import CommitCardList from '../js/components/CommitCardList.js';
import GithubApi from '../js/modules/GithubApi.js';

const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView:'auto',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

const api = new GithubApi(GITHUB_URL);

function createCards(data) {
  const card = new CommitCard(data);
  return card.create();
}

const commitContainer = document.querySelector('.github__slider');
const loadCommits = new CommitCardList(createCards, commitContainer);
console.log(GITHUB_URL)
console.log(api.getCommits())
api.getCommits()
.then((res) => {
  loadCommits.render(res)
})