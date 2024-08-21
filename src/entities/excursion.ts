import { Price } from "./price"

export interface Excursion{
    id: string
    title: string
    slug: string
    image: string
    orderedCount: string
    price: Price[]
    duration: string
    groupSize: string
    type?: string
}

export const mockExcursion1 = {
    id: '1',
    title: 'Пхи Пхи: 5 островов',
    slug: 'phi-phi-5-ilands',
    image: '/pp-60-520-820-90.webp',
    orderedCount: '80k',
    price: [{amount: 62, description:"/взр"},{amount: 56, description:"/возраст 2-11"}],
    duration: '6ч',
    groupSize: 'до 55 чел',
    type: 'Групповая',
}
export const mockExcursion2 = {
    id: '1',
    title: 'Симиланские острова на 1 день',
    slug: 'phi-phi-5-ilands',
    image: '/min-520-820-90.webp',
    orderedCount: '80k',
    price: [{amount: 75, description:"/взр"},{amount: 64, description:"/возраст 3-9"}],
    duration: '11ч',
    groupSize: 'до 60 чел',
    type: 'Групповая',
}

export const mockExcursions = [mockExcursion1, mockExcursion2,mockExcursion1, mockExcursion2,mockExcursion1, mockExcursion2]
