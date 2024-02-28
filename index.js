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
            headers: { 
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json'
            },
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
    };

    /**
     * Retrieves a list of domains managed by Mailu.
     *
     * @returns {Promise<Array>} Promise with an array of domain objects.
    */
    getDomains(){
        return this.useAxios('get', '/domain');
    };

    /**
     * Creates a new domain.
     *
     * @param {Object} body - The body of the request, containing domain information.
     * @returns {Promise} A Promise that resolves with the domain creation response.
    */
    createDomain(body){
        return this.useAxios('post', '/domain', body);
    };

    /**
     * Updates an existing domain.
     *
     * @param {string} domain - The domain to be updated.
     * @param {Object} body - The body of the request, containing updated domain information.
     * @returns {Promise} A Promise that resolves with the domain update response.
    */
    updateDomain(domain, body){
        return this.useAxios('patch', `/domain/${domain}`, body);
    };

    /**
     * Retrieves information about a specific domain.
     *
     * @param {string} domain - The domain to retrieve.
     * @returns {Promise} A Promise that resolves with the domain information.
    */
    getDomain(domain){
        return this.useAxios('get', `/domain/${domain}`);
    };

    /**
     * Deletes a specified domain.
     *
     * @param {string} domain - The domain to be deleted.
     * @returns {Promise} A Promise that resolves with the domain deletion response.
    */
    deleteDomain(domain){
        return this.useAxios('delete', `/domain/${domain}`);
    };

    /**
     * Generates DKIM (DomainKeys Identified Mail) keys for a domain.
     *
     * @param {string} domain - The domain for which to generate DKIM keys.
     * @returns {Promise} A Promise that resolves with the DKIM keys generation response.
    */
    generateDomainKeys(domain){
        return this.useAxios('post', `/domain/${domain}/dkim/`);
    };

    /**
     * Retrieves a list of managers for a specified domain.
     *
     * @param {string} domain - The domain to retrieve managers for.
     * @returns {Promise} A Promise that resolves with a list of domain managers.
    */
    getDomainManagers(domain){
        return this.useAxios('get', `/domain/${domain}/manager/`);
    };

    /**
     * Creates a new domain manager.
     *
     * @param {string} domain - The domain to add the manager to.
     * @param {Object} body - The body of the request, containing domain manager information. 
     * @returns {Promise} A Promise that resolves with the domain manager creation response.
    */
    createDomainManager(domain, body){
        return this.useAxios('post', `/domain/${domain}/manager/`, body);
    };

    /**
     * Deletes a domain manager.
     *
     * @param {string} domain - The domain from which to delete the manager.
     * @param {string} email - The email address of the manager to delete.
     * @returns {Promise} A Promise that resolves with the domain manager deletion response.
    */
    deleteDomainManager(domain, email){
        return this.useAxios('delete', `/domain/${domain}/manager/${email}`);
    };

    /**
     * Retrieves information about a specific domain manager.
     *
     * @param {string} domain - The domain of the manager.
     * @param {string} email - The email address of the manager.
     * @returns {Promise} A Promise that resolves with the domain manager information.
    */
    getDomainManager(domain, email){
        return this.useAxios('get', `/domain/${domain}/manager/${email}`);
    };

    /**
     * Retrieves a list of users associated with a domain.
     *
     * @param {string} domain - The domain to retrieve users for.
     * @returns {Promise} A Promise that resolves with a list of users.
    */
    getUsersFromDomain(domain){
        return this.useAxios('get', `/domain/${domain}/users/`);
    };

    /**
     * Retrieves a list of alternative addresses configured in Mailu.
     *
     * @returns {Promise<Array>} Promise with an array of alternative address objects.
    */
    getAlternatives(){
        return this.useAxios('get', '/alternative')
    };

    /**
     * Creates a new alternative address in Mailu.
     *
     * @param {object} body Object containing alternative address data.
     * @returns {Promise<object>} Promise resolving to the created alternative address object.
    */
    createAlternative(body){
        return this.useAxios('post', '/alternative', body);
    };

    /**
     * Retrieves details of a specific alternative address.
     *
     * @param {string} alt The alternative email address to retrieve. 
     * @returns {Promise<object>} Promise resolving to the alternative address object.
    */
    getAlternative(alt){
        return this.useAxios('get', `/alternative/${alt}`);
    };

    /**
     * Deletes an existing alternative address. 
     *
     * @param {string} alt The alternative email address to delete. 
     * @returns {Promise<void>} Promise resolving when the deletion is complete (no data returned). 
    */
    deleteAlternative(alt){
        return this.useAxios('delete', `/alternative/${alt}`);
    };
    
    /**
     * Retrieves a list of email aliases configured in Mailu.
     *
     * @returns {Promise<Array>} Promise with an array of alias objects.
    */
    getAliases(){
        return this.useAxios('get', '/alias');
    };

    /**
     * Creates a new alias.
     *
     * @param {Object} body - The body of the request containing the alias data.
     * @returns {Promise} A Promise that resolves with the response from the server.
    */
    createAlias(body){
        return this.useAxios('post', '/alias', body);
    };

    /**
     * Retrieves all aliases associated with a specific domain.
     *
     * @param {string} domain - The domain to filter the aliases by.
     * @returns {Promise} A Promise that resolves with the response from the server, containing an array of aliases. 
    */
    getAliasesFromDomain(domain){
        return this.useAxios('get', `/alias/destination/${domain}`);
    };

    /**
     * Updates an existing alias.
     *
     * @param {string} alias - The unique identifier of the alias to update.
     * @param {Object} body - The updated alias data. 
     * @returns {Promise} A Promise that resolves with the response from the server.
    */
    updateAlias(alias, body){
        return this.useAxios('patch', `/alias/${alias}/`, body);
    };

    /**
     * Retrieves a specific alias based on its identifier. 
     *
     * @param {string} alias - The unique identifier of the alias.
     * @returns {Promise} A Promise that resolves with the response from the server, containing the alias data.
    */
    getAlias(alias){
        return this.useAxios('get', `/alias/${alias}`);
    };

    /**
     * Deletes an existing alias.
     *
     * @param {string} alias - The unique identifier of the alias to delete.
     * @returns {Promise} A Promise that resolves with the response from the server.
    */
    deleteAlias(alias){
        return this.useAxios('delete', `/alias/${alias}`);
    };

    /**
     * Retrieves a list of relays configured in Mailu.
     *
     * @returns {Promise<Array>} Promise with an array of relay objects.
    */
    getRelays(){
        return this.useAxios('get', '/relay');
    };
};

module.exports = MailuClient;