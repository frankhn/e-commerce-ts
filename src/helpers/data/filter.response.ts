import select from 'lodash';

/**
 * Picker from array
 */
class UserDataResponse {
    user: any;
  /**
     * @author frank
     * @param  {...any} object
     */
  constructor(object: any) {
    this.user = object;
  }

  /**
   * select data
   * @returns {*} user
   */
  select() {
    const user = select.pick(this.user, ['id', 'name', 'email', 'address_1', 'address_2', 'city', 'country', 'postal_code',
      'shipping_region_id', 'day_phone', 'eve_phone', 'region', 'mob_phone', 'credit_card']);
    return user;
  }
}

export default UserDataResponse;
