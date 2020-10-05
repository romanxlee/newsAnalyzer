export default class DataStorage {
    setRequest(request) {
        localStorage.setItem('request', JSON.stringify(request))
    }

    getRequest() {
        return JSON.parse(localStorage.getItem('request'))
    }

    setArray(data) {
        localStorage.setItem('articles', JSON.stringify(data.articles))
    }

    getArray() {
        return JSON.parse(localStorage.getItem('articles'))
    }

    setResults(data) {
        localStorage.setItem('results', JSON.stringify(data.totalResults))
    }

    getResults() {
        return JSON.parse(localStorage.getItem('results'))
    }
}