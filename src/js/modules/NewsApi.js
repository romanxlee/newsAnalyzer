export default class NewsApi {
    constructor(url, key) {
        this.url = url;
        this.key = key;
    }



    getNews(request, fromDate, toDate) {
        return fetch(`${this.url}` + `q=${request}` + `&from=${fromDate}` + `&to=${toDate}` +`&sortBy=publishedAt` + `&language=ru` + `&pageSize=100` + `&${this.key}`, {
            method: 'GET',
        })
        .then((res) => res.json())
        }
	}

/*     /* /* getNews(request, fromDate, toDate, sortOption,  number) {
        return fetch(`${this.url}` + `?q=${request}`  + `&from=${fromDate}` + `&to=${toDate}`  + `&sortBy=${sortOption}`  + `&pageSize=${number}&`  + `${this.key}`) 
        .then(this._getResponseData)
    } */
