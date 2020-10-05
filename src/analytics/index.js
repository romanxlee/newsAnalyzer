import "../pages/analyse.css";

import { TODAY_DATE, DAYS_AGO } from "../js/constants/constants.js"
import DataStorage from "../js/modules/DataStorage.js";
import Analytics from "../js/components/Analytics.js";

const dataStorage = new DataStorage();
const req = dataStorage.getRequest();
const arr = dataStorage.getArray();

const analytics = new Analytics(arr, TODAY_DATE, 7 )

const request = document.querySelector('.analyse__request');
const news = document.querySelector('.analyse__news');
const headers = document.querySelector('.analyse__headers');

request.textContent = dataStorage.getRequest()
news.textContent = dataStorage.getResults()

const headersMentions = arr.filter((item) => {
    return item.title.toLowerCase().includes(req.toLowerCase()) || item.description.toLowerCase().includes(req.toLowerCase());
});




headers.textContent = headersMentions.length;
const getMonth = new Date(arr[0].publishedAt).toLocaleString('ru', {month: 'long'})
const month = document.querySelector('.diagram__month')
month.textContent = '(' + getMonth + ')';



const dates = analytics.getDates()
const diagramDate = document.querySelectorAll('.diagram__date')
diagramDate.forEach(function(item, index) {
    item.textContent = dates[index]
})
const diagramLine = document.querySelectorAll('.diagram__line');
const diagramNumber = document.querySelectorAll('.diagram__number');

function renderDiagram() {
    for (let i = 0; i < 7; i++ ) {
        let mentions = arr.filter((item) => {
            return new Date(item.publishedAt).toLocaleString('ru', {day: 'numeric', weekday: 'short'}).includes(dates[i])    
        })
        console.log(mentions)
        diagramLine[i].setAttribute('style', 'width:' + mentions.length + '%')
        diagramNumber[i].textContent = mentions.length;
    }
}

renderDiagram()