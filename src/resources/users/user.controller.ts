import  CRUDOperations from '../utils/CRUDOperations'

class User extends  CRUDOperations{

    protected model = 'User'

    public static verify() {}
    public static login() {}
    public static update() {}
}

export default User;