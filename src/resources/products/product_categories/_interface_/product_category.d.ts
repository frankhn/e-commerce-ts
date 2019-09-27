import { DataTypeUUID } from "sequelize";

export interface ProductCategoryAttributes {
    id?: DataTypeUUID 
    name: string
    description: string
    createdAt?: Date
    updatedAt?: Date
}