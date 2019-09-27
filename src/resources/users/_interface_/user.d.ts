import { DataTypeUUID } from 'sequelize';

export interface UserAttributes {
    id?: DataTypeUUID
    name: string
    email: string
    password: string
    credit_card?: Text
    address_1?: string
    address_2?: string
    city: string
    region?: string
    postal_code?: string
    country: string
    shipping_region_id: number
    eve_phone?: number
    mob_phone?: number
    day_phone?: number
    createdAt?: Date
    updatedAt?: Date
}