const axios = require('axios');

/**
 * Client for the Mailu API.
 *
 * @param {string} endpoint Base URL of the Mailu API.
 * @param {string} apiKey Authorization key for the Mailu API.
*/
class MailuClient{
    constructor(endpoint, apiKey){
        this.apiKey = apiKey;
        this.endpoint = endpoint;
    }

    /**
     * Makes a request to the Mailu API using Axios.
     *
     * @param {string} method HTTP method ('get', 'post', 'patch', 'delete', etc.).
     * @param {string} path Path of the API endpoint (e.g., '/user').
     * @param {object} data (optional) Request body.
     * @returns {Promise} Promise with the API response.
    */
    useAxios(method, path, data){
        return axios({
            method,
            url: this.endpoint + path,
            headers: { 'Authorization': `Bearer ${this.apiKey}` },
            data
        })
    };

    /**
     * Gets a list of all users.
     *
     * @returns {Promise<Array>} Promise with an array of user objects.
    */
    getUsers(){
        return this.useAxios('get', '/user');
    };

    /**
     * Creates a new user.
     *
     * @param {object} body Object with the user data.
     * @returns {Promise<object>} Promise with the object of the created user.
    */
    createUser(body){
        return this.useAxios('post', '/user', body)
    };

    /**
     * Modifies an existing user.
     *
     * @param {string} email Email of the user to modify.
     * @param {object} body Object with the data to modify of the user.
     * @returns {Promise<object>} Promise with the object of the updated user.
    */
    updateUser(email, body){
        return this.useAxios('patch', `/user/${email}`, body);
    };

    /**
     * Gets information about a specific user.
     *
     * @param {string} email Email of the user to consult.
     * @returns {Promise<object>} Promise with the object of the user.
    */
    getUser(email){
        return this.useAxios('get', `/user/${email}`);
    };

    /**
     * Deletes a user.
     *
     * @param {string} email Email of the user to delete.
     * @returns {Promise<void>} Empty promise if the deletion was successful.
    */
    deleteUser(email){
        return this.useAxios('delete', `/user/${email}`);
    }
};

module.exports = MailuClient;