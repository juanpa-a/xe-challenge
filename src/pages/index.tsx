import { Article } from '@/components/article';
import { Categories } from '@/components/categories';
import { Template } from '@/components/template';
import { mount } from '@/utils/mount';
import NewsService from '@/services/newsService';
import { useStore } from '@/store/useStore';
import { useEffect } from "react";


export default function Home() {

  const store = useStore(state => state)

  useEffect(() => {
    const api = new NewsService({
      language: store.language,
    })
    mount(store, api)
  }, [store.language])


  return (
    <Template>

      <div className="flex items-center space-x-4 p-4 mb-4">
        <Categories categories={store.categories} />
      </div>

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
