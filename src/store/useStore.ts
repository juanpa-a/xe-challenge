import { Articles, Sources } from '@/types'
import { create } from 'zustand'

export interface NewsStore {
    countries: Array<string>,
    categories: Array<string>,
    sources: Sources,
    articles: Articles,
    language: string,

    setLanguage: (language: string) => void,
    setSources: (sources: Sources) => void,
    setArticles: (articles: Articles) => void,
    setCountries: (countries: Array<string>) => void,
    setCategories: (categories: Array<string>) => void,
}

export const useStore = create<NewsStore>((set) => ({
    countries: [],
    categories: [],
    sources: {},
    articles: [],
    language: "en",

    setLanguage: (language: string) => set(() => ({ language })),
    setSources: (sources: Sources) => set(() => ({ sources })),
    setArticles: (articles: Articles) => set(() => ({ articles })),
    setCountries: (countries: Array<string>) => set(() => ({ countries })),
    setCategories: (categories: Array<string>) => set(() => ({ categories })),
}))