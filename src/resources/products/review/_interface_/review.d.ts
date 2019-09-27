export interface ReviewAttributes {
    id?: string
    customer_id: number,
    product_id: number,
    review?: Text,
    rating: number,
    createdAt?: Date
    updatedAt?: Date 
}