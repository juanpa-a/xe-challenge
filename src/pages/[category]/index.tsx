import { Article } from '@/components/article';
import { Template } from '@/components/template';
import { useNews } from '@/hooks/useNews';
import NewsService from '@/services/newsService';
import { useStore } from '@/store/useStore';
import { useRouter } from 'next/router';
import { useEffect } from "react";


export default function Home() {
  const store = useStore(state => state)
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    const api = new NewsService({
      language: store.language,
      category: category as string,
    })
    useNews(store, api)
  }, [store.language])

  return (
    <Template>
      <div className='grid grid-cols-3 gap-6'>
        {store.articles.map(({ title, description, source }, index) => {
          return <Article
            key={index}
            title={title}
            description={description}
            category={source in store.sources 
              ? store.sources[source].category 
              : "other"
            }
            country={source in store.sources 
              ? store.sources[source].country 
              : 'global'
            }
          />
        })}
      </div >
    </Template>
  );
}
