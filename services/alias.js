class AliasService{
    constructor(mailuClient){
        this.client = mailuClient;
    };

    /**
     * Retrieves a list of email aliases configured in Mailu.
     *
     * @returns {Promise<Array>} Promise with an array of alias objects.
    */
    getAliases(){
        return this.client.useAxios('get', '/alias');
    };

    /**
     * Creates a new alias.
     *
     * @param {Object} body - The body of the request containing the alias data.
     * @returns {Promise} A Promise that resolves with the response from the server.
    */
    createAlias(body){
        return this.client.useAxios('post', '/alias', body);
    };

    /**
     * Retrieves all aliases associated with a specific domain.
     *
     * @param {string} domain - The domain to filter the aliases by.
     * @returns {Promise} A Promise that resolves with the response from the server, containing an array of aliases. 
    */
    getAliasesFromDomain(domain){
        return this.client.useAxios('get', `/alias/destination/${domain}`);
    };

    /**
     * Updates an existing alias.
     *
     * @param {string} alias - The unique identifier of the alias to update.
     * @param {Object} body - The updated alias data. 
     * @returns {Promise} A Promise that resolves with the response from the server.
    */
    updateAlias(alias, body){
        return this.client.useAxios('patch', `/alias/${alias}/`, body);
    };

    /**
     * Retrieves a specific alias based on its identifier. 
     *
     * @param {string} alias - The unique identifier of the alias.
     * @returns {Promise} A Promise that resolves with the response from the server, containing the alias data.
    */
    getAlias(alias){
        return this.client.useAxios('get', `/alias/${alias}`);
    };

    /**
     * Deletes an existing alias.
     *
     * @param {string} alias - The unique identifier of the alias to delete.
     * @returns {Promise} A Promise that resolves with the response from the server.
    */
    deleteAlias(alias){
        return this.client.useAxios('delete', `/alias/${alias}`);
    };
};

module.exports = AliasService;