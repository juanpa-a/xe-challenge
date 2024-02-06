type ReqConfig = {
    language: string;
    category?: string;
};

const NEXT_PUBLIC_API_KEY = '78165ee2c3f448a1b58ee47e0d6eb05d'

class NewsService {
    private BASE_URL = "https://newsapi.org/v2/top-headlines";
    private url: URL;
    private SOURCES_URL = "https://newsapi.org/v2/top-headlines/sources";
    private sourcesUrl: URL;

    constructor({ language = "en", category }: ReqConfig) {
        this.url = new URL(this.BASE_URL);
        this.sourcesUrl = new URL(this.SOURCES_URL);
        this.url.searchParams.append("language", language);
        this.url.searchParams.append("pageSize", "20");

        if (category) {
            this.url.searchParams.append("category", category);
        }

        if (NEXT_PUBLIC_API_KEY) {
            this.url.searchParams.append("apiKey", NEXT_PUBLIC_API_KEY);
            this.sourcesUrl.searchParams.append("apiKey", NEXT_PUBLIC_API_KEY);
        } else {
            throw new Error("missing api key");
        }
    }

    fetchNews() {
        return fetch(this.url.href)
            .then((res) => res.json())
            .then(res => {
                return res.articles
            })
    }

    fetchSources() {
        return fetch(this.sourcesUrl.href)
            .then((res) => res.json())
            .then(res => {
                return res.sources
            })
    }
}

export default NewsService;
