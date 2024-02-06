import Link from "next/link"

type Props = {
    categories: Array<string>
}

export const Categories = ({ categories }: Props) => {
    return <>
        {categories.map((category, index) => {
            return <Link key={index} href={`/${category}`} >
                <u>
                    {category}
                </u>
            </Link>
        })}
    </>
}