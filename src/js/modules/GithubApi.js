export default class GithubApi {
    constructor (url) {
        this.url = url
    }

    getCommits() {
        return fetch(this.url)
        .then((res) => res.json())
    }
}