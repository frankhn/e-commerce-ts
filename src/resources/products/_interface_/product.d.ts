export interface ProductAttributes {
    id?: string
    name: string
    category: string
    price: number
    status?: 'trending' | '' | ''
    description: string
    discount?: number
    city?: Array<string>
    country: Array<string>
    gallery?: Array<string>
    brand: string
    createdAt?: Date
    updatedAt?: Date 
}