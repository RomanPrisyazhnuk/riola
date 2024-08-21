import { Price } from "./price"

export interface Excursion{
    id: string
    title: string
    slug: string
    image: string
    orderedCount: number
    price: Price[]
    duration: string
    groupSize: string
    type?: string
}
