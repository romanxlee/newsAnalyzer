export default class Analytics {
    constructor(data, today, daysAgo) {
        this.data = data;
        this.today = today;
        this.daysAgo = daysAgo;
    }

    getDates() {
        const dates = []
        for (let i = 0; i < this.daysAgo; i++) {
            dates.push(new Date(this.today - i * 86400000).toLocaleString('ru', {day: 'numeric', weekday: 'short'}))
        }
        return dates;
    }
}