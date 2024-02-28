/**
 * Provides methods for interacting with a user management service, presumably
 * a Mailu-related API.
*/
class UserService{
    constructor(mailuClient){
        this.client = mailuClient;
    };

    /**
     * Gets a list of all users.
     *
     * @returns {Promise<Array<Object>>} A Promise resolving to an array of user objects.
     *   * Each user object has properties such as:
     *     * email (string)
     *     * password (string) - Likely a hashed value
     *     * comment (string) 
     *     * quota_bytes (number)
     *     * And many more... 
    */
    getUsers(){
        return this.client.useAxios('get', '/user');
    };

    /**
     * Creates a new user.
     *
     * @param {Object} body An object containing the following user data:
     *   * email (string): The user's email address.
     *   * raw_password (string): The user's plain text password.
     *   * comment (string): An optional comment about the user.
     *   * quota_bytes (number): Optional storage quota for the user.
     *   * And many more...
     * @returns {Promise<Object>} A Promise resolving to the created user object.
    */
    createUser(body){
        return this.client.useAxios('post', '/user', body)
    };

    /**
     * Modifies an existing user.
     *
     * @param {string} email The email address of the user to modify.
     * @param {Object} body Object containing user data to modify.  
     *   (Same structure as with the `createUser` method)
     * @returns {Promise<Object>} A Promise resolving to the updated user object.
    */
    updateUser(email, body){
        return this.client.useAxios('patch', `/user/${email}`, body);
    };

    /**
     * Gets information about a specific user.
     *
     * @param {string} email The email address of the user to retrieve.
     * @returns {Promise<Object>} A Promise resolving to the user object.
    */
    getUser(email){
        return this.client.useAxios('get', `/user/${email}`);
    };

    /**
     * Deletes a user.
     *
     * @param {string} email The email address of the user to delete.
     * @returns {Promise<void>} A Promise resolving if the deletion was successful (no specific data returned).
    */
    deleteUser(email){
        return this.client.useAxios('delete', `/user/${email}`);
    };
};

module.exports = UserService;