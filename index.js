const axios = require('axios');
const AliasService = require('./services/alias');
const AlternativeService = require('./services/alternative');
const DomainService = require('./services/domain');
const RelayService = require('./services/relay');
const UserService = require('./services/user');

/**
 * Client for the Mailu API.
 *
 * @param {string} endpoint Base URL of the Mailu API.
 * @param {string} apiKey Authorization key for the Mailu API.
*/
class MailuClient{
    /**
     * Creates an instance of the MailuClient.
     * @param {string} endpoint - Base URL of the Mailu API.
     * @param {string} apiKey - Authorization key for the Mailu API.
    */
    constructor(endpoint, apiKey){
        this.apiKey = apiKey;
        this.endpoint = endpoint;

        /**
         * Provides methods for interacting with Mailu aliases.
         * @type {AliasService}
        */
        this.aliasService = new AliasService(this);

        /**
         * Provides methods for interacting with Mailu alternative addresses.
         * @type {AlternativeService}
        */
        this.alternativeService = new AlternativeService(this);

        /**
         * Provides methods for interacting with Mailu domains.
         * @type {DomainService}
        */
        this.domainService = new DomainService(this);

        /**
         * Provides methods for interacting with Mailu relays.
         * @type {RelayService}
        */
        this.relayService = new RelayService(this);

        /**
         * Provides methods for interacting with Mailu users.
         * @type {UserService}
         */
        this.userService = new UserService(this);
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
};

module.exports = MailuClient;