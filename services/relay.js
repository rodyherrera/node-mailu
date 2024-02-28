class RelayService{
    constructor(mailuClient){
        this.client = mailuClient;
    };

    /**
     * Retrieves a list of relays configured in Mailu.
     *
     * @returns {Promise<Array>} Promise with an array of relay objects.
    */
    getRelays(){
        return this.client.useAxios('get', '/relay');
    };

    /**
     * Creates a new relay.
     *
     * @param {Object} body - The body of the request containing the relay data.
     * @returns {Promise} A Promise that resolves with the response from the server.
    */
    createRelay(body){
        return this.client.useAxios('post', `/relay`, body);
    };

    /**
     * Updates an existing relay.
     *
     * @param {string} name - The unique name of the relay to update.
     * @param {Object} body - The updated relay data.
     * @returns {Promise} A Promise that resolves with the response from the server.
    */
    updateRelay(name, body){
        return this.client.useAxios('patch', `/relay/${name}`, body);
    };

    /**
     * Retrieves a specific relay based on its name.
     *
     * @param {string} name - The unique name of the relay.
     * @returns {Promise} A Promise that resolves with the response from the server, containing the relay data.
    */
    getRelay(name){
        return this.client.useAxios('get', `/relay/${name}`);
    };

    /**
     * Deletes an existing relay.
     *
     * @param {string} name - The unique name of the relay to delete.
     * @returns {Promise} A Promise that resolves with the response from the server.
    */
    deleteRelay(name){
        return this.client.useAxios('delete', `/relay/${name}`);
    };
};

module.exports = RelayService;