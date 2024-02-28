class DomainService{
    constructor(mailuClient){
        this.client = mailuClient;
    };

    /**
     * Retrieves a list of domains managed by Mailu.
     *
     * @returns {Promise<Array>} Promise with an array of domain objects.
    */
    getDomains(){
        return this.client.useAxios('get', '/domain');
    };

    /**
     * Creates a new domain.
     *
     * @param {Object} body - The body of the request, containing domain information.
     * @returns {Promise} A Promise that resolves with the domain creation response.
    */
    createDomain(body){
        return this.client.useAxios('post', '/domain', body);
    };

    /**
     * Updates an existing domain.
     *
     * @param {string} domain - The domain to be updated.
     * @param {Object} body - The body of the request, containing updated domain information.
     * @returns {Promise} A Promise that resolves with the domain update response.
    */
    updateDomain(domain, body){
        return this.client.useAxios('patch', `/domain/${domain}`, body);
    };

    /**
     * Retrieves information about a specific domain.
     *
     * @param {string} domain - The domain to retrieve.
     * @returns {Promise} A Promise that resolves with the domain information.
    */
    getDomain(domain){
        return this.client.useAxios('get', `/domain/${domain}`);
    };

    /**
     * Deletes a specified domain.
     *
     * @param {string} domain - The domain to be deleted.
     * @returns {Promise} A Promise that resolves with the domain deletion response.
    */
    deleteDomain(domain){
        return this.client.useAxios('delete', `/domain/${domain}`);
    };

    /**
     * Generates DKIM (DomainKeys Identified Mail) keys for a domain.
     *
     * @param {string} domain - The domain for which to generate DKIM keys.
     * @returns {Promise} A Promise that resolves with the DKIM keys generation response.
    */
    generateDomainKeys(domain){
        return this.client.useAxios('post', `/domain/${domain}/dkim/`);
    };

    /**
     * Retrieves a list of managers for a specified domain.
     *
     * @param {string} domain - The domain to retrieve managers for.
     * @returns {Promise} A Promise that resolves with a list of domain managers.
    */
    getDomainManagers(domain){
        return this.client.useAxios('get', `/domain/${domain}/manager/`);
    };

    /**
     * Creates a new domain manager.
     *
     * @param {string} domain - The domain to add the manager to.
     * @param {Object} body - The body of the request, containing domain manager information. 
     * @returns {Promise} A Promise that resolves with the domain manager creation response.
    */
    createDomainManager(domain, body){
        return this.client.useAxios('post', `/domain/${domain}/manager/`, body);
    };

    /**
     * Deletes a domain manager.
     *
     * @param {string} domain - The domain from which to delete the manager.
     * @param {string} email - The email address of the manager to delete.
     * @returns {Promise} A Promise that resolves with the domain manager deletion response.
    */
    deleteDomainManager(domain, email){
        return this.client.useAxios('delete', `/domain/${domain}/manager/${email}`);
    };

    /**
     * Retrieves information about a specific domain manager.
     *
     * @param {string} domain - The domain of the manager.
     * @param {string} email - The email address of the manager.
     * @returns {Promise} A Promise that resolves with the domain manager information.
    */
    getDomainManager(domain, email){
        return this.client.useAxios('get', `/domain/${domain}/manager/${email}`);
    };

    /**
     * Retrieves a list of users associated with a domain.
     *
     * @param {string} domain - The domain to retrieve users for.
     * @returns {Promise} A Promise that resolves with a list of users.
    */
    getUsersFromDomain(domain){
        return this.client.useAxios('get', `/domain/${domain}/users/`);
    };
};

module.exports = DomainService;