class AlternativeService{
    constructor(mailuClient){
        this.client = mailuClient;
    };

    /**
     * Retrieves a list of alternative addresses configured in Mailu.
     *
     * @returns {Promise<Array>} Promise with an array of alternative address objects.
    */
    getAlternatives(){
        return this.client.useAxios('get', '/alternative')
    };

    /**
     * Creates a new alternative address in Mailu.
     *
     * @param {object} body Object containing alternative address data.
     * @returns {Promise<object>} Promise resolving to the created alternative address object.
    */
    createAlternative(body){
        return this.client.useAxios('post', '/alternative', body);
    };

    /**
     * Retrieves details of a specific alternative address.
     *
     * @param {string} alt The alternative email address to retrieve. 
     * @returns {Promise<object>} Promise resolving to the alternative address object.
    */
    getAlternative(alt){
        return this.client.useAxios('get', `/alternative/${alt}`);
    };

    /**
     * Deletes an existing alternative address. 
     *
     * @param {string} alt The alternative email address to delete. 
     * @returns {Promise<void>} Promise resolving when the deletion is complete (no data returned). 
    */
    deleteAlternative(alt){
        return this.client.useAxios('delete', `/alternative/${alt}`);
    };
};

module.exports = AlternativeService;