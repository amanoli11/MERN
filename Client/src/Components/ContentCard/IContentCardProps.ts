import { ReactElement } from "react"

export interface IContentCardProps {
    title?: string
    subTitle?: string
    buttons?: ReactElement
    children: ReactElement
}