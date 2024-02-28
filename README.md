## node-mailu
This client library provides a convenient way to interact with a Mailu API instance. It encapsulates the necessary details for authentication and interaction with various Mailu services.

**Reference:**  Mailu's official RestAPI documentation.: [https://mailu.io/master/api.html](https://mailu.io/master/api.html)

### Installation
You can install node-mailu via npm:
```bash
npm install node-mailu
```

### Usage
```javascript
const axios = require('axios');
const MailuClient = require('node-mailu');

// Replace with your Mailu instance's endpoint and API key
const endpoint = 'https://mailu.yourdomain.com/api/v1';
const apiKey = 'YOUR_API_KEY'; 

const mailuClient = new MailuClient(endpoint, apiKey);

// Example: Creating a new user
(async () => {
    try{
        const user = await mailuClient.userService.createUser({
            email: 'newuser@example.com',
            raw_password: 'yourpassword',
            comment: 'New user account'
        });
        console.log('User created:', user.data);
    }catch(error){
        console.error('Error creating user:', error);
    }
})();

```
##### Important Note
Your API key is stored within the `mailu` directory on your system, contained within the `.env` environment file. Reference the Mailu documentation for specifics.

## Sections
* **MailuClient**
    * **Constructor** 
    * **useAxios**
* **Services**
    * **AliasService**
    * **AlternativeService**
    * **DomainService**
    * **RelayService**
    * **UserService** 

## MailuClient
The core client for interacting with the Mailu API.
### Constructor
```javascript
constructor(endpoint, apiKey)
```
* **endpoint** (string): The base URL of your Mailu API instance.
* **apiKey** (string): An authorization key to access the Mailu API.

### useAxios
A utility method to handle API requests using Axios.
```javascript
useAxios(method, path, data)
```
* **method** (string): The HTTP method to use ('get', 'post', etc.).
* **path** (string): The endpoint path relative to the base URL.
* **data** (object, optional):  Data to send in the request body.

**Returns:** A Promise resolving with the API response data, or rejecting with an error.

## Services
Each service represents a domain of functionality within the Mailu API.

### AliasService
Methods for managing email aliases in Mailu.

* **getAliases()** - Retrieves all aliases.
* **createAlias(body)** - Creates a new alias.
* **getAliasesFromDomain(domain)** - Retrieves aliases for a specific domain.
* **updateAlias(alias, body)** - Updates an existing alias.
* **getAlias(alias)** - Retrieves a single alias.
* **deleteAlias(alias)** - Deletes an alias.

### AlternativeService
Methods for managing alternative addresses (additional emails for receiving to a user's inbox).

* **getAlternatives()** - Retrieves all alternative addresses.
* **createAlternative(body)** - Creates a new alternative address.
* **getAlternative(alt)** - Retrieves details of an alternative address.
* **deleteAlternative(alt)** - Deletes an alternative address.

### DomainService
Methods for managing domains in Mailu.

* **getDomains()** - Lists all domains.
* **createDomain(body)** - Creates a new domain.
* **updateDomain(domain, body)** - Updates a domain.
* **getDomain(domain)** - Retrieves details of a domain.
* **deleteDomain(domain)** - Deletes a domain.
* **generateDomainKeys(domain)** - Generates DKIM keys for a domain.
* **getDomainManagers(domain)** - Lists managers for a domain.
* **createDomainManager(domain, body)** - Adds a new domain manager.
* **deleteDomainManager(domain, email)** - Removes a domain manager.
* **getDomainManager(domain, email)** - Retrieves details of a domain manager.
* **getUsersFromDomain(domain)** - Lists users of a domain.

### RelayService

Methods for managing email relays.

* **getRelays()** - Lists all relays.
* **createRelay(body)** - Creates a new relay.
* **updateRelay(name, body)** - Updates a relay.
* **getRelay(name)** - Gets details of a relay.
* **deleteRelay(name)** - Deletes a relay.

### UserService

Methods for managing Mailu users.

* **getUsers()** - Lists all users.
* **createUser(body)** -  Creates a new user.
* **updateUser(email, body)** - Updates a user.
* **getUser(email)** - Retrieves details of a user.
* **deleteUser(email)** - Deletes a user. 