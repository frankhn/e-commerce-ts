import { DataTypeUUID } from "sequelize";

export interface AttributesValuesAttributes {
    id?: number
    attribute_id: number
    value: Text
    createdAt?: Date
    updatedAt?: Date
}