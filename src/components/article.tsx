import { Article as ArticleSpec, Source } from "@/types"

type Props =
    Omit<ArticleSpec, 'source' | 'url'>
    & Pick<Source, "category" | "country">

export const Article = ({ title, description, category, country }: Props) => {
    return <div className='transition ease-in-out rounded border-2 p-4 flex flex-col justify-between hover:scale-105'>

        <div className='flex flex-col space-y-4 mb-8'>
            <h3 className='text-2xl font-bold'>{title}</h3>
            <span><strong>Category: </strong>
                <u>
                    {category ?? 'other'}
                </u>
            </span>
            <p>{description && description.length > 75
                ? `${description.slice(0, 75)}...`
                : description
            }</p>
        </div>

        <div className='flex justify-between'>
            <span>
                <strong>Country: </strong>
                <u>
                    {country ?? 'worldwide'}
                </u>
            </span>
            <span>
                <strong>Language: </strong>
                <u>
                    {category ?? 'other'}
                </u>
            </span>
        </div>

    </div>
}