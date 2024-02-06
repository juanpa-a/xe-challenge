export type Source = {
    id: string
    name: string,
    category: string,
    language: string,
    country: string
}

export type Article = {
    source: string,
    title: string,
    description: string,
    url: string,
}

export type Sources = Record<string, Source>
export type Articles = Array<Article>