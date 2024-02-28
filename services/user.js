class UserService{
    constructor(mailuClient){
        this.client = mailuClient;
    };

    /**
     * Gets a list of all users.
     *
     * @returns {Promise<Array>} Promise with an array of user objects.
    */
    getUsers(){
        return this.client.useAxios('get', '/user');
    };

    /**
     * Creates a new user.
     *
     * @param {object} body Object with the user data.
     * @returns {Promise<object>} Promise with the object of the created user.
    */
    createUser(body){
        return this.client.useAxios('post', '/user', body)
    };

    /**
     * Modifies an existing user.
     *
     * @param {string} email Email of the user to modify.
     * @param {object} body Object with the data to modify of the user.
     * @returns {Promise<object>} Promise with the object of the updated user.
    */
    updateUser(email, body){
        return this.client.useAxios('patch', `/user/${email}`, body);
    };

    /**
     * Gets information about a specific user.
     *
     * @param {string} email Email of the user to consult.
     * @returns {Promise<object>} Promise with the object of the user.
    */
    getUser(email){
        return this.client.useAxios('get', `/user/${email}`);
    };

    /**
     * Deletes a user.
     *
     * @param {string} email Email of the user to delete.
     * @returns {Promise<void>} Empty promise if the deletion was successful.
    */
    deleteUser(email){
        return this.client.useAxios('delete', `/user/${email}`);
    };
};

module.exports = UserService;