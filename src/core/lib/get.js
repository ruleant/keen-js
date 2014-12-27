var request = require('superagent');

var extend = require('../utils/extend'),
    responseHandler = require('../helpers/superagent-handle-response'),
    requestTypes = require('../helpers/superagent-request-types');

module.exports = function(url, payload, api_key, callback){
  var data = payload || {},
      reqType = this.config.requestType,
      cb = callback;

  if (reqType === 'beacon') {
    reqType = 'jsonp';
  }

  request
    .get(url + queryString)
    .use(requestTypes(reqType))
    .end(function(err, res){
      responseHandler(err, res, cb);
      cb = callback = null;
    });
};
