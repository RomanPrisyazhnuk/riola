export interface Place{
    id: string
    slug: string
    title: string
    desctiption:string
    image: string
    excursionsCount: number
}

export const mockPlace1:Place = {
    id: '1',
    slug: 'pataiya',
    title: 'Паттайя',
    desctiption: 'Паттайя',
    image: '/pataiya.webp',
    excursionsCount: 32
}

export const mockPlace2 = {
    id: '2',
    slug: 'vietnam',
    title: 'Вьетнам',
    desctiption: 'Паттайя',
    image: '/vietnam.webp',
    excursionsCount: 15
}

export const mockPlace3 = {
    id: '3',
    slug: 'phuket',
    title: 'Пхукет',
    desctiption: 'Паттайя',
    image: '/phuket.webp',
    excursionsCount: 34
}

export const mockPlace4 = {
    id: '4',
    slug: 'stambul',
    title: 'Стамбул',
    desctiption: 'Паттайя',
    image: '/stambul.webp',
    excursionsCount: 70
}

export const mockPlace5 = {
    id: '5',
    slug: 'banghoc',
    title: 'Бангкок',
    desctiption: 'Паттайя',
    image: '/banghoc.webp',
    excursionsCount: 50
}


export const mockPlace6 = {
    id: '6',
    slug: 'kapadokia',
    title: 'Каппадокия',
    desctiption: 'Паттайя',
    image: '/kapadokia.webp',
    excursionsCount: 21
}
export const mockPlaces:Place[]  = [mockPlace1,mockPlace2,mockPlace3,mockPlace4,mockPlace5,mockPlace6]