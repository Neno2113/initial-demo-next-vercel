import Link from "next/link"
import { useRouter } from 'next/router'
import { CSSProperties, FC } from "react"

interface Props{
    text: string;
    href: string;
}

const styles: CSSProperties  = {
    color: '#0070f3',
    textDecoration: 'underline'
}

export const ActiveLink: FC<Props> = ({ text, href}) => {

    const { asPath } = useRouter()

    return (
        <Link href={ href }>
            <a style={ asPath === href ? styles : undefined} >{ text }</a>
        </Link>
    )
}
