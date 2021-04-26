export default class ApiService {
    _apiBase = '';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json();
    }

    getArticles = (num) => {
        let res = [];
        for (let i = 0; i < num; i++) {
            res.push({
                title: "Заголовок статьи",
                image: "assets/img/desk.jpg",
                body: "Может хватит бухтеть и дестабилизировать ситуацию в айти?\n" +
                      "Есть инфа от знающего человека, что у нас в айти скоро ожидаются реальные изменения.\n" +
                      "После того, как стабилизируют ситуацию в гугле, уничтожат рамблер."
            });
        }
        return res;
    }

    getProjects = (num) => {
        let res = [];
        for (let i = 0; i < num; i++) {
            res.push({
                id: Math.random().toString(),
                name: "Название проекта",
                image: "assets/img/desk.jpg",
                body: "Может стоит написать что-то нормальное??",
                iframeUrl: ""
            });
        }
        return res;
    }
}
