type Method = 'GET' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH' | 'PURGE' | 'LINK' | 'UNLINK';

/**
 * Simple fetch function. Api URL is my own random server with simple user auth.
 * Normally action would be added to API but for our simple test project it is not needed
 * This way is the method expandable, for example url building etc.
 * @param {string} action action which will executed on server
 * @param {Method} method request method allowed Method types are in type Method
 * @param {object} data
 */
export default async function sendRequest(action: string, method: Method, data: object): Promise<any> {
    return await fetch('https://zpacovanimrazek.8u.cz/', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: method,
        body: JSON.stringify(data),
    }).then(response => response.json()).then(result => {
        return result
    }).catch(responseError => {
        console.error('Error', responseError)
    })

}


