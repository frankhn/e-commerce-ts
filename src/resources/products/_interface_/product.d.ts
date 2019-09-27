export interface ProductAttributes {
    id?: string
    name: string
    description: Text
    price: number
    discounted_price?: number
    image?: Text
    image_2?: Text
    thumbnail: Text
    display?: number
    createdAt?: Date
    updatedAt?: Date 
}