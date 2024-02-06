import { Articles, Source, Sources } from "@/types"
import { NewsStore } from "@/store/useStore"
import NewsService from "@/services/newsService"


export const mount = (news: NewsStore, api: NewsService) => {
    let sourceData: Sources = {}
    let articleData: Articles = []
    let categories: Set<string> = new Set([])

    const mapSources = (source: Source) => {
        sourceData[source.id] = {
            id: source.id,
            name: source.name,
            category: source.category,
            language: source.language,
            country: source.country,
        }
        categories.add(source.category)
    }

    const mapArticles = (article: any) => {
        return {
            source: article.source.id,
            title: article.title,
            description: article.description,
            url: article.url,
        }
    }

    api.fetchSources()
        .then(sources => sources.forEach(mapSources))
        .then(() => {
            news.setSources(sourceData)
            return api.fetchNews()
        })
        .then(articles => {
            articleData = articles.map(mapArticles) as Articles
            news.setArticles(articleData)
        }).then(() => {
            news.setCategories(Array.from(categories))
        })
}