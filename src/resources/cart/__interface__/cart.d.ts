import { DataTypeUUID } from "sequelize";

export interface CartAttributes {
    id?: number 
    cart_id: number
    product_id: number
    attributes?: string
    quantity: number
    buy_now?: boolean
    added_on?: Date
    createdAt?: Date
    updatedAt?: Date
}