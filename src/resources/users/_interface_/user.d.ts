import { DataTypeUUID } from 'sequelize';

export interface UserAttributes {
    id?: DataTypeUUID
    firstname: string
    lastname: string
    username: string
    email: string
    password: string
    role: 'super' | 'admin' | 'user' | 'seller' | 'staff'
    birth_day: Date
    city: Array<string>
    country: Array<string>
    avatar: string
    createdAt?: Date
    updatedAt?: Date
}