import { DataTypeUUID } from "sequelize";

export interface ProductDiscountAttributes {
    id?: DataTypeUUID 
    product_id: string
    amount: number
    from: Date
    to: Date
    createdAt?: Date
    updatedAt?: Date
}