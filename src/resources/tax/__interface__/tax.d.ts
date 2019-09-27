import { DataTypeUUID } from "sequelize";

export interface TaxAttributes {
    id?: DataTypeUUID
    tax_type: string
    tax_percentage?: number
}