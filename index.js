
const request = require('request');
const myJsonApiUrlRoot = "https://api.myjson.com"

/**
 * The get function returns the JSON object associated with the bin id.
 * @param {string} binId - the id of the bin you want to get the JSON for.
 */

module.exports.get = function(binId){
  return new Promise( (resolve,reject) => {
    request(
      {
        method: 'GET',
        uri: myJsonApiUrlRoot + '/bins/' + binId,
        json: true
      },
      (error, response, body) => {
        if (error) {
          reject(error);

        } else {
          resolve(body);
        }
      }
    )
  });
}

/**
  * The create function creates a new myJSON bin(object).
  * Returns to you the ID of the bin that was  
*/
module.exports.create = function(jsonObject){
  return new Promise( (resolve,reject) => {
    request(
      {
        method: 'POST',
        uri: myJsonApiUrlRoot + '/bins',
        json: true,
        body: jsonObject
      },
      (error, response, body) => {
        if (error) {
          reject(error);

        } else {
          let createdId =  body.uri.substr(body.uri.lastIndexOf('/') + 1)
          resolve({uri: body.uri, id: createdId});
        }
      }
    )
  });
}

/**
  * The update function allows you to update the JSON object associated with the bin id.
  * @param {string} binId - the id of the bin you want to get the JSON for.
  * @param {string} jsonObject -  the updated JSON object
*/

module.exports.update = function(binId, jsonObject){
  return new Promise( (resolve,reject) => {
    request(
      {
        method: 'PUT',
        uri: myJsonApiUrlRoot + '/bins/' + binId,
        json: true,
        body: jsonObject
      },
      (error, response, body) => {
        if (error) {
          reject(error);

        } else {
          resolve(body);
        }
      }
    )
  });
}
