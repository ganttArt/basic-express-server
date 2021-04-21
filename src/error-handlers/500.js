'use strict';

function errorHandler(err, req, res, next) {
  res.status(500).send('Server Error');
}

module.exports = errorHandler;
