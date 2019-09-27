import { DataTypeUUID } from "sequelize";

export interface Product_attributes_Attributes {
    id?: DataTypeUUID 
    product_id: string
    color?: Array<string>
    other?: Array<string>
    createdAt?: Date
    updatedAt?: Date
}